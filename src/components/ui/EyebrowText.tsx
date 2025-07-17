import { Icon } from "@iconify/react/dist/iconify.js";

export default function EyebrowText({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-x-2">
      <Icon icon="famicons:square-sharp" className="text-accent size-2" />
      <p className="lh-full font-mono text-xs font-medium tracking-widest uppercase">
        {text}
      </p>
    </div>
  );
}
