const navItems = ["Overview", "AI Notes", "Projects", "Tasks", "Calendar"];

export function AppSidebar() {
    return (
        <aside className="border-b border-white/10 bg-white/[0.02] p-5 lg:border-b-0 lg:border-r lg:border-white/10">
            <div className="mb-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black">
                    ✦
                </div>

                <div>
                    <div className="text-sm font-semibold">FlowMind</div>
                    <div className="text-xs text-white/35">Personal workspace</div>
                </div>
            </div>

            <div className="space-y-2">
                {navItems.map((item, index) => (
                    <button
                        key={item}
                        className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${index === 0
                                ? "bg-white text-black"
                                : "text-white/50 hover:bg-white/[0.05] hover:text-white"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">AI credits</p>
                    <span className="text-xs text-emerald-300">68%</span>
                </div>

                <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                </div>

                <p className="mt-3 text-xs leading-5 text-white/40">
                    Usage resets in 12 days.
                </p>
            </div>
        </aside>
    );
}