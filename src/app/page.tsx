"use client";
import { useEffect, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "@/components/ui/Logo";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import CaseStudies from "@/components/sections/CaseStudies";
import HowItWorks from "@/components/sections/HowItWorks";
import SolutionsMain from "@/components/sections/SolutionsMain";
import SolutionsCleintele from "@/components/sections/SolutionsCleintele";
import SolutionsPlatform from "@/components/sections/SolutionsPlatform";
import Testimonials from "@/components/sections/Testimonials";
import FAQs from "@/components/sections/FAQs";
import CTA from "@/components/sections/CTA";
import CTAButtons from "@/components/ui/CTAButtons";
import Footer from "@/components/sections/Footer";
import Menu from "@/components/Menu";
import NavButton from "@/components/ui/NavButton";

const SCROLL_THRESHOLD = 100;

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
    <div className="relative overflow-x-hidden">
      {/* Navigation */}
      <div className="flex w-full items-center justify-center">
        <nav
          className={` ${
            showNav ? "translate-y-0" : "-translate-y-full"
          } fixed top-0 z-30 container mx-auto flex w-full items-center justify-between px-4 py-4 text-white duration-300 md:max-w-7xl`}
        >
          <Logo />

          <Menu />

          <div className="hidden items-center gap-x-8 rounded-xl bg-gray-500/10 py-2 pr-2 pl-6 backdrop-blur-sm md:flex">
            <div className="flex items-center gap-x-7">
              <NavButton text="Case Studies" />
              <NavButton text="Customers" />
              <NavButton text="About" />
              <NavButton text="Products" dropdown />
            </div>

            <CTAButtons inverted />
          </div>
        </nav>
      </div>

      {/* Page Sections */}
      <Hero />
      <WhatWeDo />
      <CaseStudies />
      <HowItWorks />
      <SolutionsMain />
      <SolutionsCleintele />
      <SolutionsPlatform />
      <Testimonials />
      <FAQs />
      <CTA />
      <Footer />
    </div>
  );
}
