import { site } from "@/lib/site";

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }
  // Pole-pułapka na boty: udajemy sukces.
  if (clean(body.company_url, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const topic = clean(body.topic, 120);
  const message = clean(body.message, 4000);
  if (!name || !phone || !message) return Response.json({ error: "Podaj imię, telefon i opis." }, { status: 400 });
  if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) return Response.json({ error: "Sprawdź numer telefonu." }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Sprawdź adres e-mail." }, { status: 400 });
  if (!body.consent) return Response.json({ error: "Zaznacz zgodę na kontakt." }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("contact: brak RESEND_API_KEY — wiadomość NIE została wysłana");
    return Response.json({ error: "Formularz jest chwilowo niedostępny." }, { status: 503 });
  }
  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM ?? "SkyClean — formularz <onboarding@resend.dev>";
  const rows = [["Imię i nazwisko", name], ["Telefon", phone], ["E-mail", email || "—"], ["Temat", topic || "—"]];
  const html = `<h2>Nowe zapytanie ze strony sky-clean.pl</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
    .join("")}</table><p style="white-space:pre-wrap">${esc(message)}</p>`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Zapytanie ze strony: ${topic || "kontakt"} — ${name}`,
      html,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
      ...(email ? { reply_to: email } : {}),
    }),
  });
  if (!res.ok) {
    console.error("contact: Resend", res.status, await res.text());
    return Response.json({ error: "Nie udało się wysłać wiadomości." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
