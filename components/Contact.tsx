import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export default function Contact({ topic, title = "Zapytaj o bezpłatną wycenę" }: { topic?: string; title?: string }) {
  return (
    <section id="kontakt" className="bg-mist py-20">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <h2 className="display text-4xl text-carbon md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-md text-lg text-muted">Na WhatsApp odpowiadamy najszybciej, zwykle w ciągu 15 minut. Możesz wysłać zdjęcia obiektu.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.whatsapp} className="btn btn-green">Napisz na WhatsApp</a>
            <a href={site.phoneHref} className="btn btn-outline">{site.phone}</a>
            {site.facebook && <a href={site.facebook} rel="noopener" className="btn btn-outline">Facebook</a>}
            {site.googleProfile && <a href={site.googleProfile} rel="noopener" className="btn btn-outline">Profil w Google</a>}
          </div>
          <dl className="mt-10 grid gap-5 text-base">
            <div><dt className="text-sm text-muted">E-mail</dt><dd className="font-semibold"><a className="hover:text-green-deep" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt className="text-sm text-muted">Godziny pracy</dt><dd className="font-semibold">{site.hours}</dd></div>
            <div><dt className="text-sm text-muted">Zasięg</dt><dd className="font-semibold">{site.city} i {site.range}</dd><dd className="mt-1 text-muted">{site.towns.join(", ")}</dd></div>
          </dl>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-[0_1px_0_var(--line)] ring-1 ring-line md:p-9">
          <ContactForm topic={topic} />
        </div>
      </div>
    </section>
  );
}
