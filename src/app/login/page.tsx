import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-soft md:grid-cols-2">
        <div className="bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-slate-900 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">CloudDonate</p>
          <h1 className="mt-6 text-4xl font-bold">Welcome back</h1>
          <p className="mt-3 text-slate-300">Sign in to manage donations, requests, delivery tasks, and impact reporting.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-200">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Role-based access for donors, recipients, volunteers, and admins.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">AI-powered matching and transparent tracking for every resource.</div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-semibold">Login</h2>
          <form className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input type="email" defaultValue="admin@clouddonate.com" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Password</label>
              <input type="password" defaultValue="password123" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between text-sm text-slate-300">
              <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
              <a href="#" className="text-cyan-300">Forgot password?</a>
            </div>
            <Link href="/donor" className="block rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950">
              Sign in
            </Link>
            <div className="text-center text-sm text-slate-400">
              New here? <Link href="/register" className="text-cyan-300">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
