import { useRef } from "react";
import EyebrowText from "../ui/EyebrowText";
import { Icon } from "@iconify/react";

export default function WhatWeDo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 466 + 24;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="whatWeDo"
      className="bg-dark flex flex-col items-center justify-center gap-y-14 py-20 text-white"
    >
      <div className="container mx-auto mb-1 flex max-w-7xl flex-col px-4">
        <div className="flex justify-between">
          <div className="flex-1 space-y-8">
            <EyebrowText text="What We Do" />

            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Improving your workflow
              </h1>
              <h2 className="w-1/2 text-lg leading-relaxed text-white/70">
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
                <Icon
                  icon="line-md:chevron-left"
                  className="size-4 text-white"
                />
              </button>
              <button
                onClick={scrollRight}
                className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2 duration-300 hover:opacity-50"
              >
                <Icon
                  icon="line-md:chevron-right"
                  className="size-4 text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="no-scrollbar w-full gap-6 overflow-x-auto scroll-smooth pr-[calc((100vw-1280px)/2)] pl-[calc((100vw-1280px)/2)]"
        ref={scrollRef}
      >
        <div className="flex items-stretch gap-6 px-2">
          <WhatWeDoCard
            title="Lower Costs"
            subtitle="Cut operational expenses by automating repetitive tasks. Allocate your budget more efficiently for growth."
            image="/images/what-we-do/lower-costs.png"
          />
          <WhatWeDoCard
            title="Easier to scale your operations"
            subtitle="Quickly adapt to growing demands without hiring more staff. Automation makes it simple to expand."
            image="/images/what-we-do/scale.png"
          />
          <WhatWeDoCard
            title="24/7 availability"
            subtitle="Provide round-the-clock support without increasing costs. Never miss a customer interaction."
            image="/images/what-we-do/availability.png"
          />
          <div className="min-w-20" />
        </div>
      </div>
    </section>
  );
}

const WhatWeDoCard = ({
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
      className={`${className} flex min-h-[500px] min-w-[466px] flex-col items-center justify-between gap-10 rounded-lg border border-white/10 bg-white/5 px-10 pt-10`}
    >
      <div className="space-y-3">
        <p className="text-2xl font-medium tracking-tight">{title}</p>
        <p className="text-white/70">{subtitle}</p>
      </div>

      <img src={image} alt={`${title}'s Image`} className="object-contain" />
    </div>
  );
};
