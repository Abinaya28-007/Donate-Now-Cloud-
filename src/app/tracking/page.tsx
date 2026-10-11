import { calculateMatchScore, getSampleMatches } from '@/lib/ai/matching';
import DashboardShell from '@/components/dashboard-shell';

const results = getSampleMatches();

export default function MatchingPage() {
  return (
    <DashboardShell title="AI Matching" subtitle="Explainable recommendations using category, urgency, distance, and quantity compatibility">
      <div className="grid gap-6 lg:grid-cols-2">
        {results.map((match) => (
          <div key={match.requestId} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{match.requestId}</h3>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">{match.score}%</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{match.item}</p>
            <p className="mt-2 text-sm text-slate-400">Distance: {match.distance} km • Quantity fit: {match.quantityFit}</p>
            <div className="mt-5">
              <p className="text-sm font-medium text-cyan-200">AI Explanation</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {match.reasons.map((reason) => (
                  <li key={reason}>✓ {reason}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
