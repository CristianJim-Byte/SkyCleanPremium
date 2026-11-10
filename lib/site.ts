// Dane firmy w jednym miejscu. Puste pola nie są pokazywane na stronie.
export const site = {
  name: "SkyClean",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sky-clean.pl",
  phone: "+48 880 842 310",
  phoneHref: "tel:+48880842310",
  whatsapp: "https://wa.me/48880842310",
  email: "skyclean2026@gmail.com",
  city: "Ostrów Wielkopolski",
  hours: "poniedziałek – sobota, 7:00 – 19:00",
  range: "do 150 km od Ostrowa Wielkopolskiego",
  towns: ["Kalisz", "Pleszew", "Jarocin", "Ostrzeszów", "Kępno", "Wieruszów", "Konin", "Poznań", "Gniezno"],
  // Z odpisu KRS (stan na 15.01.2026)
  legalName: "SkyClean spółka z ograniczoną odpowiedzialnością",
  address: "ul. Perłowa 2, 63-410 Gorzyce Wielkie",
  nip: "6222869368",
  krs: "0001216424",
  regon: "543719104",
  court: "Sąd Rejonowy Poznań – Nowe Miasto i Wilda w Poznaniu, IX Wydział Gospodarczy Krajowego Rejestru Sądowego",
  capital: "5 000,00 zł",
  // Klucz Web3Forms (publiczny z założenia): wiadomości z formularza trafiają na skyclean2026@gmail.com
  web3formsKey: "eb8fa4ea-fb57-42a3-918e-b6b347aefcfa",
  facebook: "https://www.facebook.com/p/SkyClean-61585770664301/",
  googleProfile: "https://www.google.com/search?kgmid=/g/11yzqhbvph&q=SkyClean+sp%C3%B3%C5%82ka+z+ograniczon%C4%85+odpowiedzialno%C5%9Bci%C4%85",
};

export const nav = [
  { href: "/uslugi/ddd", label: "Ochrona DDD" },
  { href: "/#mycie", label: "Mycie" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/#kontakt", label: "Kontakt" },
];
