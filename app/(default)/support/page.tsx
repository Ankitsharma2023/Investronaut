export const metadata = {
  title: "Support - Simple",
  description: "Page description",
};

import Hero from "./hero";
import Faqs from "@/components/faqs-02";
import Cta from "@/components/cta-alternative";

export default function Support() {
  return (
    <>
      <Hero />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Cannot find what you're looking for?"
        buttonText="Contact Us"
        buttonLink="#0"
      />
    </>
  );
}
