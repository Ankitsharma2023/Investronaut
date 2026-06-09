export const metadata = {
  title: "Customers - Investronaut",
  description: "What founders say about Investronaut.",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";

export default function Customers() {
  return (
    <>
      <Hero />
      <WallOfLove />
    </>
  );
}
