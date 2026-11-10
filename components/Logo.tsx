import Image from "next/image";

export default function Logo({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const h = size === "lg" ? 64 : 44;
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src={tone === "dark" ? "/brand/emblem-dark.png" : "/brand/emblem-light.png"}
        alt=""
        width={Math.round((h * 333) / 480)}
        height={h}
        priority
      />
      <span className="flex flex-col leading-none">
        <span className={`display ${size === "lg" ? "text-3xl" : "text-[1.35rem]"}`} style={{ letterSpacing: "0.01em" }}>
          <span className="text-green">SKY</span>
          <span className={tone === "dark" ? "text-white" : "text-carbon"}>CLEAN</span>
        </span>
        <span className={`mt-1 text-green ${size === "lg" ? "text-xs" : "text-[0.56rem]"}`} style={{ letterSpacing: "0.3em" }}>
          CLEAN • PROTECT • DDD
        </span>
      </span>
    </span>
  );
}
