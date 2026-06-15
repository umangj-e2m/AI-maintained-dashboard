import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, AlertCircle, CheckCircle2, ArrowRight,
  TrendingUp, TrendingDown, Users, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { AppShell } from './components/AppShell';
import { StatusDot } from './components/StatusDot';
import { ALL_CLIENTS, navigateToClientDashboard } from './data/clients';

const PAGE_SIZE = 15;

export default function ClientsPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filteredClients = ALL_CLIENTS.filter(client => {
    if (search && !client.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredClients.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const goToPage = (p: number) => {
    setPage(Math.max(1, Math.min(p, totalPages)));
  };

  return (
    <AppShell
      activeNav="clients"
      title="Clients"
      titleIcon={<Users size={20} className="text-[#607484]" />}
    >
      <div className="relative z-10 px-8 pt-6 pb-8 w-full min-h-full flex flex-col">
        <div className="flex justify-between items-center mb-6 z-20">
          <div className="text-lg font-bold text-[#142f45] tracking-tight">
            All Clients ({filteredClients.length})
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e6dec9] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#142f45]/20 focus:border-[#142f45] transition-all placeholder:text-slate-400 shadow-sm"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-[#e6dec9] shadow-sm overflow-hidden flex-1 flex flex-col relative z-20"
        >
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e6dec9] text-[#64748b] text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-bold whitespace-nowrap">Health Status & Client</th>
                  <th className="px-6 py-4 font-bold">Category</th>
                  <th className="px-6 py-4 font-bold">Health Score</th>
                  <th className="px-6 py-4 font-bold">Risk</th>
                  <th className="px-6 py-4 font-bold">Alerts</th>
                  <th className="px-6 py-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="popLayout">
                  {paginatedClients.map((client) => (
                    <motion.tr
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        opacity: { duration: 0.2 },
                        y: { duration: 0.2 },
                        layout: { type: 'spring', stiffness: 500, damping: 50 },
                      }}
                      key={client.id}
                      className="border-b border-slate-100 hover:bg-[#f8fafc] transition-colors group cursor-pointer"
                      onClick={() => navigateToClientDashboard(client.name)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          <StatusDot status={client.status} />
                          <div>
                            <div className="font-semibold text-slate-800 text-[14px]">{client.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5">Checked {client.lastChecked}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <span className="px-2.5 py-1 bg-slate-100 text-[#475569] rounded-md text-xs font-medium whitespace-nowrap border border-slate-200">
                          {client.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${client.healthScore >= 80 ? 'text-[#059669]' : client.healthScore >= 60 ? 'text-[#d97706]' : 'text-[#dc2626]'}`}>
                            {client.healthScore}/100
                          </span>
                          {client.trend === 'up' ? <TrendingUp size={14} className="text-[#10b981]" /> : <TrendingDown size={14} className="text-[#ef4444]" />}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                          client.risk === 'Low' ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : client.risk === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : client.risk === 'High' ? 'bg-orange-50 text-orange-700 border-orange-200'
                          : 'bg-rose-50 text-rose-700 border-rose-200'
                        }`}>
                          {client.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {client.alerts > 0 ? (
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-max border ${client.status === 'red' ? 'bg-[#fef2f2] text-[#dc2626] border-[#fee2e2]' : 'bg-[#fffbeb] text-[#d97706] border-[#fef3c7]'}`}>
                            <AlertCircle size={12} /> {client.alerts} Alerts
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 w-max border bg-[#ecfdf5] text-[#059669] border-[#d1fae5]">
                            <CheckCircle2 size={12} /> Clear
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          className="p-2 text-slate-400 group-hover:text-[#142f45] group-hover:bg-[#f1f5f9] rounded-lg transition-all bg-transparent border-0 cursor-pointer"
                          onClick={(e) => { e.stopPropagation(); navigateToClientDashboard(client.name); }}
                        >
                          <ArrowRight size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {paginatedClients.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center">
                        <Search size={32} className="block mb-4 text-slate-300" />
                        <span className="text-base font-medium">No clients found matching your criteria.</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {filteredClients.length > 0 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#e6dec9] bg-[#f8fafc]/60">
              <span className="text-sm text-slate-500">
                Showing {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, filteredClients.length)} of {filteredClients.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="p-2 rounded-lg border border-[#e6dec9] bg-white hover:bg-[#f8fafc] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium border cursor-pointer ${
                      p === currentPage
                        ? 'bg-[#142f45] text-white border-[#142f45]'
                        : 'bg-white text-slate-600 border-[#e6dec9] hover:bg-[#f8fafc]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="p-2 rounded-lg border border-[#e6dec9] bg-white hover:bg-[#f8fafc] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AppShell>
  );
}
