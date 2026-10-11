import DashboardShell from '@/components/dashboard-shell';

const notifications = [
  { title: 'Match found', detail: 'Donation #CD-1902 matched with Community Relief Center', time: '2 minutes ago' },
  { title: 'Volunteer assigned', detail: 'Volunteer #V-1046 accepted delivery task', time: '14 minutes ago' },
  { title: 'Delivery confirmed', detail: 'Recipient confirmed medical supply receipt', time: '1 hour ago' },
  { title: 'Critical request', detail: 'Urgent food request requires admin verification', time: '2 hours ago' },
];

export default function NotificationsPage() {
  return (
    <DashboardShell title="Notifications" subtitle="Real-time updates for donors, recipients, volunteers, and admins">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <div className="space-y-4">
          {notifications.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                </div>
                <span className="text-xs text-slate-400">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
