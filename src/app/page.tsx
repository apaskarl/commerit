"use client";
import { useEffect, useState, useCallback } from "react";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import BlurButton from "@/components/ui/buttons/BlurButton";
import TalkWithDavidButton from "@/components/ui/buttons/TalkWithDavidButton";
import { Icon } from "@iconify/react/dist/iconify.js";

const SCROLL_THRESHOLD = 100;

const NavButton = ({
  text,
  dropdown,
}: {
  text: string;
  dropdown?: boolean;
}) => {
  return (
    <button className="flex cursor-pointer items-center gap-x-2 px-1 py-2 font-mono text-xs font-medium text-white/70 uppercase duration-300 hover:opacity-50">
      <p className="leading-[100%]">{text}</p>
      {dropdown && (
        <Icon
          icon="famicons:chevron-down-outline"
          className="size-3 text-white"
        />
      )}
    </button>
  );
};

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setShowNav(
      currentScrollY <= lastScrollY || currentScrollY <= SCROLL_THRESHOLD,
    );
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      {/* Navigation */}

      <div className={`flex w-full items-center justify-center`}>
        <nav
          className={` ${
            showNav ? "translate-y-0" : "-translate-y-full"
          } fixed top-0 z-20 container mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white duration-300`}
        >
          <a href="/" className="flex items-center gap-x-3">
            <img src="/images/logo.png" alt="" className="size-7" />
            <span className="text-2xl font-bold">Commerit</span>
          </a>

          <div className="flex items-center gap-x-8 rounded-xl bg-gray-500/10 py-2 pr-2 pl-6 backdrop-blur-sm">
            <div className="flex items-center gap-x-7">
              <NavButton text="Case Studies" />
              <NavButton text="Customers" />
              <NavButton text="About" />
              <NavButton text="Products" dropdown />
            </div>

            <div className="flex items-stretch gap-x-2">
              <button className="flex cursor-pointer items-center rounded-lg border border-white/15 bg-black/10 px-5 font-mono text-xs font-medium uppercase backdrop-blur-sm duration-200 hover:opacity-50">
                Explore Pricing
              </button>
              <button className="flex cursor-pointer items-center gap-x-3 rounded-lg border border-white bg-white py-1 pr-4 pl-1 font-mono text-xs font-medium text-black uppercase backdrop-blur-sm duration-200 hover:opacity-50">
                <img
                  src="/images/david.png"
                  alt=""
                  className="aspect-square size-8 object-cover"
                />
                Talk with David
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Page Sections */}
      <HeroSection />
      <WhatWeDoSection />
      <CaseStudiesSection />
      <HowItWorksSection />
      <SolutionsSection />
    </div>
  );
}
