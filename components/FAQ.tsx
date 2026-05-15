import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section className="relative z-10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-violet-300">
            Questions
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Built as a premium AI product concept.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50">
            A clean SaaS landing page designed to show product thinking,
            component structure and modern UI execution.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {item.question}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}