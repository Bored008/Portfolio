import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Load configuration
const configPath = path.join(__dirname, 'sync-config.json');
let config = {
  githubUsername: 'Bored008',
  ignoredRepositories: [
    'Portfolio',
    'Bored008',
    'DSA-StriverA2Z-',
    'test-repo',
    'simplereacttask',
    'motion.dev-learnings',
    'react-19',
    'react-project-1'
  ],
  imageOutputDir: 'public/projects',
  prependNewProjects: false
};

if (fs.existsSync(configPath)) {
  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    config = { ...config, ...JSON.parse(raw) };
  } catch (err) {
    console.warn(`[WARN] Could not parse sync-config.json: ${err.message}`);
  }
}

// Parse CLI flags
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isForce = args.includes('--force');
const shouldPush = args.includes('--no-push') ? false : (args.includes('--push') || Boolean(config.autoGitPush));
const userFlagIdx = args.indexOf('--user');
if (userFlagIdx !== -1 && args[userFlagIdx + 1]) {
  config.githubUsername = args[userFlagIdx + 1];
}

const projectsFilePath = path.join(ROOT_DIR, 'src', 'data', 'projects.ts');
const publicProjectsDir = path.join(ROOT_DIR, config.imageOutputDir || 'public/projects');

if (!fs.existsSync(publicProjectsDir)) {
  fs.mkdirSync(publicProjectsDir, { recursive: true });
}

// Known tech keyword detectors for tags
const TECH_PATTERNS = [
  { match: /\bnext(?:\.js)?\s*1[456]?\b/i, tag: 'Next.js' },
  { match: /\bnext\.js\b/i, tag: 'Next.js' },
  { match: /\breact(?:\.js)?\b/i, tag: 'React.js' },
  { match: /\btypescript\b/i, tag: 'TypeScript' },
  { match: /\btailwind(?:\s*css)?(?:\s*v?[34])?\b/i, tag: 'TailwindCSS' },
  { match: /\bframer(?:\s*motion)?\b/i, tag: 'Framer Motion' },
  { match: /\bgsap\b/i, tag: 'GSAP' },
  { match: /\bsupabase\b/i, tag: 'Supabase' },
  { match: /\bgemini(?:\s*2(?:\.[05])?)?\b/i, tag: 'Google Gemini' },
  { match: /\bpostgres(?:ql)?\b/i, tag: 'PostgreSQL' },
  { match: /\bmongodb\b/i, tag: 'MongoDB' },
  { match: /\bnode(?:\.js)?\b/i, tag: 'Node.js' },
  { match: /\bexpress(?:\.js)?\b/i, tag: 'Express.js' },
  { match: /\bfigma\b/i, tag: 'Figma' },
  { match: /\bkotlin\b/i, tag: 'Kotlin' },
  { match: /\bandroid\b/i, tag: 'Android' },
  { match: /\bpython\b/i, tag: 'Python' },
  { match: /\bshadcn\b/i, tag: 'shadcn/ui' },
  { match: /\bdocker\b/i, tag: 'Docker' }
];

async function fetchGitHubRepos(username) {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;
  const headers = {
    'User-Agent': 'Portfolio-Automation-Agent',
    Accept: 'application/vnd.github.v3+json'
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API request failed with status ${res.status}: ${res.statusText}`);
  }
  return await res.json();
}

async function fetchRawReadme(username, repoName, defaultBranch = 'main') {
  const branches = [defaultBranch, 'main', 'master'];
  for (const branch of branches) {
    const rawUrl = `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/README.md`;
    try {
      const res = await fetch(rawUrl);
      if (res.ok) {
        return await res.text();
      }
    } catch {
      // try next branch
    }
  }
  return null;
}

function cleanDescriptionText(title, rawText, repo) {
  if (!rawText) {
    return repo.description || `${title} is a modern web application and software project built with ${repo.language || 'modern web technologies'}.`;
  }

  const genericPhrases = [
    'bootstrapped with create-next-app',
    'minimal setup to get react working in vite',
    'getting started with',
    'learning to add code to github',
    'this is a next.js project'
  ];

  // Clean raw markdown
  const lines = rawText
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\[!\[.*?\]\(.*?\)\]\(.*?\)/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/<[^>]+>/g, '')
    .split(/\n+/)
    .map(l => l.replace(/^[#>\s*_-]+/, '').replace(/[*_`]/g, '').trim())
    .filter(l => l.length > 20 && !l.startsWith('http') && !l.startsWith('npm ') && !l.startsWith('git '));

  const validLines = [];
  for (const line of lines) {
    const lower = line.toLowerCase();
    if (lower === title.toLowerCase()) continue;
    if (genericPhrases.some(phrase => lower.includes(phrase))) continue;
    validLines.push(line);
    if (validLines.length >= 2) break;
  }

  if (validLines.length > 0) {
    let combined = validLines.join(' ');
    combined = combined.replace(/^[^\w\s]+/, '').trim();
    if (combined.length > 320) {
      combined = combined.slice(0, 317) + '...';
    }
    return combined;
  }

  return repo.description || `${title} is a web application and software development project built using ${repo.language || 'modern web frameworks'}.`;
}

