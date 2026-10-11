import DashboardShell from '@/components/dashboard-shell';

const dashboardCards = [
  { title: 'Total Donations', value: '248', hint: '₹18.5L equivalent' },
  { title: 'Active Donations', value: '34', hint: '10 matched' },
  { title: 'Matched Donations', value: '146', hint: '+12 today' },
  { title: 'Completed Donations', value: '96', hint: '98% success' },
];

export default function DashboardPage() {
  return (
    <DashboardShell title="Donor Dashboard" subtitle="Overview and delivery impact">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardCards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{card.title}</p>
            <p className="mt-3 text-3xl font-bold text-white">{card.value}</p>
            <p className="mt-2 text-xs text-cyan-300">{card.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold">Impact Statistics</h3>
          <div className="mt-5 space-y-4">
            <div>
              <div className="mb-2 flex justify-between text-sm"><span>People Helped</span><span>620</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[72%] rounded-full bg-cyan-400" /></div>
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm"><span>Successful Deliveries</span><span>96</span></div>
              <div className="h-2 rounded-full bg-slate-800"><div className="h-2 w-[90%] rounded-full bg-emerald-400" /></div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li className="rounded-xl bg-slate-800 p-3">Donation #CD-1902 matched with Chennai Food Bank</li>
            <li className="rounded-xl bg-slate-800 p-3">Volunteer assigned for pickup in Velachery</li>
            <li className="rounded-xl bg-slate-800 p-3">Proof of delivery uploaded successfully</li>
          </ul>
        </div>
      </div>
    </DashboardShell>
  );
}
