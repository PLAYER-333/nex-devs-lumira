import React from 'react';
import { Cpu, Zap, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lumira-cyan/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lumira-purple/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-lumira-cyan text-sm font-semibold tracking-wider uppercase mb-4 animate-fadeIn">
          <Cpu className="w-4 h-4" />
          <span>Next-Generation Dual Engine</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-lumira-cyan via-white to-lumira-purple neon-text">
            LUMIRA
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The programming language that bridges the gap between scripting simplicity and systems performance.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          {/* PYLM Card - Added hover glow effect */}
          <div className="glass-panel p-6 rounded-2xl border-l-4 border-lumira-cyan hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:border-lumira-cyan/80 transition-all duration-300 w-full md:w-80 group cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <Code2 className="w-8 h-8 text-lumira-cyan group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all duration-300" />
              <h3 className="text-2xl font-bold text-white transition-colors duration-300">PYLM</h3>
            </div>
            <p className="text-gray-400 text-left group-hover:text-gray-200 transition-colors duration-300">The Interpreter.</p>
            <p className="text-gray-400 text-left text-sm mt-1 group-hover:text-gray-200 transition-colors duration-300">Standalone. No Python required.</p>
          </div>

          {/* CPPLM Card - Added hover glow effect */}
          <div className="glass-panel p-6 rounded-2xl border-l-4 border-lumira-purple hover:scale-105 hover:shadow-[0_0_30px_rgba(112,0,255,0.4)] hover:border-lumira-purple/80 transition-all duration-300 w-full md:w-80 group cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-lumira-purple group-hover:drop-shadow-[0_0_10px_rgba(112,0,255,0.8)] transition-all duration-300" />
              <h3 className="text-2xl font-bold text-white transition-colors duration-300">CPPLM</h3>
            </div>
            <p className="text-gray-400 text-left group-hover:text-gray-200 transition-colors duration-300">The Compiler.</p>
            <p className="text-gray-400 text-left text-sm mt-1 group-hover:text-gray-200 transition-colors duration-300">Transpiles to C++ for native speed.</p>
          </div>
        </div>

        <div className="mt-16 text-sm text-gray-500 font-mono">
          Built & Maintained by <span className="text-white font-bold">Next Developers</span> (First-Year College Students)
        </div>
      </div>
    </section>
  );
};

export default Hero;