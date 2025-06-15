import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: "Peter Lowe",
      username: "@peterlowex",
      date: "May 19, 2025",
      content:"Finding the right investor felt like a shot in the dark—until we joined FoundrLink. Within weeks, we had 3 serious conversations with investors who actually understood our space.",
       channel: "Twitter",
    },
    {
      img: TestimonialImg02,
      name: "Rodri Alba",
      username: "@rodri_spn",
      date: "Apr 12, 2025",
      content:"The intelligent matching system saved us months of networking. We connected with the perfect mentor-investor hybrid in our second week on the platform.",
            channel: "Twitter",
    },
    {
      img: TestimonialImg03,
      name: "Michele Lex",
      username: "@MikyBrown",
      date: "Mar 04, 2025",
      content: "We raised our first pre-seed round through this website.The platform made it easy to discover aligned investors and showcase our traction in one place.",
            channel: "Twitter",
    },
    {
      img: TestimonialImg04,
      name: "Michael Ross",
      username: "@michjack",
      date: "Jan 15, 2025",
      content:"We discovered investors from Europe and Southeast Asia who were genuinely interested in our product. This kind of global access is exactly what early-stage startups need.",
      channel: "Twitter",
    },
    {
      img: TestimonialImg05,
      name: "Mike Bryan",
      username: "@mike0point7",
      date: "Dec 02, 2024",
      content: "What impressed us most was the intelligent matching. Within days, we were speaking with investors we’d never reach on our own.",
            channel: "Twitter",
    },
    {
      img: TestimonialImg06,
      name: "Sarah Rodriguez",
      username: "@sararodriguez",
      date: "Nov 11, 2024",
      content:"The platform made the fundraising journey feel less like a grind. It gave us visibility across borders and credibility with serious investors.",
      channel: "Twitter",
    },
    {
      img: TestimonialImg07,
      name: "Duncan Mitch",
      username: "@lovingme_",
      date: "Oct 23, 2024",
      content:
"We’re a team from a Tier-2 city and still got access to global investors. This platform truly levels the playing field for underdog founders.",      channel: "Twitter",
    },
    {
      img: TestimonialImg08,
      name: "Kavisha Mills",
      username: "@kavigirl99",
      date: "Sep 30, 2024",
      content:
"The investor discovery process was so smooth—we didn’t waste time pitching to the wrong people. Everything felt curated and intentional." ,     channel: "Twitter",
    },
    {
      img: TestimonialImg09,
      name: "Dante Luzzi",
      username: "@dante1987",
      date: "feb 17, 2025",
      content:
"We got feedback from an investor in Singapore and a mentor from Berlin—all within a week of signing up. That kind of exposure is game-changing." ,     channel: "Twitter",
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-linear-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Top startups love Investronaut
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
