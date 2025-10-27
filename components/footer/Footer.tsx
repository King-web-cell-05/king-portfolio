/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import footerPic from "@/public/king-pic.jpg";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/King-web-cell-05" },
    { icon: <FaLinkedin />, url: "https://wa.me/+2349065644691" },
    {
      icon: <FaTwitter />,
      url: "https://x.com/codekingz05?t=9O_LxxKQkQT5DRWOxohwvw&s=08",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Resume", href: "#resume" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const services = ["Web Development", "UI/UX Design", "Graphic Design"];

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+2349065644691",
      href: "tel:+2349065644691",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "kingsleydada159@gmail.com",
      href: "mailto:kingsleydada159@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "No 4 Idera street, Oworoshoki",
      href: "https://www.google.com/maps/place/4+Idera+St,+Oworosoki,+Lagos+105102,+Lagos/@6.5499947,3.3968455,916m/data=!3m2!1e3!4b1!4m6!3m5!1s0x103b8d41e26e4197:0x7366c4b437feb8a3!8m2!3d6.5499894!4d3.3994204!16s%2Fg%2F11t16_3rs0?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-black/95 text-white pt-16 xl:pt-24 pb-12"
    >
      <div className="container mx-auto px-6 xl:px-0 flex flex-col xl:flex-row justify-between gap-12 xl:gap-24">
        {/* Branding */}
        <div className="xl:text-left">
          <div className="flex gap-5">
            <div className="w-12 h-12 xl:w-15 xl:h-15 relative rounded-full overflow-hidden border-2 border-emerald-300">
              <Image
                src={footerPic}
                alt="Kingsley"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text mt-2" title="Kingsley">
              Kingsley<span className="text-emerald-300">.</span>
            </h1>
          </div>
          <p className="text-white/70 mt-3 max-w-xs mx-auto xl:mx-0">
            Crafting beautiful web experiences with passion &amp; precision.
            Let&apos;s build something amazing together.
          </p>

          <div className="flex justify-center xl:justify-start gap-6 mt-6 text-2xl">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-white/80 hover:text-emerald-300 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 text-center xl:text-left">
          <h2 className="text-xl font-semibold mb-4 text-emerald-300">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                className="text-white/80 hover:text-emerald-300 cursor-pointer"
              >
                <a href={link.href}>{link.label}</a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 text-center xl:text-left">
          <h2 className="text-xl font-semibold mb-4 text-emerald-300">
            Services
          </h2>
          <ul className="flex flex-col gap-3">
            {services.map((service, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                className="text-white/80 hover:text-emerald-300 cursor-pointer"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 text-center xl:text-left">
          <h2 className="text-xl font-semibold mb-4 text-emerald-300">
            Contact
          </h2>
          <ul className="flex flex-col gap-4">
            {contactInfo.map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 hover:text-emerald-300 transition-colors"
              >
                <span className="text-emerald-300 text-lg">{item.icon}</span>
                <span className="flex flex-col">
                  <span className="font-medium text-sm">{item.title}</span>
                  {item.href ? (
                    <a href={item.href}>{item.description}</a>
                  ) : (
                    <span>{item.description}</span>
                  )}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/50 text-sm flex flex-col items-center gap-2">
        <span>
          &copy; {new Date().getFullYear()} Kingsley Oluwasanmi. All rights
          reserved.
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
