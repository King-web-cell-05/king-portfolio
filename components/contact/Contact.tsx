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
    description: "No 4 Idera street, Oworoshoki",
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
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
    >
      {/* Contact Section Heading */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  }}
  className="text-center mb-22"
>
  <h3 className="text-sm uppercase tracking-[6px] text-emerald-300 mt-25">
    Get In Touch
  </h3>
  <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
    Contact <span className="text-emerald-300">Me</span>
  </h1>
 
</motion.div>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl max-[700px]:scale-95"
            >
              <h3 className="text-4xl text-emerald-300">Let's work together</h3>
              <p className="text-white/60">
                I’m always open to exciting opportunities and meaningful
                collaborations.
                <br />
                Let’s connect and bring your ideas to life.
              </p>

              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={formData.first}
                  onChange={(e) => handleChange("first", e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={formData.last}
                  onChange={(e) => handleChange("last", e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              {/* select */}
              <Select
                value={formData.service}
                onValueChange={(value) => handleChange("service", value)}
              >
                <SelectTrigger className="w-full bg-black/50">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 text-white">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Graphic Design">
                      Graphic Design
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />

              {/* buttons */}
              {/* buttons */}
              <div className="flex flex-wrap gap-4 max-[768px]:justify-center">
                <Button
                  type="button"
                  size="sm"
                  onClick={sendViaWhatsApp}
                  disabled={isSendingWhatsApp}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  {isSendingWhatsApp
                    ? "Preparing message..."
                    : "Send via WhatsApp"}
                </Button>

                <Button
                  type="button"
                  size="sm"
                  onClick={sendViaEmail}
                  disabled={isSendingEmail}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  {isSendingEmail ? "Preparing message..." : "Send via Email"}
                </Button>
              </div>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-emerald-300 rounded-md flex items-center justify-center max-[700px]:ml-5">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
