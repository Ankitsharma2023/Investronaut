import AppCard from "@/components/app-card";
import IntegrationImg01 from "@/public/images/integration-01.svg";
import IntegrationImg02 from "@/public/images/integration-02.svg";
import IntegrationImg03 from "@/public/images/integration-03.svg";
import IntegrationImg04 from "@/public/images/integration-04.svg";
import IntegrationImg05 from "@/public/images/integration-05.svg";
import IntegrationImg06 from "@/public/images/integration-06.svg";
import IntegrationImg07 from "@/public/images/integration-07.svg";
import IntegrationImg08 from "@/public/images/integration-08.svg";
import IntegrationImg09 from "@/public/images/integration-09.svg";
import IntegrationImg10 from "@/public/images/integration-10.svg";
import IntegrationImg11 from "@/public/images/integration-11.svg";
import IntegrationImg12 from "@/public/images/integration-12.svg";
import IntegrationImg13 from "@/public/images/integration-13.svg";
import IntegrationImg14 from "@/public/images/integration-14.svg";
import IntegrationImg15 from "@/public/images/integration-15.svg";
import IntegrationImg16 from "@/public/images/integration-16.svg";
import IntegrationImg17 from "@/public/images/integration-17.svg";
import IntegrationImg18 from "@/public/images/integration-18.svg";
import IntegrationImg19 from "@/public/images/integration-19.svg";
import IntegrationImg20 from "@/public/images/integration-20.svg";
import IntegrationImg21 from "@/public/images/integration-21.svg";

export default function AppList() {
  const apps01 = [
    {
      name: "Google Drive",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg01,
      link: "#0",
      badge: true,
    },
    {
      name: "Linear",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg02,
      link: "#0",
    },
    {
      name: "Framer",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg03,
      link: "#0",
      badge: true,
    },
    {
      name: "Retool",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg04,
      link: "#0",
    },
    {
      name: "Webflow",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg05,
      link: "#0",
      badge: true,
    },
    {
      name: "Syrus Inc.",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg06,
      link: "#0",
    },
    {
      name: "Decipad",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg07,
      link: "#0",
    },
    {
      name: "Zapier",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg08,
      link: "#0",
      badge: true,
    },
    {
      name: "Bonsai",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg09,
      link: "#0",
      badge: true,
    },
    {
      name: "GitHub",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg10,
      link: "#0",
      badge: true,
    },
    {
      name: "Poppins",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg11,
      link: "#0",
    },
    {
      name: "Jotform",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg12,
      link: "#0",
    },
  ];

  const apps02 = [
    {
      name: "Miro",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg13,
      link: "#0",
      badge: true,
    },
    {
      name: "WeTransfer",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg14,
      link: "#0",
    },
    {
      name: "Hotjar",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg15,
      link: "#0",
    },
    {
      name: "GitLab",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg16,
      link: "#0",
      badge: true,
    },
    {
      name: "Coda",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg17,
      link: "#0",
      badge: true,
    },
    {
      name: "Airtable",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg18,
      link: "#0",
    },
  ];

  const apps03 = [
    {
      name: "Klarna",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg19,
      link: "#0",
    },
    {
      name: "Trustpilot",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg20,
      link: "#0",
    },
    {
      name: "YouTube",
      description:
        "Simple simplifies the process of building sites, landing pages, and any apps.",
      image: IntegrationImg21,
      link: "#0",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Categories */}
          <div className="pb-12 md:pb-20">
            <div className="flex flex-wrap justify-center gap-2">
              <button className="btn-sm bg-gray-800 font-normal text-gray-200 shadow-sm hover:bg-gray-900">
                <svg
                  className="mr-2 fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M6.669.715a1 1 0 0 1-.673 1.244 6.014 6.014 0 0 0-4.037 4.037 1 1 0 0 1-1.917-.571A8.014 8.014 0 0 1 5.425.042a1 1 0 0 1 1.244.673ZM7.71 4.71a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM9.996.042a1 1 0 1 0-.57 1.917 6.014 6.014 0 0 1 4.037 4.037 1 1 0 0 0 1.917-.571A8.015 8.015 0 0 0 9.996.042Zm4.71 8.71a1 1 0 0 1 .674 1.243 8.015 8.015 0 0 1-5.384 5.384 1 1 0 0 1-.57-1.917 6.014 6.014 0 0 0 4.037-4.037 1 1 0 0 1 1.243-.673ZM1.96 9.425a1 1 0 1 0-1.917.57 8.014 8.014 0 0 0 5.383 5.384 1 1 0 0 0 .57-1.917A6.014 6.014 0 0 1 1.96 9.425Z" />
                </svg>
                All
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H3Z" />
                </svg>
                Layout &amp; Design
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                </svg>
                Productivity
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M0 6a6 6 0 0 1 6-6c1.077 0 2.062.304 2.912.78a1 1 0 1 1-.976 1.745A3.945 3.945 0 0 0 6 2a4 4 0 0 0-4 4c0 .693.194 1.344.525 1.936a1 1 0 1 1-1.746.976A5.944 5.944 0 0 1 0 6Z" />
                  <path d="M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
                </svg>
                Effects
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H2Z" />
                </svg>
                Domains
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                </svg>
                Commerce
              </button>
            </div>
          </div>

          <div className="space-y-10">
            {/* Section #1 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">Noteworthy</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps01.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #2 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">Trending</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps02.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #3 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">Coming soon</h2>
                <a
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="#0"
                >
                  View All
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {apps03.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Load more */}
          <div className="mt-12 text-center">
            <button className="btn-sm min-w-[220px] bg-gray-800 py-1.5 text-gray-200 shadow-sm hover:bg-gray-900">
              Load more{" "}
              <span className="ml-2 tracking-normal text-gray-500">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
