import { Icon } from "@iconify/react/dist/iconify.js";
import EyebrowText from "../ui/EyebrowText";

export default function HowItWorks() {
  return (
    <section
      id="howItWorks"
      className="bg-light flex flex-col items-center justify-center gap-y-14 py-10"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-dark relative flex justify-between gap-14 rounded-3xl p-10 text-white">
          <div className="z-10 mr-1 max-w-[430px] space-y-8">
            <EyebrowText text="How it works" />
            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Our Proven Process
              </h1>
              <h2 className="text-lg leading-relaxed text-white/70">
                Sociis faucibus non vestibulum fermentum aliquam amet. At
                scelerisque a tincidunt sit faucibus in pellentesque mattis.
              </h2>
            </div>
          </div>

          <div className="relative z-10 flex-1">
            <div className="absolute flex h-full w-6 flex-col items-center">
              <Icon
                icon="famicons:square-sharp"
                className="text-accent size-3"
              />

              <div className="w-[2px] flex-1 bg-gradient-to-b from-white/15 to-white/0" />
            </div>

            <div className="space-y-8">
              <HowItWorksCard
                id="01"
                icon="/images/icons/how-it-works/list-check.png"
                text="Discovery & Audit"
                subtext="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
              />
              <HowItWorksCard
                id="02"
                icon="/images/icons/how-it-works/chat-check.png"
                text="Strategic Recommendations"
                subtext="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
              />
              <HowItWorksCard
                id="03"
                icon="/images/icons/how-it-works/click.png"
                text="Tailored Implementation"
                subtext="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
              />
              <HowItWorksCard
                id="04"
                icon="/images/icons/how-it-works/cog.png"
                text="Continuous Optimization"
                subtext="Enim dui cras auctor tortor sed felis ultrices. Nulla semper molestie turpis id et arcu accumsan est."
              />
            </div>
          </div>

          <img
            src="/images/backgrounds/dots.png"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 flex h-11 gap-x-1 self-end">
            <div className="bg-light w-2" />
            <div className="bg-light w-5" />
            <div className="bg-light w-7" />
            <div className="bg-light w-48" />
            <div className="bg-accent w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

const HowItWorksCard = ({
  id,
  icon,
  text,
  subtext,
}: {
  id: string;
  icon: string;
  text: string;
  subtext: string;
}) => {
  return (
    <div className="flex">
      <div className="mt-7 flex h-max items-center">
        <div className="flex aspect-square w-6 items-center justify-center rounded-sm bg-white leading-[120%]">
          <p className="text-dark font-mono text-sm font-medium">{id}</p>
        </div>

        <div className="h-[1px] w-8 bg-white" />

        <div className="bg-accent h-8 w-[3px]" />
      </div>

      <div className="space-y-8 rounded-xl border border-white/10 bg-white/5 p-10">
        <img src={icon} />

        <div className="space-y-3">
          <p className="text-2xl font-medium">{text}</p>
          <p className="text-white/70">{subtext}</p>
        </div>
      </div>
    </div>
  );
};
