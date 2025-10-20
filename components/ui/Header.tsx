"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Mobilenav from "@/components/Mobilenav";
import profilePic from "@/public/king-pic.jpg"; 

const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white fixed top-0 left-0 w-full z-[999] bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 ml-5 cursor-pointer select-none">
          {/* Profile Image */}
          <div className="w-12 h-12 xl:w-15 xl:h-15 relative rounded-full overflow-hidden border-2 border-emerald-300">
            <Image
              src={profilePic}
              alt="Kingsley"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl font-semibold text" title="Kingsley">
            Kingsley<span className="text-emerald-300">.</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Navbar />
          <Link href="#contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Mobilenav />
        </div>
      </div>
    </header>
  );
};

export default Header;
