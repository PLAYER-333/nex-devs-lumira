import React from 'react';
import { Github, FileText, Download, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-lumira-dark pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">LUMIRA</h2>
            <p className="text-gray-500 max-w-xs">
              The next-generation programming language built for the future by the next generation of developers.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-lumira-cyan transition-colors flex items-center gap-2"><FileText className="w-4 h-4"/> Documentation</a></li>
              <li><a href="#" className="hover:text-lumira-cyan transition-colors flex items-center gap-2"><Github className="w-4 h-4"/> GitHub Repository</a></li>
              <li><a href="#" className="hover:text-lumira-cyan transition-colors flex items-center gap-2"><Download className="w-4 h-4"/> Installer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-lumira-cyan transition-colors">Community Discord</a></li>
              <li><a href="#" className="hover:text-lumira-cyan transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-lumira-cyan transition-colors">Contact Team</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Next Developers. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-lumira-pink fill-lumira-pink animate-pulse" />
            <span>by First-Year Students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;