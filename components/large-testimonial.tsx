import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
           
            <p className="text-2xl font-bold text-gray-900">
              “Empowering founders with intelligent matchmaking and{" "}
              <em className="italic text-gray-500">curated expert support</em>,
             to turn ideas into impact.”
            </p>
            {/* <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Mary Sullivan</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                CTO at Microsoft
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
