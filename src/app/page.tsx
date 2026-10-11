import Link from 'next/link';

const metrics = [
  { value: '12,480', label: 'Items Distributed' },
  { value: '3,420', label: 'People Helped' },
  { value: '892', label: 'Successful Deliveries' },
  { value: '156', label: 'Organizations' },
];

const steps = [
  'Donate',
  'Match',
  'Deliver',
  'Track',
  'Impact',
];

const features = [
  'AI-powered donation matching',
  'Role-based secure access',
  'Volunteer logistics workflow',
  'Admin verification & audit logs',
  'Transparent donation tracking',
  'Analytics and impact reports',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-slate-950">
              C
            </div>
            <div>
              <p className="text-lg font-semibold">CloudDonate</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#features">Features</Link>
            <Link href="#impact">Impact</Link>
            <Link href="/login">Login</Link>
            <Link href="/register" className="rounded-full bg-cyan-400 px-4 py-2 font-medium text-slate-950">
              Join Now
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:pt-12">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Smart Resource Distribution
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Turn Every Donation Into Meaningful Impact.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              CloudDonate intelligently connects available resources with people and organizations that need them most.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/login" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
                Donate Now
              </Link>
              <Link href="/register" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white">
                Request Resources
              </Link>
              <Link href="#impact" className="rounded-full border border-cyan-500/30 px-6 py-3 font-semibold text-cyan-200">
                Explore Platform
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                <p className="text-sm text-cyan-200">Available Matching</p>
                <p className="mt-3 text-3xl font-bold">94%</p>
                <p className="mt-2 text-sm text-slate-300">Best match confidence</p>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-sm text-emerald-200">Delivery Success</p>
                <p className="mt-3 text-3xl font-bold">96%</p>
                <p className="mt-2 text-sm text-slate-300">On-time completion</p>
              </div>
              <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 sm:col-span-2">
                <p className="text-sm text-violet-200">Current Distribution Pipeline</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-300">
                      <span>Food packets</span>
                      <span>82%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700">
                      <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-xs text-slate-300">
                      <span>Medical supplies</span>
                      <span>67%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700">
                      <div className="h-2 w-[67%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-4xl font-bold text-cyan-300">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">How It Works</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">From donation to impact</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-bold text-cyan-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {step === 'Donate' && 'Donors publish available resources with categories, quantity, and location.'}
                {step === 'Match' && 'AI ranks compatible requests based on urgency, distance, and fit.'}
                {step === 'Deliver' && 'Volunteers accept and schedule pickup and delivery tasks.'}
                {step === 'Track' && 'Every stage is visible with a transparent donation timeline.'}
                {step === 'Impact' && 'Analytics show what resources reached communities and how people benefited.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Platform Capabilities</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Built for cloud-first community impact</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                <p className="text-lg font-medium text-slate-100">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
