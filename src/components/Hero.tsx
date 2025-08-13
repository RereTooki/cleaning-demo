import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-50 flex items-center px-4"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Professional Cleaning Services in Lagos
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Experience spotless results with our trusted residential and
            commercial cleaning solutions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-brand text-white px-6 py-3 rounded-lg shadow hover:bg-brand-600">
              Book a Service
            </button>
            <button className="border border-brand text-brand px-6 py-3 rounded-lg hover:bg-brand-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/img/hero-clean.jpg"
            alt="Cleaning"
            className="rounded-lg shadow-lg max-h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
