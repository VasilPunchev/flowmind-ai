export function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
      <a href="#" className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-violet-500/20">
          ✦
        </span>
        <span className="text-sm font-semibold tracking-wide text-white">
          FlowMind AI
        </span>
      </a>

      <nav className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white/60 backdrop-blur-xl md:flex md:items-center md:gap-6">
        <a href="#features" className="transition hover:text-white">
          Features
        </a>
        <a href="#product" className="transition hover:text-white">
          Product
        </a>
        <a href="#pricing" className="transition hover:text-white">
          Pricing
        </a>
      </nav>

      <a
        href="#"
        className="rounded-full border border-white/10 bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
      >
        Join waitlist
      </a>
    </header>
  );
}