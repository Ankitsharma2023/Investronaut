"use client";

import { useState, Fragment } from "react";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";

type Brand = { name: string; src: string };

// Recognizable Indian startups and well-known investors. Logos are bundled
// locally in /public/logos (no runtime network calls); a text fallback shows
// if an image is missing.
const STARTUPS: Brand[] = [
  { name: "Zerodha", src: "/logos/zerodha.png" },
  { name: "Razorpay", src: "/logos/razorpay.png" },
  { name: "Blinkit", src: "/logos/blinkit.png" },
  { name: "Swiggy", src: "/logos/swiggy.png" },
  { name: "Meesho", src: "/logos/meesho.png" },
  { name: "Zepto", src: "/logos/zepto.png" },
  { name: "CRED", src: "/logos/cred.png" },
  { name: "Groww", src: "/logos/groww.png" },
];
const INVESTORS: Brand[] = [
  { name: "Sequoia", src: "/logos/sequoia.png" },
  { name: "Elevation", src: "/logos/elevation.png" },
  { name: "Accel", src: "/logos/accel.png" },
  { name: "Blume", src: "/logos/blume.png" },
  { name: "Nexus", src: "/logos/nexus.png" },
  { name: "Matrix", src: "/logos/matrix.png" },
  { name: "Y Combinator", src: "/logos/ycombinator.png" },
  { name: "Tiger Global", src: "/logos/tigerglobal.png" },
];

// 8 orbit slots: position, size, and animation delay.
const SLOTS = [
  { pos: "-translate-x-[136px]", size: "h-16 w-16", delay: "3s" },
  { pos: "translate-x-[136px]", size: "h-16 w-16", delay: "3.5s" },
  { pos: "-translate-x-[216px] -translate-y-[82px]", size: "h-20 w-20", delay: "3.5s" },
  { pos: "-translate-y-[82px] translate-x-[216px]", size: "h-20 w-20", delay: "1.5s" },
  { pos: "translate-x-[216px] translate-y-[82px]", size: "h-20 w-20", delay: "2s" },
  { pos: "-translate-x-[216px] translate-y-[82px]", size: "h-20 w-20", delay: "2.5s" },
  { pos: "-translate-x-[292px] opacity-40", size: "h-12 w-12", delay: "2s" },
  { pos: "translate-x-[292px] opacity-40", size: "h-12 w-12", delay: "4s" },
];

function LogoBadge({ brand, size }: { brand: Brand; size: string }) {
  const [dead, setDead] = useState(false);
  return (
    <div
      className={`flex ${size} items-center justify-center rounded-full bg-white p-3 shadow-lg shadow-black/[0.04]`}
    >
      {dead ? (
        <span className="text-center text-[10px] font-semibold text-gray-800">
          {brand.name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.src}
          alt={brand.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          onError={() => setDead(true)}
        />
      )}
    </div>
  );
}

function Orbit({ items, show }: { items: Brand[]; show: boolean }) {
  return (
    <TabPanel as={Fragment} static={true}>
      <Transition
        as="div"
        show={show}
        className="flex h-full w-full transform items-center justify-center transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:scale-90 data-leave:duration-300 data-leave:data-closed:scale-125"
        unmount={false}
        appear={true}
      >
        <>
          {items.map((brand, i) => {
            const slot = SLOTS[i];
            return (
              <div key={brand.name} className={`absolute ${slot.pos}`}>
                <div
                  className="animate-[breath_7s_ease-in-out_infinite_both]"
                  style={{ animationDelay: slot.delay }}
                >
                  <LogoBadge brand={brand} size={slot.size} />
                </div>
              </div>
            );
          })}
        </>
      </Transition>
    </TabPanel>
  );
}

export default function BusinessCategories() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabBtn = (active: boolean) =>
    `flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-hidden ${
      active ? "bg-gray-800 text-gray-200" : "text-gray-700"
    }`;

  return (
    <section className="mt-10 md:mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
          {/* Toggle */}
          <div className="flex justify-center">
            <TabList className="relative mb-8 inline-flex justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] min-[480px]:mb-12">
              <Tab as={Fragment}>
                <button className={tabBtn(selectedTab === 0)}>
                  <svg
                    className={`fill-current ${selectedTab === 0 ? "text-gray-400" : "text-gray-500"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                  </svg>
                  <span>Startups</span>
                </button>
              </Tab>
              <Tab as={Fragment}>
                <button className={tabBtn(selectedTab === 1)}>
                  <svg
                    className={`fill-current ${selectedTab === 1 ? "text-gray-400" : "text-gray-500"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M.06 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 1 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331A2.162 2.162 0 0 1 .06 10.003Zm7.855-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33a.172.172 0 0 0 .17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.084 2.023a.172.172 0 0 0-.17-.001h.001ZM9.075.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.924.285a2.173 2.173 0 0 1 2.15 0h.001Z" />
                  </svg>
                  <span>Investors</span>
                </button>
              </Tab>
            </TabList>
          </div>

          {/* Orbit */}
          <TabPanels className="relative flex h-[324px] items-center justify-center">
            {/* Decorative lines */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-blue-500"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-blue-500"></div>
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-linear-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-linear-to-t from-gray-200 to-transparent mix-blend-multiply"></div>

            {/* Center: Investronaut mark (white) */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-200 bg-white font-mono text-2xl font-bold text-blue-600 shadow-lg shadow-black/[0.04]">
                  ❯_
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <Orbit items={STARTUPS} show={selectedTab === 0} />
              <Orbit items={INVESTORS} show={selectedTab === 1} />
            </div>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}
