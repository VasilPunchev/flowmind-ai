import { features } from "@/data/features";

export function Features() {
  return (
    <section id="features" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-violet-300">
            Built for modern work
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything feels calm, fast and intentional.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-8 h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-400/80 to-cyan-400/80" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}