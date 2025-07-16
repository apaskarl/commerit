import CTAButtons from "../ui/CTAButtons";

export default function CTA() {
  return (
    <section
      id="cta"
      className="bg-dark relative flex flex-col items-center justify-center py-20"
    >
      <div className="bg-light absolute top-0 h-48 w-full" />

      <div className="container mx-auto max-w-7xl space-y-14 px-4">
        <div className="relative flex items-center justify-center rounded-3xl bg-[#1C1D20] px-28 py-20 text-white">
          <span className="h-[1px] w-32 bg-white/15"></span>
          <div className="relative z-10 flex w-2/3 flex-col items-center justify-center gap-y-14 px-20 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-gradient-to-b before:from-white/50 before:to-white/0 after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-gradient-to-b after:from-white/50 after:to-white/0">
            <div className="flex flex-col items-center justify-center gap-y-6 pb-1 text-center">
              <span className="bg-accent h-1 w-16" />
              <h2 className="text-5xl leading-14 font-medium tracking-tight">
                Unlock the power of AI to transform your business today!
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Experience seamless automation with our cutting-edge technology.
                From customer support to sales, we empower your team to focus on
                what truly matters.
              </p>
            </div>

            <CTAButtons />
          </div>

          <span className="h-[1px] w-32 bg-white/15"></span>

          <img
            src="/images/backgrounds/dots2.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full items-center justify-between pt-1">
          <p className="font-mono text-[11px] leading-loose font-medium tracking-wider text-white/45 uppercase">
            Trusted By <br /> Industry Leaders
          </p>
          <span className="mx-6 w-[1px] self-stretch bg-white/30" />
          <img src="/images/leaders/l7.png" />
          <img src="/images/leaders/l8.png" />
          <img src="/images/leaders/l9.png" />
          <img src="/images/leaders/l10.png" />
          <img src="/images/leaders/l11.png" />
          <img src="/images/leaders/l12.png" />
        </div>
      </div>
    </section>
  );
}
