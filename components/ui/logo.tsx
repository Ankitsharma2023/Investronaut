import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center font-mono text-lg font-bold tracking-tight text-gray-900"
      aria-label="Investronaut"
    >
      <span className="mr-1.5 text-blue-600">❯</span>
      <span>investronaut</span>
      <span
        className="ml-[3px] inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-blue-600 animate-blink"
        aria-hidden="true"
      ></span>
    </Link>
  );
}
