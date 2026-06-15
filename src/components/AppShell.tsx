import React from 'react';
import { LayoutDashboard, Users, Bell, ArrowLeft } from 'lucide-react';

type NavItem = 'dashboard' | 'clients';

interface AppShellProps {
  activeNav: NavItem;
  title: string;
  titleIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function AppShell({ activeNav, title, titleIcon, children }: AppShellProps) {
  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = '/';
  };

  return (
    <div className="h-screen bg-[#eef1f6] font-sans text-slate-900 flex flex-col overflow-hidden">
      <header className="fixed top-0 left-0 right-0 h-24 md:h-28 bg-white/80 backdrop-blur-md border-b border-[#e6dec9] flex items-center z-30 flex-shrink-0">
        <div className="w-64 h-full border-r border-[#e6dec9] flex items-center justify-center flex-shrink-0">
          <a href="/" className="flex items-center justify-center h-full w-full px-4">
            <img src="/logo.svg" alt="Explore Media" className="h-20 md:h-24 opacity-90 object-contain max-w-full" />
          </a>
        </div>

        <div className="flex-1 flex items-center justify-between px-8 h-full relative">
          <div className="flex items-center gap-6">
            <button
              onClick={() => { window.location.href = '/'; }}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium bg-transparent border-0 cursor-pointer"
            >
              <ArrowLeft size={16} /> Back to Home
            </button>
          </div>

          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl text-[#142f45] hidden md:flex items-center gap-2 pointer-events-none">
            {titleIcon}
            {title}
          </h1>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors bg-transparent border-0 cursor-pointer">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-9 h-9 rounded-full bg-[#142f45] text-white flex items-center justify-center font-semibold text-sm shadow-sm ring-2 ring-white">
              AM
            </div>
            <div className="h-6 w-px bg-[#e6dec9]" />
            <button
              onClick={handleSignOut}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer border-0"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-24 md:pt-28 overflow-hidden">
        <aside className="w-64 bg-white border-r border-[#e6dec9] flex flex-col shrink-0 h-full relative z-20">
          <div className="py-6 flex-1 overflow-y-auto hidden-scrollbar">
            <div className="text-[11px] uppercase text-[#94a3b8] font-bold tracking-[0.05em] px-4 mb-2">
              Navigation
            </div>
            <nav className="flex flex-col gap-1 px-4">
              <NavButton
                href="/main-dashboard.html"
                icon={<LayoutDashboard size={18} />}
                label="Main Dashboard"
                isActive={activeNav === 'dashboard'}
              />
              <NavButton
                href="/clients.html"
                icon={<Users size={18} />}
                label="Clients"
                isActive={activeNav === 'clients'}
              />
            </nav>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto relative w-full bg-[#eef1f6]">
          {children}
        </main>
      </div>

      <style>{`
        .hidden-scrollbar::-webkit-scrollbar { width: 6px; }
        .hidden-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .hidden-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.1); border-radius: 20px; }
      `}</style>
    </div>
  );
}

function NavButton({ href, icon, label, isActive }: { href: string; icon: React.ReactNode; label: string; isActive: boolean }) {
  return (
    <a
      href={href}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 no-underline ${
        isActive ? 'bg-[#142f45]/[0.08] text-[#142f45]' : 'hover:bg-[#f8fafc] text-[#0c304f]'
      }`}
    >
      <span className={isActive ? 'text-[#142f45]' : 'text-[#607484]'}>{icon}</span>
      <span className={`text-sm font-medium ${isActive ? 'text-[#142f45]' : 'text-[#0c304f]'}`}>{label}</span>
    </a>
  );
}
