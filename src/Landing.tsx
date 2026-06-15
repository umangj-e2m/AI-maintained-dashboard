import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart2, Crosshair, PhoneCall, Bot, LayoutTemplate, 
  Map as MapIcon, Users, Bell, Zap, ChevronRight, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock, TrendingUp, User, Lock, X
} from 'lucide-react';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-white dark:bg-slate-800 p-6 xl:p-8 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-all flex flex-col items-start"
  >
    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
  </motion.div>
);

const StepCard = ({ number, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-12 md:pl-0"
  >
    <div className="md:hidden absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold">
      {number}
    </div>
    <div className="hidden md:flex w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 items-center justify-center font-bold mb-6 mx-auto text-xl">
      {number}
    </div>
    <div className="md:text-center">
      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  </motion.div>
);

export default function Landing() {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Basic dark mode toggle logic based on a class or system pref, hardcoded to light for now but structured to support dark.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       // setIsDark(true); // Default to light right now per previous preference, uncomment to enable auto-dark
    }
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const handleSignIn = () => {
    setShowLoginModal(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/clients.html';
  };

  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-slate-900' : 'bg-slate-50'} font-sans overflow-x-hidden transition-colors duration-300`}>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 h-24 md:h-28 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.img 
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/logo.svg" 
              alt="Explore Media" 
              className="h-20 md:h-24 dark:invert"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">How it Works</a>
            <a href="#benefits" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Benefits</a>
          </div>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <button onClick={() => window.location.href='/clients.html'} className="text-sm font-medium text-slate-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0">
                  Go to Dashboard
                </button>
                <button onClick={handleSignOut} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer border-0">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button onClick={handleSignIn} className="text-sm font-medium text-slate-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0">
                  Sign In
                </button>
                <button onClick={handleSignIn} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer border-0">
                  Start Free Trial
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-orange-400/20 to-rose-400/20 blur-3xl opacity-50"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-bl from-blue-400/20 to-emerald-400/20 blur-3xl opacity-50"
          />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6"
            >
              <Zap size={16} /> <span>AI Automation Platform</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6"
            >
              Stop Manual Work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Start Smart Growth.
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 h-16"
            >
              <span className="font-mono text-slate-500 text-sm tracking-widest uppercase mb-2 block">Status:</span>
              <Typewriter text="Manual Work → Automated System" delay={50} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
            >
              Automate your SEO, content, call tracking, reporting, and team workflows — all in one intelligent platform. Save 20+ hours per week down to the minute.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-600 dark:text-slate-300 border-l-4 border-orange-500 pl-4 py-2 mt-4 max-w-lg"
            >
              <p className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                Platform Access & Inquiries
              </p>
              <p className="text-sm leading-relaxed">
                Explore Media is currently operating on an invite-only model. For custom integrations or platform inquiries, please contact us.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center perspective-[2000px]"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-rose-500/20 to-transparent blur-3xl rounded-full" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 via-emerald-500/20 to-transparent blur-3xl rounded-full" 
            />
            <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative z-10 transform translate-z-12">
              {/* Card Inner Animated Background */}
              <motion.div 
                 animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }} 
                 transition={{ repeat: Infinity, duration: 15, ease: 'linear', repeatType: 'mirror' }} 
                 className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.08]" 
                 style={{ 
                   backgroundImage: 'radial-gradient(circle at 0% 0%, #f97316 0%, transparent 50%), radial-gradient(circle at 100% 100%, #10b981 0%, transparent 50%)', 
                   backgroundSize: '200% 200%' 
                 }}
              />
              <div className="relative z-10">
                <div className="h-10 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-2 bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-sm">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 h-24 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-100 dark:border-slate-700/50 relative overflow-hidden flex flex-col justify-center px-4 shadow-sm">
                      <span className="text-xs font-semibold text-slate-500 uppercase">Hours Saved</span>
                      <motion.div 
                        key="hours-saved"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-2xl font-bold text-slate-900 dark:text-white mt-1 flex items-baseline gap-1"
                      >42 <span className="text-sm font-normal text-emerald-500">+12%</span></motion.div>
                    </div>
                    <div className="flex-1 h-24 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-100 dark:border-slate-700/50 relative overflow-hidden flex flex-col justify-center px-4 shadow-sm">
                      <span className="text-xs font-semibold text-slate-500 uppercase">Leads Auto-Qualified</span>
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-2xl font-bold text-slate-900 dark:text-white mt-1 flex items-baseline gap-1"
                      >1,204 <span className="text-sm font-normal text-emerald-500">+5%</span></motion.div>
                    </div>
                  </div>
  
                  <div className="h-48 bg-white/40 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-100 dark:border-slate-700/50 flex items-end p-4 gap-2">
                     {/* Fake chart bars */}
                     {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${height}%` }}
                         transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                         className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-sm opacity-90 shadow-sm"
                       />
                     ))}
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    {[1, 2, 3].map(i => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.2 }}
                        className="h-12 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-lg flex items-center px-4 gap-4 border border-slate-50 dark:border-slate-700/50 shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center">
                          <CheckCircle2 size={16} className="text-emerald-500" />
                        </div>
                        <div className="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                        <div className="w-16 h-3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Everything you need to automate</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Stop manually checking data. Our platform handles the heavy lifting, so you can focus on strategy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={BarChart2}
              title="SEO & Content Optimization"
              description="Detect weak service pages with priority suggestions. Access a full SEO health board and automatic competitor insights."
              delay={0.1}
            />
            <FeatureCard 
              icon={PhoneCall}
              title="Call Tracking & Leads"
              description="Auto-collect call data, leverage AI-based transcription analysis, and qualify SEM leads instantly."
              delay={0.2}
            />
            <FeatureCard 
              icon={Bot}
              title="Social Media Automation"
              description="AI filters your noise, summarizing vital conversations. Schedule posts directly from your linked Google Sheets."
              delay={0.3}
            />
            <FeatureCard 
              icon={LayoutTemplate}
              title="Website & QA Automation"
              description="Auto-update landing pages using templates and run continuous bug testing to eliminate scattered manual edits."
              delay={0.4}
            />
            <FeatureCard 
              icon={TrendUpIcon}
              title="Dashboards & Reporting"
              description="Auto-fetch cross-channel metrics. View real-time reports without manually hunting data across five different tools."
              delay={0.5}
            />
            <FeatureCard 
              icon={Users}
              title="Client & Team Automation"
              description="Maintain a dynamic auto-updating client map. Generate automated meeting agendas pre-filled with team performance data."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">How It Works</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Four simple steps to total operational clarity.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-700" />
            <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative">
              <StepCard number="1" title="Connect Tools" description="Link Google Analytics, CRM, Ads, and sites in seconds." delay={0.1} />
              <StepCard number="2" title="AI Analysis" description="System auto-collects and processes transcripts and metrics." delay={0.3} />
              <StepCard number="3" title="Alerts & Dashboards" description="Get prioritized recommendations and real-time visualization." delay={0.5} />
              <StepCard number="4" title="Automate Actions" description="Trigger landing page updates and reports without human touch." delay={0.7} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Why Choose Us?</h2>
              <ul className="space-y-6">
                {[
                  { icon: Clock, text: "Save time: Recover 10–20+ hours per week per manager." },
                  { icon: ShieldCheck, text: "Reduce human errors: Perfect, continuous QA." },
                  { icon: Zap, text: "Faster decision making with actionable alerts." },
                  { icon: TrendingUp, text: "Improve lead quality & ROI dramatically." },
                  { icon: CheckCircle2, text: "All-in-one centralized automation system." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-4 text-xl text-slate-300"
                  >
                    <div className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
                      <item.icon size={24} />
                    </div>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center">
               <h3 className="text-3xl font-bold mb-4">Start Automating Today</h3>
               <p className="text-slate-400 text-lg mb-8">Stop wasting time on repetitive work. Let the AI handle the data collection and formatting for you.</p>
               <div className="border border-white/10 p-6 rounded-2xl bg-white/5 backdrop-blur-md text-left mt-6">
                 <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                   <Zap className="text-orange-500" size={18} /> Enterprise Integrations & Support
                 </h4>
                 <p className="text-sm text-slate-300 leading-relaxed mb-4">
                   Unlock custom automated reporting, multi-channel API sync, and tailored SEO pipelines.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex-1">
             <img src="/logo.svg" alt="Explore Media" className="h-24 md:h-32 dark:invert opacity-80 mb-6" />
             <p className="text-slate-500 max-w-sm">
               Driving real, measurable results through automated intelligence. Stop manual work and start smart growth.
             </p>
          </div>
          <div className="flex gap-16 flex-wrap">
             <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Platform</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-orange-500 transition-colors">SEO Health</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Call Tracking</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Social Automation</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Reporting</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-orange-500 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-orange-500 transition-colors">GitHub</a></li>
                </ul>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col items-center sm:flex-row justify-between gap-4">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ExploreMedia Automation. All rights reserved.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 max-w-md w-full relative z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#142f45] dark:text-white">
                    Sign In
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Enter details to access your dashboard
                  </p>
                </div>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors border-0 cursor-pointer flex items-center justify-center"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Username or Email
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      required
                      type="text"
                      placeholder="e.g. admin"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:border-[#142f45] dark:focus:border-white transition-all text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      required
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:border-[#142f45] dark:focus:border-white transition-all text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#142f45] dark:bg-white text-white dark:text-[#142f45] py-3.5 rounded-full font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer border-0 mt-2 shadow-lg shadow-slate-900/10 dark:shadow-white/5"
                >
                  Continue
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const TrendUpIcon = (props) => <TrendingUp {...props} />;
