import React from 'react';
import { FileCode, ArrowRight, Terminal, Cpu, FileCog } from 'lucide-react';

const PathCard: React.FC<{ title: string; color: string; steps: string[] }> = ({ title, color, steps }) => (
  <div className="glass-panel rounded-3xl p-8 flex-1 relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/10 rounded-full blur-3xl group-hover:bg-${color}-500/20 transition-all duration-500`} />
    
    <h3 className={`text-3xl font-bold mb-8 text-${color === 'cyan' ? 'lumira-cyan' : 'lumira-purple'}`}>
      {title}
    </h3>

    <div className="space-y-6 relative z-10">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${color === 'cyan' ? 'cyan-500/20' : 'purple-500/20'} border border-${color === 'cyan' ? 'cyan-500' : 'purple-500'} text-white font-mono text-sm`}>
              {idx + 1}
            </div>
            {idx !== steps.length - 1 && (
              <div className="w-0.5 h-12 bg-gray-700 my-1" />
            )}
          </div>
          <div className="pt-1">
            <p className="text-gray-300 font-medium leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Architecture: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-lumira-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Lumira Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your execution path based on your needs: rapid prototyping or production performance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Interpreter Path */}
          <PathCard 
            title="Interpreter (PYLM)" 
            color="cyan"
            steps={[
              ".lm source code is parsed",
              "Converted directly to Lumira AST (Abstract Syntax Tree)",
              "Executed through the PYLM interpreter runtime",
              "Ideal for scripting, testing, and rapid development (Like CPython)"
            ]}
          />

          {/* Compiler Path */}
          <PathCard 
            title="Compiler (CPPLM)" 
            color="purple"
            steps={[
              ".lm parsed into AST",
              "AST translated into optimized C++ code",
              "CPPLM feeds generated C++ into G++",
              "G++ produces a native system executable",
              "CPU executes logic directly with C++ performance"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Architecture;