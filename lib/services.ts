export type Pair = { before: string; after: string; w: number; h: number; alt: string };
export type Faq = { q: string; a: string };
export type Service = {
  slug: string;
  group: "ddd" | "mycie";
  name: string;
  short: string;
  price: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  scopeTitle: string;
  scope: { title: string; text: string }[];
  notes?: string[];
  pairs?: Pair[];
  video?: { src: string; poster: string; label: string };
  faq: Faq[];
};

const pair = (name: string, w: number, h: number, alt: string): Pair => ({
  before: `/media/${name}-przed.webp`,
  after: `/media/${name}-po.webp`,
  w,
  h,
  alt,
});

export const kostkaPairs: Pair[] = [
  pair("kostka-2", 1100, 1375, "Kostka brukowa w ogrodzie"),
  pair("kostka-5", 1100, 1466, "Ścieżka z kostki w ogrodzie"),
  pair("kostka-3", 1100, 1466, "Kostka przed wejściem do domu"),
  pair("kostka-4", 1100, 1466, "Opaska z kostki wzdłuż budynku"),
  pair("kostka-6", 1100, 1466, "Ścieżka z kostki przy domu"),
  pair("kostka-1", 1100, 1100, "Podjazd z kostki brukowej"),
  pair("kostka-8", 1100, 1222, "Chodnik przy budynku firmy"),
  pair("kostka-7", 1100, 1222, "Plac z kostki brukowej"),
];

export const elewacjaPairs: Pair[] = [
  pair("elewacja-3", 1100, 916, "Elewacja domu z oknami"),
  pair("elewacja-2", 1100, 846, "Boczna ściana budynku"),
  pair("elewacja-4", 1100, 846, "Elewacja od strony ogrodu"),
  pair("elewacja-1", 1100, 916, "Elewacja od frontu"),
];

const dddCommonFaq: Faq[] = [
  {
    q: "Ile kosztuje zabieg?",
    a: "Każdy obiekt wyceniamy indywidualnie, bo cena zależy od rodzaju szkodnika, powierzchni i liczby wizyt. Wycena jest bezpłatna i do niczego nie zobowiązuje.",
  },
  {
    q: "Czy środki są bezpieczne dla domowników i zwierząt?",
    a: "Dobieramy środki do obiektu i rodzaju szkodnika. Przed zabiegiem mówimy, jak przygotować pomieszczenia i po jakim czasie można z nich znów korzystać.",
  },
  {
    q: "Czy wystawiacie fakturę VAT?",
    a: "Tak. Pracujemy dla domów i firm, wystawiamy fakturę VAT i mamy ubezpieczenie OC.",
  },
];

