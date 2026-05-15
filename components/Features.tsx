const featureCards = [
  {
    title: "Plan with clarity",
    description:
      "FlowMind turns scattered thoughts into structured plans, milestones and next actions.",
    className: "md:col-span-2",
  },
  {
    title: "Summarize instantly",
    description:
      "Convert notes, meetings and long documents into clear decisions and action points.",
    className: "",
  },
  {
    title: "Stay focused",
    description:
      "Prioritize the work that matters and reduce context switching during deep work.",
    className: "",
  },
  {
    title: "AI-assisted execution",
    description:
      "Move from idea to launch with an intelligent workspace that keeps projects organized.",
    className: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section id="features" className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-violet-300">
            Built for modern work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            A calmer way to turn ideas into progress.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50">
            FlowMind brings planning, summarization and execution into one
            focused AI workspace designed for speed without chaos.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {featureCards.map((feature) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${feature.className}`}
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-violet-400/20 blur-3xl transition group-hover:bg-cyan-400/20" />

              <div className="relative">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/20 to-white/5">
                  <span className="h-5 w-5 rounded-full bg-gradient-to-br from-violet-300 to-cyan-300" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

            <div className="relative">
              <p className="text-sm font-medium text-violet-200">
                AI workflow
              </p>

              <h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white">
                From messy input to clear output in seconds.
              </h3>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {["Capture", "Organize", "Execute"].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                      {index + 1}
                    </div>
                    <div className="text-sm font-medium text-white">{step}</div>
                    <p className="mt-2 text-xs leading-5 text-white/45">
                      {index === 0 &&
                        "Drop notes, tasks, documents or raw ideas."}
                      {index === 1 &&
                        "Let AI structure priorities and decisions."}
                      {index === 2 &&
                        "Move forward with focused next actions."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#11111a]/80 p-7 backdrop-blur-xl">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-medium text-cyan-200">
                Designed to feel premium
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Clean product UI, not another busy dashboard.
              </h3>

              <div className="mt-8 space-y-3">
                {["Minimal interface", "Fast decisions", "Less context switching"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                    >
                      <span className="text-sm text-white/70">{item}</span>
                      <span className="text-xs text-emerald-300">Active</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}