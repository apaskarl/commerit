import EyebrowText from "../ui/EyebrowText";

export default function SolutionsCleintele() {
  return (
    <section
      id="solutions2"
      className="text-dark bg-light relative flex flex-col items-center justify-center py-10"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-dark relative flex flex-col items-center gap-y-14 rounded-3xl p-10 text-white">
          <div className="z-10 mb-1 flex w-1/2 flex-col items-center space-y-8 text-center">
            <EyebrowText text="Solutions" />
            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Industries we work with
              </h1>
              <h2 className="text-lg leading-relaxed text-white/70">
                Explore how our innovative solutions enhance efficiency and
                drive success across various industries.
              </h2>
            </div>
          </div>

          <div className="z-10 grid grid-cols-3 divide-x divide-y divide-white/10 [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
            <IndustryCard
              icon="/images/icons/solutions-2/medical-mark.png"
              title="Medical Clinics"
              subtitle="A comprehensive overview of our services, highlighting the seamless integration of AI into business processes."
            />
            <IndustryCard
              icon="/images/icons/solutions-2/car.png"
              title="Car Rental"
              subtitle="An insightful look into how our solutions enhance operational efficiency and customer engagement."
            />
            <IndustryCard
              icon="/images/icons/solutions-2/shopping-cart.png"
              title="Online Retailers"
              subtitle="A brief summary of our innovative approach to automating business workflows with AI technology."
            />
            <IndustryCard
              icon="/images/icons/solutions-2/money.png"
              title="Credit Brokers"
              subtitle="An engaging description of the transformative impact our AI solutions have on various industries."
            />
            <IndustryCard
              icon="/images/icons/solutions-2/hand-heart.png"
              title="Insurance Brokers"
              subtitle="A concise explanation of how our services streamline operations and improve customer interactions. "
            />
            <IndustryCard
              icon="/images/icons/solutions-2/building.png"
              title="Real-Estate and many more"
              subtitle="An outline of the benefits our AI-driven solutions provide to businesses seeking efficiency."
            />
            <IndustryCard
              icon="/images/icons/solutions-2/megaphone.png"
              title="Marketing Agencies / Lead Generation Agencies"
              subtitle="A snapshot of our commitment to delivering tailored AI solutions that meet diverse business needs."
            />
            <IndustryCard
              icon="/images/icons/solutions-2/saas.png"
              title="Saas"
              subtitle="A quick guide to understanding the advantages of implementing our AI solutions in your organization."
            />
            <IndustryCard
              icon="/images/icons/solutions-2/saas.png"
              title="Saas"
              subtitle="A quick guide to understanding the advantages of implementing our AI solutions in your organization."
            />
          </div>

          <img
            src="/images/backgrounds/dots.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const IndustryCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex h-64 flex-col justify-between gap-y-3 p-10">
      <img src={icon} alt="" className="w-max" />

      <div className="space-y-3">
        <p className="text-2xl font-medium">{title}</p>
        <p className="text-white/70">{subtitle}</p>
      </div>
    </div>
  );
};
