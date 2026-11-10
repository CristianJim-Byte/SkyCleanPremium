import type { Metadata } from "next";
import Link from "next/link";
import Legal from "@/components/Legal";
import { OwnerLine } from "@/lib/owner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulamin strony",
  description: "Zasady korzystania ze strony internetowej SkyClean i formularza kontaktowego.",
  alternates: { canonical: "/regulamin" },
};

export default function Page() {
  return (
    <Legal title="Regulamin strony" updated="10 listopada 2026 r.">
      <h2>1. Kto prowadzi stronę</h2>
      <p>Stronę prowadzi <OwnerLine />. Kontakt: <a href={`mailto:${site.email}`}>{site.email}</a>, tel. <a href={site.phoneHref}>{site.phone}</a>, {site.hours}.</p>

      <h2>2. Do czego służy strona</h2>
      <p>Strona przedstawia usługi SkyClean: dezynsekcję, dezynfekcję, deratyzację oraz mycie ciśnieniowe i parowe. Przez stronę nie zawiera się umów i nie dokonuje płatności. Formularz kontaktowy służy wyłącznie do wysłania zapytania.</p>

      <h2>3. Ceny i wyceny</h2>
      <p>Ceny podane na stronie, w tym ceny „od”, są orientacyjne i nie stanowią oferty w rozumieniu Kodeksu cywilnego. Ostateczną cenę ustalamy indywidualnie po zapoznaniu się z obiektem. Wycena jest bezpłatna i do niczego nie zobowiązuje.</p>

      <h2>4. Formularz kontaktowy</h2>
      <ul>
        <li>Korzystanie z formularza jest bezpłatne i nie wymaga zakładania konta.</li>
        <li>Do wysłania zapytania potrzebne są: urządzenie z dostępem do internetu i aktualna przeglądarka.</li>
        <li>Zabronione jest przesyłanie treści bezprawnych.</li>
        <li>Usługa formularza kończy się z chwilą wysłania wiadomości.</li>
      </ul>

      <h2>5. Wykonanie usług</h2>
      <p>Zakres, termin i cenę usługi ustalamy z klientem indywidualnie przed rozpoczęciem prac. Konsumentom przysługują prawa wynikające z przepisów, w szczególności z ustawy o prawach konsumenta.</p>

      <h2>6. Reklamacje</h2>
      <p>Reklamacje dotyczące działania strony lub wykonanej usługi można zgłaszać na adres <a href={`mailto:${site.email}`}>{site.email}</a>. Odpowiadamy w ciągu 14 dni. Konsument może skorzystać z pozasądowych sposobów rozpatrywania reklamacji, między innymi z pomocy miejskiego lub powiatowego rzecznika konsumentów.</p>

      <h2>7. Zdjęcia i treści</h2>
      <p>Zdjęcia, nagrania i teksty na stronie należą do SkyClean lub są wykorzystywane za zgodą uprawnionych. Nie wolno ich kopiować w celach komercyjnych bez naszej zgody.</p>

      <h2>8. Dane osobowe</h2>
      <p>Zasady przetwarzania danych osobowych opisuje <Link href="/polityka-prywatnosci">polityka prywatności</Link>.</p>
    </Legal>
  );
}
