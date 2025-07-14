import { useRef } from "react";
import EyebrowText from "../ui/EyebrowText";
import { Icon } from "@iconify/react";

export default function WhatWeDoSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-dark flex min-h-screen w-full text-white">
      <div className="w-full space-y-16">
        <div className="flex justify-between px-20 pt-20">
          <div className="w-1/2 space-y-8">
            <EyebrowText text="What We Do" />
            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Improving your workflow
              </h1>
              <h2 className="text-subtext text-lg">
                A feugiat lectus ut nunc congue et vel ornare.
              </h2>
            </div>
          </div>

          <div className="flex w-1/2 items-end justify-end">
            <div className="flex items-center gap-x-3">
              <button
                onClick={scrollLeft}
                className="border-border/40 hover:text-accent bg-border/10 hover:bg-border/20 cursor-pointer rounded-lg border p-2 duration-300"
              >
                <Icon icon="line-md:chevron-left" className="size-4" />
              </button>
              <button
                onClick={scrollRight}
                className="border-border/40 hover:text-accent bg-border/10 hover:bg-border/20 cursor-pointer rounded-lg border p-2 duration-300"
              >
                <Icon icon="line-md:chevron-right" className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pr-10 pb-20 pl-20"
          ref={scrollRef}
        >
          <SolutionsContainer
            title="Lower Costs"
            subtitle="Cut operational expenses by automating repetitive tasks. Allocate your budget more efficiently for growth."
            image="/images/what-we-do/lower-costs.png"
          />
          <SolutionsContainer
            title="Easier to scale your operations"
            subtitle="Quickly adapt to growing demands without hiring more staff. Automation makes it simple to expand."
            image="/images/what-we-do/scale.png"
          />
          <SolutionsContainer
            title="24/7 availability"
            subtitle="Provide round-the-clock support without increasing costs. Never miss a customer interaction."
            image="/images/what-we-do/availability.png"
          />
        </div>
      </div>
    </section>
  );
}

const SolutionsContainer = ({
  title,
  subtitle,
  image,
  className,
}: {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} border-border/40 bg-border/10 flex min-w-[36%] flex-col items-center justify-between gap-6 rounded-lg border px-10 pt-10`}
    >
      <div className="space-y-3">
        <p className="text-2xl font-medium tracking-tight">{title}</p>
        <p className="text-subtext">{subtitle}</p>
      </div>

      <img src={image} alt={`${title}'s Image`} className="size-[80%]" />
    </div>
  );
};
