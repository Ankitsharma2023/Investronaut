"use client";

import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

type DropdownProps = {
  children: React.ReactNode;
  title: string;
};

export default function Dropdown({ children, title }: DropdownProps) {
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleFocusOut = (e: React.FocusEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  return (
    <li
      className="relative flex items-center gap-0.5 px-3 py-1"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <span className="flex cursor-pointer items-center text-gray-700 transition hover:text-gray-900">
        {title}
      </span>
      <button
        className="shrink-0 p-1"
        aria-expanded={dropdownOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Show submenu for "{title}"</span>
        <svg
          className="fill-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
        >
          <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
        </svg>
      </button>
      <Transition
        ref={dropdownRef}
        show={dropdownOpen}
        as="ul"
        className="absolute left-0 top-full w-36 origin-top-left rounded-xl border border-gray-100 bg-white p-2 shadow-lg shadow-black/[0.03] transform transition ease-out data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        onBlur={handleFocusOut}
      >
        {children}
      </Transition>
    </li>
  );
}
