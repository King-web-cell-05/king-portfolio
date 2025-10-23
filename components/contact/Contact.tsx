/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import contactImage from "@/public/contact-img.jpg";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+2349065644691" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kingsleydada159@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "No 4 Idera Street, Oworoshoki",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSendingWhatsApp, setIsSendingWhatsApp] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const createMessage = () => {
    const { first, last, email, phone, service, message } = formData;
    const fullName = `${first} ${last}`;
    return `Hello Kingsley 👋,\n\nMy name is ${fullName}.\n\n📧 Email: ${email}\n📱 Phone: ${phone}\n💼 Service: ${service}\n\n📝 Message:\n${message}`;
  };

  const sendViaWhatsApp = () => {
    const text = encodeURIComponent(createMessage());
    const phoneNumber = "+2349065644691";
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
    setIsSendingWhatsApp(true);
    setTimeout(() => setIsSendingWhatsApp(false), 1500);
  };

  const sendViaEmail = () => {
    const subject = encodeURIComponent(
      `New Contact: ${formData.service || "General Inquiry"}`
    );
    const body = encodeURIComponent(createMessage());
    const url = `mailto:kingsleydada159@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = url;
    setIsSendingEmail(true);
    setTimeout(() => setIsSendingEmail(false), 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
      className="overflow-hidden "
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-xs uppercase tracking-[5px] text-emerald-300">
          Get In Touch
        </h3>
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3">
          Contact <span className="text-emerald-300">Me</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-40 px-4 sm:px-6 min-h-[60vh]">
      {/* Left Side: Image + Info */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-1 w-full flex justify-center"
>
  <div className="relative w-full max-w-[460px] bg-[#1a1a1f]/75 backdrop-blur-lg rounded-2xl p-7 sm:p-8 shadow-2xl flex flex-col sm:flex-row xl:flex-col items-center xl:items-start justify-center gap-6 border border-white/10">
    {/* Image */}
    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[340px] xl:h-[340px] rounded-xl overflow-hidden shadow-lg">
      <Image
        src={contactImage}
        alt="Contact illustration"
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Description */}
    <p className="text-white/80 text-center xl:text-left leading-relaxed text-md sm:text-base px-2 sm:px-0">
      I am a <span className="text-emerald-300 font-semibold">Full-Stack Developer</span>,{" "}
      <span className="text-emerald-300 font-semibold">UI/UX Designer</span>, and{" "}
      <span className="text-emerald-300 font-semibold">Graphic Designer</span>, 
      I craft seamless, high-performance digital experiences that combine innovation with visual excellence. 
      My work focuses on usability, brand consistency, and turning creative ideas into purposeful designs.
    </p>

    {/* Contact Info */}
    <ul className="flex flex-col gap-4 text-white w-full sm:w-auto">
      {info.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-3 hover:scale-[1.03] transition-transform"
        >
          <div className="w-[50px] h-[50px] bg-gradient-to-br from-emerald-500/30 to-emerald-700/30 rounded-xl flex items-center justify-center text-emerald-300 text-2xl shadow-md backdrop-blur-md">
            {item.icon}
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-emerald-400/90">
              {item.title}
            </p>
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {item.description}
            </h3>
          </div>
        </li>
      ))}
    </ul>
  </div>
</motion.div>


        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-[580px] flex justify-center items-center"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 p-7 sm:p-8 bg-[#27272c]/80 rounded-2xl shadow-xl w-full"
          >
            <h3 className="text-2xl sm:text-3xl text-emerald-300">
              Let&apos;s work together
            </h3>
            <p className="text-base text-white/70 leading-relaxed">
              I&apos;m always open to exciting opportunities and meaningful
              collaborations. Let&apos;s connect and bring your ideas to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First Name"
                value={formData.first}
                onChange={(e) => handleChange("first", e.target.value)}
                className="text-base"
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={formData.last}
                onChange={(e) => handleChange("last", e.target.value)}
                className="text-base"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="text-base"
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="text-base"
              />
            </div>

            <Select
              value={formData.service}
              onValueChange={(value) => handleChange("service", value)}
            >
              <SelectTrigger className="w-full bg-black/40 border border-white/10 text-white text-base">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1f]/90 text-white text-base">
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea
              className="h-[160px] text-base"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />

            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <Button
                type="button"
                size="sm"
                onClick={sendViaWhatsApp}
                disabled={isSendingWhatsApp}
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-base"
              >
                {isSendingWhatsApp ? "Preparing..." : "Send via WhatsApp"}
              </Button>

              <Button
                type="button"
                size="sm"
                onClick={sendViaEmail}
                disabled={isSendingEmail}
                className="bg-white/10 hover:bg-white/20 text-white text-base"
              >
                {isSendingEmail ? "Preparing..." : "Send via Email"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
