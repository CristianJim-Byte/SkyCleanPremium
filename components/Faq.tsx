import type { Faq as F } from "@/lib/services";

export default function Faq({ items }: { items: F[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((i) => (
        <details key={i.q} className="group">
          <summary className="flex items-center justify-between gap-6 py-5 text-lg font-semibold">
            {i.q}
            <span className="faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-xl text-green-deep transition-transform" aria-hidden="true">+</span>
          </summary>
          <p className="max-w-[68ch] pb-6 text-muted">{i.a}</p>
        </details>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}
