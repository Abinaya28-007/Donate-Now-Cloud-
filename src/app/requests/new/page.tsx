import DashboardShell from '@/components/dashboard-shell';

export default function NewDonationPage() {
  return (
    <DashboardShell title="Create Donation" subtitle="List available resources and help match urgent needs">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <form className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Donation title</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="50 packets of rice" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Category</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Food">
              <option>Food</option>
              <option>Medical Supplies</option>
              <option>Education</option>
              <option>Clothing</option>
              <option>Hygiene</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Quantity</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="50" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Unit</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Packets" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Description</label>
            <textarea className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" rows={4} defaultValue="Well-packaged rice, approved for local community distribution, no expiry risk." />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Pickup location</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Chennai" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Availability date</label>
            <input type="date" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="2026-10-10" />
          </div>
          <div className="md:col-span-2">
            <button type="button" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Submit Donation</button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}
