export default function EyebrowText({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-x-5">
      <span className="bg-accent size-2" />
      <span className="text-xs font-medium tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
}
