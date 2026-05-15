const footerLinks = ["Features", "Product", "Pricing", "FAQ"];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
            ✦
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">
            FlowMind AI
          </span>
        </a>

        <nav className="flex flex-wrap items-center gap-5 text-sm text-white/45">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="text-sm text-white/35">
          Portfolio concept by Vasil Punchev.
        </p>
      </div>
    </footer>
  );
}