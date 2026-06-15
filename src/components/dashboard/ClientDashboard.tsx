import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles, AlertCircle, CheckCircle2, XCircle, Link2, 
  MousePointer, Image as ImageIcon, Eye, Calendar, Mail, FileText, 
  MapPin, TrendingUp, Star, Activity, ChevronDown, ChevronUp, DollarSign, Clock, ExternalLink, ArrowRight, Check
} from 'lucide-react';
import { CLIENT_AUDITS, NewsletterCampaign, GbpPost } from '../../data/clientAudits';
import { ALL_CLIENTS } from '../../data/clients';

interface ClientDashboardProps {
  clientName: string;
  onClientChange: (name: string) => void;
}

export default function ClientDashboard({ clientName, onClientChange }: ClientDashboardProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [filterText, setFilterText] = React.useState('');
  const [activeTab, setActiveTab] = React.useState<'seo' | 'campaigns'>('seo');
  
  // States for timeline filter & preview features
  const [newsletterFilter, setNewsletterFilter] = React.useState<'All' | 'Educational' | 'Seasonal Offer' | 'Newsletter' | 'Re-engagement'>('All');
  const [gbpPostFilter, setGbpPostFilter] = React.useState<'All' | 'Offer' | 'WhatsNew' | 'Event'>('All');
  const [expandedNewsletterIdx, setExpandedNewsletterIdx] = React.useState<number | null>(null);
  const [expandedGbpIdx, setExpandedGbpIdx] = React.useState<number | null>(null);
  
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

  const corePage = auditData.pages?.[0] || {
    url: "/services",
    pageName: "Core Services",
    wordCount: 1200,
    focusKeyword: "ac repair",
    keywordRanking: 3,
    indexedStatus: "Indexed" as const,
    dateIndexed: "Today",
    lastUpdated: "Today",
    internalLinks: 10,
    externalLinks: 3,
    ctaPresent: true,
    ctaDetails: "Yes (Phone Button)",
    metaDescriptionFilled: true,
    metaDescriptionLength: 150,
    metaDescriptionText: "",
    featuredImagePresent: true,
    featuredImageAlt: "Alt text set",
    organicClicks: 250,
    organicImpressions: 5000
  };

  const latestNewsletter = auditData.newsletterHistory?.[0] || { date: "Today", subject: "None", sentCount: 0, openRatePct: 0, clickRatePct: 0 };
  const totalNewsletters = auditData.newsletterHistory?.length || 0;

  const latestGbpPost = auditData.gbpPostHistory?.[0] || { date: "Today", content: "None", views: 0, clicks: 0 };
  const totalGbpPosts = auditData.gbpPostHistory?.length || 0;

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

  const featuredCards = [
    {
      title: "Overall SEO Health",
      value: `${auditData.overallHealthScore}/100 Score`,
      subText: `Status: ${auditData.overallHealthLabel}`,
      icon: <Star size={20} fill="currentColor" />,
      colorClass: auditData.overallHealthScore >= 80 ? "bg-emerald-50 text-emerald-600 border-emerald-100" : auditData.overallHealthScore >= 60 ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Focus Keyword & Rank",
      value: `"${corePage.focusKeyword}"`,
      subText: `Current Rank: #${corePage.keywordRanking}`,
      icon: <TrendingUp size={20} />,
      colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Organic Performance",
      value: `${corePage.organicClicks.toLocaleString()} Clicks`,
      subText: `${corePage.organicImpressions.toLocaleString()} Impressions`,
      icon: <Eye size={20} />,
      colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
    }
  ];

  const auditCards = [
    {
      title: "Word Count",
      value: `${corePage.wordCount.toLocaleString()} words`,
      subText: `Page: ${corePage.pageName}`,
      icon: <FileText size={20} />,
      colorClass: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Indexed Status",
      value: corePage.indexedStatus,
      subText: `Date: ${corePage.dateIndexed}`,
      icon: <CheckCircle2 size={20} />,
      colorClass: corePage.indexedStatus === 'Indexed' ? "bg-teal-50 text-teal-600 border-teal-100" : "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Last Updated",
      value: corePage.lastUpdated,
      subText: "Last audit check",
      icon: <Calendar size={20} />,
      colorClass: "bg-slate-50 text-slate-600 border-slate-100",
    },
    {
      title: "Links Audit",
      value: `${corePage.internalLinks} Int / ${corePage.externalLinks} Ext`,
      subText: "Internal vs External links count",
      icon: <Link2 size={20} />,
      colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      title: "CTA Present",
      value: corePage.ctaPresent ? "CTA Present" : "Missing CTA",
      subText: corePage.ctaDetails || "No CTAs configured",
      icon: <MousePointer size={20} />,
      colorClass: corePage.ctaPresent ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Meta Description",
      value: corePage.metaDescriptionFilled ? "Filled" : "Missing Description",
      subText: corePage.metaDescriptionFilled ? `${corePage.metaDescriptionLength} characters` : "Critically needs description",
      icon: <FileText size={20} />,
      colorClass: corePage.metaDescriptionFilled ? "bg-teal-50 text-teal-600 border-teal-100" : "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Featured Image & Alt",
      value: corePage.featuredImagePresent ? "Configured" : "Missing Image",
      subText: corePage.featuredImageAlt ? `Alt: "${corePage.featuredImageAlt.slice(0, 25)}..."` : "Alt tag is empty",
      icon: <ImageIcon size={20} />,
      colorClass: corePage.featuredImagePresent && corePage.featuredImageAlt ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Newsletter History",
      value: `${totalNewsletters} Campaigns`,
      subText: latestNewsletter.sentCount > 0 ? `Latest: ${latestNewsletter.openRatePct}% open rate` : "No newsletters sent",
      icon: <Mail size={20} />,
      colorClass: "bg-violet-50 text-violet-600 border-violet-100",
    },
    {
      title: "GBP Post History",
      value: `${totalGbpPosts} Posts`,
      subText: latestGbpPost.views > 0 ? `Latest: ${latestGbpPost.views} views / ${latestGbpPost.clicks} clicks` : "No recent map posts",
      icon: <MapPin size={20} />,
      colorClass: "bg-amber-50 text-amber-600 border-amber-100",
    }
  ];

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

      {/* Tab Selector with smooth sliding underline animation */}
      <div className="flex border-b border-slate-200/60 gap-8 pb-0 select-none">
        <button
          onClick={() => setActiveTab('seo')}
          className={`relative pb-3 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer bg-transparent border-0 select-none ${
            activeTab === 'seo'
              ? 'text-[#142f45] font-extrabold'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          <Activity size={16} className={`transition-transform duration-350 ${activeTab === 'seo' ? 'scale-110 text-[#ee683b]' : 'text-slate-400'}`} />
          SEO & Traffic Performance
          {activeTab === 'seo' && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#142f45]"
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('campaigns')}
          className={`relative pb-3 text-sm font-bold flex items-center gap-2 transition-all cursor-pointer bg-transparent border-0 select-none ${
            activeTab === 'campaigns'
              ? 'text-[#142f45] font-extrabold'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          <Mail size={16} className={`transition-transform duration-350 ${activeTab === 'campaigns' ? 'scale-110 text-[#ee683b]' : 'text-slate-400'}`} />
          Campaigns & Local Feed
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold transition-colors duration-250 ${
            activeTab === 'campaigns'
              ? 'bg-[#142f45]/10 text-[#142f45]'
              : 'bg-slate-100 text-slate-500'
          }`}>
            {totalNewsletters + totalGbpPosts}
          </span>
          {activeTab === 'campaigns' && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#142f45]"
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'seo' ? (
          <motion.div
            key="seo"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="space-y-8 w-full"
          >
            {/* AI Recommendations Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="group rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50/40 via-amber-50/20 to-white p-6 shadow-[0_4px_25px_rgba(238,104,59,0.04)] hover:shadow-[0_12px_35px_rgba(238,104,59,0.08)] hover:border-orange-350 hover:scale-[1.005] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Sparkles size={140} className="text-[#ee683b] group-hover:rotate-45 group-hover:scale-105 transition-all duration-750" />
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
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

      {/* Core Search Performance */}
      <div className="space-y-4">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pb-1 border-b border-slate-200/40">Core Search Performance</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + idx * 0.03 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(20,47,69,0.03)] p-5 flex items-start gap-4 hover:shadow-[0_12px_35px_rgba(20,47,69,0.08)] hover:-translate-y-1 hover:border-[#142f45]/25 hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${card.colorClass} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {card.icon}
              </div>

              {card.title === "Overall SEO Health" ? (
                <div className="flex items-center justify-between flex-1 gap-4 overflow-hidden">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{card.title}</span>
                    <div className="text-lg font-extrabold text-[#142f45]">{card.value}</div>
                    <span className="text-xs text-slate-500 font-semibold block">{card.subText}</span>
                  </div>
                  <div className="relative shrink-0 w-14 h-14">
                    <svg width="56" height="56" className="-rotate-90">
                      <circle cx="28" cy="28" r="23" fill="none" stroke="#f1f5f9" strokeWidth="4.5" />
                      <circle
                        cx="28"
                        cy="28"
                        r="23"
                        fill="none"
                        stroke={auditData.overallHealthScore >= 80 ? '#10b981' : auditData.overallHealthScore >= 60 ? '#f59e0b' : '#ef4444'}
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 23}
                        strokeDashoffset={2 * Math.PI * 23 * (1 - auditData.overallHealthScore / 100)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-extrabold text-[#142f45] text-xs">
                      {auditData.overallHealthScore}%
                    </div>
                  </div>
                </div>
              ) : card.title === "Focus Keyword & Rank" ? (
                <div className="space-y-2 overflow-hidden flex-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">{card.title}</span>
                  <div className="text-lg font-extrabold text-[#142f45] truncate" title={card.value}>{card.value}</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 mt-2">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Current Rank</span>
                      <span className="text-emerald-600 font-extrabold text-sm">#{corePage.keywordRanking}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Search Volume</span>
                      <span className="text-[#142f45] font-extrabold text-sm">1.2k/mo</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Competition</span>
                      <span className="text-[#142f45] font-extrabold text-sm">Medium</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Target page</span>
                      <span className="text-indigo-600 font-bold block truncate hover:underline" title={corePage.url}>{corePage.url}</span>
                    </div>
                  </div>
                </div>
              ) : card.title === "Organic Performance" ? (
                <div className="space-y-2 overflow-hidden flex-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">{card.title}</span>
                  <div className="text-lg font-extrabold text-[#142f45] truncate" title={card.value}>{card.value}</div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 mt-2">
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Clicks (30d)</span>
                      <span className="text-[#142f45] font-extrabold text-sm">{corePage.organicClicks.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Impressions</span>
                      <span className="text-[#142f45] font-extrabold text-sm">{corePage.organicImpressions.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Average CTR</span>
                      <span className="text-emerald-600 font-extrabold text-sm">{auditData.gsc.avgCtr}%</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">Avg Position</span>
                      <span className="text-indigo-600 font-extrabold text-sm">{auditData.gsc.avgPosition}</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>

      {/* On-Page & Local Listing Audits */}
      <div className="space-y-4">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pb-1 border-b border-slate-200/40">On-Page & Local Listing Audits</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {auditCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + idx * 0.03 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(20,47,69,0.03)] p-5 flex items-start gap-4 hover:shadow-[0_12px_35px_rgba(20,47,69,0.08)] hover:-translate-y-1 hover:border-[#142f45]/25 hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${card.colorClass} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {card.icon}
              </div>
              <div className="space-y-1 overflow-hidden flex-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">{card.title}</span>
                <div className="text-lg font-extrabold text-[#142f45] truncate" title={card.value}>{card.value}</div>
                <span className="text-xs text-slate-500 font-medium block truncate" title={card.subText}>{card.subText}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
          </motion.div>
        ) : (
          <motion.div
            key="campaigns"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="space-y-8 w-full animate-fadeIn"
          >
            {/* Marketing Activity Steppers & Feed (Timelines & GBP Posts) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid grid-cols-1 gap-6 w-full"
            >
        {/* Newsletter Campaign timeline */}
        <div className="group/section bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col hover:shadow-md hover:border-[#142f45]/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-5 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ee683b] flex items-center justify-center shadow-inner group-hover/section:scale-110 group-hover/section:rotate-6 transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-[#142f45] text-base tracking-tight">Newsletter Promotion History</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-bold tracking-wide uppercase">Cross-promotions and target updates</p>
              </div>
            </div>
            
            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Educational', 'Seasonal Offer', 'Newsletter', 'Re-engagement'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setNewsletterFilter(cat);
                    setExpandedNewsletterIdx(null);
                  }}
                  className={`px-3 py-1.5 text-xs font-extrabold rounded-full border transition-all cursor-pointer select-none ${
                    newsletterFilter === cat
                      ? 'bg-[#142f45] border-[#142f45] text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                  }`}
                >
                  {cat === 'Seasonal Offer' ? 'Offer' : cat === 'Re-engagement' ? 'Re-engage' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-5 w-full">
            {auditData.newsletterHistory
              .filter(item => newsletterFilter === 'All' || item.campaignType === newsletterFilter)
              .map((item, idx) => {
                const isExpanded = expandedNewsletterIdx === idx;
                
                // Helper to format date into month/day
                const dateParts = item.date.split('-');
                const displayMonth = dateParts[1] ? ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][parseInt(dateParts[1]) - 1] : 'DATE';
                const displayDay = dateParts[2] || '00';

                // Category tag color styling
                const categoryStyles = {
                  'Educational': 'bg-emerald-50 text-emerald-700 border-emerald-100',
                  'Seasonal Offer': 'bg-orange-50 text-orange-700 border-orange-100',
                  'Newsletter': 'bg-indigo-50 text-indigo-700 border-indigo-100',
                  'Re-engagement': 'bg-rose-50 text-rose-700 border-rose-100'
                }[item.campaignType];

                return (
                  <div key={idx} className="group flex gap-5 items-start relative">
                    {/* Connecting timeline line */}
                    {idx < auditData.newsletterHistory.length - 1 && (
                      <div className="absolute left-[24px] top-[45px] bottom-0 w-0.5 bg-slate-100" />
                    )}
                    
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 text-xs text-[#142f45] font-extrabold flex flex-col items-center justify-center shrink-0 leading-none shadow-sm group-hover:scale-105 group-hover:border-[#142f45]/20 transition-all duration-300">
                      <span className="text-[9px] text-slate-400 font-bold uppercase">{displayMonth}</span>
                      <span className="text-sm mt-0.5">{displayDay}</span>
                    </div>

                    <div className={`flex-1 bg-white border rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5 hover:border-[#142f45]/25 transition-all duration-300 ${isExpanded ? 'ring-1 ring-[#142f45] border-transparent' : 'border-slate-100'}`}>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border tracking-wider uppercase ${categoryStyles}`}>
                          {item.campaignType}
                        </span>
                        <button
                          onClick={() => setExpandedNewsletterIdx(isExpanded ? null : idx)}
                          className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-[#142f45] bg-transparent border-0 cursor-pointer"
                        >
                          {isExpanded ? (
                            <>Collapse <ChevronUp size={14} /></>
                          ) : (
                            <>Details & Preview <ChevronDown size={14} /></>
                          )}
                        </button>
                      </div>

                      {/* Subject Line with custom font hierarchy */}
                      <h4 
                        onClick={() => setExpandedNewsletterIdx(isExpanded ? null : idx)}
                        className="font-extrabold text-[#142f45] text-sm sm:text-base leading-snug cursor-pointer hover:text-[#ee683b] transition-colors tracking-tight"
                      >
                        {item.subject}
                      </h4>

                      {/* Stats Overview Grid */}
                      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-100 text-center">
                        <div>
                          <div className="text-base sm:text-lg font-extrabold text-[#142f45]">{item.sentCount.toLocaleString()}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Recipients</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-extrabold text-indigo-600">{item.openRatePct}%</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Open Rate</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-extrabold text-[#ee683b]">{item.clickRatePct}%</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Click Rate</div>
                        </div>
                      </div>

                      {/* Expandable detailed view (Mock Email Preview & Analytics) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-slate-100 space-y-4"
                          >
                            {/* Extra Analytics Details */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 p-2.5 rounded-lg text-center border border-slate-100">
                              <div>
                                <span className="text-[8px] text-slate-400 font-extrabold uppercase block">Unsubscribed</span>
                                <span className="text-xs font-bold text-slate-700">{item.unsubscribeRatePct}%</span>
                              </div>
                              <div>
                                <span className="text-[8px] text-slate-400 font-extrabold uppercase block">Audience</span>
                                <span className="text-[9px] font-bold text-slate-700 block truncate px-1" title={item.segment}>{item.segment}</span>
                              </div>
                              <div>
                                <span className="text-[8px] text-slate-400 font-extrabold uppercase block">Conversions</span>
                                <span className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-0.5">
                                  <CheckCircle2 size={10} /> {item.conversions}
                                </span>
                              </div>
                              <div>
                                <span className="text-[8px] text-slate-400 font-extrabold uppercase block">Revenue Generated</span>
                                <span className="text-xs font-extrabold text-emerald-700">${item.revenueGenerated.toLocaleString()}</span>
                              </div>
                            </div>

                            {/* Email Client Layout Mockup */}
                            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-sm bg-white">
                              {/* Email Client Header Bar */}
                              <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 text-[10px] font-semibold text-slate-500 space-y-0.5 select-none">
                                <div className="flex justify-between items-center">
                                  <span>From: <strong className="text-slate-700">{auditData.clientName} Admin</strong> &lt;newsletter@exploremedia-portal.com&gt;</span>
                                  <span className="text-[9px] text-slate-400 font-bold">{item.date}</span>
                                </div>
                                <div>To: <span className="text-slate-600">{item.segment}</span></div>
                                <div className="truncate">Subject: <strong className="text-slate-700">{item.subject}</strong></div>
                              </div>

                              {/* Email Body Mockup */}
                              <div className="p-4 space-y-3 bg-[#fafbfe]">
                                {/* Email Mock Graphic Banner */}
                                <div className="h-16 rounded-lg bg-gradient-to-r from-[#142f45] to-[#607484] flex items-center justify-center text-white px-4 relative overflow-hidden select-none">
                                  <div className="absolute top-0 right-0 p-3 opacity-10">
                                    <Mail size={40} />
                                  </div>
                                  <span className="font-extrabold text-xs tracking-wider uppercase">{auditData.clientName}</span>
                                </div>

                                {/* Email Letter Body */}
                                <div className="space-y-2 text-[11px] leading-relaxed text-slate-600 font-medium">
                                  <p className="font-extrabold text-slate-800">Hello Homeowner,</p>
                                  <p>
                                    We have an exciting announcement! To make sure your home stays safe, efficient, and comfortable this season, the specialists at <strong>{auditData.clientName}</strong> are releasing our top checkups and promotional upgrades.
                                  </p>
                                  <p>
                                    Take advantage of these limited-time deals and professional seasonal tips directly in your neighborhood.
                                  </p>
                                </div>

                                {/* Email Call to Action */}
                                <div className="pt-2 flex justify-center">
                                  <button className="bg-[#ee683b] hover:bg-[#d0572e] text-white font-extrabold text-[10px] px-5 py-2 rounded-full shadow-sm flex items-center gap-1 hover:scale-102 transition-all cursor-pointer border-0">
                                    {item.primaryCta} <ArrowRight size={10} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* GBP Map Posts */}
        <div className="group/section bg-white rounded-2xl border border-[#e6dec9] p-6 shadow-sm flex flex-col hover:shadow-md hover:border-[#142f45]/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-5 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ee683b] flex items-center justify-center shadow-inner group-hover/section:scale-110 group-hover/section:rotate-6 transition-all duration-300">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-extrabold text-[#142f45] text-base tracking-tight">Google Business Profile Posts</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-bold tracking-wide uppercase">Local maps post feed & interactions</p>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'Offer', 'WhatsNew'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => {
                    setGbpPostFilter(type);
                    setExpandedGbpIdx(null);
                  }}
                  className={`px-3 py-1.5 text-xs font-extrabold rounded-full border transition-all cursor-pointer select-none ${
                    gbpPostFilter === type
                      ? 'bg-[#142f45] border-[#142f45] text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                  }`}
                >
                  {type === 'WhatsNew' ? "What's New" : type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 w-full">
            {auditData.gbpPostHistory
              .filter(post => gbpPostFilter === 'All' || post.postType === gbpPostFilter)
              .map((post, idx) => {
                const isExpanded = expandedGbpIdx === idx;
                const ctr = ((post.clicks / post.views) * 100).toFixed(1);

                return (
                  <div 
                    key={idx} 
                    className={`border rounded-xl p-5 bg-white shadow-sm hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5 hover:border-[#142f45]/25 transition-all duration-300 ${
                      isExpanded ? 'ring-1 ring-[#142f45] border-transparent' : 'border-slate-100'
                    }`}
                  >
                    {/* Header bar with optimized typography */}
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <span className="bg-slate-50 border border-slate-200/50 text-slate-500 rounded-full px-3 py-1">
                          Posted {post.date}
                        </span>
                        <span className={`w-2 h-2 rounded-full ${post.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`} title={`Status: ${post.status}`} />
                      </div>
                      
                      <div className="flex items-center gap-4 text-slate-500">
                        <span className="flex items-center gap-1 font-bold"><Eye size={14} /> {post.views}</span>
                        <span className="flex items-center gap-1 font-bold"><MousePointer size={14} /> {post.clicks}</span>
                      </div>
                    </div>

                    {/* Post Content with custom font style for readability */}
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                      "{post.content}"
                    </p>

                    {/* Expand/Collapse Action Button & Badges */}
                    <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded border ${
                          post.postType === 'Offer' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-blue-50 text-blue-700 border-blue-100'
                        }`}>
                          {post.postType === 'WhatsNew' ? "What's New" : post.postType}
                        </span>
                        {post.offerDetails && (
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50/50 border border-dashed border-amber-200 px-2 py-0.5 rounded">
                            Promo Active
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setExpandedGbpIdx(isExpanded ? null : idx)}
                        className="flex items-center gap-1 text-xs font-bold text-[#142f45] hover:text-[#ee683b] bg-transparent border-0 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>Collapse Post <ChevronUp size={14} /></>
                        ) : (
                          <>Google Map Mockup <ChevronDown size={14} /></>
                        )}
                      </button>
                    </div>

                    {/* Expandable Google Maps Post Visual Preview */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-slate-100 space-y-4"
                        >
                          {/* Performance CTR stats */}
                          <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100 text-xs font-bold text-slate-500">
                            <span>Post CTR: <strong className="text-[#142f45]">{ctr}%</strong></span>
                            <span>Action Button: <strong className="text-indigo-600">{post.ctaType}</strong></span>
                            <span>Status: <strong className={post.status === 'Active' ? 'text-emerald-600' : 'text-slate-500'}>{post.status}</strong></span>
                          </div>

                          {/* Google Maps Post Card Layout */}
                          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white max-w-[420px] mx-auto">
                            {/* Business Profile Header */}
                            <div className="p-3 flex items-center gap-2.5 border-b border-slate-100 select-none">
                              <div className="w-8 h-8 rounded-full bg-[#142f45] text-white font-extrabold text-xs flex items-center justify-center shadow-inner">
                                {auditData.clientName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                              </div>
                              <div>
                                <div className="text-[11px] font-extrabold text-slate-800 flex items-center gap-1">
                                  {auditData.clientName}
                                  <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-[7px]" title="Verified Listing">✓</span>
                                </div>
                                <div className="text-[9px] text-slate-400 font-bold">Local Service Provider • {post.date}</div>
                              </div>
                            </div>

                            {/* Simulated Graphic Banner representing post content */}
                            <div className="h-32 bg-gradient-to-br from-slate-50 to-[#eae0d3]/30 flex flex-col items-center justify-center p-4 border-b border-slate-100 relative overflow-hidden select-none">
                              <div className="absolute top-0 right-0 p-4 opacity-5">
                                <MapPin size={80} />
                              </div>
                              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#142f45] mb-2">
                                {post.postType === 'Offer' ? <Sparkles size={18} className="text-[#ee683b]" /> : <MapPin size={18} />}
                              </div>
                              <span className="text-[10px] font-extrabold text-[#142f45] text-center tracking-tight px-3 leading-snug">
                                {post.mediaDescription}
                              </span>
                            </div>

                            {/* Post Body & Action */}
                            <div className="p-4 space-y-3.5 bg-white">
                              <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                                {post.content}
                              </p>

                              {/* Promo details box if offer is present */}
                              {post.offerDetails && (
                                <div className="bg-amber-50/40 border border-dashed border-amber-200 p-2.5 rounded-xl text-center select-none">
                                  <div className="text-[8px] text-amber-700 font-extrabold uppercase tracking-wide">Google Maps Exclusive Offer</div>
                                  <div className="text-[11px] font-extrabold text-slate-800 mt-1">{post.offerDetails}</div>
                                  <div className="text-[9px] text-slate-400 font-bold mt-0.5">Show this post to claim your coupon</div>
                                </div>
                              )}

                              {/* Call to action button */}
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-[9px] text-slate-400 font-bold select-none">Google Search & Maps Feed</span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[10px] px-4 py-1.5 rounded-lg flex items-center gap-1 shadow-2xs transition-all cursor-pointer border-0">
                                  {post.ctaType}
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
          </div>
        </div>
      </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
