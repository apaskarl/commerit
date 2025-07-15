import EyebrowText from "../ui/EyebrowText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center bg-cover bg-center pt-40 pb-20 text-white"
    >
      <img
        src="/images/hero-background.png"
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

          <div className="flex items-stretch gap-x-3">
            <button className="flex cursor-pointer items-center gap-x-3 rounded-lg border border-white bg-white py-1 pr-4 pl-1 font-mono text-xs font-medium text-black uppercase backdrop-blur-sm duration-200 hover:opacity-50">
              <img
                src="/images/david.png"
                alt=""
                className="aspect-square size-8 object-cover"
              />
              Talk with David
            </button>
            <button className="flex cursor-pointer items-center rounded-lg border border-white/15 bg-black/10 px-5 font-mono text-xs font-medium uppercase backdrop-blur-sm duration-200 hover:opacity-50">
              Explore Pricing
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <p className="w-[15%] border-r border-white/15 pr-10 font-mono text-[11px] leading-relaxed font-medium tracking-wider text-white/45 uppercase">
            Trusted By <br /> Industry Leaders
          </p>

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
