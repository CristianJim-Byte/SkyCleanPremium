import { site } from "./site";

/** Dane właściciela strony do stron prawnych. Pola bez danych są pomijane. */
export function OwnerLine() {
  const parts = [
    site.legalName || "SkyClean",
    site.address || site.city,
    site.nip && `NIP ${site.nip}`,
    site.krs && `KRS ${site.krs}`,
    site.regon && `REGON ${site.regon}`,
  ].filter(Boolean);
  return <>{parts.join(", ")}</>;
}
