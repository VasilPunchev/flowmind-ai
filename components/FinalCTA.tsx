export function FinalCTA() {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] px-8 py-16 text-center backdrop-blur-xl md:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-medium text-cyan-200">
              Ready to focus?
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Turn scattered work into clear momentum.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
              FlowMind is designed as a calm AI workspace where planning,
              summarizing and execution feel simple, fast and intentional.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black shadow-2xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Join waitlist
              </a>

              <a
                href="#product"
                className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                View product
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}