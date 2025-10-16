import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Box, Crown, Minus, Plus, Users, Zap } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Which services are included in your plans?",
      a: "Our offerings match the Services section on the home page: Websites & Landing Pages, Custom Dashboards, Software Development, Mobile Apps, Search Engine Optimization, and Content Marketing. Plans bundle these capabilities depending on scope and goals.",
    },
    {
      q: "Can you build mobile apps and custom software?",
      a: "Yes — we build native and cross-platform mobile apps and full-stack custom software, including APIs, integrations, and dashboards to manage your business data.",
    },
    {
      q: "Do you provide SEO and content strategy?",
      a: "Absolutely — we deliver technical SEO, on-page optimization, keyword research, and content marketing to attract and retain organic traffic and improve conversions.",
    },
    {
      q: "How long does a typical project take?",
      a: "Timelines vary by scope: websites & landing pages typically take 2–6 weeks; dashboards and complex web apps 6–12 weeks; mobile apps and enterprise software 8+ weeks. We provide a detailed estimate after discovery.",
    },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO: dark top band with decorative curve */}
      <header className="relative overflow-hidden bg-[#071a29] text-white">
        <div className="container mx-auto px-6 py-28 text-center">
          <div className="mb-4 text-sm font-semibold tracking-widest text-[#f7ff66]">
            PRICING
          </div>
          <h1 className="mx-auto max-w-4xl text-6xl font-extrabold leading-tight md:text-8xl">
            PRICING PLANS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Experience growth through innovative digital marketing designed to
            deliver results.
          </p>
        </div>

        {/* decorative curved cutout */}
        <div className="pointer-events-none absolute -bottom-6 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="block h-12 w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C300,60 900,60 1200,0 L1200,60 L0,60 Z"
              fill="#071a29"
            />
            <path
              d="M0,60 C300,0 900,0 1200,60 L1200,0 L0,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </header>

      {/* Intro heading */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight text-[#071a29]">
            AFFORDABLE PRICING PLANS FOR{" "}
            <span className="text-gray-400">ALL YOUR</span>
            <br /> DIGITAL MARKETING SERVICES
          </h2>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-28">
        <div className="container mx-auto space-y-12 px-6">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {/* Starter Plan */}
            <div className="relative overflow-hidden rounded-3xl bg-[#9f7aea] p-12 text-white">
              <div className="absolute -left-6 bottom-8 h-24 w-24 rotate-12 transform rounded-full bg-white/20" />
              <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center">
                <div className="lg:w-1/3">
                  <h3 className="text-5xl font-extrabold">STARTER PLAN</h3>
                  <p className="mt-6 text-lg text-white/90">
                    Launch your digital presence quickly — ideal for early-stage
                    businesses.
                  </p>
                </div>

                <div className="lg:w-1/3">
                  <h4 className="mb-4 text-lg font-semibold">Includes</h4>
                  <ul className="space-y-3 text-white/90">
                    <li>Websites & Landing Pages (conversion-focused)</li>
                    <li>Basic SEO setup & analytics</li>
                    <li>Starter content package (pages + blog)</li>
                    <li>Monthly performance report</li>
                  </ul>
                </div>

                <div className="ml-auto flex flex-col items-end lg:w-1/3">
                  <div className="text-4xl font-extrabold">$499/MONTH</div>
                  <Button className="mt-6 rounded-full bg-white px-8 py-3 text-[#071a29]">
                    GET IN TOUCH
                  </Button>
                </div>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f7ff66] p-12 text-[#071a29]">
              <div className="absolute -right-6 top-8 h-24 w-24 -rotate-12 transform rounded-full bg-white/20" />
              <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center">
                <div className="relative lg:w-1/3">
                  <span className="absolute -top-4 left-0 inline-block rounded-full bg-[#ff8a42] px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                  <h3 className="text-5xl font-extrabold">GROWTH PLAN</h3>
                  <p className="mt-6 text-lg text-[#071a29]/80">
                    Scale with product features, mobile presence and data-driven
                    insights.
                  </p>
                </div>

                <div className="lg:w-1/3">
                  <h4 className="mb-4 text-lg font-semibold">Includes</h4>
                  <ul className="space-y-3">
                    <li>Mobile Apps (MVP) or advanced Websites</li>
                    <li>Custom Dashboards & BI integrations</li>
                    <li>Advanced SEO & content marketing</li>
                    <li>Bi-weekly performance reviews</li>
                  </ul>
                </div>

                <div className="ml-auto flex flex-col items-end lg:w-1/3">
                  <div className="text-4xl font-extrabold">$699/MONTH</div>
                  <Button className="mt-6 rounded-full bg-[#071a29] px-8 py-3 text-white">
                    GET IN TOUCH
                  </Button>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="relative overflow-hidden rounded-3xl bg-[#06b6d4] p-12 text-white">
              <div className="absolute -left-6 top-8 h-24 w-24 rotate-6 transform rounded-full bg-white/20" />
              <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center">
                <div className="lg:w-1/3">
                  <h3 className="text-5xl font-extrabold">PREMIUM PLAN</h3>
                  <p className="mt-6 text-lg text-white/90">
                    Enterprise-grade delivery and ongoing optimization for
                    market leaders.
                  </p>
                </div>

                <div className="lg:w-1/3">
                  <h4 className="mb-4 text-lg font-semibold">Includes</h4>
                  <ul className="space-y-3 text-white/90">
                    <li>Full Software Development & scalable architecture</li>
                    <li>Enterprise Mobile Apps (iOS & Android)</li>
                    <li>Comprehensive SEO + Content Strategy</li>
                    <li>
                      Custom Dashboards, Dedicated account manager, Ongoing
                      optimization
                    </li>
                  </ul>
                </div>

                <div className="ml-auto flex flex-col items-end lg:w-1/3">
                  <div className="text-4xl font-extrabold">$999/MONTH</div>
                  <Button className="mt-6 rounded-full bg-white px-8 py-3 text-[#071a29]">
                    GET IN TOUCH
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-300">
                ABOUT US
              </div>
              <h2 className="text-6xl font-extrabold leading-tight text-[#071a29]">
                OUR VALUES
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="mt-4 text-lg text-muted-foreground">
                Experience growth through innovative digital marketing designed
                to reach, inspire, and deliver results.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                    INNOVATION
                  </h4>
                  <p className="text-muted-foreground">
                    Staying ahead with cutting-edge strategies.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                  <Box className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                    TRANSPARENCY
                  </h4>
                  <p className="text-muted-foreground">
                    Building trust through open communication.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                  <Crown className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                    RESULTS-DRIVEN
                  </h4>
                  <p className="text-muted-foreground">
                    Focusing on measurable outcomes that matter.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                    COLLABORATION
                  </h4>
                  <p className="text-muted-foreground">
                    Partnering with clients for shared success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE: large purple block with badges */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-purple-300 p-16">
            {/* decorative pill badges */}
            <span className="absolute -top-4 left-8 inline-block rotate-6 transform rounded-full bg-[#ff8a42] px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Dynamic Visuals
            </span>

            <span className="absolute right-20 top-10 inline-block rotate-6 transform rounded-full bg-[#ff5a5a] px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Brand Strategy
            </span>

            <span className="absolute bottom-20 left-6 inline-block -rotate-6 transform rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Business Growth
            </span>

            <h2 className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight text-white md:text-6xl">
              REDEFINING DIGITAL IMPACT WITH INNOVATIVE STRATEGIES THAT DRIVE
              REAL RESULTS!
            </h2>

            <p className="absolute bottom-10 left-10 max-w-md text-white/90">
              Boost your website's visibility and attract organic traffic
            </p>

            {/* brand/mark on the right */}
            <div className="absolute bottom-6 right-8 opacity-95">
              <img src="/luxa.png" alt="Brand" className="h-12 w-auto" />
            </div>

            {/* decorative split-curve bottom */}
            <div className="pointer-events-none absolute -bottom-6 left-0 right-0 overflow-hidden">
              <svg
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
                className="block h-12 w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,60 C300,0 900,0 1200,60 L1200,60 L0,60 Z"
                  fill="#ffffff"
                />
                <path
                  d="M0,0 C300,60 900,60 1200,0 L1200,60 L0,60 Z"
                  fill="#9f7aea"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-300">
                FAQ
              </div>
              <h2 className="text-6xl font-extrabold leading-tight text-[#071a29]">
                YOUR QUESTIONS ANSWERED
              </h2>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Everything You Need to Know About LUXA, We have Answers to Your
                Questions About LUXA’s Services and Approach.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-6">
                {faqItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <button
                      onClick={() => toggle(i)}
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#071a29] text-white"
                      aria-expanded={openIndex === i}
                      aria-controls={`faq-${i}`}
                    >
                      {openIndex === i ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </button>

                    <div>
                      <h4 className="mb-2 text-xl font-extrabold tracking-wider text-[#071a29]">
                        {item.q}
                      </h4>
                      <div id={`faq-${i}`}>
                        {openIndex === i && (
                          <p className="text-muted-foreground">{item.a}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA CARD (DARK) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#071a29] p-20 text-white">
            <h2 className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight md:text-6xl">
              READY TO PARTNER WITH LUXA & UNLOCK THE FULL POTENTIAL?
            </h2>

            {/* decorative pills / stickers */}
            <span className="absolute left-12 top-12 inline-block rotate-6 transform rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-[#071a29] shadow-lg">
              Performance Metrics
            </span>

            <span className="absolute left-36 top-44 inline-block -rotate-6 transform rounded-full bg-[#ff5a5a] px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Brand Strategy
            </span>

            <span className="absolute right-36 top-56 inline-block transform rounded-full bg-[#ffd54f] px-4 py-2 text-sm font-semibold text-[#071a29] shadow-lg">
              Sticker Mockups
            </span>

            <div className="mt-12 flex justify-center">
              <Button className="rounded-full bg-white px-12 py-4 text-[#071a29]">
                GET IN TOUCH
              </Button>
            </div>

            {/* decorative rounded cutout on right */}
            <div className="pointer-events-none absolute -bottom-6 left-0 right-0 overflow-hidden">
              <svg
                viewBox="0 0 1200 80"
                preserveAspectRatio="none"
                className="block h-20 w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 L0,60 Q300,120 600,60 Q900,0 1200,60 L1200,0 Z"
                  fill="#071a29"
                />
                <path
                  d="M0,60 C300,0 900,0 1200,60 L1200,80 L0,80 Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
