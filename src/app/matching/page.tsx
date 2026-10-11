import DashboardShell from '@/components/dashboard-shell';

export default function NewRequestPage() {
  return (
    <DashboardShell title="Create Resource Request" subtitle="Describe urgent needs and request support from the matching engine">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <form className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Organization</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Community Relief Center" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Resource category</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Food">
              <option>Food</option>
              <option>Medical Supplies</option>
              <option>Education</option>
              <option>Hygiene</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Required item</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Food packets" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Quantity</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="100" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Urgency</label>
            <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="CRITICAL">
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
              <option>CRITICAL</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Beneficiaries</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="250" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Location</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="Chennai" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Required date</label>
            <input type="date" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" defaultValue="2026-10-12" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Description</label>
            <textarea className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white" rows={4} defaultValue="Urgent support required for 250 beneficiaries within 24 hours due to disrupted food access." />
          </div>
          <div className="md:col-span-2">
            <button type="button" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Submit Request</button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}
