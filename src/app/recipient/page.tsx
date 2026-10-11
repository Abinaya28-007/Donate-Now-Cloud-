import DashboardShell from '@/components/dashboard-shell';
import Link from 'next/link';

const donorMetrics = [
  { title: 'Total Donations', value: '248' },
  { title: 'Active Donations', value: '34' },
  { title: 'Matched Donations', value: '146' },
  { title: 'Completed Donations', value: '96' },
];

const donationList = [
  { id: 'CD-1902', item: '50 food packets', status: 'Matched', location: 'Chennai' },
  { id: 'CD-1888', item: '12 hygiene kits', status: 'In Transit', location: 'Tambaram' },
  { id: 'CD-1844', item: '25 books', status: 'Delivered', location: 'Kanchipuram' },
];

export default function DonorDashboard() {
  return (
    <DashboardShell title="Donor Dashboard" subtitle="Monitor resources, matching results, and delivery impact">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {donorMetrics.map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{card.title}</p>
            <p className="mt-3 text-3xl font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/donations/new" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Create Donation</Link>
        <Link href="/matching" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">View Matches</Link>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <h3 className="text-lg font-semibold">Recent Donations</h3>
        <div className="mt-4 space-y-3">
          {donationList.map((item) => (
            <div key={item.id} className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-800/70 p-4 md:flex-row md:items-center">
              <div>
                <p className="font-medium text-white">{item.item}</p>
                <p className="text-sm text-slate-400">{item.id} • {item.location}</p>
              </div>
              <span className="mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 md:mt-0">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
