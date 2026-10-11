import DashboardShell from '@/components/dashboard-shell';
import Link from 'next/link';

const requests = [
  { item: '100 food packets', urgency: 'CRITICAL', status: 'Matched', beneficiaries: 250 },
  { item: '40 medical kits', urgency: 'HIGH', status: 'Pending Verification', beneficiaries: 90 },
  { item: '30 school kits', urgency: 'MEDIUM', status: 'Assigned', beneficiaries: 60 },
];

export default function RecipientDashboard() {
  return (
    <DashboardShell title="Recipient Dashboard" subtitle="Submit needs, accept donations, and track requests">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Active Requests</p><p className="mt-3 text-3xl font-bold">12</p></div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Matched Resources</p><p className="mt-3 text-3xl font-bold">8</p></div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Pending Deliveries</p><p className="mt-3 text-3xl font-bold">3</p></div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Urgent Requests</p><p className="mt-3 text-3xl font-bold">4</p></div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/requests/new" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Create Request</Link>
        <Link href="/tracking" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">Track Requests</Link>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <h3 className="text-lg font-semibold">Request Status</h3>
        <div className="mt-4 space-y-3">
          {requests.map((request) => (
            <div key={request.item} className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <p className="font-medium text-white">{request.item}</p>
                  <p className="text-sm text-slate-400">Beneficiaries: {request.beneficiaries}</p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300">{request.urgency}</span>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">{request.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
