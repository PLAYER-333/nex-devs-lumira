import React from 'react';
import { Download, Github, Box, ExternalLink } from 'lucide-react';

const Downloads: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* VS Code Extension Section */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-blue-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900/20 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3 text-blue-400">
                <Box className="w-6 h-6" />
                <span className="font-mono text-sm tracking-wider uppercase">Official Tooling</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">VS Code Extension</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Experience Lumira with first-class support. Our official extension provides syntax highlighting, intelligent colorization, and basic language features for <span className="font-mono bg-white/10 px-1 rounded">.lm</span> files.
              </p>
            </div>
            <button className="flex-shrink-0 group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span>Download Extension</span>
              </div>
            </button>
          </div>
        </div>

        {/* Main Downloads Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Full Package */}
          <div className="glass-panel p-10 rounded-3xl flex flex-col justify-between group hover:border-lumira-pink/50 transition-colors">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Lumira Full Package</h3>
              <p className="text-gray-400 mb-8">
                Get everything you need to start building. Includes the PYLM Interpreter, CPPLM Compiler, and the VS Code Extension.
              </p>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-lumira-pink to-purple-600 rounded-xl font-bold text-white shadow-lg shadow-purple-900/50 hover:shadow-purple-600/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              Download Suite
            </button>
          </div>

          {/* Github Repo */}
          <div className="glass-panel p-10 rounded-3xl flex flex-col justify-between group hover:border-white/40 transition-colors">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Source & Documentation</h3>
              <p className="text-gray-400 mb-8">
                Explore the source code, contribute to the interpreter or compiler, and view community examples on our repository.
              </p>
            </div>
            <a href="#" className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-3">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Downloads;