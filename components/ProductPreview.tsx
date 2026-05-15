import { AppSidebar } from "./product-preview/AppSidebar";
import { FocusPanel } from "./product-preview/FocusPanel";
import { AssistantPanel } from "./product-preview/AssistantPanel";

export function ProductPreview() {
  return (
    <section id="product" className="relative z-10 px-4 pt-6 pb-16 md:px-6 md:pt-8 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <div className="absolute -inset-8 rounded-[2.75rem] bg-gradient-to-r from-violet-500/30 via-cyan-500/15 to-fuchsia-500/25 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101018]/85 shadow-[0_30px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/45 md:block">
                flowmind.ai/workspace
              </div>

              <div className="text-xs text-white/35">Live AI preview</div>
            </div>

            <div className="grid min-h-0 grid-cols-1 lg:min-h-[600px] lg:grid-cols-[250px_1fr_340px]">
              <AppSidebar />
              <FocusPanel />
              <AssistantPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}