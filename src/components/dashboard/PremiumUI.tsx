import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Client, HealthStatus } from '../../data/clients';

const AVATAR_COLORS: Record<HealthStatus, string> = {
  green: 'bg-teal-50 text-teal-600 ring-teal-100',
  yellow: 'bg-amber-50 text-amber-600 ring-amber-100',
  red: 'bg-rose-50 text-rose-600 ring-rose-100',
};

export function clientInitials(name: string) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

export function PremiumCard({
  title,
  subtitle,
  icon,
  children,
  className = '',
  action,
}: {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <section className={`bg-white rounded-2xl shadow-[0_8px_30px_rgba(20,47,69,0.06)] border border-slate-100/80 overflow-hidden ${className}`}>
      {(title || action) && (
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-9 h-9 rounded-xl bg-[#142f45]/5 flex items-center justify-center text-[#142f45]">
                {icon}
              </div>
            )}
            <div>
              {title && <h2 className="font-bold text-[#142f45] text-base">{title}</h2>}
              {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {action}
        </div>
      )}
      <div className="p-6">{children}</div>
    </section>
  );
}

export function KpiStatCard({
  label,
  value,
  icon,
  accent = '#142f45',
  bg = '#142f45',
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  accent?: string;
  bg?: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(20,47,69,0.06)] border border-slate-100/80 p-5 flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${bg}12`, color: accent }}
      >
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-[#142f45] leading-none">{value}</div>
        <div className="text-sm text-slate-500 mt-1 font-medium">{label}</div>
      </div>
    </div>
  );
}

export function HealthRing({ score, size = 56 }: { score: number; size?: number }) {
  const color = score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444';
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={5} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-[#142f45]">{score}</span>
      </div>
    </div>
  );
}

export function RiskPill({ risk }: { risk: string }) {
  const styles: Record<string, string> = {
    Low: 'bg-emerald-50 text-emerald-700',
    Medium: 'bg-amber-50 text-amber-700',
    High: 'bg-orange-50 text-orange-700',
    Critical: 'bg-rose-50 text-rose-700',
  };
  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${styles[risk] || styles.Medium}`}>
      {risk} Risk
    </span>
  );
}

export function MetricChip({ label, value, good }: { label: string; value: number; good?: boolean }) {
  const color = good === undefined
    ? 'text-[#142f45] bg-slate-50'
    : good
      ? 'text-emerald-700 bg-emerald-50'
      : value >= 60
        ? 'text-amber-700 bg-amber-50'
        : 'text-rose-700 bg-rose-50';

  return (
    <div className={`rounded-xl px-3 py-2 text-center min-w-[72px] ${color}`}>
      <div className="text-sm font-bold">{value}</div>
      <div className="text-[10px] font-medium uppercase tracking-wide opacity-80">{label}</div>
    </div>
  );
}

