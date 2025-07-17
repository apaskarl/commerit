import { motion } from "framer-motion";
import CTAButtons from "../ui/CTAButtons";
import EyebrowText from "../ui/EyebrowText";

export default function Hero() {
  const leaders = ["l1", "l2", "l3", "l4", "l5", "l6"];
  const duplicatedLeaders = [...leaders, ...leaders];

  return (
    <section
      id="hero"
      className="bg-dark relative flex items-center justify-center pt-32 pb-20 text-white md:pt-40"
    >
      <img
        src="/images/backgrounds/hero.png"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />

      <div className="z-20 container mx-auto max-w-7xl space-y-20 px-4">
        <div className="flex w-full flex-col items-center gap-y-14 md:w-1/2 md:items-start">
          <div className="flex flex-col items-center gap-y-8 md:items-start">
            <EyebrowText text="AI Sofware Agency" />

            <div className="space-y-6 text-center md:text-start">
              <h1 className="text-6xl leading-16 font-medium tracking-tight">
                We build custom AI agents that automate your business
              </h1>

              <p className="text-lg leading-relaxed text-white/70">
                From support to sales to operations—we replace manual tasks with
                tailored AI systems.
              </p>
            </div>
          </div>

          <div className="md:hidden">
            <CTAButtons column />
          </div>
          <div className="hidden md:block">
            <CTAButtons />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <p className="flex text-center font-mono text-[11px] leading-loose font-medium tracking-wider text-white/45 uppercase md:hidden">
            Trusted By Industry Leaders
          </p>

          <div className="flex items-center justify-between gap-3">
            <p className="hidden font-mono text-[11px] leading-loose font-medium tracking-wider text-white/45 uppercase md:flex">
              Trusted By <br /> Industry Leaders
            </p>

            <span className="mx-6 hidden w-[1px] self-stretch bg-white/30 md:flex" />

            <div className="relative flex-1 overflow-hidden">
              <div className="from-dark pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent" />

              <motion.div
                className="flex items-center gap-x-12"
                animate={{
                  x: ["0%", "-80%"],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {duplicatedLeaders.map((leader, index) => (
                  <img
                    key={`${leader}-${index}`}
                    src={`/images/leaders/${leader}.png`}
                    alt={leader}
                  />
                ))}
              </motion.div>

              <div className="from-dark pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
