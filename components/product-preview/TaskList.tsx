import { tasks } from "@/data/tasks";

export function TaskList() {
    return (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">Priority tasks</h3>
                <span className="text-xs text-white/35">4 active</span>
            </div>

            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <div
                        key={task}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:bg-white/[0.04]"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-xs text-white/45">
                                {index + 1}
                            </span>
                            <span className="text-sm text-white/75">{task}</span>
                        </div>

                        <span className="text-xs text-white/30">Today</span>
                    </div>
                ))}
            </div>
        </div>
    );
}