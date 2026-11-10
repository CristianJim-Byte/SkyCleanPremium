"use client";
import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "skyclean-cookies";

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; };
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };

export default function Consent() {
  // "loading" na serwerze i przy pierwszym renderze: okienko pojawia się dopiero w przeglądarce.
  const stored = useSyncExternalStore(subscribe, read, () => "loading");
  const choice = stored === "yes" || stored === "no" || stored === "loading" ? stored : null;
  const save = (v: "yes" | "no") => {
    try { localStorage.setItem(KEY, v); } catch {}
    listeners.forEach((l) => l());
  };
  // Bez analityki nie ma o co pytać.
  if (!GA) return null;
  return (
    <>
      {choice === "yes" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {choice === null && (
        <div role="dialog" aria-label="Pliki cookie" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-xl bg-carbon p-5 text-white shadow-2xl">
          <p className="text-sm text-white/85">
            Używamy plików cookie Google Analytics, żeby wiedzieć, jak odwiedzający korzystają ze strony. Włączymy je tylko za Twoją zgodą. Szczegóły: <Link href="/polityka-prywatnosci" className="underline">polityka prywatności</Link>.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="btn btn-green !min-h-11" onClick={() => save("yes")}>Zgadzam się</button>
            <button className="btn btn-ghost !min-h-11" onClick={() => save("no")}>Nie zgadzam się</button>
          </div>
        </div>
      )}
    </>
  );
}
