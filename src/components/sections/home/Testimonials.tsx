import SectionTitle from "@/components/ui/SectionTitle";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-light flex flex-col items-center justify-center gap-y-14 py-10"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-dark relative flex flex-col justify-between gap-14 rounded-3xl px-10 pb-20 text-white md:flex-row md:pb-0">
          <SectionTitle
            eyebrowText="Testimonials"
            heading="Don't just take our word for it"
            subheading="Sociis faucibus non vestibulum fermentum aliquam amet. At scelerisque a tincidunt sit faucibus in pellentesque mattis."
            classname="z-10 mr-1 max-w-[330px] py-10"
          />

          <div className="z-20 grid flex-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="hidden rounded-b-xl bg-white/2 p-6 md:block" />

              <TestimonialsCard
                message={`"Commerit's voice-driven solutions have transformed our customer engagement. Their AI efficiently handles inquiries, allowing our team to focus on more complex tasks while improving response times and providing 24/7 support."`}
                name="Michael Taylor"
                company="ABC Corp."
              />

              <TestimonialsCard
                message={`"The voice solutions from Commerit have redefined our customer service. Their AI manages queries effortlessly, enabling our staff to concentrate on higher-level tasks and ensuring clients receive constant support."`}
                name="Jana Mae"
                company="EFG Incorporated"
              />

              <div className="hidden rounded-t-xl bg-white/2 p-6 md:block" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="hidden rounded-b-xl bg-white/2 p-24 md:block" />

              <TestimonialsCard
                message={`"The voice solutions from Commerit have redefined our customer service. Their AI manages queries effortlessly, enabling our staff to concentrate on higher-level tasks and ensuring clients receive constant support."`}
                name="Jana Mae"
                company="EFG Incorporated"
              />

              <div className="hidden flex-1 rounded-t-xl bg-white/2 p-6 md:block" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 z-10 flex h-11 gap-x-1 self-end">
            <div className="bg-light w-2" />
            <div className="bg-light w-5" />
            <div className="bg-light w-7" />
            <div className="bg-light w-48" />
            <div className="bg-accent w-6" />
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

const TestimonialsCard = ({
  message,
  name,
  company,
}: {
  message: string;
  name: string;
  company: string;
}) => {
  return (
    <div className="space-y-8 rounded-xl border border-white/10 bg-white/5 py-8 backdrop-blur-sm">
      <p className="px-8">{message}</p>

      <div className="border-accent space-y-3 border-l-2 px-8">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-white/70">{company}</p>
      </div>
    </div>
  );
};
