"use client";

import { useEffect, useState } from "react";
import NavButton from "./ui/NavButton";
import CTAButtons from "./ui/CTAButtons";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Disable scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-[5px] md:hidden"
      >
        <span
          className={`h-[3px] w-7 rounded-md bg-white transition-all duration-300 ${
            isOpen ? "translate-y-[8px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[3px] w-7 rounded-md bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[3px] w-7 rounded-md bg-white transition-all duration-300 ${
            isOpen ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`bg-dark fixed top-0 right-0 z-40 h-screen w-[60%] space-y-8 px-10 py-20 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-7">
          <NavButton text="Case Studies" />
          <NavButton text="Customers" />
          <NavButton text="About" />
          <NavButton text="Products" dropdown />
        </div>

        <CTAButtons column />
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`bg-dark/30 fixed inset-0 z-30 h-screen w-full backdrop-blur-xs transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
