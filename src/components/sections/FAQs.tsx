"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import EyebrowText from "../ui/EyebrowText";

export default function FAQs() {
  return (
    <section
      id="faqs"
      className="bg-light text-dark flex flex-col items-center justify-center gap-y-14 pt-20 pb-10"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative flex justify-between gap-14">
          <div className="mr-1 max-w-[330px] space-y-8">
            <EyebrowText text="FAQs" />
            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Here's what you need to know
              </h1>
              <h2 className="text-dark/70 text-lg leading-relaxed">
                A feugiat lectus ut nunc congue et vel ornare.
              </h2>
            </div>
          </div>

          <div className="flex-1">
            <div className="divide-dark/10 border-dark/10 flex flex-col space-x-0 divide-x-0 divide-y border-y">
              <FAQButton
                question="What is Sales Process Automation and how can it benefit my business?"
                answer="Ut id diam vestibulum elementum. Enim amet et amet tempus metus mauris. Viverra pharetra malesuada eget cursus commodo at. Faucibus sed consectetur vitae lacus amet amet."
                defaultOpen
              />
              <FAQButton
                question="How does Customer Support Integration work with your AI solutions?"
                answer="Ut id diam vestibulum elementum. Enim amet et amet tempus metus mauris. Viverra pharetra malesuada eget cursus commodo at. Faucibus sed consectetur vitae lacus amet amet."
              />
              <FAQButton
                question="What types of Data Analytics and Reporting features do you offer?"
                answer="Ut id diam vestibulum elementum. Enim amet et amet tempus metus mauris. Viverra pharetra malesuada eget cursus commodo at. Faucibus sed consectetur vitae lacus amet amet."
              />
              <FAQButton
                question="What User Management Features are included in your platform?"
                answer="Ut id diam vestibulum elementum. Enim amet et amet tempus metus mauris. Viverra pharetra malesuada eget cursus commodo at. Faucibus sed consectetur vitae lacus amet amet."
              />
              <FAQButton
                question="Can I create Customizable Workflows tailored to my business needs?"
                answer="Ut id diam vestibulum elementum. Enim amet et amet tempus metus mauris. Viverra pharetra malesuada eget cursus commodo at. Faucibus sed consectetur vitae lacus amet amet."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQButton = ({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-3 p-6">
      <button
        className="flex w-full cursor-pointer items-center justify-between text-start text-xl font-medium duration-300 hover:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <Icon
          icon="famicons:chevron-down-outline"
          className={`size-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <p className="text-dark/70">{answer}</p>}
    </div>
  );
};