function formatRepoTitle(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

function parseReadmeDetails(readmeText, repo) {
  let title = formatRepoTitle(repo.name);

  if (readmeText) {
    const titleMatch = readmeText.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      let rawTitle = titleMatch[1]
        .replace(/<[^>]+>/g, '')
        .replace(/^[^\w\s]+/, '')
        .replace(/[^\w\s-–—&]/g, '')
        .trim();
      if (rawTitle.length > 3 && rawTitle.length < 50) {
        title = rawTitle;
      }
    }
  }

  const desc = cleanDescriptionText(title, readmeText, repo);

  // Extract Tags
  const foundTags = new Set();
  if (repo.language) foundTags.add(repo.language);
  if (Array.isArray(repo.topics)) {
    for (const t of repo.topics) {
      if (t) foundTags.add(t.charAt(0).toUpperCase() + t.slice(1));
    }
  }

  if (readmeText) {
    for (const { match, tag } of TECH_PATTERNS) {
      if (match.test(readmeText)) {
        foundTags.add(tag);
      }
    }
  }

  const tags = Array.from(foundTags).slice(0, 6);

  return { title, desc, tags };
}

async function downloadOpenGraphImage(username, repoName, outputPath) {
  const ogUrl = `https://opengraph.githubassets.com/1/${username}/${repoName}`;
  try {
    const res = await fetch(ogUrl);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outputPath, buffer);
      return true;
    }
  } catch (err) {
    console.warn(`[WARN] Could not download preview image for ${repoName}: ${err.message}`);
  }
  return false;
}

function readExistingProjects(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Projects file not found at ${filePath}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract known GitHub links and repo names
  const existingRepos = new Set();
  const githubLinkRegex = /github\.com\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_.-]+)/gi;
  let match;
  while ((match = githubLinkRegex.exec(content)) !== null) {
    existingRepos.add(match[2].toLowerCase().replace(/\.git$/, ''));
  }

  // Extract titles
  const titleRegex = /title:\s*["'`](.*?)["'`]/g;
  while ((match = titleRegex.exec(content)) !== null) {
    existingRepos.add(match[1].toLowerCase().replace(/\s+/g, ''));
  }

  return { content, existingRepos };
}

