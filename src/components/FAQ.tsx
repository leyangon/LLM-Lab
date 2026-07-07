import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { getFaqs } from "../data/faq";
import { useLanguage } from "../i18n/LanguageProvider";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language, t } = useLanguage();
  const faqs = getFaqs(language);

  return (
    <section id="faq" className="section-wrap">
      <SectionHeader
        eyebrow="FAQ"
        title={t("faq.title")}
        description={t("faq.description")}
      />
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <article key={faq.question} className="glass-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300"
                aria-expanded={open}
              >
                <span className="font-display text-base font-black text-white sm:text-lg">{faq.question}</span>
                <ChevronDown
                  className={`shrink-0 text-cyan-200 transition ${open ? "rotate-180" : ""}`}
                  size={20}
                  aria-hidden="true"
                />
              </button>
              {open ? (
                <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-slate-300">
                  {faq.answer}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
