import React from 'react';
import {
  LayoutDashboard, TrendingUp, TrendingDown, AlertTriangle, Users,
  Activity, Brain, MessageSquare, Phone, Truck, Star, Heart,
  ShieldCheck, ArrowUpRight, ChevronRight,
} from 'lucide-react';
import { AppShell } from './components/AppShell';
import {
  PremiumCard, KpiStatCard, ClientStatusBoard, ListRow, DonutChart,
  clientInitials, RiskPill, HealthRing,
} from './components/dashboard/PremiumUI';
import {
  ALL_CLIENTS, getExecutiveStats, navigateToClientDashboard,
} from './data/clients';

export default function MainDashboard() {
  const stats = getExecutiveStats();
  const atRiskClients = ALL_CLIENTS.filter(c => c.risk === 'High' || c.risk === 'Critical' || c.status === 'red');
  const mostImproved = [...ALL_CLIENTS].filter(c => c.monthlyChange > 0).sort((a, b) => b.monthlyChange - a.monthlyChange).slice(0, 5);
  const biggestDeclines = [...ALL_CLIENTS].filter(c => c.monthlyChange < 0).sort((a, b) => a.monthlyChange - b.monthlyChange).slice(0, 5);
  const topChurn = [...ALL_CLIENTS].sort((a, b) => b.churnRisk - a.churnRisk).slice(0, 5);
  const aiRiskClients = ALL_CLIENTS.filter(c => c.aiFlags.length > 0);
  const overdueClients = ALL_CLIENTS.filter(c => c.overdueTasks > 0);

  const sentimentPositive = ALL_CLIENTS.filter(c => c.breakdown.sentiment >= 80).length;
  const sentimentNeutral = ALL_CLIENTS.filter(c => c.breakdown.sentiment >= 60 && c.breakdown.sentiment < 80).length;
  const sentimentNegative = ALL_CLIENTS.filter(c => c.breakdown.sentiment < 60).length;

  const commClients = ALL_CLIENTS.filter(c => c.daysSinceContact >= 7 || c.risk !== 'Low').slice(0, 5);

  return (
    <AppShell
      activeNav="dashboard"
      title="Main Dashboard"
      titleIcon={<LayoutDashboard size={20} className="text-[#607484]" />}
    >
      <div className="relative z-10 px-6 lg:px-8 py-6 space-y-6 w-full">

        {/* KPI row */}
        <div>
          <h1 className="text-2xl font-bold text-[#142f45] mb-1">Explore Media Client Health</h1>
          <p className="text-slate-500 text-sm mb-6">Agency client accounts — monitor retainer health, campaign performance, and deliverables.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <KpiStatCard label="Total Clients" value={stats.total} icon={<Users size={24} />} accent="#142f45" bg="#142f45" />
            <KpiStatCard label="Healthy Clients" value={stats.healthy} icon={<ShieldCheck size={24} />} accent="#10b981" bg="#10b981" />
            <KpiStatCard label="At-Risk Clients" value={stats.atRisk + stats.critical} icon={<AlertTriangle size={24} />} accent="#f59e0b" bg="#f59e0b" />
            <KpiStatCard label="Avg Health Score" value={stats.avgHealth} icon={<Activity size={24} />} accent="#6366f1" bg="#6366f1" />
          </div>
        </div>

        {/* Client status board + sidebar */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <div className="xl:col-span-8">
            <ClientStatusBoard
              clients={ALL_CLIENTS}
              onClientClick={navigateToClientDashboard}
            />
            <div className="mt-4 text-right">
              <a
                href="/clients.html"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#142f45] hover:text-[#ee683b] no-underline transition-colors"
              >
                Open full client table <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="xl:col-span-4 space-y-5">
            <PremiumCard
              title="Needs Attention"
              subtitle={`${atRiskClients.length} clients flagged`}
              icon={<AlertTriangle size={18} />}
            >
              <div className="space-y-1 -my-2">
                {atRiskClients.slice(0, 6).map(c => (
                  <div key={c.id}>
                    <ListRow
                      avatar={<HealthRing score={c.healthScore} size={44} />}
                      title={c.name}
                      subtitle={c.aiFlags[0] || `${c.churnRisk}% churn risk`}
                      value={`${c.churnRisk}%`}
                      valueAccent={c.churnRisk >= 60 ? 'text-rose-600' : 'text-amber-600'}
                      onClick={() => navigateToClientDashboard(c.name)}
                    />
                  </div>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard title="Churn Prediction" subtitle="AI-generated risk scores" icon={<Brain size={18} />}>
              <div className="space-y-1 -my-2">
                {topChurn.map(c => (
                  <div key={c.id}>
                    <ListRow
                      avatar={
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-bold text-[#142f45]">
                          {clientInitials(c.name)}
                        </div>
                      }
                      title={c.name}
                      subtitle={c.category}
                      value={`${c.churnRisk}%`}
                      valueAccent={c.churnRisk >= 60 ? 'text-rose-600' : c.churnRisk >= 30 ? 'text-amber-600' : 'text-emerald-600'}
                      onClick={() => navigateToClientDashboard(c.name)}
                    />
                  </div>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard title="Biggest Movers" icon={<TrendingUp size={18} />}>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                    <TrendingUp size={14} /> Most Improved
                  </div>
                  {mostImproved.map(c => (
                    <div key={c.id}><ListRow title={c.name} subtitle={c.category} value={`+${c.monthlyChange}`} valueAccent="text-emerald-600" /></div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                    <TrendingDown size={14} /> Biggest Declines
                  </div>
                  {biggestDeclines.map(c => (
                    <div key={c.id}><ListRow title={c.name} subtitle={c.category} value={c.monthlyChange} valueAccent="text-rose-600" /></div>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>

        {/* Analytics row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PremiumCard title="Sentiment Overview" subtitle="Calls, meetings, emails & reviews" icon={<MessageSquare size={18} />}>
            <DonutChart
              segments={[
                { label: 'Positive', value: sentimentPositive, color: '#10b981' },
                { label: 'Neutral', value: sentimentNeutral, color: '#94a3b8' },
                { label: 'Negative', value: sentimentNegative, color: '#ef4444' },
              ]}
            />
            <p className="text-sm text-slate-500 mt-5 pt-4 border-t border-slate-100">
              Sentiment slightly declining · Frustration rising in 3 clients
            </p>
          </PremiumCard>

          <PremiumCard title="Communication Health" icon={<Phone size={18} />}>
            <div className="space-y-1 -my-2">
              {commClients.map(c => (
                <div key={c.id}>
                  <ListRow
                    avatar={
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold ${c.daysSinceContact >= 30 ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-[#142f45]'}`}>
                        {clientInitials(c.name)}
                      </div>
                    }
                    title={c.name}
                    subtitle={`Last meeting ${c.lastMeeting}`}
                    value={`${c.daysSinceContact}d`}
                    valueAccent={c.daysSinceContact >= 30 ? 'text-rose-600' : c.daysSinceContact >= 14 ? 'text-amber-600' : 'text-[#142f45]'}
                  />
                </div>
              ))}
            </div>
          </PremiumCard>

          <PremiumCard title="Delivery Health" subtitle="From Hive / ClickUp" icon={<Truck size={18} />}>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: 'Open Tasks', value: ALL_CLIENTS.reduce((s, c) => s + c.openTasks, 0) },
                { label: 'Overdue', value: ALL_CLIENTS.reduce((s, c) => s + c.overdueTasks, 0), accent: true },
                { label: 'Delayed', value: ALL_CLIENTS.reduce((s, c) => s + c.delayedDeliverables, 0) },
                { label: 'Blocked', value: ALL_CLIENTS.reduce((s, c) => s + c.blockedProjects, 0) },
              ].map(item => (
                <div key={item.label} className="rounded-xl bg-slate-50 p-4 text-center border border-slate-100">
                  <div className={`text-xl font-bold ${item.accent ? 'text-rose-600' : 'text-[#142f45]'}`}>{item.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase mb-2">Overdue by Client</div>
            {overdueClients.slice(0, 4).map(c => (
              <div key={c.id}><ListRow title={c.name} value={`${c.overdueTasks} tasks`} valueAccent="text-rose-600" /></div>
            ))}
          </PremiumCard>
        </div>

        {/* AI Recommendations + Relationship + Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PremiumCard title="AI Recommendations" subtitle="Actions for at-risk clients" icon={<Brain size={18} />} className="lg:col-span-1">
            <div className="space-y-3">
              {atRiskClients.filter(c => c.aiRecommendations.length > 0).slice(0, 4).map(c => (
                <div key={c.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-[#142f45] text-sm">{c.name}</span>
                    <RiskPill risk={c.risk} />
                  </div>
                  <ul className="space-y-1.5">
                    {c.aiRecommendations.slice(0, 2).map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <ArrowUpRight size={14} className="text-[#ee683b] shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </PremiumCard>

          <PremiumCard title="Relationship Health" icon={<Heart size={18} />}>
            <div className="space-y-3">
              {(ALL_CLIENTS.filter(c => c.meetingFrequency < 70).length > 0
                ? ALL_CLIENTS.filter(c => c.meetingFrequency < 70)
                : ALL_CLIENTS
              ).slice(0, 4).map(c => (
                <div key={c.id} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <div className="font-semibold text-[#142f45] text-sm mb-3">{c.name}</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { label: 'Meetings', val: c.meetingFrequency },
                      { label: 'Email', val: c.emailEngagement },
                      { label: 'Response', val: c.responseRate },
                    ].map(m => (
                      <div key={m.label}>
                        <div className={`text-lg font-bold ${m.val >= 70 ? 'text-emerald-600' : m.val >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>{m.val}%</div>
                        <div className="text-[10px] text-slate-500 uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PremiumCard>

          <PremiumCard title="AI Risk Flags" icon={<Star size={18} />}>
            <div className="space-y-1 -my-2">
              {aiRiskClients.map(c => (
                <div key={c.id}>
                  <ListRow
                    avatar={
                      <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-bold">
                        {clientInitials(c.name)}
                      </div>
                    }
                    title={c.name}
                    subtitle={c.aiFlags.join(' · ')}
                    onClick={() => navigateToClientDashboard(c.name)}
                  />
                </div>
              ))}
            </div>
          </PremiumCard>
        </div>

      </div>
    </AppShell>
  );
}
