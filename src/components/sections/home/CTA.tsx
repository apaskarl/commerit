import { motion } from "framer-motion";
import CTAButtons from "../../ui/CTAButtons";

export default function CTA() {
  const leaders = ["l7", "l8", "l9", "l10", "l11", "l12"];
  const duplicatedLeaders = [...leaders, ...leaders];

  return (
    <section
      id="cta"
      className="bg-dark relative flex flex-col items-center justify-center py-20"
    >
      <div className="bg-light absolute top-0 h-48 w-full" />

      <div className="container mx-auto max-w-7xl space-y-14 px-4">
        <div className="relative flex items-center justify-center rounded-3xl bg-[#1C1D20] py-20 text-white md:px-28">
          <span className="hidden h-[1px] w-32 bg-white/15 md:block" />

          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-y-14 px-10 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-gradient-to-b before:from-white/50 before:to-white/0 after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gradient-to-b after:from-white/50 after:to-white/0 md:w-2/3">
            <div className="flex flex-col items-center justify-center gap-y-6 pb-1 text-center">
              <span className="bg-accent h-1 w-16" />

              <h2 className="text-3xl leading-relaxed font-medium tracking-tight md:text-5xl">
                Unlock the power of AI to transform your business today!
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Experience seamless automation with our cutting-edge technology.
                From customer support to sales, we empower your team to focus on
                what truly matters.
              </p>
            </div>

            <CTAButtons column />
          </div>

          <span className="hidden h-[1px] w-32 bg-white/15 md:block" />

          <img
            src="/images/backgrounds/dots2.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <p className="flex text-center font-mono text-[11px] leading-loose font-medium tracking-wider text-white/45 uppercase md:hidden">
            Trusted By Industry Leaders
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="hidden font-mono text-[11px] leading-loose font-medium tracking-wider text-white/45 uppercase md:flex">
            Trusted By <br /> Industry Leaders
          </p>

          <span className="mx-6 hidden w-[1px] self-stretch bg-white/30 md:flex" />

          <div className="relative flex-1 overflow-hidden">
            <div className="from-dark pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent" />

            <motion.div
              className="flex items-center gap-x-14"
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
    </section>
  );
}
