import DashboardShell from '@/components/dashboard-shell';

export default function ProfilePage() {
  return (
    <DashboardShell title="Profile" subtitle="Manage user details, verification status, and settings">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 text-xl font-bold text-slate-950">PN</div>
            <div>
              <h2 className="text-2xl font-bold">Priya Nair</h2>
              <p className="text-sm text-slate-400">Donor • Chennai</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div><p className="text-sm text-slate-400">Email</p><p className="mt-1 text-white">priya@clouddonate.com</p></div>
            <div><p className="text-sm text-slate-400">Phone</p><p className="mt-1 text-white">+91 98765 43210</p></div>
            <div><p className="text-sm text-slate-400">Verification</p><p className="mt-1 text-emerald-300">Verified</p></div>
            <div><p className="text-sm text-slate-400">Member Since</p><p className="mt-1 text-white">Jan 2026</p></div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>• Update password</li>
            <li>• Manage notifications</li>
            <li>• Set privacy preferences</li>
            <li>• Download activity export</li>
          </ul>
        </div>
      </div>
    </DashboardShell>
  );
}
