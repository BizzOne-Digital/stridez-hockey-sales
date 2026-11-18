import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineDark" | "white";

const styles: Record<Variant, string> = {
  primary: "btn-gradient text-white shadow-lg shadow-electric/30 hover:shadow-electric/50 hover:-translate-y-0.5",
  outline: "border-2 border-white/80 text-white hover:bg-white hover:text-navy",
  outlineDark: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  white: "bg-white text-navy hover:bg-ice-light hover:-translate-y-0.5",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold transition-all duration-300",
    styles[variant],
    className,
  );
  const external = /^(tel:|mailto:|https?:)/.test(href);
  if (external) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <Link href={href} className={cls} {...rest}>{children}</Link>;
}
