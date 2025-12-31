"use client";
import React from "react";

const links = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

const Navbar = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center py-4 gap-8">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="
              capitalize
              font-medium
              text-white
              transition-colors
              duration-200
              hover:text-emerald-300
              cursor-pointer
            "
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
