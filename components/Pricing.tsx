import { pricingPlans } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-cyan-200">
            Simple pricing
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Start focused. Scale when you need more.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50">
            Choose a plan that matches how you work today. Upgrade when your
            projects, tasks and AI workflows grow.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-[1.75rem] border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-violet-300/30 bg-white/[0.08] shadow-[0_30px_120px_rgba(139,92,246,0.18)]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white px-3 py-1 text-xs font-semibold text-black">
                  Most popular
                </div>
              )}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />

              <div className="relative">
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-white/50">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-sm text-white/40">/ month</span>
                </div>

                <a
                  href="#"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {plan.cta}
                </a>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-medium text-white/80">
                    Includes:
                  </p>

                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/55"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-xs text-emerald-300">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}