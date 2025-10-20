"use client";

import dynamic from "next/dynamic";

// Dynamically import the Header with client-side rendering
const Header = dynamic(() => import("@/components/ui/Header"), { ssr: false });

export default function ClientHeader() {
  return <Header />;
}
