import { useRef } from "react";
import EyebrowText from "../ui/EyebrowText";
import { Icon } from "@iconify/react";

export default function WhatWeDo() {
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
    <section
      id="whatWeDo"
      className="bg-dark flex items-center justify-center py-20 text-white"
    >
      <div className="container mx-auto flex max-w-7xl flex-col gap-y-14 px-4">
        <div className="flex justify-between">
          <div className="flex-1 space-y-8">
            <EyebrowText text="What We Do" />

            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Improving your workflow
              </h1>
              <h2 className="text-lg text-white/70">
                A feugiat lectus ut nunc congue et vel ornare.
              </h2>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="flex items-center gap-x-2">
              <button
                onClick={scrollLeft}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2 duration-300 hover:opacity-50"
              >
                <Icon icon="line-md:chevron-left" className="size-4" />
              </button>
              <button
                onClick={scrollRight}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2 duration-300 hover:opacity-50"
              >
                <Icon icon="line-md:chevron-right" className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth"
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
