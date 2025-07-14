"use client";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import BlurButton from "@/components/ui/buttons/BlurButton";
import TalkWithDavidButton from "@/components/ui/buttons/TalkWithDavidButton";

// Constants for animation configurations
const NAV_BUTTONS_CONTAINER_ANIMATION = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const NAV_BUTTON_ITEM_ANIMATION = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const SCROLL_THRESHOLD = 100;

interface NavButtonProps {
  text: string;
}

const NavButton = ({ text }: NavButtonProps) => {
  return (
    <button className="hover:text-accent cursor-pointer px-4 py-3 text-xs font-medium tracking-wide uppercase duration-300">
      {text}
    </button>
  );
};

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsAtTop(currentScrollY === 0);
    setShowNav(
      currentScrollY <= lastScrollY || currentScrollY <= SCROLL_THRESHOLD,
    );
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navClasses = `fixed top-0 z-20 flex w-full items-center justify-between px-20 text-white duration-300 ${
    showNav ? "translate-y-0" : "-translate-y-full"
  } ${!isAtTop ? "bg-black/40 py-2 backdrop-blur-xs" : "bg-black/0 py-4"}`;

  const buttonsContainerClasses = `${isAtTop ? "bg-gray-600/20 backdrop-blur-xs" : ""} flex items-center gap-x-5 rounded-xl p-2`;

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className={navClasses}>
        <motion.a
          href="/"
          className="flex items-center gap-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <Image
            src="/images/logo.png"
            alt="Commerit Logo"
            width={25}
            height={25}
            priority
          />
          <span className="text-lg font-bold">Commerit</span>
        </motion.a>

        <motion.div
          className={buttonsContainerClasses}
          variants={NAV_BUTTONS_CONTAINER_ANIMATION}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            {["Case Studies", "What We Do", "Solutions", "How It Works"].map(
              (item) => (
                <motion.div key={item} variants={NAV_BUTTON_ITEM_ANIMATION}>
                  <NavButton text={item} />
                </motion.div>
              ),
            )}
          </div>

          <div className="flex items-center gap-x-2">
            <motion.div variants={NAV_BUTTON_ITEM_ANIMATION}>
              <BlurButton text="Explore Pricing" />
            </motion.div>
            <motion.div variants={NAV_BUTTON_ITEM_ANIMATION}>
              <TalkWithDavidButton />
            </motion.div>
          </div>
        </motion.div>
      </nav>

      {/* Page Sections */}
      <HeroSection />
      <WhatWeDoSection />
      <CaseStudiesSection />
      <HowItWorksSection />
      <SolutionsSection />
    </div>
  );
}
