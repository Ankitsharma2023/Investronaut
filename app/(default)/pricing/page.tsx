export const metadata = {
  title: "Pricing - Simple",
  description: "Page description",
};

import PricingTables from "@/components/pricing-tables";
import ComparePlans from "@/components/compare-plans";
import TestimonialsGrid from "@/components/testimonials-grid";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta-alternative";

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <ComparePlans />
      <TestimonialsGrid />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />
    </>
  );
}
