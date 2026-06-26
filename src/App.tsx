import React, { useState, useRef } from 'react';
import { Camera, ShoppingBag, Youtube, ShieldAlert, CheckCircle2, Lock, Moon, Sun, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import holographicBlobIcon from './assets/images/holographic_blob_icon_1782402102725.jpg';
import holographicBlobBlackBg from './assets/images/holographic_blob_black_bg_1782432178647.jpg';
import altegurrlTee from './assets/images/altegurrl_tee_1782431211236.jpg';
import crazyysocketTee from './assets/images/crazyysocket_tee_1782431222820.jpg';
import allAccessCrop from './assets/images/all_access_crop_1782431230343.jpg';
import freakiestTee from './assets/images/freakiest_tee_1782431243189.jpg';
import maliyaTee from './assets/images/maliya_tee_1782431253579.jpg';
import prideivyTee from './assets/images/prideivy_tee_1782431266148.jpg';

const MERCH_ITEMS = [
  { id: 1, name: 'ALTEGURRL TEE', price: '$35.00', image: altegurrlTee },
  { id: 2, name: 'CRAZYYSOCKET TEE', price: '$35.00', image: crazyysocketTee },
  { id: 3, name: 'ALL ACCESS CROP', price: '$28.00', image: allAccessCrop },
  { id: 4, name: 'FREAKIEST TEE', price: '$35.00', image: freakiestTee },
  { id: 5, name: 'MALIYA TEE', price: '$35.00', image: maliyaTee },
  { id: 6, name: 'PRIDEIVY TEE', price: '$35.00', image: prideivyTee },
];

const backgroundBubbles = Array.from({ length: 12 }).map((_, i) => {
  const colors = ['bg-pink-300', 'bg-blue-300', 'bg-pink-200'];
  return {
    id: i,
    size: Math.random() * 120 + 60,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    xOffset: Math.random() * 40 - 20,
    color: colors[i % colors.length],
  };
});

function BackgroundBubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {backgroundBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute bottom-[-200px] rounded-full ${bubble.color} mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30 blur-2xl transition-all`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
          }}
          animate={{
            y: ['0vh', '-120vh'],
            x: [0, bubble.xOffset, -bubble.xOffset, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}

const FloatingLocks = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    <motion.div 
      animate={{ y: [0, -15, 0] }} 
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-24 left-[-2%] sm:top-32 sm:left-[5%] md:left-[20%] w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-xl rotate-[-8deg] border-[2px] sm:border-[3px] border-white dark:border-slate-800 opacity-70 sm:opacity-100 transition-colors"
    >
      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&h=200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover blur-sm scale-110" alt="" />
      <div className="absolute inset-0 bg-white/20 dark:bg-black/40 flex items-center justify-center backdrop-blur-[2px] transition-colors">
        <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-slate-200 drop-shadow-md transition-colors" />
      </div>
    </motion.div>
    
    <motion.div 
      animate={{ y: [0, 20, 0] }} 
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      className="absolute top-48 right-[-5%] sm:top-64 sm:right-[5%] md:right-[20%] w-20 h-20 sm:w-32 sm:h-32 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl rotate-[12deg] border-[2px] sm:border-[4px] border-white dark:border-slate-800 opacity-70 sm:opacity-100 transition-colors"
    >
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&h=200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover blur-sm scale-110" alt="" />
      <div className="absolute inset-0 bg-white/20 dark:bg-black/40 flex items-center justify-center backdrop-blur-[2px] transition-colors">
        <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white dark:text-slate-200 drop-shadow-md transition-colors" />
      </div>
    </motion.div>

    <motion.div 
      animate={{ y: [0, -10, 0] }} 
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      className="absolute bottom-32 left-[5%] sm:bottom-40 sm:left-[10%] md:left-[25%] w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-[1.2rem] overflow-hidden shadow-lg rotate-[-15deg] border-[2px] sm:border-[3px] border-white dark:border-slate-800 opacity-70 sm:opacity-100 transition-colors"
    >
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover blur-sm scale-110" alt="" />
      <div className="absolute inset-0 bg-white/20 dark:bg-black/40 flex items-center justify-center backdrop-blur-[2px] transition-colors">
        <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-slate-200 drop-shadow-md transition-colors" />
      </div>
    </motion.div>
  </div>
);

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'store'>('home');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
  const [scanStatusText, setScanStatusText] = useState('Reading pass...');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setStatus('scanning');
      setScanStatusText('Reading pass...');
      
      // Phase 1: Reading the file
      setTimeout(() => setScanStatusText("Analyzing features..."), 800);
      
      // Phase 2: Simulating the backend redirect response
      setTimeout(() => {
        setScanStatusText("Access Granted!");
        setTimeout(() => setStatus('success'), 500);
      }, 2000);
    }
  };

  return (
    <div className={`min-h-[100dvh] bg-[#f4f4f5] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col relative overflow-hidden font-sans selection:bg-pink-300/50 transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <BackgroundBubbles />
      <FloatingLocks />
      
      {/* Top Nav */}
      <header className="w-full p-4 flex justify-between items-center z-20 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 font-bobble text-xl text-slate-900 dark:text-white transition-colors">
          <div className="w-7 h-7 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center transition-colors">
             <Lock className="w-4 h-4 text-white dark:text-slate-900 transition-colors" />
          </div>
          bobblelink
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-full text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm hidden sm:block">
            Menu
          </button>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            Find Me
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto z-10 flex flex-col items-center mt-2 sm:mt-6 px-4 pb-12">
        <AnimatePresence mode="wait">
          {activeView === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
              className="w-full flex flex-col items-center"
            >
              {/* Profile Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col items-center mb-8 z-10 w-full transition-all duration-500 ${(status === 'scanning' || status === 'success') ? 'opacity-30 blur-sm scale-95 pointer-events-none' : 'opacity-100'}`}
              >
                <div className="rounded-full p-1.5 bg-gradient-to-tr from-[#00d632] via-[#00c02c] to-[#009020] mb-4 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256" 
                    alt="Creator Profile" 
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white" 
                  />
                </div>
                <div className="flex items-center justify-center gap-1 relative">
                  <img 
                    src={holographicBlobIcon} 
                    alt="Bobble Icon" 
                    className="w-7 h-7 sm:w-9 sm:h-9 object-cover mix-blend-multiply dark:hidden" 
                  />
                  <img 
                    src={holographicBlobBlackBg} 
                    alt="Bobble Icon" 
                    className="w-7 h-7 sm:w-9 sm:h-9 object-cover mix-blend-screen hidden dark:block" 
                  />
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white text-center drop-shadow-sm transition-colors">
                    SarahCreates
                  </h1>
                </div>
              </motion.div>

              {/* Dynamic Content Area */}
              <div className="w-full relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  {(status === 'idle' || status === 'scanning') && (
                    <motion.div 
                      key="links"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                      className="w-full flex flex-col gap-4"
                    >
                      {/* Central Interactivity Box */}
                      <div className="w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-[2rem] p-6 border border-white dark:border-slate-800 shadow-sm flex flex-col items-center relative overflow-hidden min-h-[160px] justify-center transition-colors">
                        {status === 'idle' ? (
                          <div className="w-full flex flex-col items-center space-y-4 animate-in fade-in">
                            <p className="text-slate-900 dark:text-slate-100 font-bold text-center text-xl mb-1 tracking-tight transition-colors">
                              Got your VIP pass?
                            </p>
                            <button 
                              onClick={() => fileInputRef.current?.click()}
                              className="w-full bg-[#00d632] hover:bg-[#00c02c] text-black transition-all rounded-full py-4 px-6 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-3 border border-black/5"
                            >
                              <span className="text-xl leading-none">📸</span>
                              <span className="font-bold text-lg tracking-tight">Scan Access Pass</span>
                            </button>
                          </div>
                        ) : (
                          <div className="w-full flex flex-col items-center justify-center space-y-4 animate-in fade-in relative">
                            {/* Animated Laser Line */}
                            <div className="absolute top-[-10px] left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d632] to-transparent shadow-[0_0_15px_#00d632] animate-laserScan z-10" />
                            
                            {/* Blurred Pass Mockup to give a "scanning" feel */}
                            <div className="w-20 h-24 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md flex items-center justify-center relative overflow-hidden opacity-60 mt-2 transition-colors">
                              <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse transition-colors" />
                            </div>

                            {/* Status Indicator */}
                            <div className="flex flex-col items-center space-y-2 w-full">
                              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 animate-pulse transition-colors">{scanStatusText}</p>
                              <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors">
                                <div className="h-full bg-[#00d632] rounded-full animate-loadingBar" />
                              </div>
                            </div>
                          </div>
                        )}
                        <input 
                          type="file" 
                          accept="image/*" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                      
                      {/* Standard Links */}
                      <div className={`w-full space-y-3 transition-all duration-500 ${status === 'scanning' ? 'opacity-30 blur-sm scale-95 pointer-events-none' : 'opacity-100'}`}>
                        <button onClick={() => setActiveView('store')} className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all rounded-full py-4 px-6 text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm group backdrop-blur-sm">
                          <ShoppingBag className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                          Official Merch Store
                        </button>
                        <a href="#" className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all rounded-full py-4 px-6 text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm group backdrop-blur-sm">
                          <Youtube className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                          Latest YouTube Video
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] border border-white dark:border-slate-800 p-6 shadow-2xl transition-colors"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        className="w-24 h-24 bg-[#00d632] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,214,50,0.4)] border-4 border-white dark:border-slate-800 transition-colors"
                      >
                        <CheckCircle2 className="w-12 h-12 text-black drop-shadow-sm" />
                      </motion.div>
                      <motion.div
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4 }}
                         className="flex flex-col items-center"
                      >
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight uppercase transition-colors">Access Granted!</h3>
                        <p className="text-base text-slate-600 dark:text-slate-300 font-bold text-center mb-8 transition-colors">
                          Welcome to the inner circle.
                        </p>
                        <button 
                          onClick={() => setStatus('idle')}
                          className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full py-4 px-10 font-bold transition-colors shadow-md active:scale-95"
                        >
                          Enter Portal
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="store"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-between mb-8">
                <button 
                  onClick={() => setActiveView('home')}
                  className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Merch Store</h2>
                <div className="w-10" />
              </div>
              <div className="w-full grid grid-cols-2 gap-4 pb-8">
                {MERCH_ITEMS.map((item) => (
                  <div key={item.id} className="w-full flex flex-col bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative group">
                    <div className="aspect-[4/5] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px] opacity-100">
                        <div className="bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md backdrop-blur-md">
                          Out of Stock
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-1 items-center">
                      <h3 className="font-bold text-slate-900 dark:text-white text-[13px] tracking-tight uppercase text-center w-full truncate">{item.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

