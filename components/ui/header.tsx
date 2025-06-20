import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import { auth } from "@/app/firebase/firebase";
import { doSignOut } from "@/app/firebase/auth";
import { redirect } from "next/navigation";
import { reload } from "firebase/auth";

export default function Header() {
  console.log(auth.currentUser);
  return (
    <header className="absolute top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              {/* <li className="px-3 py-1">
                <Link
                  href="/pricing"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li> */}
              <li className="px-3 py-1">
                <Link
                  href="/customers"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Customers
                </Link>
              </li>
              {/* <li className="px-3 py-1">
                <Link
                  href="/blog"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Blog
                </Link>
              </li> */}
              <li className="px-3 py-1">
                <Link
                  href="/documentation"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Docs
                </Link>
              </li>
              {/* 1st level: hover */}
              {/* <Dropdown title="Extra"> */}
              {/* 2nd level: hover */}
              {/* <li>
                  <Link
                    href="/support"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Support center
                  </Link>
                </li> */}
              {/* <li>
                  <Link
                    href="/apps"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Apps
                  </Link>
                </li> */}
              {/* </Dropdown> */}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {auth.currentUser === null ? (
              <>
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li
                onClick={() => {
                  doSignOut().then(() => {
                    redirect("/signin");
                  });
                }}
              >
                <button className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900">
                  SignOut
                </button>
              </li>
            )}
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
