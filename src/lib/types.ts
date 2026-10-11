import DashboardShell from '@/components/dashboard-shell';

export default function SettingsPage() {
  return (
    <DashboardShell title="Settings" subtitle="Configure alerts, preferences, and cloud workflow settings">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email notifications</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Enabled">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">SMS alerts</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Enabled">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Role visibility</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Public profile">
              <option>Public profile</option>
              <option>Private profile</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Language</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="English">
              <option>English</option>
              <option>Tamil</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>

        <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Save Settings</button>
      </div>
    </DashboardShell>
  );
}
