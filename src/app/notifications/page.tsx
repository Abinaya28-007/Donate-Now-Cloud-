import DashboardShell from '@/components/dashboard-shell';

const timeline = [
  { label: 'Donation Created', time: '10:30 AM', done: true },
  { label: 'Organization Matched', time: '10:35 AM', done: true },
  { label: 'Request Accepted', time: '11:02 AM', done: true },
  { label: 'Volunteer Assigned', time: '11:20 AM', done: true },
  { label: 'Pickup Completed', time: '12:10 PM', done: true },
  { label: 'Delivered', time: '1:05 PM', done: true },
  { label: 'Recipient Confirmed', time: '1:20 PM', done: true },
  { label: 'Completed', time: '1:30 PM', done: true },
];

export default function TrackingPage() {
  return (
    <DashboardShell title="Donation Tracking" subtitle="Transparent movement from creation to completion">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Donation #CD-1024</p>
            <h2 className="text-2xl font-bold">Status: COMPLETED</h2>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">Delivered</span>
        </div>

        <div className="space-y-5">
          {timeline.map((step, index) => (
            <div key={step.label} className="flex items-start gap-4">
              <div className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${step.done ? 'bg-cyan-400 text-slate-950' : 'bg-slate-700 text-slate-300'}`}>
                {index + 1}
              </div>
              <div className="flex-1 border-b border-slate-800 pb-4">
                <p className="font-medium text-white">{step.label}</p>
                <p className="text-sm text-slate-400">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
