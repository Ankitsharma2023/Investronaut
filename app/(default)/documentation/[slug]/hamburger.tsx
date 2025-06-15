"use client";

import { useDocumentationProvider } from "./documentation-provider";

export default function Hamburger() {
  const { sidebarOpen, setSidebarOpen } = useDocumentationProvider();

  return (
    <button
      className="group inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-center shadow-sm transition hover:bg-gray-50"
      aria-controls="sidebar"
      aria-expanded={sidebarOpen}
      onClick={() => setSidebarOpen((prevState) => !prevState)}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="pointer-events-none fill-current"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0 group-aria-expanded:translate-x-0"
          y={7}
          width={9}
          height={2}
          rx={1}
        />
        <rect
          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
          y={7}
          width={16}
          height={2}
          rx={1}
        />
        <rect
          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
          y={7}
          width={9}
          height={2}
          rx={1}
        />
      </svg>
    </button>
  );
}
