import { faqs } from "../data/site";
import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section px-4">
      <div className="container max-w-3xl">
        <h2 className="section-title">FAQ</h2>
        <div className="mt-6 divide-y divide-gray-200 border rounded-xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <details
                key={f.q}
                open={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(isOpen ? null : i);
                }}
              >
                <summary className="cursor-pointer list-none p-5 font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <span aria-hidden="true">{isOpen ? "–" : "+"}</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">{f.a}</div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
