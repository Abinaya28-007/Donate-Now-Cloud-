import DashboardShell from '@/components/dashboard-shell';

const adminMetrics = [
  { title: 'Total Users', value: '1,248' },
  { title: 'Total Donations', value: '248' },
  { title: 'Total Requests', value: '310' },
  { title: 'Successful Matches', value: '176' },
  { title: 'Critical Requests', value: '19' },
  { title: 'Pending Verifications', value: '24' },
  { title: 'Suspicious Requests', value: '7' },
  { title: 'Active Deliveries', value: '12' },
];

export default function AdminDashboard() {
  return (
    <DashboardShell title="Admin Dashboard" subtitle="Monitor platform health, suspicious activity, and operational performance">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{card.title}</p>
            <p className="mt-3 text-3xl font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold">Urgency Distribution</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="flex justify-between"><span>Critical</span><span>32%</span></div>
            <div className="flex justify-between"><span>High</span><span>24%</span></div>
            <div className="flex justify-between"><span>Medium</span><span>31%</span></div>
            <div className="flex justify-between"><span>Low</span><span>13%</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold">Verification Queue</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li className="rounded-xl bg-slate-800 p-3">ORG-1042 • Community Relief Center • Pending</li>
            <li className="rounded-xl bg-slate-800 p-3">ORG-1037 • Safe Haven School • Verification In Progress</li>
            <li className="rounded-xl bg-slate-800 p-3">ORG-1020 • Urban Food Initiative • Requires Review</li>
          </ul>
        </div>
      </div>
    </DashboardShell>
  );
}
