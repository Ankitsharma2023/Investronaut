import "./css/style.css";

import { Inter } from "next/font/google";
import { AuthProvider } from "@/app/contexts/authcontexts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Investronaut — AI Startup–Investor Matchmaking",
  description:
    "Investronaut uses AI to match early-stage startups with the investors most likely to fund them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <AuthProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
