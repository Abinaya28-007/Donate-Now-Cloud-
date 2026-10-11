import Link from 'next/link';

const navItems = [
  { href: '/donor', label: 'Donor' },
  { href: '/recipient', label: 'Recipient' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/admin', label: 'Admin' },
  { href: '/matching', label: 'Matching' },
  { href: '/tracking', label: 'Tracking' },
  { href: '/notifications', label: 'Notifications' },
];

export default function DashboardShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-800 bg-slate-900/95 p-6 md:block">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-slate-950">
            C
          </div>
          <div>
            <p className="text-xl font-bold">CloudDonate</p>
            <p className="text-xs text-slate-400">AI donation ecosystem</p>
          </div>
        </div>

        <nav className="mt-10 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-slate-200 transition hover:bg-slate-800">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4">
          <p className="text-sm text-cyan-200">Critical request</p>
          <p className="mt-2 text-xl font-semibold">96</p>
          <p className="text-xs text-slate-300">Urgent medical supply needs across Chennai</p>
        </div>
      </aside>

      <div className="md:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Dashboard</p>
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/notifications" className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-200">Alerts</Link>
              <Link href="/profile" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">Profile</Link>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{subtitle}</p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
