import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import HeroSection from "@/components/sections/HeroSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Nav */}
      <nav className="fixed top-0 left-1/2 flex w-7xl -translate-x-1/2 items-center justify-between p-4 text-white">
        <a href="/" className="flex items-center gap-x-3">
          <Image
            src="/images/logo.png"
            alt="Commerit Logo"
            width={25}
            height={25}
          />
          <span className="text-lg font-bold">Commerit</span>
        </a>

        <div className="flex items-center gap-x-5 rounded-xl bg-gray-600/20 p-2 backdrop-blur-xs">
          <div className="flex items-center">
            <NavButton text="Case Studies" />
            <NavButton text="Case Studies" />
            <NavButton text="Case Studies" />
            <NavButton text="Case Studies" />
          </div>

          <div className="flex items-center gap-x-2">
            <button className="border-border rounded-lg border bg-gray-400/20 px-5 py-3 text-xs font-medium tracking-wide uppercase">
              Explore Pricing
            </button>
            <button className="rounded-lg border bg-white px-5 py-3 text-xs font-medium tracking-wide text-black uppercase">
              Talk with David
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection />
      <WhatWeDoSection />
      <CaseStudiesSection />
    </div>
  );
}

const NavButton = ({ text }: { text: string }) => {
  return (
    <button className="px-4 py-3 text-xs font-medium tracking-wide uppercase">
      {text}
    </button>
  );
};
