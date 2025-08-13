import React from "react";

const TrustBar = () => {
  return (
    <section
      aria-label="Trust indicators"
      className="py-6 border-y border-gray-100 bg-white"
    >
      <div className="container flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <img src="/img/brand1.svg" className="h-6 opacity-70" alt="Client 1" />
        <img src="/img/brand2.svg" className="h-6 opacity-70" alt="Client 2" />
        <img src="/img/brand3.svg" className="h-6 opacity-70" alt="Client 3" />
        <img src="/img/brand4.svg" className="h-6 opacity-70" alt="Client 4" />
      </div>
    </section>
  );
};

export default TrustBar;
