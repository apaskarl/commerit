import { useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 686 + 36;

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
      id="caseStudies"
      className="text-dark bg-light relative flex flex-col items-center justify-center gap-y-14 py-20"
    >
      <div className="container mx-auto mb-1 flex max-w-7xl flex-col px-4">
        <div className="absolute top-0 flex h-11 gap-x-1 self-end">
          <div className="bg-accent w-6" />
          <div className="bg-dark w-48" />
          <div className="bg-dark w-7" />
          <div className="bg-dark w-5" />
          <div className="bg-dark w-2" />
        </div>

        <div className="flex justify-between">
          <SectionTitle
            eyebrowText="Case Studies"
            heading="Stories about impact"
            subheading="Sociis faucibus non vestibulum fermentum aliquam amet. At scelerisque a tincidunt sit faucibus in pellentesque mattis."
          />

          <div className="hidden items-end justify-end md:flex">
            <div className="flex items-center gap-x-2">
              <button
                onClick={scrollLeft}
                className="border-dark/10 bg-dark/5 cursor-pointer rounded-lg border p-2 duration-300 hover:opacity-50"
              >
                <Icon
                  icon="line-md:chevron-left"
                  className="text-dark size-4"
                />
              </button>
              <button
                onClick={scrollRight}
                className="border-dark/10 bg-dark/5 cursor-pointer rounded-lg border p-2 duration-300 hover:opacity-50"
              >
                <Icon
                  icon="line-md:chevron-right"
                  className="text-dark size-4"
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
        <div className="flex flex-col items-stretch gap-9 px-4 md:flex-row">
          <CaseStudyCard
            description="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
            logo="/images/case-studies/pacha.png"
            image="/images/case-studies/pacha2.png"
            classname="bg-[#BE9AEC]"
          />
          <CaseStudyCard
            description="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
            logo="/images/case-studies/converso.png"
            image="/images/case-studies/converso2.png"
            classname="bg-[#E5F1FE]"
          />
          <div className="min-w-[1px]" />
        </div>
      </div>
    </section>
  );
}

const CaseStudyCard = ({
  description,
  logo,
  image,
  classname,
}: {
  description: string;
  logo: string;
  image: string;
  classname?: string;
}) => {
  return (
    <div
      className={`${classname} relative flex flex-col justify-between overflow-hidden rounded-lg md:max-h-[288px] md:min-w-[686px] md:flex-row`}
    >
      <div className="flex flex-col justify-between gap-8 py-8 pl-8">
        <div className="space-y-4">
          <img src={logo} />
          <p className="text-dark/70">{description}</p>
        </div>

        <button className="lh-full flex w-max cursor-pointer items-center gap-x-2 font-mono text-xs font-medium text-[#101114] uppercase duration-300 hover:opacity-50">
          Read Story <Icon icon="si:arrow-right-line" className="size-5" />
        </button>
      </div>

      <img src={image} className="flex-1" />
    </div>
  );
};
