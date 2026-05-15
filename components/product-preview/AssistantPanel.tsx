export function AssistantPanel() {
    return (
        <aside className="border-t border-white/10 bg-white/[0.02] p-6 lg:border-l lg:border-t-0 lg:border-white/10">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 text-sm font-bold text-black">
                        AI
                    </div>

                    <div>
                        <div className="text-sm font-medium">FlowMind</div>
                        <div className="text-xs text-white/35">Assistant online</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] p-3 text-sm leading-6 text-white/70">
                        I reviewed your notes and found 3 blockers in the current sprint.
                    </div>

                    <div className="ml-8 rounded-2xl rounded-tr-sm bg-white p-3 text-sm leading-6 text-black">
                        Create an action plan for today.
                    </div>

                    <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] p-3 text-sm leading-6 text-white/70">
                        Done. Start with onboarding copy, then review launch risks.
                    </div>
                </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-5">
                <div className="text-sm font-medium">Next suggestion</div>
                <p className="mt-2 text-sm leading-6 text-white/55">
                    Convert meeting notes into a launch checklist.
                </p>
            </div>
        </aside>
    );
}