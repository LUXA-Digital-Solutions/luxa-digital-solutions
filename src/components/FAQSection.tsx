import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  initialOpen?: number | null;
  className?: string;
};

const FAQSection = ({
  items,
  title = "FAQ",
  subtitle = "Helping you understand our process and offerings. If you don't see your question, send it via the form above.",
  initialOpen = null,
  className = "",
}: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-300">
              {title}
            </div>
            <h2 className="text-5xl font-extrabold leading-tight text-[#071a29]">
              {subtitle}
            </h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-6">
              {items.map((item, i) => (
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
  );
};

export default FAQSection;