export const services: Service[] = [
  {
    slug: "ddd",
    group: "ddd",
    name: "Usługi DDD",
    short: "Dezynsekcja, dezynfekcja i deratyzacja dla domów i firm.",
    price: "indywidualna wycena",
    metaTitle: "Usługi DDD w Ostrowie Wielkopolskim — dezynsekcja, dezynfekcja, deratyzacja",
    metaDescription:
      "Zwalczanie szkodników w Ostrowie Wielkopolskim i do 150 km: karaluchy, pluskwy, osy, szczury, myszy, kuny. Dezynfekcja i ozonowanie. Bezpłatna wycena, faktura VAT.",
    lead: "Zwalczamy owady i gryzonie, dezynfekujemy pomieszczenia i zabezpieczamy obiekty przed powrotem szkodników. Zaczynamy od rozpoznania problemu, dopiero potem dobieramy metodę.",
    scopeTitle: "Co robimy",
    scope: [
      { title: "Dezynsekcja", text: "Karaluchy, prusaki, pluskwy, mrówki, pchły, mole, gniazda os i szerszeni, opryski przeciw komarom i kleszczom." },
      { title: "Dezynfekcja", text: "Zamgławianie biur, mieszkań i hal, ozonowanie, usuwanie pleśni i grzybów." },
      { title: "Deratyzacja", text: "Szczury i myszy, stacje deratyzacyjne, stałe umowy z dokumentacją dla HACCP i Sanepidu." },
      { title: "Odstraszacze kun", text: "Montaż odstraszaczy w domu, na poddaszu i w samochodzie." },
      { title: "Monitoring fotopułapkami", text: "Sprawdzamy, co dzieje się na obiekcie, i rozpoznajemy szkodnika przed zabiegiem." },
      { title: "Abonament DDD dla firm", text: "Regularne przeglądy i raporty na potrzeby kontroli. Montujemy też kolce i siatki przeciw ptakom na dachach i halach." },
    ],
    faq: [
      {
        q: "Od czego zaczynacie?",
        a: "Od rozmowy przez telefon lub WhatsApp. Opisujesz problem, a my umawiamy oględziny obiektu. Jeśli nie wiadomo, jaki to szkodnik, stawiamy fotopułapkę.",
      },
      {
        q: "Co, jeśli szkodniki wrócą?",
        a: "Po zabiegu sprawdzamy efekt. W razie potrzeby powtarzamy zabieg.",
      },
      ...dddCommonFaq,
    ],
  },
  {
    slug: "dezynsekcja",
    group: "ddd",
    name: "Dezynsekcja",
    short: "Zwalczanie owadów w mieszkaniach, domach, firmach i ogrodach.",
    price: "indywidualna wycena",
    metaTitle: "Dezynsekcja Ostrów Wielkopolski — karaluchy, pluskwy, osy, komary",
    metaDescription:
      "Zwalczanie karaluchów, prusaków, pluskiew, mrówek, pcheł i moli. Usuwanie gniazd os i szerszeni, opryski przeciw komarom i kleszczom. Ostrów Wlkp. i okolice.",
    lead: "Usuwamy owady z mieszkań, domów, lokali i ogrodów. Metodę dobieramy do gatunku i do miejsca, w którym pracujemy.",
    scopeTitle: "Jakie owady zwalczamy",
    scope: [
      { title: "Karaluchy i prusaki", text: "Mieszkania, kuchnie, lokale gastronomiczne i magazyny." },
      { title: "Pluskwy", text: "Sypialnie, hotele, mieszkania na wynajem." },
      { title: "Gniazda os i szerszeni", text: "Usuwamy gniazda z poddaszy, elewacji, drzew i altan." },
      { title: "Mrówki, pchły i mole", text: "W domach, piwnicach i pomieszczeniach gospodarczych." },
      { title: "Komary i kleszcze", text: "Opryski ogrodów i działek." },
    ],
    faq: [
      {
        q: "Jak przygotować mieszkanie do zabiegu?",
        a: "Zależy od owada i metody. Dokładną instrukcję dostajesz od nas przed wizytą, po oględzinach lub po rozmowie.",
      },
      {
        q: "Czy jedna wizyta wystarczy?",
        a: "Po zabiegu sprawdzamy efekt. Jeśli owady nadal są, zabieg powtarzamy.",
      },
      ...dddCommonFaq,
    ],
  },
  {
    slug: "dezynfekcja",
    group: "ddd",
    name: "Dezynfekcja",
    short: "Zamgławianie, ozonowanie i usuwanie pleśni.",
    price: "indywidualna wycena",
    metaTitle: "Dezynfekcja i ozonowanie Ostrów Wielkopolski — biura, mieszkania, auta",
    metaDescription:
      "Dezynfekcja przez zamgławianie, ozonowanie mieszkań, biur i samochodów, dezynfekcja po zgonie, zalaniu lub chorobie zakaźnej, usuwanie pleśni i grzybów.",
    lead: "Usuwamy wirusy, bakterie i grzyby z pomieszczeń, w których ludzie mieszkają i pracują. Pracujemy w biurach, mieszkaniach, halach i samochodach.",
    scopeTitle: "Zakres dezynfekcji",
    scope: [
      { title: "Zamgławianie", text: "Biura, mieszkania i hale." },
      { title: "Po zgonie, zalaniu lub chorobie zakaźnej", text: "Dezynfekcja pomieszczeń po zdarzeniach, po których zwykłe sprzątanie nie wystarcza." },
      { title: "Ozonowanie", text: "Usuwa zapachy i bakterie z mieszkań, biur i aut." },
      { title: "Pleśń i grzyby", text: "Usuwamy je ze ścian, dachów i elewacji." },
    ],
    faq: [
      {
        q: "Do czego służy ozonowanie?",
        a: "Do usuwania zapachów i bakterii z mieszkań, biur i samochodów. Przed zabiegiem mówimy, jak przygotować pomieszczenie i kiedy można do niego wrócić.",
      },
      ...dddCommonFaq,
    ],
  },
  {
    slug: "deratyzacja",
    group: "ddd",
    name: "Deratyzacja",
    short: "Szczury i myszy: zwalczanie, stacje deratyzacyjne, stałe umowy.",
    price: "indywidualna wycena",
    metaTitle: "Deratyzacja Ostrów Wielkopolski — szczury, myszy, stacje deratyzacyjne",
    metaDescription:
      "Zwalczanie szczurów i myszy, montaż i obsługa stacji deratyzacyjnych, stałe umowy dla gastronomii, magazynów i rolnictwa z dokumentacją dla HACCP i Sanepidu.",
    lead: "Zwalczamy szczury i myszy i zabezpieczamy obiekt, żeby nie wracały. Firmom prowadzimy stałą obsługę z dokumentacją potrzebną przy kontrolach.",
    scopeTitle: "Zakres deratyzacji",
    scope: [
      { title: "Szczury i myszy", text: "Domy, piwnice, budynki gospodarcze, magazyny i zakłady." },
      { title: "Stacje deratyzacyjne", text: "Montujemy je i regularnie obsługujemy." },
      { title: "Stała umowa dla firm", text: "Dla branży spożywczej, magazynów i rolnictwa, z dokumentacją dla HACCP i Sanepidu." },
      { title: "Monitoring fotopułapkami", text: "Sprawdzamy, którędy gryzonie wchodzą i ile ich jest." },
    ],
    faq: [
      {
        q: "Czy prowadzicie dokumentację dla Sanepidu?",
        a: "Tak. W stałej umowie przygotowujemy dokumentację dla HACCP i Sanepidu oraz raporty z przeglądów.",
      },
      ...dddCommonFaq,
    ],
  },
  {
    slug: "mycie-kostki-brukowej",
    group: "mycie",
    name: "Mycie kostki brukowej",
    short: "Podjazdy, chodniki, tarasy i place.",
    price: "od 8 zł/m²",
    metaTitle: "Mycie kostki brukowej Ostrów Wielkopolski — od 8 zł/m²",
    metaDescription:
      "Mycie ciśnieniowe i parowe kostki brukowej: podjazdy, chodniki, tarasy, place. Usuwamy mech, glony i zabrudzenia. Od 8 zł/m², bezpłatna wycena.",
    lead: "Myjemy podjazdy, chodniki, tarasy i place. Usuwamy mech, glony i wieloletni brud, a kostka odzyskuje kolor.",
    scopeTitle: "Jak myjemy",
    scope: [
      { title: "Myjka do 300 bar", text: "Spalinowa myjka ciśnieniowa z głowicą do powierzchni płaskich, która myje równo i nie chlapie na elewację." },
      { title: "Para do 110°C", text: "Osobny podgrzewacz wody. Gorąca woda i para radzą sobie z mchem i tłustymi plamami." },
      { title: "Domy i firmy", text: "Od ścieżki w ogrodzie po plac przed halą." },
    ],
    pairs: kostkaPairs,
    video: { src: "/media/hero.mp4", poster: "/media/hero.jpg", label: "Mycie płyt tarasowych głowicą do powierzchni płaskich" },
    faq: [
      {
        q: "Od czego zależy cena?",
        a: "Od powierzchni, stopnia zabrudzenia i dojazdu. Cena zaczyna się od 8 zł/m². Dokładną wycenę podajemy po zdjęciach lub oględzinach.",
      },
      {
        q: "Czy muszę być w domu podczas mycia?",
        a: "Nie, wystarczy dostęp do posesji i do wody. Szczegóły ustalamy przy wycenie.",
      },
    ],
  },
  {
    slug: "mycie-elewacji",
    group: "mycie",
    name: "Mycie elewacji",
    short: "Domy, budynki firmowe i hale.",
    price: "od 12 zł/m²",
    metaTitle: "Mycie elewacji Ostrów Wielkopolski — od 12 zł/m²",
    metaDescription:
      "Mycie elewacji domów, budynków i hal. Usuwamy glony, zacieki i brud. Mycie ciśnieniowe i parowe, od 12 zł/m². Ostrów Wlkp. i do 150 km.",
    lead: "Myjemy elewacje domów, budynków firmowych i hal. Usuwamy zielony nalot, zacieki i brud, który osiada na tynku latami.",
    scopeTitle: "Jak myjemy",
    scope: [
      { title: "Ciśnienie dobrane do tynku", text: "Inaczej myjemy tynk, inaczej płyty elewacyjne i blachę." },
      { title: "Para do 110°C", text: "Gorąca woda i para usuwają glony i grzyby." },
      { title: "Domy, budynki, hale", text: "Pracujemy dla właścicieli domów, wspólnot i firm." },
    ],
    pairs: elewacjaPairs,
    faq: [
      {
        q: "Od czego zależy cena?",
        a: "Od powierzchni, wysokości budynku i rodzaju zabrudzeń. Cena zaczyna się od 12 zł/m².",
      },
      {
        q: "Czy mycie nie uszkodzi tynku?",
        a: "Ciśnienie i temperaturę dobieramy do rodzaju elewacji. Przed pracą oglądamy ścianę i mówimy, czego można się spodziewać.",
      },
    ],
  },
  {
    slug: "mycie-dachow",
    group: "mycie",
    name: "Mycie dachów",
    short: "Usuwanie mchu i glonów z dachówki i blachy.",
    price: "od 15 zł/m²",
    metaTitle: "Mycie dachów Ostrów Wielkopolski — usuwanie mchu, od 15 zł/m²",
    metaDescription:
      "Mycie dachów z dachówki i blachy: usuwamy mech, glony i porosty. Od 15 zł/m², bezpłatna wycena. Ostrów Wielkopolski i cała Wielkopolska.",
    lead: "Usuwamy mech, glony i porosty z dachów. Po myciu dachówka odzyskuje kolor, a woda znów swobodnie spływa do rynien.",
    scopeTitle: "Jak myjemy",
    scope: [
      { title: "Mech i glony", text: "Zmywamy je strumieniem pod ciśnieniem, dachówka po dachówce." },
      { title: "Dachówka i blacha", text: "Dachy skośne domów, budynków gospodarczych i firmowych." },
      { title: "Wycena po zdjęciach", text: "Wyślij zdjęcia dachu na WhatsApp, a podamy orientacyjną cenę." },
    ],
    video: { src: "/media/dach.mp4", poster: "/media/dach.jpg", label: "Mycie dachówki z bliska" },
    faq: [
      {
        q: "Od czego zależy cena?",
        a: "Od powierzchni dachu, jego nachylenia i ilości mchu. Cena zaczyna się od 15 zł/m².",
      },
    ],
  },
  {
    slug: "mycie-fotowoltaiki",
    group: "mycie",
    name: "Mycie paneli fotowoltaicznych",
    short: "Delikatne mycie paneli PV, także w abonamencie.",
    price: "od 10 zł/m²",
    metaTitle: "Mycie fotowoltaiki Ostrów Wielkopolski — panele PV od 10 zł/m²",
    metaDescription:
      "Delikatne mycie paneli fotowoltaicznych na domach, firmach i wspólnotach. Od 10 zł/m², abonament dla firm i wspólnot. Bezpłatna wycena.",
    lead: "Myjemy panele fotowoltaiczne z kurzu, pyłków i ptasich odchodów. Pracujemy delikatnie, żeby nie porysować szkła.",
    scopeTitle: "Jak myjemy",
    scope: [
      { title: "Delikatne mycie", text: "Bez szorowania twardymi szczotkami i bez agresywnej chemii." },
      { title: "Domy, firmy, wspólnoty", text: "Instalacje na dachach i na gruncie." },
      { title: "Abonament", text: "Dla firm i wspólnot: regularne mycie w ustalonych terminach." },
    ],
    faq: [
      {
        q: "Jak często myć panele?",
        a: "To zależy od otoczenia: przy drodze, polu lub w pobliżu drzew panele brudzą się szybciej. Firmom i wspólnotom proponujemy abonament z myciem w ustalonych terminach.",
      },
      {
        q: "Od czego zależy cena?",
        a: "Od powierzchni paneli i dostępu do nich. Cena zaczyna się od 10 zł/m².",
      },
    ],
  },
];

