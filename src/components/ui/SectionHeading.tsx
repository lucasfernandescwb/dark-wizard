export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-violet-300" : "text-violet-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-pretty text-base leading-7 sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
