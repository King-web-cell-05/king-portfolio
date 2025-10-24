"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns"

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";  

import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";


const projects = [
    {
    num: "01",
    category: "Front-end",
    title: "Profile-card design",
    description:
      "A profile card is a UI element that displays a user's information in a concise and visually appealing manner. ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work-images/profile-card-pic.png", 
    live: "https://king-web-cell-05.github.io/profile-card-design/",
    github: "https://github.com/King-web-cell-05/profile-card-design",
  },
  {
    num: "02",
    category: "Front-end",
    title: "Login design",
    description:
      "A modern and minimalist login design, focusing on clean typography and a visually appealing layout ",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work-images/login-page.jpg", 
    live: "https://king-web-cell-05.github.io/login-design/",
    github: "https://github.com/King-web-cell-05/login-design",
  },
  {
    num: "03",
    category: "Front-end",
    title: "Todo App",
    description:
      "A clean, intuitive todo app that helps you stay organised and focused.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work-images/todo-app.jpg", 
    live: "https://king-web-cell-05.github.io/todo-app/",
    github: "https://github.com/King-web-cell-05/todo-app",
  },
  {
    num: "04",
    category: "Front-end",
    title: "Weather App",
    description:
      "A dynamic weather application that provides real-time weather updates.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work-images/weather-apc.jpg", 
    live: "https://king-web-cell-05.github.io/weather-Apc/",
    github: "https://github.com/King-web-cell-05/weather-Apc",
  },
  {
    num: "05",
    category: "Front-end Framework",
    title: "Quiz App",
    description:
      "An interactive quiz application that tests users' knowledge on React.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work-images/quiz-app.png", 
    live: "https://quiz-app-rho-ebon.vercel.app",
    github: "https://github.com/King-web-cell-05/quiz-app",
  },
  {
    num: "06",
    category: "Front-end Framework",
    title: "Real Estate App",
    description:
      "A comprehensive real estate application that enables users to browse and search for properties.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work-images/real-estate-pic.jpg", 
    live: "https://realestate-alpha-eight.vercel.app",
    github: "https://github.com/King-web-cell-05/realestate",
  },
  {
    num: "07",
    category: "Front-end Framework",
    title: "Mini Portfolio",
    description:
      "Showcasing my skills and projects through my mini portfolio.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work-images/king-portfolio.jpg", 
    live: "https://king-portfolio-nu.vercel.app/",
    github: "https://github.com/King-web-cell-05/kingsley-portfolio",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

const handleSlideChange = (swiper: SwiperType) => {
  const currentIndex = swiper.activeIndex;
  setProject(projects[currentIndex]);
};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:1, duration:0.4, ease:"easeIn"},
     }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 mt-30"
    >
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  }}
  className="text-center mb-20"
>
  <h3 className="text-sm uppercase tracking-[6px] text-emerald-300 mt-30">
    My Projects
  </h3>
  <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
    My <span className="text-emerald-300">Work</span>
  </h1>
  <p className="max-w-2xl mx-auto text-white/70 text-sm sm:text-base leading-relaxed">
    A showcase of my latest creations — blending design, development, and
    creativity to build projects that make an impact.
  </p>
</motion.div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group:hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description  */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-emerald-300">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-emerald-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-black rounded-sm w-26 px-2 py-2">
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-emerald-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-black rounded-sm w-26 px-2 py-2">
                          Github repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map ((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[468px] relative group flex justify-center items-center bg-pink-50/20 max-[700px]:scale-[0.95] ">
                  {/* overlay */}
                  <div>

                  </div>
                  {/* image */}
                  <div className="relative w-full h-full max-[700px]:scale-[1] ">
                    <Image src={project.image} fill alt="project-image" className="object-cover "/>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-emerald-300 hover:bg-emerald-300-hover text-black text[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
