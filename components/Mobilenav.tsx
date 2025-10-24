"use client";

import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("home");
  

  // scroll to section when clicking
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    } 
    // close sheet but DO NOT reset state
    setTimeout(() => setOpen(false), 300);
  };

  // scrollspy (update active link when scrolling)
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = activeSection;
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = link.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [activeSection]);

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
                className={`capitalize text-xl transition-all duration-200 relative pb-1 ${
                  activeSection === link.id
                    ? "text-emerald-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-emerald-300"
                    : "text-white hover:text-emerald-300"
                }`}
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
