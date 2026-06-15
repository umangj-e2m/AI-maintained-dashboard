import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, Mail, MapPin, Sparkles, Star, TrendingUp, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock, User, Lock, X, Globe, BarChart3, Eye, MousePointer
} from 'lucide-react';

// Typewriter Effect for dynamic landing hero text
const Typewriter = ({ text, delay = 80 }) => {
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

  return <span className="font-mono text-orange-500 font-bold">{currentText}</span>;
};

// Premium Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group bg-white border border-[#e6dec9]/60 p-6 xl:p-8 rounded-3xl shadow-[0_4px_25px_rgba(20,47,69,0.02)] hover:shadow-[0_15px_40px_rgba(20,47,69,0.06)] hover:border-[#142f45]/20 transition-all duration-300 flex flex-col items-start"
  >
    <div className="w-12 h-12 bg-orange-50 text-[#ee683b] rounded-xl flex items-center justify-center mb-6 border border-orange-100 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-extrabold text-[#142f45] mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed font-semibold">{description}</p>
  </motion.div>
);

// Timeline/Process Step Card
const StepCard = ({ number, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-12 md:pl-0 group"
  >
    <div className="md:hidden absolute left-0 top-0 w-8 h-8 rounded-full bg-[#142f45] text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
      {number}
    </div>
    <div className="hidden md:flex w-12 h-12 rounded-full bg-[#142f45] text-white items-center justify-center font-extrabold mb-6 mx-auto text-lg shadow-md group-hover:scale-108 group-hover:bg-[#ee683b] transition-all duration-300">
      {number}
    </div>
    <div className="md:text-center">
      <h4 className="text-base font-extrabold text-[#142f45] mb-2">{title}</h4>
      <p className="text-slate-500 text-xs font-bold leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function Landing() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Hero Mockup tab switcher state & auto loop
  const [mockupTab, setMockupTab] = useState<'seo' | 'campaigns'>('seo');

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');

    // Auto switch hero mockup tabs every 4.5 seconds for dynamic display
    const interval = setInterval(() => {
      setMockupTab(prev => prev === 'seo' ? 'campaigns' : 'seo');
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleSignInClick = () => {
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
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden relative text-slate-800">
      
      {/* Mesh Gradients in the Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-orange-400/[0.08] to-rose-400/[0.06] blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 35, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[25%] -right-32 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-bl from-indigo-400/[0.06] to-emerald-400/[0.05] blur-3xl"
        />
      </div>

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 h-24 bg-white/80 backdrop-blur-md border-b border-[#e6dec9]/60 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/">
              <motion.img 
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src="/logo.svg" 
                alt="Explore Media" 
                className="h-20 md:h-24 object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
            <a href="#features" className="hover:text-[#142f45] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#142f45] transition-colors">Integration Flow</a>
            <a href="#benefits" className="hover:text-[#142f45] transition-colors">Core Benefits</a>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <button 
                  onClick={() => window.location.href='/clients.html'} 
                  className="text-sm font-extrabold text-[#142f45] hover:text-[#ee683b] transition-colors cursor-pointer bg-transparent border-0 select-none"
                >
                  Go to Dashboard
                </button>
                <button 
                  onClick={handleSignOut} 
                  className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-xs hover:scale-105 transition-all cursor-pointer border-0 shadow-sm"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={handleSignInClick} 
                  className="text-sm font-extrabold text-[#142f45] hover:text-[#ee683b] transition-colors cursor-pointer bg-transparent border-0 select-none"
                >
                  Sign In
                </button>
                <button 
                  onClick={handleSignInClick} 
                  className="bg-[#142f45] text-white px-5 py-2.5 rounded-full font-bold text-xs hover:scale-105 hover:bg-[#0c304f] transition-all cursor-pointer border-0 shadow-sm"
                >
                  Enter Portal
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Intro */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#ee683b] text-xs font-extrabold uppercase tracking-wider shadow-2xs"
            >
              <Sparkles size={14} /> <span>Invite-Only Performance Hub</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#142f45] leading-[1.15] tracking-tight"
            >
              Consolidated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Marketing Intelligence
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-14 flex flex-col justify-center border-l-2 border-[#ee683b] pl-3 py-0.5"
            >
              <span className="font-mono text-slate-400 text-[10px] font-extrabold uppercase tracking-widest block">System Mode:</span>
              <Typewriter text="Consolidated SEO, Analytics & Campaigns Auditing..." delay={60} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed"
            >
              ExploreMedia delivers a unified consolidated dashboard monitoring website-level SEO audits, GA4/GSC performance trends, Google Ads ROI, and local marketing campaign timelines (Email newsletter campaigns & GBP local posts) in one beautiful invite-only interface.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white border border-[#e6dec9]/60 p-5 rounded-2xl shadow-2xs"
            >
              <p className="font-extrabold text-[#142f45] text-sm mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#ee683b]" /> Client Portal Registration
              </p>
              <p className="text-xs text-slate-400 font-bold leading-relaxed">
                Platform registration is restricted to managed campaigns. If you have been provided with access credentials, please sign in.
              </p>
            </motion.div>
          </div>

          {/* Hero Right Mockup - Live Simulating Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative flex items-center justify-center"
          >
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 via-indigo-400/5 to-transparent blur-3xl rounded-full pointer-events-none" />
            
            {/* Main Mockup Container */}
            <div className="w-full bg-white border border-[#e6dec9] rounded-[2rem] shadow-[0_10px_45px_rgba(20,47,69,0.06)] overflow-hidden relative select-none">
              
              {/* Simulated Browser Bar */}
              <div className="h-10 border-b border-slate-100 flex items-center justify-between px-4 bg-slate-50">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-extrabold font-mono tracking-wide">portal.exploremedia.com/dashboard</div>
                <div className="w-10" />
              </div>

              {/* Mockup Dashboard Content */}
              <div className="p-5 space-y-4">
                
                {/* Mockup Tab Selector */}
                <div className="flex border-b border-slate-100 gap-4 pb-0">
                  <button 
                    onClick={() => setMockupTab('seo')}
                    className={`pb-2.5 text-xs font-bold flex items-center gap-1.5 border-b-2 bg-transparent border-0 cursor-pointer transition-all ${
                      mockupTab === 'seo' ? 'border-[#142f45] text-[#142f45]' : 'border-transparent text-slate-400'
                    }`}
                  >
                    <Activity size={14} /> SEO & Traffic
                  </button>
                  <button 
                    onClick={() => setMockupTab('campaigns')}
                    className={`pb-2.5 text-xs font-bold flex items-center gap-1.5 border-b-2 bg-transparent border-0 cursor-pointer transition-all ${
                      mockupTab === 'campaigns' ? 'border-[#142f45] text-[#142f45]' : 'border-transparent text-slate-400'
                    }`}
                  >
                    <Mail size={14} /> Campaigns Feed
                  </button>
                </div>

                {/* Animated Mockup Tab Views */}
                <AnimatePresence mode="wait">
                  {mockupTab === 'seo' ? (
                    <motion.div 
                      key="mock-seo"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* KPI Grid */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl text-center">
                          <span className="text-[9px] font-bold text-slate-400 block uppercase">SEO Score</span>
                          <span className="text-sm font-extrabold text-[#142f45] block mt-1">94/100</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl text-center">
                          <span className="text-[9px] font-bold text-slate-400 block uppercase">Clicks (30d)</span>
                          <span className="text-sm font-extrabold text-indigo-600 block mt-1">420 Clicks</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl text-center">
                          <span className="text-[9px] font-bold text-slate-400 block uppercase">Indexed Status</span>
                          <span className="text-xs font-extrabold text-emerald-600 flex items-center justify-center gap-0.5 mt-1">
                            <CheckCircle2 size={12} /> Indexed
                          </span>
                        </div>
                      </div>

                      {/* Clicks Trend Chart Mockup */}
                      <div className="bg-[#fafbfe] border border-slate-100 p-4 rounded-2xl space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-extrabold text-slate-400 uppercase tracking-widest border-b border-slate-200/50 pb-1.5">
                          <span>Organic Search Clicks (Last 30 Days)</span>
                          <span className="text-emerald-600 font-extrabold flex items-center gap-0.5">
                            <TrendingUp size={10} /> +18.4% growth
                          </span>
                        </div>
                        <div className="h-16 flex items-end justify-between gap-1.5 pt-2">
                          <div className="w-[8%] bg-indigo-100 rounded-t-sm h-[20%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-100 rounded-t-sm h-[35%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-100 rounded-t-sm h-[30%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-200 rounded-t-sm h-[50%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-200 rounded-t-sm h-[45%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-300 rounded-t-sm h-[65%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-300 rounded-t-sm h-[58%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-450 rounded-t-sm h-[78%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-400 rounded-t-sm h-[72%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-indigo-500 rounded-t-sm h-[88%] transition-all duration-300 hover:bg-[#ee683b]" />
                          <div className="w-[8%] bg-[#ee683b] rounded-t-sm h-[98%]" />
                        </div>
                      </div>

                      {/* SEO Audit Checklist Mockup */}
                      <div className="bg-[#fafbfe] border border-slate-100 p-4 rounded-2xl space-y-2">
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200/50 pb-1.5">Consolidated Audit Checklist</div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-600">
                          <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> Word Count: 1,450 words</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> Focus Keyword: "ac repair"</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> Links Audit: 12 Int / 4 Ext</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> Meta Description: Filled</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> Speed Audit: 1.4s (Pass)</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> Mobile Usability: Active</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-500" /> SSL Certificate: Secure</div>
                          <div className="flex items-center gap-1.5 text-rose-500"><X size={12} className="text-rose-500" /> Alt Image Tags: Empty</div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="mock-campaigns"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Campaign Split View */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Mock Email Newsletter */}
                        <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl space-y-2.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                              <div className="flex items-center gap-1.5">
                                <Mail size={14} className="text-[#ee683b]" />
                                <span className="text-[9px] font-extrabold text-[#142f45] uppercase tracking-wider">Email Newsletter</span>
                              </div>
                              <span className="bg-orange-50 text-[#ee683b] text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">Sent</span>
                            </div>
                            <div className="text-[10px] font-extrabold text-[#142f45] leading-snug">"Beat the Summer Heat: Pure Air's Prep Special ☀️"</div>
                            <p className="text-[9px] text-slate-400 font-bold mt-1">Recipient list size: 1,240 contacts</p>
                          </div>
                          <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 pt-2 border-t border-slate-100">
                            <span>Open Rate: <strong className="text-indigo-600">41.5%</strong></span>
                            <span>Clicks: <strong className="text-[#ee683b]">6.8%</strong></span>
                          </div>
                        </div>

                        {/* Mock Google Maps Post */}
                        <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl space-y-2.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                              <div className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-indigo-500" />
                                <span className="text-[9px] font-extrabold text-[#142f45] uppercase tracking-wider">Google Maps Post</span>
                              </div>
                              <span className="bg-emerald-50 text-emerald-600 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">Live</span>
                            </div>
                            <div className="text-[10px] font-extrabold text-slate-500 line-clamp-2 leading-relaxed">"AC blowing warm air? Get $25 off service call today!"</div>
                            <p className="text-[9px] text-[#ee683b] font-bold mt-1">Coupon: SUMMER25 (Valid 30d)</p>
                          </div>
                          <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 pt-2 border-t border-slate-100">
                            <span className="flex items-center gap-0.5"><Eye size={10} /> 88 Views</span>
                            <span className="flex items-center gap-0.5"><MousePointer size={10} /> 12 Clicks</span>
                          </div>
                        </div>

                        {/* Row 2 - Latest Customer Review */}
                        <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl space-y-2.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                              <div className="flex items-center gap-1.5">
                                <Star size={14} className="fill-amber-400 text-amber-400" />
                                <span className="text-[9px] font-extrabold text-[#142f45] uppercase tracking-wider">Latest GBP Review</span>
                              </div>
                              <span className="bg-indigo-50 text-indigo-600 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">Response Sent</span>
                            </div>
                            <div className="text-[10px] font-extrabold text-[#142f45] leading-snug">"Super fast response time! The technician fixed our AC unit in under an hour."</div>
                            <p className="text-[9px] text-slate-400 font-bold italic mt-1">— Sarah M. (5 Stars)</p>
                          </div>
                          <div className="bg-[#fafbfe] border border-indigo-50 p-2 rounded-xl text-[9px] font-semibold text-slate-500">
                            <strong className="text-indigo-600 text-[8px] block uppercase font-extrabold mb-0.5">Response:</strong>
                            "Thanks, Sarah! We're glad to keep you cool."
                          </div>
                        </div>

                        {/* Row 2 - Google Ads Campaign ROI */}
                        <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-2xl space-y-2.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                              <div className="flex items-center gap-1.5">
                                <TrendingUp size={14} className="text-emerald-500" />
                                <span className="text-[9px] font-extrabold text-[#142f45] uppercase tracking-wider">Google Search Ads</span>
                              </div>
                              <span className="bg-emerald-50 text-emerald-600 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase">Active</span>
                            </div>
                            <div className="text-[10px] font-extrabold text-slate-500 leading-snug">Campaign: "Emergency AC Repair near me"</div>
                            <p className="text-[9px] text-slate-400 font-bold mt-1">Status: Running | CPC Bid: $12.50 max</p>
                          </div>
                          <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 pt-2 border-t border-slate-100">
                            <span>Leads: <strong className="text-emerald-600">14 Calls</strong></span>
                            <span>ROI: <strong className="text-[#ee683b]">4.2x</strong></span>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white border-y border-[#e6dec9]/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#142f45] mb-5 tracking-tight">Everything Conserved in One Portal</h2>
            <p className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed">Our unified dashboard pulls all audit checks, organic stats, search console metrics, and local feed campaign timelines into one central view. No scattered metrics.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Globe}
              title="Page-Level SEO Auditing"
              description="Continuous inspection of word counts, target keyword ranking positions, indexing status, alt-text parameters, and call-to-action details."
              delay={0.05}
            />
            <FeatureCard 
              icon={BarChart3}
              title="GA4 Traffic Conversions"
              description="Monitor daily conversion events and calculated revenue in real time, plotted on responsive visual line-bar charts."
              delay={0.1}
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Search Console Clicks"
              description="Consolidate Google Search Console statistics including total clicks, total impressions, positions, and average CTR."
              delay={0.15}
            />
            <FeatureCard 
              icon={Mail}
              title="Newsletter Promotions"
              description="Monitor campaign subject lines, recipient volumes, open rate percentages, unsubscribe rates, and visual email mockup previews."
              delay={0.2}
            />
            <FeatureCard 
              icon={MapPin}
              title="Google Profile Posts"
              description="Track maps posts content, views, clicks, CTR, and interactive verified profile mockups with coupon code displays."
              delay={0.25}
            />
            <FeatureCard 
              icon={Star}
              title="GBP Review Distribution"
              description="Inspect total star review breakdowns, average rating score status, and response rates to audit client reputation."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section id="how-it-works" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-extrabold text-[#142f45] mb-5 tracking-tight">Integration & Auditing Flow</h2>
            <p className="text-sm md:text-base text-slate-500 font-semibold">How our platform consolidates data into actionable campaign reports.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[24px] left-[15%] right-[15%] h-0.5 bg-[#e6dec9]/60" />
            <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative">
              <StepCard number="1" title="Data Sync" description="Link search engine configurations, profiles, and analytical metrics." delay={0.05} />
              <StepCard number="2" title="Continuous Crawl" description="Crawl page assets to verify descriptions, alt tags, and internal linking." delay={0.15} />
              <StepCard number="3" title="AI Action Plan" description="Produce priority action summaries matching the client category." delay={0.25} />
              <StepCard number="4" title="Interactive Feed" description="Examine promotion histories and visual mockups side-by-side." delay={0.35} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section id="benefits" className="py-24 bg-[#142f45] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-5 select-none pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80')" }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Consolidated Benefits</h2>
              <p className="text-slate-350 text-sm font-semibold leading-relaxed">
                By housing search performance and campaign feeds in a single client interface, Explore Media streamlines client alignment and eliminates manual reporting tasks.
              </p>
              <ul className="space-y-5">
                {[
                  { icon: ShieldCheck, text: "Automated QA: Instant discovery of SEO errors and missing details." },
                  { icon: Clock, text: "Unified Reporting: No shifting between GSC, Analytics, and Ads portals." },
                  { icon: Sparkles, text: "Actionable Insights: Custom recommendations based on HVAC, Plumbing, or Home Services tags." },
                  { icon: CheckCircle2, text: "High Fidelity: Interactive email and maps mockups for quick visual inspection." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.15 }}
                    className="flex items-center gap-3.5 text-sm font-bold text-slate-300"
                  >
                    <div className="bg-[#ee683b]/20 text-[#ee683b] p-2 rounded-xl border border-orange-500/10">
                      <item.icon size={20} />
                    </div>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center space-y-6 backdrop-blur-md">
              <h3 className="text-2xl font-extrabold">Ready to explore?</h3>
              <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                Sign in with your client account credentials to view live performance audits, traffic summaries, ads value, reviews breakdown, and visual feeds.
              </p>
              <button 
                onClick={handleSignInClick} 
                className="bg-[#ee683b] hover:bg-[#d0572e] text-white px-8 py-3.5 rounded-full font-bold text-xs shadow-md hover:scale-105 transition-all cursor-pointer border-0"
              >
                Sign In to Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e6dec9]/60 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="space-y-4">
             <img src="/logo.svg" alt="Explore Media" className="h-20 md:h-24 object-contain opacity-90" />
             <p className="text-slate-400 text-xs font-semibold max-w-sm leading-relaxed">
               Consolidating local performance auditing, traffic statistics, reputation parameters, and campaigns timelines into unified invite-only portals.
             </p>
          </div>
          <div className="flex gap-16 flex-wrap text-xs font-bold text-slate-400">
             <div>
                <h4 className="font-extrabold text-[#142f45] text-sm mb-4">Core Audits</h4>
                <ul className="space-y-2 list-none p-0">
                  <li><a href="#features" className="hover:text-[#ee683b] transition-colors">SEO Checks</a></li>
                  <li><a href="#features" className="hover:text-[#ee683b] transition-colors">Traffic Analytics</a></li>
                  <li><a href="#features" className="hover:text-[#ee683b] transition-colors">Campaign Feeds</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-extrabold text-[#142f45] text-sm mb-4">Company</h4>
                <ul className="space-y-2 list-none p-0">
                  <li><a href="#" className="hover:text-[#ee683b] transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-[#ee683b] transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-[#ee683b] transition-colors">Privacy Policy</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-extrabold text-[#142f45] text-sm mb-4">Support</h4>
                <ul className="space-y-2 list-none p-0">
                  <li><a href="#" className="hover:text-[#ee683b] transition-colors">Client Portal</a></li>
                  <li><a href="#" className="hover:text-[#ee683b] transition-colors">Invite Inquiries</a></li>
                </ul>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} ExploreMedia. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="fixed inset-0 bg-[#142f45]/50 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white border border-[#e6dec9] rounded-[2rem] shadow-[0_20px_50px_rgba(20,47,69,0.12)] p-8 max-w-md w-full relative z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#142f45]">
                    Sign In to Portal
                  </h3>
                  <p className="text-slate-400 text-xs font-bold mt-1">
                    Enter credentials to access client dashboard
                  </p>
                </div>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 rounded-full bg-slate-50 border-0 cursor-pointer flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleModalSubmit} className="flex flex-col gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Username or Email
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      required
                      type="text"
                      placeholder="e.g. admin"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#142f45]/10 focus:border-[#142f45] transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      required
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#142f45]/10 focus:border-[#142f45] transition-all text-slate-800"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#142f45] text-white py-3.5 rounded-full font-extrabold text-xs hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer border-0 mt-3 shadow-md hover:bg-[#0c304f]"
                >
                  Continue to Portal
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
