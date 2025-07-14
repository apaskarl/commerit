import EyebrowText from "../ui/EyebrowText";
import BlurButton from "../ui/buttons/BlurButton";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-background.png')" }}
    >
      <div className="w-full px-20 pb-10">
        <div className="h-36 w-full" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeIn" }}
          className="flex w-1/2 flex-col gap-y-14"
        >
          <div className="flex flex-col gap-y-8">
            <EyebrowText text="AI Sofware Agency" />

            <h1 className="text-6xl leading-16 font-medium tracking-tight">
              We build custom AI agents that automate your business
            </h1>

            <p className="text-subtext text-lg">
              From support to sales to operations—we replace manual tasks with
              tailored AI systems.
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <BlurButton text="Explore Pricing" />
            <button className="rounded-lg border bg-white px-5 py-3 text-xs font-medium tracking-wide text-black uppercase">
              Talk with David
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeIn" }}
          className="mt-16 flex w-full items-center justify-between"
        >
          <p className="text-border border-border w-[13%] border-r pr-10 text-[11px] leading-relaxed font-medium tracking-wide uppercase">
            Trusted by industry leaders
          </p>

          <img src="/images/leaders/l1.png" alt="L1" />
          <img src="/images/leaders/l2.png" alt="L1" />
          <img src="/images/leaders/l3.png" alt="L1" />
          <img src="/images/leaders/l4.png" alt="L1" />
          <img src="/images/leaders/l5.png" alt="L1" />
          <img src="/images/leaders/l6.png" alt="L1" />
        </motion.div>
      </div>
    </section>
  );
}
