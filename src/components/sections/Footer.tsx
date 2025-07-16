import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-dark relative flex flex-col items-center justify-center py-10 text-white"
    >
      <div className="container mx-auto max-w-7xl space-y-10 px-4">
        <div className="flex justify-between">
          <div className="space-y-6">
            <Logo />
            <p className="leading-relaxed text-white">
              Experience seamless automation with our <br /> cutting-edge
              technology.
            </p>
          </div>

          <div className="flex gap-x-28">
            <div className="flex flex-col gap-y-7">
              <FooterButton text="Case Studies" />
              <FooterButton text="Customers" />
              <FooterButton text="About" />
              <FooterButton text="Products" dropdown />
            </div>
            <div className="flex flex-col gap-y-7">
              <FooterButton text="Blog" />
              <FooterButton text="Integrations" />
              <FooterButton text="Customer Stories" />
              <FooterButton text="Support" />
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/10" />

        <div className="flex items-center justify-between">
          <p className="text-sm tracking-tight text-white/40">
            © 2025 Commerit. All rights reserved.
          </p>

          <div className="flex items-center gap-x-3">
            <FooterLink text="Facebook" href="https://www.facebook.com/" />
            <div className="aspect-square size-1 rounded-full bg-white/25" />
            <FooterLink text="Instagram" href="https://www.instagram.com/" />
            <div className="aspect-square size-1 rounded-full bg-white/25" />
            <FooterLink text="LinkedIn" href="https://www.linkedin.com/" />
          </div>
        </div>
      </div>
    </section>
  );
}

const FooterButton = ({
  text,
  dropdown = false,
}: {
  text: string;
  dropdown?: boolean;
}) => {
  return (
    <button className="flex w-full cursor-pointer items-center gap-x-2 text-start font-mono text-xs leading-[150%] font-medium text-white/70 uppercase duration-300 hover:opacity-50">
      {text}
      {dropdown && (
        <Icon
          icon="famicons:chevron-down-outline"
          className="size-3 text-white"
        />
      )}
    </button>
  );
};

const FooterLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full cursor-pointer items-center text-start font-mono text-xs leading-[150%] font-medium text-white/70 uppercase duration-300 hover:opacity-50"
    >
      {text}
    </a>
  );
};
