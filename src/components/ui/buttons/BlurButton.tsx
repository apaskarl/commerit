export default function BlurButton({ text }: { text: string }) {
  return (
    <button className="rounded-lg border bg-gray-400/20 px-5 py-3 text-xs font-medium tracking-wide uppercase">
      {text}
    </button>
  );
}
