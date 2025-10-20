import "./globals.css";
import { JetBrains_Mono, Poppins } from "next/font/google";
import ClientHeader from "@/components/ClientHeader";
import Pagetransition from "@/components/Pagetransition";
import Stairtransition from "@/components/Stairtransition";
import { ReactNode } from "react";


const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Kingsley-Portfolio",
  description:
    "Full-stack developer portfolio showcasing modern web design and interactive projects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {/* Use the client header wrapper */}
        <ClientHeader />
      
        <Stairtransition />
        <Pagetransition>{children}</Pagetransition>
      </body>
    </html>
  );
}
