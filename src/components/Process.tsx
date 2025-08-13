import React from "react";
import { steps } from "../data/site";

const Process = () => {
  return (
    <section id="process" className="section bg-gray-50 px-4">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="section-title">How It Works</h2>
          <p className="muted mt-3">
            Simple, transparent and on-time—every time.
          </p>
        </div>

        <ol
          className="
            mt-10 grid gap-6
            vsm:grid-cols-1
            xmd:grid-cols-2
            lg:grid-cols-4
          "
        >
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-semibold">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="muted mt-2">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
