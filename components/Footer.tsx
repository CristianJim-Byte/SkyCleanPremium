import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const legal = [site.legalName, site.address, site.nip && `NIP ${site.nip}`, site.krs && `KRS ${site.krs}`, site.regon && `REGON ${site.regon}`, site.capital && `kapitał zakładowy ${site.capital}`].filter(Boolean);
  return (
    <footer className="bg-carbon text-white">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo size="lg" />
          <p className="mt-5 max-w-xs text-white/70">Ochrona przed szkodnikami oraz mycie ciśnieniowe i parowe. {site.city} i {site.range}.</p>
        </div>
        <div>
          <h2 className="wide text-base">Ochrona DDD</h2>
          <ul className="mt-4 space-y-2 text-white/75">
            {services.filter((s) => s.group === "ddd").map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/uslugi/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="wide text-base">Mycie</h2>
          <ul className="mt-4 space-y-2 text-white/75">
            {services.filter((s) => s.group === "mycie").map((s) => (
              <li key={s.slug}><Link className="hover:text-white" href={`/uslugi/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="wide text-base">Kontakt</h2>
          <ul className="mt-4 space-y-2 text-white/75">
            <li><a className="hover:text-white" href={site.phoneHref}>{site.phone}</a></li>
            <li><a className="hover:text-white" href={site.whatsapp}>WhatsApp</a></li>
            <li><a className="hover:text-white break-all" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.city}</li>
            <li>{site.hours}</li>
            {site.facebook && <li><a className="hover:text-white" href={site.facebook} rel="noopener">Facebook</a></li>}
            {site.googleProfile && <li><a className="hover:text-white" href={site.googleProfile} rel="noopener">Profil w Google</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl">© {new Date().getFullYear()} {legal.length ? legal.join(", ") : "SkyClean"}{site.court ? `. ${site.court}.` : ""}</p>
          <p className="flex gap-6">
            <Link className="hover:text-white" href="/polityka-prywatnosci">Polityka prywatności</Link>
            <Link className="hover:text-white" href="/regulamin">Regulamin</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
