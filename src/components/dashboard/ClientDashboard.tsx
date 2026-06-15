import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles, AlertCircle, CheckCircle2, XCircle, Link2, 
  MousePointer, Image as ImageIcon, Eye, Calendar, Mail, FileText, 
  MapPin, TrendingUp, Star, Activity, ChevronDown
} from 'lucide-react';
import { CLIENT_AUDITS } from '../../data/clientAudits';
import { ALL_CLIENTS } from '../../data/clients';

interface ClientDashboardProps {
  clientName: string;
  onClientChange: (name: string) => void;
}

export default function ClientDashboard({ clientName, onClientChange }: ClientDashboardProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [filterText, setFilterText] = React.useState('');
  const auditData = CLIENT_AUDITS[clientName] || CLIENT_AUDITS["Pure Air Solutions"];

  // Helper for overall health status styling
  const healthColors = {
    Green: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', dot: 'bg-emerald-500' },
    Yellow: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', dot: 'bg-amber-500' },
    Red: { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', dot: 'bg-rose-500' }
  }[auditData.overallHealthLabel];

  // Calculations for KPI cards
  const totalPages = auditData.pages.length;
  const avgWordCount = Math.round(auditData.pages.reduce((acc, p) => acc + p.wordCount, 0) / totalPages);
  const totalClicks = auditData.pages.reduce((acc, p) => acc + p.organicClicks, 0);
  const allIndexed = auditData.pages.every(p => p.indexedStatus === 'Indexed');

  // SVG Chart Generators (highly interactive and responsive)
  
  // 1. GA4 Daily Conversions & Revenue Line-Bar Chart (Screenshot 1)
  const renderGa4TrendChart = () => {
    const trend = auditData.ga4.trend;
    const maxRevenue = Math.max(...trend.map(t => t.revenue)) || 1;
    const maxConversions = Math.max(...trend.map(t => t.conversions)) || 1;
    const padding = 35;
    const width = 680;
    const height = 220;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const points = trend.map((t, idx) => {
      const x = padding + (idx / (trend.length - 1)) * chartW;
      const y = height - padding - (t.conversions / maxConversions) * chartH;
      return { x, y, ...t };
    });

    const pathD = points.length > 0 
      ? `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ') 
      : '';

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#607484" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#607484" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + ratio * chartH}
            x2={width - padding}
            y2={padding + ratio * chartH}
            stroke="#f1f5f9"
            strokeWidth="1"
          />
        ))}
        {/* Revenue Bars */}
        {trend.map((t, idx) => {
          const barW = chartW / trend.length * 0.55;
          const barH = (t.revenue / maxRevenue) * chartH;
          const x = padding + (idx / (trend.length - 1)) * chartW - barW / 2;
          const y = height - padding - barH;
          return (
            <rect
              key={idx}
              x={x}
              y={y}
              width={barW}
              height={barH}
              fill="url(#barGrad)"
              rx="2"
            />
          );
        })}
        {/* Conversions Line */}
        <path d={pathD} fill="none" stroke="#142f45" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Line Data Circles */}
        {points.map((p, idx) => (
          <circle
            key={idx}
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill="#ffffff"
            stroke="#142f45"
            strokeWidth="2.5"
          />
        ))}
        {/* Labels X Axis */}
        {trend.map((t, idx) => {
          if (idx % Math.ceil(trend.length / 5) !== 0 && idx !== trend.length - 1) return null;
          const x = padding + (idx / (trend.length - 1)) * chartW;
          return (
            <text
              key={idx}
              x={x}
              y={height - 12}
              textAnchor="middle"
              className="text-[10px] fill-slate-400 font-bold"
            >
              {t.date.split('-').slice(1).join('-') || t.date}
            </text>
          );
        })}
      </svg>
    );
  };

  // 2. GSC Daily Performance Trend Line Area Chart (Screenshot 2)
  const renderGscTrendChart = () => {
    const trend = auditData.gsc.trend;
    const maxClicks = Math.max(...trend.map(t => t.clicks)) || 1;
    const maxImpressions = Math.max(...trend.map(t => t.impressions)) || 1;
    const padding = 35;
    const width = 680;
    const height = 220;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const clicksPoints = trend.map((t, idx) => {
      const x = padding + (idx / (trend.length - 1)) * chartW;
      const y = height - padding - (t.clicks / maxClicks) * chartH;
      return { x, y };
    });

    const impressionsPoints = trend.map((t, idx) => {
      const x = padding + (idx / (trend.length - 1)) * chartW;
      const y = height - padding - (t.impressions / maxImpressions) * chartH;
      return { x, y };
    });

    const clicksPathD = clicksPoints.length > 0 
      ? `M ${clicksPoints[0].x} ${clicksPoints[0].y} ` + clicksPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ') 
      : '';
    const clicksAreaD = clicksPoints.length > 0 
      ? `${clicksPathD} L ${clicksPoints[clicksPoints.length - 1].x} ${height - padding} L ${clicksPoints[0].x} ${height - padding} Z` 
      : '';

    const impressionsPathD = impressionsPoints.length > 0 
      ? `M ${impressionsPoints[0].x} ${impressionsPoints[0].y} ` + impressionsPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ') 
      : '';
    const impressionsAreaD = impressionsPoints.length > 0 
      ? `${impressionsPathD} L ${impressionsPoints[impressionsPoints.length - 1].x} ${height - padding} L ${impressionsPoints[0].x} ${height - padding} Z` 
      : '';

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        <defs>
          <linearGradient id="clicksAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#142f45" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#142f45" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="imprAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#607484" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#607484" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + ratio * chartH}
            x2={width - padding}
            y2={padding + ratio * chartH}
            stroke="#f1f5f9"
            strokeWidth="1"
          />
        ))}
        {/* Areas */}
        <path d={impressionsAreaD} fill="url(#imprAreaGrad)" />
        <path d={clicksAreaD} fill="url(#clicksAreaGrad)" />

        {/* Lines */}
        <path d={impressionsPathD} fill="none" stroke="#607484" strokeWidth="2.5" strokeDasharray="3 3" />
        <path d={clicksPathD} fill="none" stroke="#142f45" strokeWidth="3" />

        {/* Data Circles */}
        {clicksPoints.map((p, idx) => (
          <circle key={idx} cx={p.x} cy={p.y} r="4" fill="#ffffff" stroke="#142f45" strokeWidth="2.5" />
        ))}
        {impressionsPoints.map((p, idx) => (
          <circle key={idx} cx={p.x} cy={p.y} r="4" fill="#ffffff" stroke="#607484" strokeWidth="2" />
        ))}

        {/* Labels X Axis */}
        {trend.map((t, idx) => {
          if (idx % Math.ceil(trend.length / 5) !== 0 && idx !== trend.length - 1) return null;
          const x = padding + (idx / (trend.length - 1)) * chartW;
          return (
            <text
              key={idx}
              x={x}
              y={height - 12}
              textAnchor="middle"
              className="text-[10px] fill-slate-400 font-bold"
            >
              {t.date.split('-').slice(1).join('-') || t.date}
            </text>
          );
        })}
      </svg>
    );
  };

  // 3. GBP Profile Views Stacked Bar Chart (Screenshot 4)
  const renderGbpViewsChart = () => {
    const trend = auditData.gbp.viewsTrend;
    const maxVal = Math.max(...trend.map(t => t.searchViews + t.mapsViews)) || 1;
    const padding = 35;
    const width = 680;
    const height = 220;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + ratio * chartH}
            x2={width - padding}
            y2={padding + ratio * chartH}
            stroke="#f1f5f9"
            strokeWidth="1"
          />
        ))}
        {/* Stacked Bars */}
        {trend.map((t, idx) => {
          const barW = chartW / trend.length * 0.45;
          const searchH = (t.searchViews / maxVal) * chartH;
          const mapsH = (t.mapsViews / maxVal) * chartH;
          
          const x = padding + (idx / (trend.length - 1)) * chartW - barW / 2;
          const searchY = height - padding - searchH;
          const mapsY = searchY - mapsH;

          return (
            <g key={idx}>
              <rect x={x} y={searchY} width={barW} height={searchH} fill="#142f45" rx="1" />
              <rect x={x} y={mapsY} width={barW} height={mapsH} fill="#ee683b" rx="1" />
            </g>
          );
        })}
        {/* Labels X Axis */}
        {trend.map((t, idx) => {
          const x = padding + (idx / (trend.length - 1)) * chartW;
          return (
            <text
              key={idx}
              x={x}
              y={height - 12}
              textAnchor="middle"
              className="text-[10px] fill-slate-400 font-bold"
            >
              {t.month}
            </text>
          );
        })}
      </svg>
    );
  };

  return (
    <div className="relative z-10 px-8 py-6 w-full space-y-8 max-w-[1600px] mx-auto">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-50 text-[#142f45] rounded-lg border border-[#e6dec9] transition-all cursor-pointer shadow-sm hover:scale-[1.01] text-left select-none"
                >
                  <span className="text-sm font-bold text-[#142f45]">{auditData.clientName}</span>
                  <ChevronDown size={14} className={`text-slate-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50 max-h-96 overflow-y-auto hidden-scrollbar">
                      <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                        Switch Client
                      </div>
                      
                      <div className="px-3 py-2 border-b border-slate-100">
                        <input
                          type="text"
                          placeholder="Search clients..."
                          value={filterText}
                          onChange={(e) => setFilterText(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#142f45]/20 focus:border-[#142f45] placeholder:text-slate-400 text-slate-700"
                        />
                      </div>

                      <div className="py-1 animate-fadeIn">
                        {ALL_CLIENTS.filter(c => c.name.toLowerCase().includes(filterText.toLowerCase())).map((client) => {
                          const isSelected = client.name === auditData.clientName;
                          const dotColor = client.status === 'green' ? 'bg-emerald-500' : client.status === 'yellow' ? 'bg-amber-500' : 'bg-rose-500';
                          return (
                            <button
                              key={client.id}
                              onClick={() => {
                                onClientChange(client.name);
                                setDropdownOpen(false);
                                setFilterText('');
                              }}
                              className={`w-full flex items-center justify-between px-4 py-2 hover:bg-slate-50 transition-colors text-left border-0 cursor-pointer ${
                                isSelected ? 'bg-[#142f45]/[0.04]' : 'bg-transparent'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                                <span className={`text-xs font-bold ${isSelected ? 'text-[#142f45]' : 'text-slate-700'}`}>
                                  {client.name}
                                </span>
                              </div>
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                                client.healthScore >= 80 ? 'bg-emerald-50 text-emerald-600' : client.healthScore >= 60 ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                              }`}>
                                {client.healthScore}%
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${healthColors.bg} ${healthColors.text} ${healthColors.border}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${healthColors.dot}`} />
                {auditData.overallHealthScore}/100 Health
              </span>
            </div>
          </div>
        </div>

        <div className="text-sm sm:text-base text-slate-500 font-medium">
          Last refreshed: <span className="text-[#142f45] font-bold">Today (auto-synced)</span>
        </div>
      </div>

      {/* AI Recommendations Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50/40 via-amber-50/20 to-white p-6 shadow-[0_4px_25px_rgba(238,104,59,0.04)] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <Sparkles size={140} className="text-[#ee683b]" />
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 shadow-inner">
            <Sparkles size={24} />
          </div>
          <div className="flex-1 space-y-2.5">
            <h2 className="text-sm font-bold text-orange-700 uppercase tracking-widest">AI Content Recommendations & Action Plan</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-[#142f45] font-semibold pt-1">
              {auditData.aiRecommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-orange-500 shrink-0 mt-1.5">✦</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Executive KPI Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {/* Health score */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(20,47,69,0.05)] p-6 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">SEO Health Score</span>
            <div className="text-3xl font-extrabold text-[#142f45]">{auditData.overallHealthScore}%</div>
            <span className="text-xs text-slate-500 font-bold block">Technical & Content Audit</span>
          </div>
          <div className="relative shrink-0 w-16 h-16">
            <svg width="64" height="64" className="-rotate-90">
              <circle cx="32" cy="32" r="26" fill="none" stroke="#f1f5f9" strokeWidth="5.5" />
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke={auditData.overallHealthScore >= 80 ? '#10b981' : auditData.overallHealthScore >= 60 ? '#f59e0b' : '#ef4444'}
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 26}
                strokeDashoffset={2 * Math.PI * 26 * (1 - auditData.overallHealthScore / 100)}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-extrabold text-[#142f45] text-sm">
              {auditData.overallHealthScore}
            </div>
          </div>
        </div>

        {/* GA4 Total Events */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(20,47,69,0.05)] p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
            <TrendingUp size={24} />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">GA4 Monthly Events</span>
            <div className="text-3xl font-extrabold text-[#142f45]">{auditData.ga4.totalEvents.toLocaleString()}</div>
            <span className="text-xs text-emerald-600 font-bold block mt-0.5">▲ 7.4% vs last period</span>
          </div>
        </div>

        {/* GSC Click Stats */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(20,47,69,0.05)] p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <TrendingUp size={24} />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">GSC Clicks (30d)</span>
            <div className="text-3xl font-extrabold text-[#142f45]">{auditData.gsc.totalClicks.toLocaleString()}</div>
            <span className="text-xs text-emerald-600 font-bold block mt-0.5">▲ 21.3% click rate increase</span>
          </div>
        </div>

        {/* GBP Reviews count */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(20,47,69,0.05)] p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
            <Star size={24} fill="currentColor" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">GBP Reviews Rating</span>
            <div className="text-3xl font-extrabold text-[#142f45]">{auditData.gbp.avgRating} / 5.0</div>
            <span className="text-xs text-slate-500 font-bold block mt-0.5">{auditData.gbp.totalReviews} total business reviews</span>
          </div>
        </div>
      </motion.div>

      {/* GA4 Analytics & GSC Data Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
            <Activity size={18} />
          </div>
          <h2 className="text-lg font-bold text-[#142f45]">Web Traffic Analytics (GA4) & GSC Trends</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Event Share Donut */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col justify-between">
            <h3 className="font-bold text-[#142f45] text-sm mb-4 pb-2 border-b border-slate-100">Event Distribution share</h3>
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 justify-center">
              <div
                className="w-32 h-32 rounded-full shrink-0 shadow-inner relative flex items-center justify-center"
                style={{
                  background: 'conic-gradient(#142f45 0% 35%, #607484 35% 50%, #ee683b 50% 62%, #0c304f 62% 70%, #eae0d3 70% 100%)',
                  mask: 'radial-gradient(circle, transparent 60%, black 61%)',
                  WebkitMask: 'radial-gradient(circle, transparent 60%, black 61%)'
                }}
              />
              <div className="space-y-2 w-full">
                {auditData.ga4.eventShare.map((e, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: e.color }} />
                      <span className="text-[#142f45] font-bold">{e.name}</span>
                    </div>
                    <span className="text-slate-500 font-bold">{e.count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversions & Revenue Line-Bar Chart */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#142f45] text-sm">Daily Conversions & Revenue trend</h3>
              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-[#142f45] rounded-full" /> Conversions</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-[#607484] rounded-sm" /> Revenue</span>
              </div>
            </div>
            <div className="h-56 w-full">
              {renderGa4TrendChart()}
            </div>
          </div>
        </div>

        {/* GSC Click/Impressions trend line area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#142f45] text-sm">Daily Performance Trend (Clicks vs Impressions)</h3>
              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-[#142f45] rounded-full" /> Clicks</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-[#607484] rounded-full stroke-dash" /> Impressions</span>
              </div>
            </div>
            <div className="h-56 w-full">
              {renderGscTrendChart()}
            </div>
          </div>

          {/* Top Events small list table */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col justify-between">
            <h3 className="font-bold text-[#142f45] text-sm mb-4 pb-2 border-b border-slate-100">Top Analytics Events</h3>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-2 px-3">Event Name</th>
                    <th className="py-2 px-3 text-right">Count</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-semibold text-slate-700 divide-y divide-slate-100">
                  {auditData.ga4.topEvents.map((e, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-3 font-extrabold text-[#142f45]">{e.name}</td>
                      <td className="py-2.5 px-3 text-right text-[#607484] font-bold">{e.count.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SEO Page Audit Table */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-2xl border border-[#e6dec9] shadow-sm overflow-hidden flex flex-col relative"
      >
        <div className="px-6 py-4.5 bg-[#f8fafc] border-b border-[#e6dec9] flex items-center justify-between">
          <div className="font-bold text-[#142f45] text-base">Detailed Page-Level SEO Audits ({totalPages} service pages)</div>
          <span className="text-xs text-slate-400 font-semibold">Continuous crawling metrics active</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc]/50 text-slate-400 text-xs uppercase font-bold tracking-wider border-b border-slate-100">
                <th className="px-6 py-4">Page Information</th>
                <th className="px-6 py-4">Focus Keyword & Position</th>
                <th className="px-6 py-4">Meta Description Status</th>
                <th className="px-6 py-4">Featured Image & Alt</th>
                <th className="px-6 py-4">CTA & Links</th>
                <th className="px-6 py-4">Indexed Date</th>
                <th className="px-6 py-4">Organic Performance</th>
                <th className="px-6 py-4 text-right">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm sm:text-base font-semibold text-slate-700">
              {auditData.pages.map((page, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4.5">
                    <div>
                      <div className="font-extrabold text-[#142f45] text-[15px]">{page.pageName}</div>
                      <div className="text-xs text-slate-400 mt-1 font-mono">{page.url}</div>
                      <div className="text-xs text-[#607484] mt-1.5 font-bold">
                        Word Count: <span className={page.wordCount >= 1000 ? 'text-emerald-600' : 'text-amber-600'}>{page.wordCount} words</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4.5">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Focus Keyword</span>
                      <div className="font-bold text-[#142f45] mt-0.5">"{page.focusKeyword}"</div>
                      <div className="mt-1.5">
                        <span className={`px-2.5 py-1 rounded text-[11px] font-bold border ${
                          page.keywordRanking <= 3 ? 'bg-emerald-50 text-emerald-700 border-emerald-200/50' : 
                          page.keywordRanking <= 10 ? 'bg-amber-50 text-amber-700 border-amber-200/50' : 
                          'bg-rose-50 text-rose-700 border-rose-200/50'
                        }`}>
                          Rank #{page.keywordRanking}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4.5 max-w-[220px]">
                    {page.metaDescriptionFilled ? (
                      <div className="space-y-1">
                        <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold"><CheckCircle2 size={14} /> Filled ({page.metaDescriptionLength}ch)</span>
                        <p className="text-xs font-medium text-slate-400 line-clamp-2 leading-relaxed">{page.metaDescriptionText}</p>
                      </div>
                    ) : (
                      <span className="flex items-center gap-1 text-rose-500 text-xs font-bold"><XCircle size={14} /> Missing</span>
                    )}
                  </td>
                  <td className="px-6 py-4.5 max-w-[180px]">
                    {page.featuredImagePresent ? (
                      page.featuredImageAlt ? (
                        <div className="space-y-1">
                          <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold"><ImageIcon size={14} /> Alt Text Present</span>
                          <p className="text-xs font-medium text-slate-400 italic">"{page.featuredImageAlt}"</p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <span className="flex items-center gap-1 text-amber-500 text-xs font-bold"><AlertCircle size={14} /> Alt Missing</span>
                          <span className="text-[10px] text-slate-400 font-bold block">Alt tag empty</span>
                        </div>
                      )
                    ) : (
                      <span className="flex items-center gap-1 text-slate-400 text-xs font-bold"><XCircle size={14} /> No Image</span>
                    )}
                  </td>
                  <td className="px-6 py-4.5">
                    <div className="space-y-2">
                      <div className={`flex items-center gap-1 text-xs font-extrabold ${page.ctaPresent ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {page.ctaPresent ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                        {page.ctaPresent ? 'CTA Present' : 'No CTA'}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-bold">
                        <span className="flex items-center gap-0.5"><Link2 size={12} /> {page.internalLinks} Int</span>
                        <span className="flex items-center gap-0.5"><Link2 size={12} /> {page.externalLinks} Ext</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4.5">
                    {page.indexedStatus === 'Indexed' ? (
                      <div>
                        <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold"><CheckCircle2 size={14} /> Indexed</span>
                        <span className="text-xs text-slate-400 mt-1 block font-bold"><Calendar size={12} className="inline mr-1" /> {page.dateIndexed}</span>
                      </div>
                    ) : (
                      <div>
                        <span className={`flex items-center gap-1 text-xs font-bold ${page.indexedStatus === 'Pending' ? 'text-amber-500' : 'text-rose-500'}`}><AlertCircle size={14} /> {page.indexedStatus}</span>
                        <span className="text-[10px] text-slate-400 font-bold block mt-1">Requested</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4.5">
                    <div>
                      <div className="font-extrabold text-[#142f45]">{page.organicClicks} Clicks</div>
                      <div className="text-xs text-slate-400 mt-0.5 font-bold">{page.organicImpressions} Impressions</div>
                    </div>
                  </td>
                  <td className="px-6 py-4.5 text-right text-xs text-slate-400 font-bold">
                    {page.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Local Maps & GBP Reviews Reputation Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ee683b] flex items-center justify-center">
            <MapPin size={18} />
          </div>
          <h2 className="text-lg font-bold text-[#142f45]">Local Search Marketing & GBP Reputation</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Star Distribution chart */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col justify-between">
            <h3 className="font-bold text-[#142f45] text-sm mb-4 pb-1.5 border-b border-slate-100 flex items-center justify-between">
              <span>Rating distribution breakdown</span>
              <span className="text-slate-500 font-bold text-sm">{auditData.gbp.avgRating} / 5.0 rating</span>
            </h3>
            
            <div className="flex items-center gap-6 my-auto">
              <div className="text-center space-y-1 shrink-0">
                <div className="text-5xl font-extrabold text-[#142f45]">{auditData.gbp.avgRating}</div>
                <div className="flex gap-0.5 justify-center text-amber-400">
                  {Array(5).fill(null).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="currentColor" />
                  ))}
                </div>
                <div className="text-xs text-slate-400 font-bold">{auditData.gbp.totalReviews} total reviews</div>
              </div>

              <div className="flex-1 space-y-1.5">
                {auditData.gbp.ratingBreakdown.map((r, idx) => {
                  const maxCount = Math.max(...auditData.gbp.ratingBreakdown.map(x => x.count)) || 1;
                  const widthPct = (r.count / maxCount) * 100;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs font-semibold">
                      <span className="w-8 text-[#142f45] font-bold">{r.stars} Star</span>
                      <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: `${widthPct}%` }} />
                      </div>
                      <span className="w-8 text-right text-slate-400 font-bold">{r.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* GBP Stacked views chart */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#142f45] text-sm">Google Search & Maps views by source</h3>
              <div className="flex items-center gap-4 text-xs font-bold">
                <span className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 bg-[#142f45] rounded-sm" /> Search Views</span>
                <span className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 bg-[#ee683b] rounded-sm" /> Maps Views</span>
              </div>
            </div>
            <div className="h-56 w-full">
              {renderGbpViewsChart()}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Marketing Activity Steppers & Feed (Timelines & GBP Posts) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Newsletter Campaign timeline */}
        <div className="bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#ee683b] flex items-center justify-center shadow-inner">
              <Mail size={18} />
            </div>
            <div>
              <h3 className="font-bold text-[#142f45] text-sm">Newsletter Promotion History</h3>
              <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Cross-promotions and target updates</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5 overflow-y-auto max-h-[350px] pr-2">
            {auditData.newsletterHistory.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start relative pb-4 last:pb-0">
                {idx < auditData.newsletterHistory.length - 1 && (
                  <div className="absolute left-[17px] top-[30px] bottom-0 w-0.5 bg-slate-100" />
                )}
                
                <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-[10px] text-slate-450 font-extrabold flex flex-col items-center justify-center shrink-0 leading-none">
                  <span>{item.date.split('-')[1] || item.date.split('/')[0]}/{item.date.split('-')[2] || item.date.split('/')[1]}</span>
                </div>

                <div className="flex-1 bg-[#f8fafc]/50 border border-slate-100 rounded-xl p-4 shadow-2xs">
                  <div className="font-bold text-[#142f45] text-xs leading-relaxed">
                    {item.subject}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200/40 text-center font-bold">
                    <div>
                      <div className="text-xs text-[#142f45]">{item.sentCount}</div>
                      <div className="text-[8px] text-slate-400 uppercase tracking-widest mt-0.5">Recipients</div>
                    </div>
                    <div>
                      <div className="text-xs text-indigo-600">{item.openRatePct}%</div>
                      <div className="text-[8px] text-slate-400 uppercase tracking-widest mt-0.5">Open Rate</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#ee683b]">{item.clickRatePct}%</div>
                      <div className="text-[8px] text-slate-400 uppercase tracking-widest mt-0.5">Clicks</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GBP Map Posts */}
        <div className="bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#ee683b] flex items-center justify-center shadow-inner">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-bold text-[#142f45] text-sm">Google Business Profile Posts</h3>
              <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Local maps post feed & interactions</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[350px] pr-2">
            {auditData.gbpPostHistory.map((post, idx) => (
              <div key={idx} className="border border-slate-100 bg-[#f8fafc]/50 p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="bg-white border border-slate-200/50 rounded-full px-2.5 py-0.5">
                    Posted on {post.date}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-0.5"><Eye size={12} /> {post.views}</span>
                    <span className="flex items-center gap-0.5"><MousePointer size={12} /> {post.clicks}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  "{post.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
