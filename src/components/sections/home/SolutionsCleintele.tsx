import SectionTitle from "@/components/ui/SectionTitle";

export default function SolutionsCleintele() {
  return (
    <section
      id="solutions2"
      className="text-dark bg-light relative flex flex-col items-center justify-center py-10"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-dark relative flex flex-col items-center gap-y-14 rounded-3xl p-10 text-white">
          <SectionTitle
            eyebrowText="Solutions"
            heading="Industries we work with"
            subheading="Explore how our innovative solutions enhance efficiency and drive success across various industries."
            classname="mb-1 flex flex-col items-center text-center"
          />

          <div className="z-10 grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:[&>*:nth-child(3n)]:border-r-0 md:[&>*:nth-last-child(-n+3)]:border-b-0">
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
    <div className="flex h-64 flex-col justify-between gap-y-3 p-10 px-5 md:p-10">
      <img src={icon} alt="" className="w-max" />

      <div className="space-y-3">
        <p className="text-lg font-medium md:text-2xl">{title}</p>
        <p className="text-white/70">{subtitle}</p>
      </div>
    </div>
  );
};
