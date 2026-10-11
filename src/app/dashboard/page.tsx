import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-soft">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Join CloudDonate</p>
          <h1 className="mt-4 text-4xl font-bold">Create your account</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" defaultValue="Priya Nair" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Role</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" defaultValue="donor">
              <option value="donor">Donor</option>
              <option value="recipient">Recipient / Organization</option>
              <option value="volunteer">Volunteer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input type="email" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" defaultValue="priya@clouddonate.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Phone</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" defaultValue="+91 98765 43210" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Location</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" defaultValue="Chennai, Tamil Nadu" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" defaultValue="password123" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Confirm password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3" defaultValue="password123" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link href="/login" className="rounded-xl border border-white/10 px-5 py-3 text-center text-slate-200">
            Back to login
          </Link>
          <Link href="/donor" className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-900">
            Create account
          </Link>
        </div>
      </div>
    </main>
  );
}
