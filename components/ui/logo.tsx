import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Investronaut">
      <Image
        src="/images/logo-10.png" 
        alt="Investronaut Logo"
        width={30}
        height={30}
        priority
      />
    </Link>
  );
}
