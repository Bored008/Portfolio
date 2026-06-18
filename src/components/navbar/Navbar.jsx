"use client"
import React, { useState } from "react";
import { House, MessagesSquare, Menu } from "lucide-react";
import localFont from "next/font/local";

const Mortend = localFont({
  src: "../../fonts/MortendBold.otf",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className="w-auto mx-55 mt-[17px] flex justify-between items-center px-4 hidden sm:flex">
        <div className={`${Mortend.className} text-[32px]`}>BORUI</div>
        <div className="flex gap-[44px] bg-black rounded-full items-center pr-[16px]">
          <div className="flex bg-white text-black p-[10px] rounded-full gap-[3px] items-center px-[12px] py-[8px] my-[3px] ml-[3px]">
            <House size={15} />
            <div>Home</div>
          </div>
          <div>About</div>
          <div>Projects</div>
          <div>Blogs</div>
        </div>
        <div className="flex gap-[6px] bg-black rounded ful px-[14px] py-[12px] items-center">
          <MessagesSquare size={15} />
          <div>Lets Talk</div>
        </div>
      </div>
      <div className="mt-[17px] flex justify-between items-center px-4 sm:hidden">
        <div className={`${Mortend.className} text-[16px]`}>BORUI</div>
        <div>
          <button onClick={toggleMenu} className="">
            <Menu size={15} />
          </button>
          <div className="flex gap-[44px] bg-black rounded-full items-center pr-[16px]">
            <div className="flex bg-white text-black p-[10px] rounded-full gap-[3px] items-center px-[12px] py-[8px] my-[3px] ml-[3px]">
              <House size={15} />
              <div>Home</div>
            </div>
            <div>About</div>
            <div>Projects</div>
            <div>Blogs</div>
          </div>
        </div>
        <div className="flex gap-[6px] bg-black rounded px-[14px] py-[12px] items-center">
          <MessagesSquare size={15} />
          <div>Lets Talk</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
