import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-carbon text-white">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" aria-label="SkyClean — strona główna">
          <Logo />
        </Link>
        <nav aria-label="Główna" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[0.95rem] font-medium text-white/85 hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn btn-green !min-h-11 !px-4 text-[0.95rem]">
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Zadzwoń</span>
          </a>
          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30" aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Mobilna" className="absolute right-0 top-[3.4rem] w-64 rounded-xl border border-white/10 bg-carbon-2 p-2 shadow-2xl">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="block rounded-lg px-4 py-3 text-base font-medium hover:bg-white/10">
                  {n.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
