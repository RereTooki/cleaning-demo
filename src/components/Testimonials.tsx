import React from "react";
import { quotes } from "../data/site";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-gray-50 px-4">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="section-title">What Clients Say</h2>
          <p className="muted mt-3">
            Real feedback from Lagos homes & offices.
          </p>
        </div>

        <div
          className="
            mt-10 grid gap-6
            vsm:grid-cols-1
            xmd:grid-cols-2
            lg:grid-cols-3
          "
        >
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <blockquote className="italic">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-700 font-medium">
                {q.name} — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
