"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

const Mobilenav = () => {
  const [open, setOpen] = useState(false);

  // Smooth scroll + close menu
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => setOpen(false), 300);
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-emerald-300" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex flex-col bg-black/95 text-white z-[9999]"
        >
          <div className="mt-32 mb-40 text-center text-2xl">
            <h1 className="text-4xl font-semibold">
              Kingsley<span className="text-emerald-300">.</span>
            </h1>
          </div>

          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="
                  capitalize
                  text-xl
                  text-white
                  transition-colors
                  duration-200
                  hover:text-emerald-300
                "
              >
                {link.name}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobilenav;
