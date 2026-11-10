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
  // Do uzupełnienia danymi od klienta (zdjęcie z NIP i KRS):
  legalName: "",
  address: "",
  nip: "",
  krs: "",
  regon: "",
  facebook: "",
  googleProfile: "",
};

export const nav = [
  { href: "/uslugi/ddd", label: "Ochrona DDD" },
  { href: "/#mycie", label: "Mycie" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/#kontakt", label: "Kontakt" },
];
