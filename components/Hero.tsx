export function Hero() {
  return (
    <section className="relative z-10 px-6 pt-36 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
            New AI workspace for focused teams
          </div>

          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Think clearly.
            <br />
            <span className="bg-gradient-to-r from-white via-violet-100 to-cyan-100 bg-clip-text text-transparent">
              Execute faster with AI.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/58">
            FlowMind turns scattered notes, tasks and decisions into a calm
            command center for planning, writing and focused execution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-2xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Start building
            </a>

            <a
              href="#product"
              className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              View product
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <div>
              <span className="font-semibold text-white">12k+</span> tasks organized
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div>
              <span className="font-semibold text-white">4.9/5</span> user clarity score
            </div>
            <div className="hidden h-4 w-px bg-white/10 sm:block" />
            <div>
              <span className="font-semibold text-white">2.8x</span> faster planning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}