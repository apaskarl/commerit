import EyebrowText from "../ui/EyebrowText";

export default function HowItWorksSection() {
  return (
    <section className="bg-light flex min-h-screen w-full px-20 py-10">
      <div className="bg-dark text-light w-full rounded-3xl p-10">
        <div className="w-[40%] space-y-8">
          <EyebrowText text="How it works" />
          <div className="space-y-6">
            <h1 className="text-4xl font-medium tracking-tight">
              Our Proven Process
            </h1>
            <h2 className="text-subtext text-lg">
              Sociis faucibus non vestibulum fermentum aliquam amet. At
              scelerisque a tincidunt sit faucibus in pellentesque mattis.
            </h2>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
