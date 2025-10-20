"use client";
import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of Experience" },
  { num: 15, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 250, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Always horizontal */}
        <div className="stats flex flex-row gap-2 sm:gap-10 items-center justify-center xl:justify-start">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3
                className="text-2xl sm:text-2xl md:text-4xl xl:text-6xl font-extrabold text-emerald-300
                max-[344px]:text-[8px]"
              >
                <CountUp end={item.num} duration={3} delay={0.1} />
              </h3>
              <p
                className="mt-1 text-xs sm:text-sm md:text-base xl:text-lg text-gray-300
                max-[344px]:text-[6px] leading-tight" // shrink labels more
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
