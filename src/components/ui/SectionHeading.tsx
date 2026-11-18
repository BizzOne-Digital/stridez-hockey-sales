import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  center,
  dark,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-electric">{eyebrow}</p>
      )}
      <Tag className={cn("font-display-it text-4xl uppercase sm:text-5xl", dark ? "text-white" : "text-navy")}>
        {title} {accent && <span className="text-electric">{accent}</span>}
      </Tag>
      <span className={cn("mt-5 block h-1 w-16 rounded-full bg-electric", center && "mx-auto")} />
      {intro && <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/80" : "text-ink/75")}>{intro}</p>}
    </div>
  );
}
