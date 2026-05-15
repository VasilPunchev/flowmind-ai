export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-260px] h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[140px]" />
      <div className="absolute left-[12%] top-[380px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-[-180px] top-[220px] h-[620px] w-[620px] rounded-full bg-cyan-500/16 blur-[140px]" />
      <div className="absolute bottom-[-260px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-[150px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_36%),linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
    </div>
  );
}