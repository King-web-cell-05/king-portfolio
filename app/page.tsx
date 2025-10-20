/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "@/public/king-pic.jpg";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeInOut" },
      }}
      className="flex flex-col items-center justify-center text-center py-20 px-6"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I&apos;m <span className="text-emerald-300">Kingsley</span>
        </h1>
        <p className="text-lg text-white/70 leading-relaxed">
          I&apos;m a passionate web developer dedicated to building modern, fast,
          and responsive websites that help businesses stand out online.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-emerald-300 shadow-lg">
            <Image
              src={profilePic}
              alt="Kingsley Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
