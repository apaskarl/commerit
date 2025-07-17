import { Icon } from "@iconify/react/dist/iconify.js";

export default function NavButton({
  text,
  dropdown,
}: {
  text: string;
  dropdown?: boolean;
}) {
  return (
    <button className="flex cursor-pointer items-center gap-x-2 px-1 py-2 font-mono text-xs font-medium text-white/70 uppercase duration-300 hover:opacity-50">
      <p className="leading-[100%]">{text}</p>
      {dropdown && (
        <Icon
          icon="famicons:chevron-down-outline"
          className="size-3 text-white"
        />
      )}
    </button>
  );
}
