import CTAButtons from "../ui/CTAButtons";
import EyebrowText from "../ui/EyebrowText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-dark relative flex items-center justify-center pt-40 pb-20 text-white"
    >
      <img
        src="/images/backgrounds/hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="z-20 container mx-auto max-w-7xl space-y-20 px-4">
        <div className="w-1/2 space-y-14">
          <div className="space-y-8">
            <EyebrowText text="AI Sofware Agency" />

            <div className="space-y-6">
              <h1 className="text-6xl leading-16 font-medium tracking-tight">
                We build custom AI agents that automate your business
              </h1>

              <p className="text-lg text-white/70">
                From support to sales to operations—we replace manual tasks with
                tailored AI systems.
              </p>
            </div>
          </div>

          <CTAButtons />
        </div>

        <div className="flex w-full items-center justify-between">
          <p className="font-mono text-[11px] leading-loose font-medium tracking-wider text-white/45 uppercase">
            Trusted By <br /> Industry Leaders
          </p>
          <span className="mx-6 w-[1px] self-stretch bg-white/30" />
          <img src="/images/leaders/l1.png" alt="L1" />
          <img src="/images/leaders/l2.png" alt="L1" />
          <img src="/images/leaders/l3.png" alt="L1" />
          <img src="/images/leaders/l4.png" alt="L1" />
          <img src="/images/leaders/l5.png" alt="L1" />
          <img src="/images/leaders/l6.png" alt="L1" />
        </div>
      </div>
    </section>
  );
}
