"use client";

import useMasonry from "@/utils/useMasonry";
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
import TestimonialImg10 from "@/public/images/testimonial-10.jpg";
import TestimonialImg11 from "@/public/images/testimonial-11.jpg";
import TestimonialImg12 from "@/public/images/testimonial-12.jpg";
import TestimonialImg13 from "@/public/images/testimonial-13.jpg";
import TestimonialImg14 from "@/public/images/testimonial-14.jpg";
import TestimonialImg15 from "@/public/images/testimonial-15.jpg";
import TestimonialImg16 from "@/public/images/testimonial-16.jpg";
import TestimonialImg17 from "@/public/images/testimonial-17.jpg";
import TestimonialImg18 from "@/public/images/testimonial-18.jpg";
import TestimonialImg19 from "@/public/images/testimonial-19.jpg";
import TestimonialImg20 from "@/public/images/testimonial-20.jpg";
import TestimonialImg21 from "@/public/images/testimonial-21.jpg";
import TestimonialImg22 from "@/public/images/testimonial-22.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Aarav Mehta",
    username: "@aaravbuilds",
    date: "May 19, 2025",
    content:
      "Investronaut matched my SaaS startup with three investors who actually understood our space. Two of them replied within a week.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg02,
    name: "Priya Sharma",
    username: "@priya_s",
    date: "May 12, 2025",
    content:
      "I wasted months cold-emailing VCs. Investronaut handed me a ranked shortlist that actually fit our stage and sector.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg03,
    name: "Rohan Gupta",
    date: "Apr 28, 2025",
    content:
      "As a first-time founder I had zero investor network. Investronaut's matches opened doors I didn't even know existed.",
    rating: 5,
    channel: "Google",
  },
  {
    img: TestimonialImg04,
    name: "Aditya Nair",
    username: "@aditya_n",
    date: "Apr 12, 2025",
    content:
      "The AI matching is scarily good — it understood our fintech niche and surfaced funds I'd never heard of.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg05,
    name: "Vikram Reddy",
    username: "@vikram_r",
    date: "Mar 30, 2025",
    content:
      "We closed our pre-seed with an investor Investronaut ranked #1 for us. We'd never have found them otherwise.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg06,
    name: "Sneha Iyer",
    username: "@sneha_iyer",
    date: "Mar 18, 2025",
    content:
      "Finally a tool that gets Indian early-stage founders. The matches were relevant from day one.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg07,
    name: "Karan Singh",
    username: "@karan_s",
    date: "Mar 08, 2025",
    content:
      "Investronaut turned weeks of research into a two-minute search. The reasoning behind each match is gold.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg08,
    name: "Ananya Rao",
    date: "Feb 25, 2025",
    content:
      "We're a Tier-2 city team and still got matched with global investors. This genuinely levels the playing field.",
    rating: 5,
    channel: "Google",
  },
  {
    img: TestimonialImg09,
    name: "Siddharth Jain",
    username: "@sid_jain",
    date: "Feb 12, 2025",
    content:
      "The 'Reason' on each investor told me exactly why they fit — saved me from pitching the wrong people.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg12,
    name: "Neha Kapoor",
    username: "@neha_k",
    date: "Jan 29, 2025",
    content:
      "From idea to a list of relevant angels in minutes. Investronaut is now step one of every raise we plan.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg13,
    name: "Arjun Desai",
    username: "@arjun_d",
    date: "Jan 15, 2025",
    content:
      "Discovered a healthtech-focused fund through Investronaut that ended up leading our round. Unreal.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg11,
    name: "Ishaan Verma",
    username: "@ishaan_v",
    date: "Jan 06, 2025",
    content:
      "Clean, fast, and the matches actually reply. For an early founder that's the whole game.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg15,
    name: "Meera Pillai",
    date: "Dec 22, 2024",
    content:
      "I love that it asks the right questions before matching — stage, geography, cheque size. Really smart.",
    rating: 5,
    channel: "Google",
  },
  {
    img: TestimonialImg10,
    name: "Rahul Bose",
    username: "@rahul_b",
    date: "Dec 10, 2024",
    content:
      "Investronaut understood our agritech model better than half the investors we'd already met.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg14,
    name: "Tara Menon",
    username: "@tara_m",
    date: "Nov 28, 2024",
    content:
      "Found our lead investor here. The whole process felt less like cold outreach and more like warm intros.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg16,
    name: "Dev Malhotra",
    username: "@dev_m",
    date: "Nov 14, 2024",
    content:
      "As a solo founder this was a lifeline — a curated investor list without an expensive network.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg17,
    name: "Kavya Nanda",
    date: "Nov 02, 2024",
    content:
      "The matches are specific, not generic. It clearly reads the nuance of your pitch.",
    rating: 5,
    channel: "Google",
  },
  {
    img: TestimonialImg18,
    name: "Aditi Sharma",
    username: "@aditi_s",
    date: "Oct 20, 2024",
    content:
      "We refined our pitch using the gaps Investronaut flagged, and the matches got even sharper.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg19,
    name: "Nikhil Joshi",
    username: "@nikhil_j",
    date: "Oct 08, 2024",
    content:
      "Best part: I can keep loading more matches until I find the right fit. No dead ends.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg21,
    name: "Pooja Hegde",
    username: "@pooja_h",
    date: "Sep 26, 2024",
    content:
      "Investronaut connected us with an impact investor perfectly aligned with our edtech mission.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg22,
    name: "Manish Agarwal",
    username: "@manish_a",
    date: "Sep 14, 2024",
    content:
      "Switched from spreadsheets of random VCs to Investronaut's ranked matches. Night and day.",
    channel: "Twitter",
  },
  {
    img: TestimonialImg20,
    name: "Ritu Saxena",
    username: "@ritu_s",
    date: "Sep 02, 2024",
    content:
      "Affordable, fast, and the matches are relevant. Can't recommend it enough to fellow founders.",
    channel: "Twitter",
  },
];

export default function WallOfLove() {
  const masonryContainer = useMasonry();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Testimonials grid */}
          <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial
                  testimonial={testimonial}
                  className="w-full rotate-0 md:group-odd:!-rotate-1 md:group-even:!rotate-1"
                >
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
