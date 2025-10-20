import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/King-web-cell-05" },
  { icon: <FaWhatsapp />, path: "https://wa.me/+2349065644691" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/dada-kingsley-a0858637a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/codekingz05?t=9O_LxxKQkQT5DRWOxohwvw&s=08",
  },
];

import React from "react";

interface SocialProps {
  containerStyles?: string;
  iconstyles?: string;
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconstyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index}>
          <span className={iconstyles}>{item.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
