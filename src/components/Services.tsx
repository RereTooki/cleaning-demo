import React from "react";
import { services } from "../data/site";

const Services = () => {
  return (
    <section id="services" className="section px-4">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="section-title">Our Services</h2>
          <p className="muted mt-3">
            Flexible one-off or recurring plans, tailored to your space.
          </p>
        </div>

        <div
          className="
            mt-10 
            grid gap-6 
            vsm:grid-cols-1 
            md:grid-cols-1 
            xmd:grid-cols-2 
            lg:grid-cols-3
          "
        >
          {services.map((s) => (
            <article
              key={s.title}
              className="card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={s.img}
                alt={s.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="muted mt-2">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href="#contact" className="btn-primary">
                    Book
                  </a>
                  <a href="#contact" className="btn-outline">
                    Request Quote
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
