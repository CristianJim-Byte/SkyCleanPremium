import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";
import { bySlug, dddServices, services } from "@/lib/services";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = bySlug((await params).slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/uslugi/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/uslugi/${s.slug}` },
  };
}

const topicFor: Record<string, string> = {
  "mycie-kostki-brukowej": "Mycie kostki brukowej",
  "mycie-elewacji": "Mycie elewacji",
  "mycie-dachow": "Mycie dachu",
  "mycie-fotowoltaiki": "Mycie fotowoltaiki",
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = bySlug((await params).slug);
  if (!s) notFound();
  const isDdd = s.group === "ddd";
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    areaServed: [site.city, ...site.towns],
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phone, url: site.url },
  };
  return (
    <>
      <section className="bg-carbon text-white">
        <div className="shell py-14 md:py-20">
          <nav aria-label="Okruszki" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">Strona główna</Link>
            <span className="mx-2">/</span>
            {isDdd && s.slug !== "ddd" && (<><Link href="/uslugi/ddd" className="hover:text-white">Usługi DDD</Link><span className="mx-2">/</span></>)}
            <span className="text-white/85">{s.name}</span>
          </nav>
          <h1 className="display mt-6 max-w-4xl text-[2.6rem] sm:text-6xl">{s.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{s.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <p className="wide text-2xl text-green-light">{s.price}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt" className="btn btn-green">Zapytaj o wycenę</a>
              <a href={site.phoneHref} className="btn btn-ghost">{site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="shell">
          <h2 className="display text-3xl text-carbon md:text-4xl">{s.scopeTitle}</h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
            {s.scope.map((item) => {
              const sub = s.slug === "ddd" ? dddServices.find((d) => d.name === item.title) : undefined;
              const inner = (
                <>
                  <h3 className="wide text-xl text-carbon">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.text}</p>
                  {sub && <span className="mt-4 inline-block font-semibold text-green-deep underline decoration-2 underline-offset-4">Więcej o usłudze</span>}
                </>
              );
              return (
                <li key={item.title} className="bg-white">
                  {sub ? <Link href={`/uslugi/${sub.slug}`} className="block h-full p-7 hover:bg-mist">{inner}</Link> : <div className="h-full p-7">{inner}</div>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {s.video && (
        <section className="pb-16 md:pb-20">
          <div className="shell">
            <figure className="overflow-hidden rounded-2xl bg-carbon">
              <video className="max-h-[34rem] w-full object-cover" autoPlay muted loop playsInline poster={s.video.poster} preload="metadata">
                <source src={s.video.src} type="video/mp4" />
              </video>
              <figcaption className="px-5 py-3 text-sm text-white/70">{s.video.label}. Nagranie z naszej realizacji.</figcaption>
            </figure>
          </div>
        </section>
      )}

      {s.pairs && (
        <section className="bg-mist py-16 md:py-20">
          <div className="shell">
            <h2 className="display text-3xl text-carbon md:text-4xl">Przed i po</h2>
            <p className="mt-4 text-lg text-muted">Zdjęcia z naszych realizacji. Przesuń suwak, żeby porównać.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.pairs.map((p) => <BeforeAfter key={p.before} pair={p} sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" />)}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="shell max-w-4xl">
          <h2 className="display text-3xl text-carbon md:text-4xl">Częste pytania</h2>
          <div className="mt-8"><Faq items={s.faq} /></div>
        </div>
      </section>

      <Contact topic={isDdd ? "Usługi DDD (szkodniki, dezynfekcja)" : topicFor[s.slug]} title={`${s.name}: zapytaj o wycenę`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
