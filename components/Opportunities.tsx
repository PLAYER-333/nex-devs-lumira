import React from 'react';
import { Server, BrainCircuit, Layout, Layers, TerminalSquare, FlaskConical, Gamepad2, Settings2 } from 'lucide-react';
import { OpportunityProps } from '../types';

const OpportunityCard: React.FC<OpportunityProps> = ({ title, icon, description }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-lumira-cyan/30 transition-all duration-300 group">
    <div className="mb-4 p-3 bg-lumira-dark rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-lumira-cyan/50">
      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-lumira-cyan" })}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Opportunities: React.FC = () => {
  const items: OpportunityProps[] = [
    {
      title: "Systems Programming",
      icon: <TerminalSquare />,
      description: "Leverage CPPLM to generate native binaries with C++ level performance for low-level tasks."
    },
    {
      title: "AI / ML Pipelines",
      icon: <BrainCircuit />,
      description: "Use PYLM for fast scripting and glue code in complex machine learning workflows."
    },
    {
      title: "Backend & Microservices",
      icon: <Server />,
      description: "Build robust, scalable backend services with predictable syntax and high performance."
    },
    {
      title: "UI/UX Applications",
      icon: <Layout />,
      description: "Design high-quality interfaces with frameworks built for modern, clean visual standards."
    },
    {
      title: "Cross-Platform Apps",
      icon: <Layers />,
      description: "Develop once in Lumira and deploy across various environments efficiently."
    },
    {
      title: "Scientific Computing",
      icon: <FlaskConical />,
      description: "Handle complex calculations and research data with optimized compiled execution."
    },
    {
      title: "Game Scripting",
      icon: <Gamepad2 />,
      description: "Powerful logic scripting for game engines, balancing ease of use with speed."
    },
    {
      title: "DevOps Automation",
      icon: <Settings2 />,
      description: "Streamline infrastructure management with expressive and reliable scripting."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-lumira-dark to-[#0f111a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Future of <span className="text-lumira-purple">Lumira</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Designed with top-tier UI/UX principles, predictable syntax, and modern tooling, Lumira is built to evolve into every major sector of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <OpportunityCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;