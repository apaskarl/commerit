import { useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import EyebrowText from "../ui/EyebrowText";

export default function CaseStudies() {
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
      id="caseStudies"
      className="bg-light flex items-center justify-center py-20 text-black"
    >
      <div className="container mx-auto flex max-w-7xl flex-col gap-y-14 px-4">
        <div className="flex justify-between">
          <div className="flex-1 space-y-8">
            <EyebrowText text="Case Studies" />

            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Stories about impact
              </h1>
              <h2 className="text-lg text-[#101114B2]/70">
                Sociis faucibus non vestibulum fermentum aliquam amet. At
                scelerisque a tincidunt sit faucibus in pellentesque mattis.
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
          <CaseStudiesContainer
            logo="/images/case-studies/pacha.png"
            description="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
            image="/images/case-studies/pacha2.png"
            classname="bg-[#BE9AEC]"
          />
          <CaseStudiesContainer
            logo="/images/case-studies/converso.png"
            description="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
            image="/images/case-studies/converso2.png"
            classname="bg-[#E5F1FE]"
          />
        </div>
      </div>
    </section>
  );
}

const CaseStudiesContainer = ({
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
      className={`${classname} border-border/40 relative flex max-h-[50vh] min-w-[55%] justify-between space-y-10 rounded-lg border pt-8 pl-8`}
    >
      <div className="flex w-[45%] flex-col justify-between space-y-3">
        <div className="space-y-4">
          <img src={logo} />
          <p className="text-gray-600">{description}</p>
        </div>

        <button className="trackin w-max text-xs font-medium uppercase">
          Read Story
        </button>
      </div>

      <img src={image} className="flex-1" />
    </div>
  );
};
