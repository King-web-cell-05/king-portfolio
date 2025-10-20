"use client";
import { useEffect, useState } from "react";

const links = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

const HEADER_HEIGHT = 80;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [homeClicked, setHomeClicked] = useState(false);

  // Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (homeClicked) return; // ignore observer if Home was clicked
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
        threshold: 0.5,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [homeClicked]);

  // Smooth scroll to section
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    if (id === "home") {
      setHomeClicked(true);       // mark Home clicked
      setActiveSection("");       // clear active nav
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // scroll to top
      return;
    }

    setHomeClicked(false);        // reset Home click
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center py-4 gap-8">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className={`relative pb-1 capitalize font-medium transition-all duration-200 ${
              activeSection === link.id && !homeClicked
                ? "text-emerald-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-emerald-300 after:pointer-events-none"
                : "text-white hover:text-gray-300 cursor-pointer"
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