export const bySlug = (slug: string) => services.find((s) => s.slug === slug);
export const dddServices = services.filter((s) => s.group === "ddd" && s.slug !== "ddd");
export const washServices = services.filter((s) => s.group === "mycie");

export const priceList = [
  { name: "Mycie kostki brukowej", price: "od 8 zł/m²", href: "/uslugi/mycie-kostki-brukowej" },
  { name: "Mycie paneli fotowoltaicznych", price: "od 10 zł/m²", href: "/uslugi/mycie-fotowoltaiki" },
  { name: "Mycie elewacji", price: "od 12 zł/m²", href: "/uslugi/mycie-elewacji" },
  { name: "Mycie dachów", price: "od 15 zł/m²", href: "/uslugi/mycie-dachow" },
  { name: "Usługi DDD", price: "indywidualna wycena", href: "/uslugi/ddd" },
];

export const homeFaq: Faq[] = [
  {
    q: "Gdzie pracujecie?",
    a: "W Ostrowie Wielkopolskim i do 150 km od niego, między innymi w Kaliszu, Pleszewie, Jarocinie, Ostrzeszowie, Kępnie, Wieruszowie, Koninie, Poznaniu i Gnieźnie.",
  },
  {
    q: "Ile kosztuje wycena?",
    a: "Nic. Wycena jest bezpłatna i do niczego nie zobowiązuje.",
  },
  {
    q: "Jak najszybciej się z wami skontaktować?",
    a: "Przez WhatsApp. Zwykle odpowiadamy w ciągu 15 minut. Możesz też zadzwonić albo wysłać formularz. Pracujemy od poniedziałku do soboty, od 7:00 do 19:00.",
  },
  {
    q: "Czy wystawiacie fakturę VAT?",
    a: "Tak. Pracujemy dla domów i firm, wystawiamy fakturę VAT i mamy ubezpieczenie OC.",
  },
  {
    q: "Czym myjecie?",
    a: "Spalinową myjką ciśnieniową do 300 bar z osobnym podgrzewaczem wody. Para ma do 110°C.",
  },
];
