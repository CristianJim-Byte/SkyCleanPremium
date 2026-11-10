# SkyClean — strona www (Next.js)

Strona firmy SkyClean (Ostrów Wielkopolski): ochrona DDD oraz mycie ciśnieniowe i parowe.

## Uruchomienie

```bash
npm install
npm run dev
```

## Zmienne środowiskowe (Vercel → Settings → Environment Variables)

| Zmienna | Do czego |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | **Zalecane.** Klucz Web3Forms utworzony na adres klienta: formularz wysyła wiadomości prosto na jego skrzynkę, bez konfiguracji domeny. |
| `RESEND_API_KEY` | Wysyłka formularza kontaktowego e-mailem (resend.com). Alternatywa dla Web3Forms (wymaga weryfikacji domeny w DNS). Bez żadnego z kluczy formularz pokazuje błąd i kieruje na telefon/WhatsApp. |
| `CONTACT_TO` | Adres odbiorcy zapytań (domyślnie skyclean2026@gmail.com). |
| `CONTACT_FROM` | Nadawca, np. `SkyClean <formularz@sky-clean.pl>` po weryfikacji domeny w Resend. |
| `NEXT_PUBLIC_GA_ID` | Identyfikator Google Analytics (G-XXXX). Ładuje się dopiero po zgodzie na cookie. |
| `NEXT_PUBLIC_SITE_URL` | Adres strony (domyślnie https://www.sky-clean.pl). |

## Gdzie co jest

- `lib/site.ts` — dane firmy (telefon, e-mail, NIP, KRS, Facebook). Puste pola nie są pokazywane.
- `lib/services.ts` — treści usług, ceny, FAQ, pary zdjęć przed/po.
- `app/uslugi/[slug]` — podstrony usług.
- `app/api/contact` — wysyłka formularza.
