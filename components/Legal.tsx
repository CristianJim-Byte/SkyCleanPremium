export default function Legal({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="shell max-w-3xl py-16 md:py-20">
      <h1 className="display text-4xl text-carbon md:text-5xl">{title}</h1>
      <p className="mt-4 text-sm text-muted">Obowiązuje od {updated}</p>
      <div className="legal mt-10 space-y-4 text-[1.05rem] leading-relaxed text-ink [&_a]:font-semibold [&_a]:text-green-deep [&_a]:underline [&_h2]:wide [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-carbon [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </article>
  );
}
