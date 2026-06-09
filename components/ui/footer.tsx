import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* Brand */}
          <div className="space-y-2">
            <Logo />
            <p className="max-w-xs text-sm text-gray-600">
              AI-powered matchmaking that connects founders with the investors
              most likely to fund them.
            </p>
            <p className="text-sm text-gray-500">
              &copy; 2026 Investronaut. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 transition hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/customers"
              className="text-gray-600 transition hover:text-gray-900"
            >
              Customers
            </Link>
            <Link
              href="/documentation"
              className="text-gray-600 transition hover:text-gray-900"
            >
              Docs
            </Link>
            <Link
              href="/signin"
              className="text-gray-600 transition hover:text-gray-900"
            >
              Sign in
            </Link>
          </nav>

          {/* Social */}
          <ul className="flex gap-3">
            <li>
              <Link
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition hover:bg-gray-200 hover:text-gray-900"
                href="https://x.com/AnkitSharma0866"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition hover:bg-gray-200 hover:text-gray-900"
                href="https://www.linkedin.com/in/ankitkumar8708/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.4 23h3.3V12.4H8.4V23zm1.6-12.1c1.1 0 1.8-.7 1.8-1.6 0-.9-.7-1.6-1.7-1.6S8.3 8.4 8.3 9.3c0 .9.7 1.6 1.7 1.6zM23.6 23v-6.1c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6v-1.4h-3.3c0 .9 0 10.6 0 10.6h3.3v-5.9c0-.3 0-.6.1-.8.2-.6.8-1.2 1.7-1.2 1.2 0 1.7.9 1.7 2.3V23h3.1z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition hover:bg-gray-200 hover:text-gray-900"
                href="https://github.com/Ankitsharma2023"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