function escapeString(str) {
  return str.replace(/"/g, '\\"').replace(/\n/g, ' ');
}

function formatProjectItemCode(project) {
  const tagsStr = JSON.stringify(project.tags);
  const liveLine = project.liveLink ? `\n    liveLink: "${escapeString(project.liveLink)}",` : '';
  const githubLine = project.githubLink ? `\n    githubLink: "${escapeString(project.githubLink)}",` : '';

  return `  {
    title: "${escapeString(project.title)}",
    img: "${escapeString(project.img)}",
    link: "${escapeString(project.link)}",${githubLine}${liveLine}
    imgClass: "rounded-[12px] border-2 border-t-1 border-white",
    desc: "${escapeString(project.desc)}",
    tags: ${tagsStr}
  }`;
}

async function runSync() {
  console.log(`[INFO] Checking GitHub account: https://github.com/${config.githubUsername}...`);
  const { content: currentContent, existingRepos } = readExistingProjects(projectsFilePath);

  const repos = await fetchGitHubRepos(config.githubUsername);
  console.log(`[INFO] Found ${repos.length} total public repositories on GitHub.`);

  const ignoredSet = new Set(config.ignoredRepositories.map(r => r.toLowerCase()));
  const newRepos = [];

  for (const repo of repos) {
    const lowerName = repo.name.toLowerCase();
    const cleanRepoName = lowerName.replace(/\.git$/, '');

    if (repo.fork && !isForce) {
      continue;
    }
    if (ignoredSet.has(cleanRepoName)) {
      continue;
    }
    if (existingRepos.has(cleanRepoName)) {
      continue;
    }

    newRepos.push(repo);
  }

  if (newRepos.length === 0) {
    console.log(`[SUCCESS] Portfolio is fully up to date! No new GitHub projects to add.`);
    return { added: 0, projects: [] };
  }

  console.log(`[INFO] Discovered ${newRepos.length} new project(s) to add to portfolio:`);
  newRepos.forEach(r => console.log(`  - ${r.name} (${r.html_url})`));

  const itemsToAdd = [];

  for (const repo of newRepos) {
    console.log(`\n[PROCESS] Fetching details for: ${repo.name}...`);
    const readme = await fetchRawReadme(config.githubUsername, repo.name, repo.default_branch);
    const { title, desc, tags } = parseReadmeDetails(readme, repo);

    const imageFilename = `${repo.name.toLowerCase()}.png`;
    const imageDiskPath = path.join(publicProjectsDir, imageFilename);
    const imagePublicPath = `/${path.relative(path.join(ROOT_DIR, 'public'), imageDiskPath).replace(/\\/g, '/')}`;

    let hasImage = false;
    if (!isDryRun) {
      hasImage = await downloadOpenGraphImage(config.githubUsername, repo.name, imageDiskPath);
    }

    const liveLink = repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage.trim() : undefined;
    const githubLink = repo.html_url;
    const link = liveLink || githubLink;

    itemsToAdd.push({
      title,
      img: hasImage ? imagePublicPath : `https://opengraph.githubassets.com/1/${config.githubUsername}/${repo.name}`,
      link,
      githubLink,
      liveLink,
      desc,
      tags
    });
  }

  if (isDryRun) {
    console.log('\n[DRY RUN] Would add the following project items:');
    console.log(itemsToAdd);
    return { added: itemsToAdd.length, projects: itemsToAdd };
  }

  // Insert into projects.ts
  const marker = 'export const projectsData: ProjectItem[] = [';
  const markerIdx = currentContent.indexOf(marker);
  if (markerIdx === -1) {
    throw new Error(`Could not find marker "${marker}" in ${projectsFilePath}`);
  }

  let updatedContent;
  const formattedItems = itemsToAdd.map(formatProjectItemCode).join(',\n');

  if (config.prependNewProjects) {
    // Insert immediately after array open
    const insertPos = markerIdx + marker.length;
    updatedContent =
      currentContent.slice(0, insertPos) +
      '\n' +
      formattedItems +
      ',' +
      currentContent.slice(insertPos);
  } else {
    // Append at end before ];
    const endBracketIdx = currentContent.lastIndexOf('];');
    if (endBracketIdx === -1) {
      throw new Error(`Could not find closing bracket "];" in ${projectsFilePath}`);
    }
    const endsWithComma = currentContent.slice(0, endBracketIdx).trim().endsWith(',');
    const prefix = endsWithComma ? '\n' : ',\n';
    updatedContent =
      currentContent.slice(0, endBracketIdx) +
      prefix +
      formattedItems +
      '\n' +
      currentContent.slice(endBracketIdx);
  }

  fs.writeFileSync(projectsFilePath, updatedContent, 'utf8');
  console.log(`\n[SUCCESS] Successfully added ${itemsToAdd.length} new project(s) to ${projectsFilePath}`);

  if (shouldPush && itemsToAdd.length > 0) {
    console.log(`\n[GIT] Staging and pushing changes to GitHub...`);
    try {
      execSync('git add src/data/projects.ts public/projects scripts/sync-config.json', { cwd: ROOT_DIR, stdio: 'inherit' });
      const status = execSync('git status --porcelain', { cwd: ROOT_DIR }).toString().trim();
      if (status) {
        execSync('git commit -m "chore(automation): sync new projects from GitHub [skip ci]"', { cwd: ROOT_DIR, stdio: 'inherit' });
        execSync('git push origin main', { cwd: ROOT_DIR, stdio: 'inherit' });
        console.log(`[SUCCESS] Pushed changes to GitHub repository (main branch)! Vercel auto-deploy initiated.`);
      } else {
        console.log(`[INFO] Working tree clean, nothing new to push.`);
      }
    } catch (pushErr) {
      console.error(`[ERROR] Failed to push changes to GitHub: ${pushErr.message}`);
    }
  }

  return { added: itemsToAdd.length, projects: itemsToAdd };
}

runSync().catch(err => {
  console.error(`[ERROR] Sync failed:`, err);
  process.exit(1);
});
