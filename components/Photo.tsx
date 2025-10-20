"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full relative flex justify-center sm:justify-end xl:justify-end">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center 
                   mb-8 sm:mb-12 
                   xl:mb-0 xl:translate-x-65 xl:-translate-y-35 -translate-y-20 sm:-translate-y-50"
      >
        {/* Circle (background) */}
        <motion.svg
          className="absolute w-[185px] h-[185px] sm:w-[320px] sm:h-[320px] xl:w-[500px] xl:h-[500px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            className="stroke-emerald-300"
            cx="253"
            cy="253"
            r="240"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image (centered inside circle) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px]
                     sm:w-[360px] sm:h-[360px] 
                     xl:w-[640px] xl:h-[640px] 
                     "
        >
          <Image
            src="/my-pic.png"
            alt="Photo"
            priority
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
