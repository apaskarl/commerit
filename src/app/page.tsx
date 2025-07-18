"use client";
import { useEffect, useState, useCallback } from "react";
import Logo from "@/components/ui/Logo";
import Hero from "@/components/sections/home/Hero";
import WhatWeDo from "@/components/sections/home/WhatWeDo";
import CaseStudies from "@/components/sections/home/CaseStudies";
import HowItWorks from "@/components/sections/home/HowItWorks";
import SolutionsMain from "@/components/sections/home/SolutionsMain";
import SolutionsCleintele from "@/components/sections/home/SolutionsCleintele";
import SolutionsPlatform from "@/components/sections/home/SolutionsPlatform";
import Testimonials from "@/components/sections/home/Testimonials";
import FAQs from "@/components/sections/home/FAQs";
import CTA from "@/components/sections/home/CTA";
import CTAButtons from "@/components/ui/CTAButtons";
import Footer from "@/components/sections/home/Footer";
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
