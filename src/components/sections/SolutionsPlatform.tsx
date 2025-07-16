import EyebrowText from "../ui/EyebrowText";

export default function SolutionsPlatform() {
  return (
    <section
      id="solutions3"
      className="text-dark bg-light relative flex flex-col items-center justify-center py-20"
    >
      <div className="container mx-auto max-w-7xl space-y-14 px-4">
        <div className="flex w-full justify-center pb-1">
          <div className="mb-1 flex w-1/2 flex-col items-center space-y-8 text-center">
            <EyebrowText text="Solutions" />
            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight">
                Channels we implement our solutions on
              </h1>
              <h2 className="text-dark/70 text-lg leading-relaxed">
                Sociis faucibus non vestibulum fermentum aliquam amet. At
                scelerisque a tincidunt sit faucibus in pellentesque mattis.
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border-dark/15 relative flex min-h-[357px] items-end rounded-lg border bg-white p-10">
            <div className="z-20 w-2/3 space-y-3">
              <p className="text-2xl font-medium tracking-tight">
                Chat based solutions
              </p>
              <p className="text-dark/70 leading-relaxed">
                Enim dui cras auctor tortor sed felis ultrices. Nulla semper
                molestie turpis id et arcu accumsan est.
              </p>
            </div>

            <img
              src="/images/solutions-platform/faded-apps.png"
              className="absolute top-0 right-0 z-10"
            />
          </div>
          <div className="border-dark/15 relative flex min-h-[357px] flex-col justify-between rounded-lg border bg-white p-10">
            <img
              src="/images/solutions-platform/twilio-logo.png"
              className="w-max"
            />

            <div className="z-20 w-2/3 space-y-3">
              <p className="text-2xl font-medium tracking-tight">
                Voice based solutions
              </p>
              <p className="text-dark/70 leading-relaxed">
                Enim dui cras auctor tortor sed felis ultrices. Nulla semper
                molestie turpis id et arcu accumsan est.
              </p>
            </div>

            <img
              src="/images/solutions-platform/radar-sound.png"
              className="absolute right-0 bottom-0 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
