import localFont from "next/font/local"
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import SmoothScroll from "@/components/effects/SmoothScroll";

const Mortend = localFont({
  src: "../fonts/MortendBold.otf"
})

const HeyFont = localFont({
  src: "../fonts/FeelingPassionate.ttf"
})

const poppins = Poppins({
  weight: ["100","200","300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

const geistSans = Geist({
  weight: ["100","200","300", "400", "500", "600", "700"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  weight: ["100","200","300", "400", "500", "600", "700"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Himanshu Dahiya",
  description: "My portifolio which shows the capabilities in UI/UX and Web development and Skills I have learned so far....",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
