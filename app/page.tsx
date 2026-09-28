import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";

const problems = [
  { title: "Blockers buried in meetings", body: "Decisions never become routed work with owners and dates." },
  { title: "Overloaded owners", body: "One person quietly carries the critical path until it snaps." },
  { title: "Deadlines slipping silently", body: "Risk shows up as a calendar surprise, not a leading signal." },
  { title: "Follow-ups forgotten", body: "Async promises decay because nothing queues the next touch." },
  { title: "Teams working without routing", body: "Everyone is busy, but work piles up in invisible queues." },
  { title: "Managers chasing status", body: "Leaders become human polling loops instead of clearing bottlenecks." },
];

const how = [
  { title: "Capture work state", body: "Projects, owners, deadlines, notes, and capacity land in one scan." },
  { title: "Detect stuck points", body: "We surface handoffs, queues, and dependency stalls early." },
  { title: "Rank urgency", body: "Hot bottlenecks float to the top with severity and blast radius." },
  { title: "Route next actions", body: "Concrete reroutes reduce overload and launch risk." },
  { title: "Monitor operating rhythm", body: "Cadence slots keep triage, radar, and debt sweeps on rails." },
];

const useCases = ["Startup ops", "Product launches", "Customer implementation", "Agency delivery", "Engineering coordination", "Revenue operations"];

const faq = [
  { q: "Is this a task board?", a: "No. OpsAutopilot is an execution cockpit: bottlenecks, load, follow-ups, and reroutes — not another kanban." },
  { q: "Does it connect to my tools?", a: "This demo uses local mock logic. Integrations are on the roadmap for Team and Scale tiers." },
  { q: "Who is it for?", a: "Operators, program leads, and managers who need the week to stay unblocked before deadlines slip." },
];

export default function Home() {
  return (
    <div>
        <div className="-mx-6 space-y-0">
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-6" data-reveal>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_55%),radial-gradient(ellipse_at_20%_80%,rgba(59,130,246,0.1),transparent_45%)]" />
        <div data-stagger className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-6">
            <p className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">Operations cockpit</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Find the bottlenecks before they break the week.</h1>
            <p className="text-lg text-slate-300">
              OpsAutopilot turns projects, blockers, deadlines, and team capacity into routed tasks, follow-up queues, and a live execution cockpit.
            </p>
            <div data-stagger className="flex flex-wrap gap-3">
              <Link href="/demo" className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300">
                Run an ops scan
              </Link>
              <Link href="/dashboard" className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/10">
                View operations cockpit
              </Link>
            </div>
          </div>
          <div className="motion-card motion-hover-lift cockpit-panel relative flex-1 border-emerald-500/20 bg-slate-950/70 p-5 lg:max-w-md">
            <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-500">
              <span>Live ops preview</span>
              <span data-stagger className="flex items-center gap-1 text-emerald-300">
                <span className="status-dot bg-emerald-400" /> health 81
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-amber-100">Blockers detected · design review queue</div>
              <div className="rounded-lg border border-rose-500/25 bg-rose-500/10 px-3 py-2 text-rose-100">Owners overloaded · Alex 38% critical path</div>
              <div className="rounded-lg border border-blue-500/25 bg-blue-500/10 px-3 py-2 text-blue-100">Follow-ups pending · onboarding debt</div>
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-emerald-100">Reroute suggested · move QA review to Jordan</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold text-white">The hidden bottleneck problem</h2>
            <p className="text-slate-400">Teams rarely fail because nobody is working. They fail because work gets stuck in invisible places.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((c) => (
              <article key={c.title} className="motion-card motion-hover-lift cockpit-panel border-white/10 hover:border-emerald-500/30">
                <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Product preview</h2>
            <p className="text-slate-400">
              See which project is stuck, who is overloaded, and what to move next — in one tactical surface instead of another status doc.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-emerald-400">●</span> Bottleneck map across handoffs, capacity, and follow-ups</li>
              <li className="flex gap-2"><span className="text-blue-400">●</span> Owner load board with critical-path share</li>
              <li className="flex gap-2"><span className="text-amber-400">●</span> Follow-up queue with overdue signals</li>
              <li className="flex gap-2"><span className="text-rose-400">●</span> Escalation stack for launch and onboarding risk</li>
              <li className="flex gap-2"><span className="text-emerald-300">●</span> Recommended reroutes to cut deadline risk</li>
            </ul>
            <Link href="/demo" className="inline-flex rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400">
              Try the simulator
            </Link>
          </div>
          <div className="motion-card motion-hover-lift cockpit-panel grid gap-3 border-blue-500/20 bg-gradient-to-br from-slate-950 to-slate-900 p-5">
            {["Bottleneck lanes", "Owner utilization", "Deadline radar", "Automation queue"].map((label) => (
              <div key={label} className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-200">
                <span>{label}</span>
                <span className="status-dot bg-emerald-400/80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How it works</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {how.map((h, i) => (
              <div key={h.title} className="motion-card motion-hover-lift cockpit-panel relative overflow-hidden">
                <span className="absolute right-3 top-3 text-3xl font-bold text-white/5">{i + 1}</span>
                <h3 className="text-sm font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-xs text-slate-400">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Use cases</h2>
          <div className="flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span key={u} className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-100">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto max-w-6xl space-y-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Dashboard preview</h2>
          <p className="max-w-2xl text-slate-400">Mission control for operators: health score, bottleneck map, owner board, follow-up queue, deadline radar, and reroutes.</p>
          <Link href="/dashboard" className="inline-flex rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10">
            Open the cockpit
          </Link>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold text-white">Why now</h2>
          <p className="text-slate-300">
            More tools, more async work, more AI agents — and fewer crisp owners. OpsAutopilot gives teams a shared picture of where execution is stuck before the week breaks.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Pricing snapshot</h2>
          <p className="text-slate-400">See full tiers on the pricing page.</p>
          <Link href="/pricing" className="inline-flex text-sm font-medium text-emerald-300 hover:text-emerald-200">
            View pricing →
          </Link>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16" data-reveal>
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl font-semibold text-white">FAQ</h2>
          <dl className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="motion-card motion-hover-lift cockpit-panel">
                <dt className="text-sm font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm text-slate-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 py-20" data-reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white">Stop discovering blockers after the deadline already slipped.</h2>
          <p className="text-slate-400">Run a mock ops scan in under a minute. No API keys. No deploy.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/demo" className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300">
              Run an ops scan
            </Link>
            <Link href="/contact" className="rounded-lg border border-white/20 px-5 py-2.5 text-sm text-slate-100 hover:bg-white/10">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </div>

      <ProductHonestyNote status="demo" />
    </div>
  );
}
