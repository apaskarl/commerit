import { useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import EyebrowText from "../ui/EyebrowText";

export default function CaseStudiesSection() {
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
    <section className="bg-light text-dark flex w-full">
      <div className="w-full space-y-16">
        <div className="flex justify-between px-20 pt-20">
          <div className="w-1/2 space-y-8">
            <EyebrowText text="Case Studies" />
            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Stories about impact
              </h1>
              <h2 className="text-lg text-gray-500">
                Sociis faucibus non vestibulum fermentum aliquam amet. At
                scelerisque a tincidunt sit faucibus in pellentesque mattis.
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
