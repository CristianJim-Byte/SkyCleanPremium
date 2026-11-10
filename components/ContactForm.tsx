"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || site.web3formsKey;
const topics = ["Usługi DDD (szkodniki, dezynfekcja)", "Mycie kostki brukowej", "Mycie elewacji", "Mycie dachu", "Mycie fotowoltaiki", "Inne"];

export default function ContactForm({ topic }: { topic?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setError("");
    try {
      if (WEB3FORMS_KEY) {
        // Web3Forms: wysyłka prosto z przeglądarki na skrzynkę klienta (klucz jest publiczny z założenia).
        if (data.company_url) { setState("sent"); form.reset(); return; }
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Zapytanie ze strony: ${data.topic} — ${data.name}`,
            from_name: "SkyClean — formularz",
            "Imię i nazwisko": data.name,
            Telefon: data.phone,
            "E-mail": data.email || "—",
            Temat: data.topic,
            Wiadomość: data.message,
            ...(data.email ? { replyto: data.email } : {}),
          }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.success) throw new Error("Nie udało się wysłać wiadomości.");
      } else {
        const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(json.error || "Nie udało się wysłać wiadomości.");
      }
      setState("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nie udało się wysłać wiadomości.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-xl border-2 border-green bg-mist p-8">
        <h3 className="display text-2xl text-carbon">Wiadomość wysłana</h3>
        <p className="mt-3 text-muted">Odezwiemy się najszybciej, jak to możliwe. W pilnej sprawie zadzwoń: <a className="font-semibold text-green-deep underline" href={site.phoneHref}>{site.phone}</a>.</p>
        <button type="button" className="btn btn-outline mt-6" onClick={() => setState("idle")}>Wyślij kolejną wiadomość</button>
      </div>
    );
  }

  const field = "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/30";
  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Imię i nazwisko
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold">Telefon
          <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" className={field} />
        </label>
      </div>
      <label className="block text-sm font-semibold">E-mail <span className="font-normal text-muted">(opcjonalnie)</span>
        <input name="email" type="email" autoComplete="email" className={field} />
      </label>
      <label className="block text-sm font-semibold">Czego dotyczy zapytanie?
        <select name="topic" defaultValue={topic ?? topics[0]} className={field}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="block text-sm font-semibold">Opisz problem lub obiekt
        <textarea name="message" required rows={4} className={field} placeholder="Np. podjazd z kostki ok. 80 m², Ostrów Wlkp." />
      </label>
      <label className="hidden" aria-hidden="true">Nie wypełniaj tego pola
        <input name="company_url" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-5 w-5 shrink-0 accent-[#198a4a]" />
        <span>Zgadzam się na kontakt w sprawie mojego zapytania. Zasady przetwarzania danych opisuje <Link href="/polityka-prywatnosci" className="font-semibold text-green-deep underline">polityka prywatności</Link>.</span>
      </label>
      {state === "error" && (
        <p role="alert" className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-900">
          {error} Zadzwoń pod <a className="font-semibold underline" href={site.phoneHref}>{site.phone}</a>, napisz na <a className="font-semibold underline" href={site.whatsapp}>WhatsApp</a> albo na <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <button type="submit" disabled={state === "sending"} className="btn btn-green w-full disabled:opacity-60 sm:w-auto sm:justify-self-start">
        {state === "sending" ? "Wysyłanie…" : "Wyślij zapytanie"}
      </button>
    </form>
  );
}
