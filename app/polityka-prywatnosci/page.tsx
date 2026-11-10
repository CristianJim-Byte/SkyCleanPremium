import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { OwnerLine } from "@/lib/owner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Jak SkyClean przetwarza dane osobowe i z jakich plików cookie korzysta strona.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function Page() {
  return (
    <Legal title="Polityka prywatności" updated="10 listopada 2026 r.">
      <h2>1. Administrator danych</h2>
      <p>Administratorem danych osobowych jest <OwnerLine />. Kontakt w sprawach danych osobowych: <a href={`mailto:${site.email}`}>{site.email}</a>, tel. <a href={site.phoneHref}>{site.phone}</a>.</p>

      <h2>2. Jakie dane zbieramy i po co</h2>
      <ul>
        <li><strong>Formularz kontaktowy, telefon, e-mail, WhatsApp:</strong> imię i nazwisko, numer telefonu, adres e-mail (jeśli go podasz) oraz treść wiadomości. Używamy ich, żeby odpowiedzieć na zapytanie i przygotować wycenę. Podstawa prawna: art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy na Twoją prośbę) oraz art. 6 ust. 1 lit. f RODO (nasz uzasadniony interes: obsługa korespondencji).</li>
        <li><strong>Realizacja usługi i rozliczenia:</strong> dane potrzebne do wykonania usługi i wystawienia faktury. Podstawa prawna: art. 6 ust. 1 lit. b i c RODO.</li>
        <li><strong>Statystyki odwiedzin:</strong> tylko jeśli wyrazisz zgodę w okienku cookie. Podstawa prawna: art. 6 ust. 1 lit. a RODO.</li>
      </ul>

      <h2>3. Komu przekazujemy dane</h2>
      <p>Dane mogą trafiać do podmiotów, które świadczą dla nas usługi: dostawcy hostingu strony (Vercel Inc.), dostawcy poczty elektronicznej i wysyłki wiadomości z formularza (Google, Resend), biura rachunkowego, a po wyrażeniu zgody także do Google (Google Analytics). Część z tych podmiotów ma siedzibę poza Europejskim Obszarem Gospodarczym. Przekazanie odbywa się wtedy na podstawie standardowych klauzul umownych lub decyzji Komisji Europejskiej.</p>
      <p>Jeśli piszesz do nas przez WhatsApp, Twoje dane przetwarza także operator tej usługi na zasadach opisanych w jego regulaminie.</p>

      <h2>4. Jak długo przechowujemy dane</h2>
      <ul>
        <li>Zapytania, które nie zakończyły się umową: do 12 miesięcy od ostatniego kontaktu.</li>
        <li>Dane związane z wykonaną usługą: przez okres przedawnienia roszczeń.</li>
        <li>Dokumenty księgowe: przez okres wymagany przepisami podatkowymi.</li>
        <li>Dane statystyczne: do czasu wycofania zgody.</li>
      </ul>

      <h2>5. Twoje prawa</h2>
      <p>Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia oraz prawo sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie. Zgodę możesz wycofać w każdej chwili, co nie wpływa na zgodność z prawem wcześniejszego przetwarzania. Aby skorzystać z tych praw, napisz na <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <p>Możesz też wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</p>

      <h2>6. Pliki cookie</h2>
      <p>Strona działa bez plików cookie. Jeśli wyrazisz zgodę w okienku na dole strony, włączymy Google Analytics, które zapisuje pliki cookie służące do liczenia odwiedzin. Swój wybór zapisujemy w pamięci przeglądarki. Możesz go zmienić, usuwając dane strony w ustawieniach przeglądarki.</p>

      <h2>7. Dobrowolność podania danych</h2>
      <p>Podanie danych jest dobrowolne, ale bez numeru telefonu lub adresu e-mail nie odpowiemy na zapytanie. Nie podejmujemy wobec Ciebie decyzji w sposób zautomatyzowany i nie profilujemy.</p>
    </Legal>
  );
}
