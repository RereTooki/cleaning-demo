import { plans } from "../data/site";
import { cn } from "../lib/cn";

const Pricing = () => {
  return (
    <section id="pricing" className="section px-4">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="muted mt-3">
            Fair rates with no surprises. Custom quotes for larger spaces.
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
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "card p-6 hover:shadow-lg transition-shadow",
                p.highlight && "ring-2 ring-brand"
              )}
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-2xl font-bold text-gray-900 S">{p.price}</p>
              <ul className="mt-4 grid gap-2">
                {p.features.map((f) => (
                  <li key={f} className="muted">
                    • {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn("mt-6 btn-primary w-full text-center")}
              >
                {p.cta}
              </a>
              <p className="mt-2 text-xs text-gray-500">
                *Final price depends on size & scope.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
