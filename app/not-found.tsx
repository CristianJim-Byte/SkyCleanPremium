import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell py-28">
      <h1 className="display text-5xl text-carbon">Nie ma takiej strony</h1>
      <p className="mt-5 text-lg text-muted">Adres mógł się zmienić. Wróć na stronę główną albo przejdź do usług.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-green">Strona główna</Link>
        <Link href="/uslugi/ddd" className="btn btn-outline">Usługi DDD</Link>
      </div>
    </section>
  );
}
