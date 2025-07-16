export default function CTAButtons({
  inverted = false,
}: {
  inverted?: boolean;
}) {
  return (
    <div
      className={`${inverted && "flex-row-reverse"} flex items-stretch gap-x-3`}
    >
      <button className="flex cursor-pointer items-center gap-x-3 rounded-lg border border-white bg-white py-1 pr-4 pl-1 font-mono text-xs font-medium text-black uppercase backdrop-blur-sm duration-200 hover:opacity-50">
        <img
          src="/images/david.png"
          className="aspect-square size-8 object-cover"
        />
        Talk with David
      </button>
      <button className="flex cursor-pointer items-center rounded-lg border border-white/15 bg-black/10 px-5 font-mono text-xs font-medium uppercase backdrop-blur-sm duration-200 hover:opacity-50">
        Explore Pricing
      </button>
    </div>
  );
}
