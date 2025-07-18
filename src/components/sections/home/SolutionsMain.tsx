import { Icon } from "@iconify/react/dist/iconify.js";
import SectionTitle from "@/components/ui/SectionTitle";

export default function SolutionsMain() {
  return (
    <section
      id="solutions1"
      className="text-dark bg-light relative flex flex-col items-center justify-center pt-10 pb-20"
    >
      <div className="container mx-auto max-w-7xl space-y-14 px-4">
        <SectionTitle
          eyebrowText="Solutions"
          heading=" Everything we offer"
          subheading="Sociis faucibus non vestibulum fermentum aliquam amet. At scelerisque a tincidunt sit faucibus in pellentesque mattis."
          classname="flex-1 pb-1"
        />

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex-1">
            <div className="space-y-10 px-6 py-10">
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-2xl font-medium tracking-tight">
                    Sales Process Automation
                  </p>
                  <p className="text-dark/70 leading-relaxed">
                    Optimize your sales workflow with our cutting-edge Sales
                    Process Automation tools. Streamline your operations and
                    enhance productivity by automating repetitive tasks,
                    allowing your team to focus on closing deals and nurturing
                    client relationships.
                  </p>
                </div>

                <div className="space-y-3">
                  <SalesAutomationText
                    icon="/images/icons/solutions-1/arrow-diagonal-two.png"
                    text="Transform your sales strategy with our innovative solutions."
                  />
                  <SalesAutomationText
                    icon="/images/icons/solutions-1/chart-no-axes-combined.png"
                    text="Achieve greater efficiency in your sales process with our automated solutions."
                  />
                  <SalesAutomationText
                    icon="/images/icons/solutions-1/arrow-up-waves.png"
                    text="Enhancing your team's performance and driving results."
                  />
                </div>
              </div>

              <button className="border-dark/10 lh-full bg-dark/5 flex cursor-pointer items-center gap-x-2 rounded-lg border px-5 py-3 text-xs font-medium tracking-wide uppercase duration-300 hover:opacity-50">
                DISCOVER OUR AI SALES AUTOMATION
                <Icon icon="si:arrow-right-line" className="size-5" />
              </button>
            </div>

            <div className="divide-dark/10 border-dark/10 flex flex-col space-x-0 divide-x-0 divide-y border-y">
              <button className="p-6 text-start text-xl font-medium">
                Customer Support Automation
              </button>
              <button className="p-6 text-start text-xl font-medium">
                Frontdesk Automations
              </button>
              <button className="p-6 text-start text-xl font-medium">
                Internal Tools
              </button>
              <button className="p-6 text-start text-xl font-medium">
                Process Automations
              </button>
            </div>
          </div>

          <div className="bg-dark relative flex flex-1 flex-col items-center justify-center rounded-3xl p-10 text-white">
            <div className="space-y-10">
              <div className="w-max rounded-xl border border-white bg-white/5 p-5 backdrop-blur-xl">
                <img src="/images/logo.png" alt="" className="w-max" />
              </div>

              <div className="flex items-end gap-x-5">
                <div className="space-y-5 rounded-xl border border-white/20 bg-white/5 p-5 shadow-2xl backdrop-blur-3xl">
                  <div className="flex items-center justify-between">
                    <p className="text-lg">Today's Revenue</p>
                    <Icon icon="mage:dots" className="size-5" />
                  </div>

                  <div className="flex gap-x-4">
                    <div className="space-y-3">
                      <p className="text-3xl">$18,218</p>
                      <p className="flex items-center gap-x-2 text-sm text-white/50">
                        <span className="flex items-center text-[#12B76A]">
                          <Icon icon="uil:arrow-up" /> 10%
                        </span>
                        vs yesterday
                      </p>
                    </div>

                    <img
                      src="/images/solutions-main/chart-yesterday.png"
                      className="w-28 object-contain"
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                  <img
                    src="/images/solutions-main/chart-bar-line.png"
                    className="w-max"
                  />
                </div>
              </div>

              <div className="flex items-start gap-x-5">
                <div className="rounded-xl border border-white/20 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                  <img
                    src="/images/solutions-main/rivet-money.png"
                    className="w-max"
                  />
                </div>

                <div className="space-y-5 rounded-xl border border-white/20 bg-white/5 p-5 shadow-2xl backdrop-blur-3xl">
                  <div className="flex items-center justify-between">
                    <p className="text-lg">Monthly Revenue</p>
                    <Icon icon="mage:dots" className="size-5" />
                  </div>

                  <div className="flex gap-x-4">
                    <div className="space-y-3">
                      <p className="text-3xl">$421,880</p>
                      <p className="flex items-center gap-x-2 text-sm text-white/50">
                        <span className="flex items-center text-[#12B76A]">
                          <Icon icon="uil:arrow-up" /> 40%
                        </span>{" "}
                        vs last month
                      </p>
                    </div>

                    <img
                      src="/images/solutions-main/chart-month.png"
                      className="w-28 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/images/backgrounds/dots.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const SalesAutomationText = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-x-5">
      <img src={icon} alt="" />
      <p className="leading-[150%]">{text}</p>
    </div>
  );
};
