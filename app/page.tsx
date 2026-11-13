import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";
import { bySlug, dddServices, elewacjaPairs, homeFaq, kostkaPairs, priceList, washServices } from "@/lib/services";

const steps = [
  { t: "Kontakt", d: "Dzwonisz lub piszesz na WhatsApp i opisujesz problem." },
  { t: "Inspekcja lub fotopułapka", d: "Oglądamy obiekt i rozpoznajemy szkodnika przed zabiegiem." },
  { t: "Zabieg", d: "Dobieramy metodę i bezpieczne środki." },
  { t: "Kontrola", d: "Sprawdzamy efekt. W razie potrzeby powtarzamy zabieg." },
];
const reasons = ["Bezpłatna wycena", "Faktura VAT", "Ubezpieczenie OC", "Bezpieczne środki", "Dla domów i firm"];
const audiences = ["Domy", "Wspólnoty", "Gastronomia", "Magazyny", "Rolnictwo", "Firmy"];

export default function Home() {
  const ddd = bySlug("ddd")!;
  const gallery = [...kostkaPairs.slice(0, 4), ...elewacjaPairs.slice(0, 2)];
  return (
    <>
      {/* Dwie połowy firmy, jak na banerze klienta: ochrona DDD i mycie */}
      <section className="relative bg-carbon text-white">
        <h1 className="sr-only">SkyClean — ochrona przed szkodnikami oraz mycie ciśnieniowe i parowe w Ostrowie Wielkopolskim</h1>
        <div className="grid lg:min-h-[min(46rem,calc(100vh-4.5rem))] lg:grid-cols-2">
          <div className="relative flex flex-col justify-center overflow-hidden px-5 py-16 md:px-8 lg:py-20 lg:pl-[max(2rem,calc((100vw-76rem)/2+2rem))] lg:pr-16">
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/media/hero-ddd.jpg" preload="metadata" aria-hidden="true">
              <source src="/media/hero-ddd.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-carbon/90 via-carbon/75 to-carbon/50" aria-hidden="true" />
            <div className="relative">
            <p className="text-green-light">Dezynsekcja, deratyzacja, dezynfekcja</p>
            <p className="display mt-3 text-[2.7rem] sm:text-6xl xl:text-7xl">Ochrona przed szkodnikami</p>
            <p className="mt-6 max-w-md text-lg text-white/75">Owady, gryzonie, kuny, ozonowanie i monitoring fotopułapkami. Dla domów i firm, z bezpłatną wyceną.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/uslugi/ddd" className="btn btn-green">Zobacz usługi DDD</Link>
              <a href={site.whatsapp} className="btn btn-ghost">Napisz na WhatsApp</a>
            </div>
            </div>
          </div>
          <div className="relative min-h-[26rem] lg:min-h-0">
            <div className="hero-cut absolute inset-0 lg:-left-[9%]">
              <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/media/hero.jpg" preload="metadata" aria-hidden="true">
                <source src="/media/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/45 to-carbon/10" />
            </div>
            <div className="hero-edge absolute inset-y-0 w-full lg:-left-[9%]" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-end px-5 py-12 md:px-8 lg:pl-24 lg:pr-[max(2rem,calc((100vw-76rem)/2+2rem))]">
              <p className="font-semibold text-white">Kostka, elewacje, dachy, fotowoltaika</p>
              <p className="display mt-3 text-[2.4rem] sm:text-5xl xl:text-6xl">Mycie ciśnieniowe i parowe</p>
              <p className="mt-5 max-w-md text-lg text-white/80">Myjka do 300 bar i para do 110°C. Ceny od 8 zł/m².</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/#mycie" className="btn btn-white">Zobacz mycie i ceny</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Dlaczego SkyClean" className="border-b border-line bg-white">
        <ul className="shell flex flex-wrap gap-x-10 gap-y-3 py-6 text-[0.97rem] font-semibold text-carbon">
          {reasons.map((r) => (
            <li key={r} className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#198a4a" /><path d="M5.5 10.3l3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section id="ddd" className="py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <h2 className="display text-4xl text-carbon md:text-5xl">Zwalczanie szkodników</h2>
              <p className="mt-5 text-lg text-muted">{ddd.lead}</p>
              <p className="mt-6 text-carbon"><span className="font-semibold">Cena:</span> indywidualna wycena, bezpłatnie.</p>
              <Link href="/uslugi/ddd" className="btn btn-green mt-7">Wycena usług DDD</Link>
              <h3 className="wide mt-12 text-lg text-carbon">Dla kogo pracujemy</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {audiences.map((a) => <li key={a} className="rounded-md border-l-4 border-green bg-mist px-3.5 py-2 font-semibold text-carbon">{a}</li>)}
              </ul>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-2">
              {ddd.scope.map((s) => {
                const sub = dddServices.find((d) => d.name === s.title);
                const inner = (
                  <>
                    <h3 className="wide text-xl text-carbon">{s.title}</h3>
                    <p className="mt-2 text-muted">{s.text}</p>
                    {sub && <span className="mt-4 inline-block font-semibold text-green-deep underline decoration-2 underline-offset-4">Więcej o usłudze</span>}
                  </>
                );
                return (
                  <li key={s.title} className="bg-white">
                    {sub ? <Link href={`/uslugi/${sub.slug}`} className="block h-full p-7 hover:bg-mist">{inner}</Link> : <div className="h-full p-7">{inner}</div>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="mycie" className="bg-carbon py-20 text-white">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <h2 className="display text-4xl md:text-5xl">Mycie ciśnieniowe i parowe</h2>
              <p className="mt-5 max-w-xl text-lg text-white/75">Spalinowa myjka do 300 bar z osobnym podgrzewaczem wody. Gorąca woda i para do 110°C usuwają mech, glony i tłuste plamy.</p>
              <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
                {washServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/uslugi/${s.slug}`} className="group grid items-baseline gap-x-6 gap-y-1 py-5 sm:grid-cols-[1fr_auto]">
                      <span>
                        <span className="wide block text-2xl group-hover:text-green-light">{s.name}</span>
                        <span className="mt-1 block text-white/65">{s.short}</span>
                      </span>
                      <span className="wide text-xl text-green-light">{s.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/65">Firmom i wspólnotom proponujemy abonament na mycie fotowoltaiki.</p>
            </div>
            <figure className="self-start overflow-hidden rounded-2xl">
              <video className="aspect-[9/10] w-full object-cover" autoPlay muted loop playsInline poster="/media/dach.jpg" preload="none">
                <source src="/media/dach.mp4" type="video/mp4" />
              </video>
              <figcaption className="bg-carbon-2 px-5 py-3 text-sm text-white/70">Mycie dachówki. Nagranie z naszej realizacji.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="realizacje" className="py-20">
        <div className="shell">
          <h2 className="display text-4xl text-carbon md:text-5xl">Przed i po</h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">Zdjęcia z naszych realizacji. Przesuń suwak, żeby porównać.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((p) => <BeforeAfter key={p.before} pair={p} sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" />)}
          </div>
        </div>
      </section>

      <section id="jak-dzialamy" className="bg-mist py-20">
        <div className="shell">
          <h2 className="display text-4xl text-carbon md:text-5xl">Jak działamy</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="display flex h-12 w-12 items-center justify-center rounded-full bg-green text-xl text-white">{i + 1}</span>
                <h3 className="wide mt-4 text-xl text-carbon">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="cennik" className="py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="display text-4xl text-carbon md:text-5xl">Cennik</h2>
            <p className="mt-5 text-lg text-muted">Ceny orientacyjne. Dokładną kwotę podajemy po zdjęciach lub oględzinach, bezpłatnie.</p>
            <p className="mt-4 text-muted">Dla firm i wspólnot: abonament na mycie fotowoltaiki oraz abonament DDD z regularnymi przeglądami i raportami.</p>
          </div>
          <table className="w-full self-start border-collapse text-left">
            <caption className="sr-only">Ceny usług SkyClean</caption>
            <thead><tr className="border-b-2 border-carbon text-sm text-muted"><th scope="col" className="py-3 font-semibold">Usługa</th><th scope="col" className="py-3 text-right font-semibold">Cena</th></tr></thead>
            <tbody>
              {priceList.map((p) => (
                <tr key={p.name} className="border-b border-line">
                  <th scope="row" className="py-4 text-lg font-semibold"><Link href={p.href} className="hover:text-green-deep">{p.name}</Link></th>
                  <td className="wide py-4 text-right text-lg text-green-deep">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="pytania" className="pb-20">
        <div className="shell max-w-4xl">
          <h2 className="display text-4xl text-carbon md:text-5xl">Częste pytania</h2>
          <div className="mt-8"><Faq items={homeFaq} /></div>
        </div>
      </section>

      <Contact />
    </>
  );
}
