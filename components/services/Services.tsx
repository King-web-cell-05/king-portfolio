"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building user-friendly responsive and dynamic websites using modern technologies.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-friendly interfaces that enhance user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Graphic Design",
    description:
      "Creating visually stunning graphics and designs that effectively communicate brand messages.",
    href: "",
  },
  {
    num: "04",
    title: "SEO Optimization",
    description:
      "Improving website visibility and ranking on search engines through effective SEO strategies.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20 xl:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          className="text-center mb-16"
        >
          <h3 className="text-sm uppercase tracking-[8px] text-emerald-300 mb-3">
            What I Offer
          </h3>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-emerald-300">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/70 text-sm sm:text-base leading-relaxed">
            I specialize in transforming ideas into modern, functional, and
            beautiful digital products. Below are the core areas where I bring
            value to your business and brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.6, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group cursor-pointer"
            >
              {/* top */}
              <div className="w-full flex items-center justify-between">
                {/* number */}
                <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                  {service.num}
                </div>

                {/* arrow */}
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center
                  transition-all duration-500 
                  group-hover:bg-[#00ff99] hover:-rotate-45"
                >
                  <BsArrowDownRight
                    className="text-black text-3xl transition-transform duration-500 
                    hover:translate-x-1 hover:-translate-y-1 "
                  />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/60">{service.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
