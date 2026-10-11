import DashboardShell from '@/components/dashboard-shell';
import Link from 'next/link';

const tasks = [
  { title: 'Task #1042', pickup: 'Chennai Food Bank', destination: 'Community Center', distance: '8.4 km', items: '50 food packets', priority: 'CRITICAL' },
  { title: 'Task #1046', pickup: 'Velachery Medical Clinic', destination: 'Local Shelter', distance: '12.1 km', items: '15 medical kits', priority: 'HIGH' },
];

export default function VolunteerDashboard() {
  return (
    <DashboardShell title="Volunteer Dashboard" subtitle="Accept delivery tasks, update statuses, and confirm proof of delivery">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Available Tasks</p><p className="mt-3 text-3xl font-bold">14</p></div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Active Deliveries</p><p className="mt-3 text-3xl font-bold">4</p></div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Completed Deliveries</p><p className="mt-3 text-3xl font-bold">29</p></div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5"><p className="text-sm text-slate-400">Distance Covered</p><p className="mt-3 text-3xl font-bold">89 km</p></div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">
        <h3 className="text-lg font-semibold">Available Tasks</h3>
        <div className="mt-5 space-y-4">
          {tasks.map((task) => (
            <div key={task.title} className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <p className="font-medium text-white">{task.title}</p>
                  <p className="text-sm text-slate-400">Pickup: {task.pickup}</p>
                  <p className="text-sm text-slate-400">Destination: {task.destination}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-cyan-300">Distance: {task.distance}</p>
                  <p className="text-sm text-slate-300">Items: {task.items}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300">{task.priority}</span>
                <Link href="/tracking" className="rounded-lg bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950">Accept Task</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
