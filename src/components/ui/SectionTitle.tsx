import { Icon } from "@iconify/react/dist/iconify.js";

export default function SectionTitle({
  eyebrowText,
  heading,
  subheading,
  classname,
}: {
  eyebrowText: string;
  heading: string;
  subheading: string;
  classname?: string;
}) {
  return (
    <div className={`${classname} space-y-8 md:w-1/2`}>
      <EyebrowText text={eyebrowText} />

      <div className="space-y-6">
        <h1 className="text-4xl font-medium tracking-tight">{heading}</h1>
        <h2 className="text-lg leading-relaxed opacity-70">{subheading}</h2>
      </div>
    </div>
  );
}

const EyebrowText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Icon icon="famicons:square-sharp" className="text-accent size-2" />
      <p className="lh-full font-mono text-xs font-medium tracking-widest uppercase">
        {text}
      </p>
    </div>
  );
};
