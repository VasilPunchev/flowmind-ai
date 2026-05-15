import { TaskList } from "./TaskList";

export function FocusPanel() {
    return (
        <section className="p-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Today&apos;s focus
                    </h2>
                    <p className="mt-1 text-sm text-white/40">
                        AI-organized priorities for deep work.
                    </p>
                </div>

                <button className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.08]">
                    Generate plan
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-sm text-white/40">Focus score</div>
                    <div className="mt-3 text-5xl font-semibold tracking-tight">86</div>

                    <div className="mt-4 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-sm text-white/40">AI summary</div>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                        Your product launch has 4 open decisions. The highest impact next
                        step is finalizing onboarding copy.
                    </p>
                </div>
            </div>

            <TaskList />
        </section>
    );
}