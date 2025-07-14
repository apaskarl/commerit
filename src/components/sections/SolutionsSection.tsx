import EyebrowText from "../ui/EyebrowText";

export default function SolutionsSection() {
  return (
    <section className="bg-light text-dark flex min-h-screen w-full px-20">
      <div className="w-full">
        {/* Everything We Offer */}
        <div className="space-y-16 py-10 pb-20">
          <div className="flex justify-between pt-10">
            <div className="w-1/2 space-y-8">
              <EyebrowText text="Solutions" />
              <div className="space-y-6">
                <h1 className="text-4xl font-medium tracking-tight">
                  Everything we offer
                </h1>
                <h2 className="text-subtext text-lg">
                  Sociis faucibus non vestibulum fermentum aliquam amet. At
                  scelerisque a tincidunt sit faucibus in pellentesque mattis.
                </h2>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-x-6">
            <div className="min-h-screen flex-1">
              <div className="space-y-8 px-6 py-10">
                <div className="space-y-3">
                  <p className="text-2xl font-medium tracking-tight">
                    Sales Process Automation
                  </p>
                  <p className="text-subtext">
                    Optimize your sales workflow with our cutting-edge Sales
                    Process Automation tools. Streamline your operations and
                    enhance productivity by automating repetitive tasks,
                    allowing your team to focus on closing deals and nurturing
                    client relationships.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-x-5">
                    <img
                      src="/images/icons/arrows.png"
                      alt=""
                      className="size-7"
                    />
                    <p>
                      Transform your sales strategy with our innovative
                      solutions.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <img
                      src="/images/icons/chart.png"
                      alt=""
                      className="size-7"
                    />
                    <p>
                      Achieve greater efficiency in your sales process with our
                      automated solutions.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <img
                      src="/images/icons/arrow-waves.png"
                      alt=""
                      className="size-7"
                    />
                    <p>Enhancing your team's performance and driving results</p>
                  </div>
                </div>

                <button className="border-border/20 bg-border/10 rounded-lg border px-5 py-3 text-xs font-medium tracking-wide uppercase">
                  DISCOVER OUR AI SALES AUTOMATION
                </button>
              </div>

              <div className="divide-border/20 border-border/20 flex flex-col space-x-0 divide-x-0 divide-y border-y">
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

            <div className="bg-dark min-h-screen flex-1 rounded-3xl"></div>
          </div>
        </div>

        <div className="bg-dark text-light my-10 flex flex-col items-center space-y-12 rounded-3xl p-10">
          <div className="flex w-1/2 flex-col items-center space-y-8 text-center">
            <EyebrowText text="Solutions" />
            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Industries we work with
              </h1>
              <h2 className="text-subtext text-lg">
                Explore how our innovative solutions enhance efficiency and
                drive success across various industries.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <IndustryContainer
              title="Medical Clinics"
              subtitle="A comprehensive overview of our services, highlighting the seamless integration of AI into business processes."
            />
            <IndustryContainer
              title="Car Rental"
              subtitle="An insightful look into how our solutions enhance operational efficiency and customer engagement."
            />

            <IndustryContainer
              title="Online Retailers"
              subtitle="A brief summary of our innovative approach to automating business workflows with AI technology."
            />
            <IndustryContainer
              title="Credit Brokers"
              subtitle="An engaging description of the transformative impact our AI solutions have on various industries."
            />
            <IndustryContainer
              title="Insurance Brokers"
              subtitle="A concise explanation of how our services streamline operations and improve customer interactions. "
            />
            <IndustryContainer
              title="Real-Estate and many more"
              subtitle="An outline of the benefits our AI-driven solutions provide to businesses seeking efficiency."
            />
            <IndustryContainer
              title="Marketing Agencies / Lead Generation Agencies"
              subtitle="A snapshot of our commitment to delivering tailored AI solutions that meet diverse business needs."
            />
            <IndustryContainer
              title="Saas"
              subtitle="A quick guide to understanding the advantages of implementing our AI solutions in your organization."
            />
            <IndustryContainer
              title="Saas"
              subtitle="A quick guide to understanding the advantages of implementing our AI solutions in your organization."
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-14 rounded-3xl p-20">
          <div className="flex flex-col items-center space-y-8 text-center">
            <EyebrowText text="Solutions" />
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Channels we implement our solutions on
              </h1>
              <h2 className="text-subtext w-[70%] text-lg">
                Sociis faucibus non vestibulum fermentum aliquam amet. At
                scelerisque a tincidunt sit faucibus in pellentesque mattis.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const IndustryContainer = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="p-10">
      <div className="space-y-3">
        <img src="/images/icons/chart.png" />
        <p className="text-2xl font-medium">{title}</p>
        <p className="text-subtext">{subtitle}</p>
      </div>
    </div>
  );
};
