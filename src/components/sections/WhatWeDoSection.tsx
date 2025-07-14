import EyebrowText from "../ui/EyebrowText";
import { Icon } from "@iconify/react";

export default function WhatWeDoSection() {
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
              <button className="border-border/40 bg-border/10 rounded-lg border p-2">
                <Icon icon="line-md:chevron-left" className="size-4" />
              </button>
              <button className="border-border/40 bg-border/10 rounded-lg border p-2">
                <Icon icon="line-md:chevron-right" className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-20 pl-20">
          <div className="flex gap-6">
            <SolutionsContainer
              title="Lower Costs"
              subtitle="Cut operational expenses by automating repetitive tasks. Allocate your budget more efficiently for growth."
              image="/images/solutions/lower-costs.png"
            />
            <SolutionsContainer
              title="Easier to scale your operations"
              subtitle="Quickly adapt to growing demands without hiring more staff. Automation makes it simple to expand."
              image="/images/solutions/scale.png"
            />
            <SolutionsContainer
              title="24/7 availability"
              subtitle="Provide round-the-clock support without increasing costs. Never miss a customer interaction."
              image="/images/solutions/availability.png"
            />
          </div>
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
      className={`${className} border-border/40 bg-border/10 min-w-[36%] space-y-10 rounded-lg border px-10 pt-10`}
    >
      <div className="space-y-3">
        <p className="text-2xl font-medium tracking-tight">{title}</p>
        <p className="text-subtext">{subtitle}</p>
      </div>
      <img src={image} alt={`${title}'s Image`} />
    </div>
  );
};
