import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FAQs() {
  return (
    <section
      id="faqs"
      className="bg-light text-dark flex flex-col items-center justify-center gap-y-14 pt-20 pb-10"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative flex flex-col justify-between gap-14 md:flex-row">
          <SectionTitle
            eyebrowText="FAQs"
            heading="Here's what you need to know"
            subheading="A feugiat lectus ut nunc congue et vel ornare."
            classname="mr-1 max-w-[330px]"
          />

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
        className="flex w-full cursor-pointer items-center justify-between gap-2 text-start text-xl font-medium duration-300 hover:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1">{question}</span>
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