export function ClientListRow({ client, onClick }: { client: Client; onClick: () => void }) {
  const trendUp = client.monthlyChange > 0;
  const trendDown = client.monthlyChange < 0;

  const metrics = [
    { label: 'Traffic', value: client.breakdown.traffic },
    { label: 'Leads', value: client.breakdown.leads },
    { label: 'Sentiment', value: client.breakdown.sentiment },
    { label: 'Delivery', value: client.breakdown.delivery },
  ];

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50/90 transition-colors border-b border-slate-100 last:border-0 bg-transparent border-x-0 border-t-0 cursor-pointer text-left group"
    >
      <div className={`w-11 h-11 rounded-xl ring-2 flex items-center justify-center text-sm font-bold shrink-0 ${AVATAR_COLORS[client.status]}`}>
        {clientInitials(client.name)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[#142f45] text-sm group-hover:text-[#ee683b] transition-colors truncate">
          {client.name}
        </div>
        <div className="text-xs text-slate-500 mt-0.5 truncate">
          {client.category} · {client.accountManager}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 shrink-0">
        {metrics.map(m => {
          const color = m.value >= 80 ? 'bg-emerald-500' : m.value >= 60 ? 'bg-amber-500' : 'bg-rose-500';
          return (
            <div key={m.label} className="w-16 text-center">
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1">
                <div className={`h-full rounded-full ${color}`} style={{ width: `${m.value}%` }} />
              </div>
              <div className="text-[10px] text-slate-500 font-medium">{m.label}</div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <HealthRing score={client.healthScore} size={48} />
        <span className={`text-sm font-bold w-12 text-right hidden sm:block ${trendUp ? 'text-emerald-600' : trendDown ? 'text-rose-600' : 'text-slate-400'}`}>
          {trendUp ? '+' : ''}{client.monthlyChange}
        </span>
        <RiskPill risk={client.risk} />
        <ChevronRight size={18} className="text-slate-300 group-hover:text-[#142f45] shrink-0" />
      </div>
    </button>
  );
}

const STATUS_GROUPS = [
  {
    key: 'critical',
    label: 'Critical & At-Risk',
    description: 'Needs immediate attention',
    dot: 'bg-rose-500',
    header: 'bg-rose-50 border-rose-100 text-rose-800',
    filter: (c: Client) => c.status === 'red' || c.risk === 'High' || c.risk === 'Critical',
    sort: (a: Client, b: Client) => a.healthScore - b.healthScore,
  },
  {
    key: 'watchlist',
    label: 'Watchlist',
    description: 'Monitor closely',
    dot: 'bg-amber-400',
    header: 'bg-amber-50 border-amber-100 text-amber-800',
    filter: (c: Client) => c.status === 'yellow',
    sort: (a: Client, b: Client) => a.healthScore - b.healthScore,
  },
  {
    key: 'healthy',
    label: 'Healthy',
    description: 'Performing well',
    dot: 'bg-emerald-500',
    header: 'bg-emerald-50 border-emerald-100 text-emerald-800',
    filter: (c: Client) => c.status === 'green',
    sort: (a: Client, b: Client) => b.healthScore - a.healthScore,
  },
] as const;

export function ClientStatusBoard({
  clients,
  onClientClick,
}: {
  clients: Client[];
  onClientClick: (name: string) => void;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(20,47,69,0.06)] border border-slate-100/80 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-[#142f45] text-lg">Client Health Overview</h2>
          <p className="text-sm text-slate-500 mt-0.5">Grouped by status — click any client to open their dashboard</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          {STATUS_GROUPS.map(g => {
            const count = clients.filter(g.filter).length;
            return (
              <div key={g.key} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${g.dot}`} />
                <span className="text-slate-600">{g.label}</span>
                <span className="font-bold text-[#142f45]">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Distribution bar */}
      <div className="px-6 py-3 bg-slate-50/50 border-b border-slate-100">
        <div className="flex h-2.5 rounded-full overflow-hidden">
          {STATUS_GROUPS.map(g => {
            const count = clients.filter(g.filter).length;
            const pct = (count / clients.length) * 100;
            if (pct === 0) return null;
            const barColor = g.key === 'critical' ? 'bg-rose-500' : g.key === 'watchlist' ? 'bg-amber-400' : 'bg-emerald-500';
            return <div key={g.key} className={barColor} style={{ width: `${pct}%` }} title={`${g.label}: ${count}`} />;
          })}
        </div>
      </div>

      {STATUS_GROUPS.map(g => {
        const groupClients = clients.filter(g.filter).sort(g.sort);
        if (groupClients.length === 0) return null;

        return (
          <div key={g.key}>
            <div className={`px-6 py-3 border-b flex items-center justify-between ${g.header}`}>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${g.dot}`} />
                <span className="font-bold text-sm">{g.label}</span>
                <span className="text-xs opacity-70">· {g.description}</span>
              </div>
              <span className="text-xs font-bold">{groupClients.length} client{groupClients.length !== 1 ? 's' : ''}</span>
            </div>
            {groupClients.map(client => (
              <div key={client.id}>
                <ClientListRow
                  client={client}
                  onClick={() => onClientClick(client.name)}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export function ClientHealthCard({ client, onClick }: { client: Client; onClick: () => void }) {
  const trendUp = client.monthlyChange > 0;
  const trendDown = client.monthlyChange < 0;

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(20,47,69,0.05)] p-5 hover:shadow-[0_8px_30px_rgba(20,47,69,0.1)] hover:border-[#142f45]/15 transition-all cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-2xl ring-4 flex items-center justify-center text-sm font-bold shrink-0 ${AVATAR_COLORS[client.status]}`}>
          {clientInitials(client.name)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-bold text-[#142f45] text-base truncate group-hover:text-[#ee683b] transition-colors">
                {client.name}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                {client.category} · {client.accountManager}
              </p>
            </div>
            <HealthRing score={client.healthScore} />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <MetricChip label="Traffic" value={client.breakdown.traffic} good={client.breakdown.traffic >= 80} />
            <MetricChip label="Leads" value={client.breakdown.leads} good={client.breakdown.leads >= 80} />
            <MetricChip label="Sentiment" value={client.breakdown.sentiment} good={client.breakdown.sentiment >= 80} />
            <MetricChip label="Delivery" value={client.breakdown.delivery} good={client.breakdown.delivery >= 80} />
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 text-sm">
              <span className={`font-semibold ${trendUp ? 'text-emerald-600' : trendDown ? 'text-rose-600' : 'text-slate-400'}`}>
                {trendUp ? '↑' : trendDown ? '↓' : '→'} {Math.abs(client.monthlyChange)} pts this month
              </span>
            </div>
            <RiskPill risk={client.risk} />
          </div>
        </div>
      </div>
    </button>
  );
}

export function ListRow({
  avatar,
  title,
  subtitle,
  value,
  valueAccent,
  onClick,
}: {
  avatar?: React.ReactNode;
  title: string;
  subtitle?: string;
  value?: React.ReactNode;
  valueAccent?: string;
  onClick?: () => void;
}) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag
      onClick={onClick}
      className={`w-full flex items-center gap-3 py-3 border-b border-slate-50 last:border-0 ${onClick ? 'hover:bg-slate-50/80 cursor-pointer bg-transparent border-x-0 border-t-0 text-left' : ''}`}
    >
      {avatar}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[#142f45] text-sm truncate">{title}</div>
        {subtitle && <div className="text-xs text-slate-500 mt-0.5">{subtitle}</div>}
      </div>
      {value !== undefined && (
        <div className={`text-sm font-bold shrink-0 ${valueAccent || 'text-[#142f45]'}`}>{value}</div>
      )}
    </Tag>
  );
}

export function DonutChart({
  segments,
  size = 120,
}: {
  segments: { label: string; value: number; color: string }[];
  size?: number;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let cumulative = 0;
  const gradient = segments
    .map(seg => {
      const start = (cumulative / total) * 100;
      cumulative += seg.value;
      const end = (cumulative / total) * 100;
      return `${seg.color} ${start}% ${end}%`;
    })
    .join(', ');

  return (
    <div className="flex items-center gap-5">
      <div
        className="rounded-full shrink-0"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(${gradient})`,
          mask: 'radial-gradient(circle at center, transparent 55%, black 56%)',
          WebkitMask: 'radial-gradient(circle at center, transparent 55%, black 56%)',
        }}
      />
      <div className="space-y-2">
        {segments.map(seg => (
          <div key={seg.label} className="flex items-center gap-2 text-sm">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
            <span className="text-slate-600">{seg.label}</span>
            <span className="font-bold text-[#142f45] ml-auto">{seg.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ManagerCard({
  name,
  clients,
  atRisk,
  avgHealth,
}: {
  name: string;
  clients: number;
  atRisk: number;
  avgHealth: number;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
      <div className="w-12 h-12 rounded-2xl bg-[#142f45] text-white flex items-center justify-center font-bold text-lg">
        {name[0]}
      </div>
      <div className="flex-1">
        <div className="font-bold text-[#142f45]">{name}</div>
        <div className="text-sm text-slate-500">{clients} clients · {atRisk} at risk</div>
      </div>
      <div className="text-right">
        <div className={`text-xl font-bold ${avgHealth >= 80 ? 'text-emerald-600' : avgHealth >= 65 ? 'text-amber-600' : 'text-rose-600'}`}>
          {avgHealth}
        </div>
        <div className="text-[10px] text-slate-500 uppercase font-medium">Avg Health</div>
      </div>
    </div>
  );
}
