'use client';

import Link from 'next/link';
import { Sparkles, Globe } from 'lucide-react';
import BrandName from './BrandName';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="navbar-enter fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_22px_rgba(99,102,241,0.7)] transition-shadow duration-300 animate-bounce-subtle">
            <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
          </div>
          {/* Brand name flips between English & Hindi */}
          <BrandName
            className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors duration-200"
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {[
            { label: t.navbar.products,   href: '#solutions' },
            { label: t.navbar.useCases,   href: '#features' },
            { label: 'Integrations',      href: '#integrations' },
            { label: 'Pricing',           href: '#pricing' },
          ].map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
              className="animate-fade-in-down relative py-1 hover:text-white transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-6 animate-fade-in delay-500">
          
          {/* Language Switcher Toggle */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400">
             <button 
               onClick={() => setLanguage('en')}
               className={`px-2 py-0.5 rounded-full transition-all ${language === 'en' ? 'bg-indigo-500 text-white' : 'hover:text-slate-200'}`}
             >
               EN
             </button>
             <button 
               onClick={() => setLanguage('hi')}
               className={`px-2 py-0.5 rounded-full transition-all ${language === 'hi' ? 'bg-indigo-500 text-white' : 'hover:text-slate-200'}`}
             >
               हि
             </button>
          </div>

          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-indigo-600/80 text-sm font-medium text-white border border-white/5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_14px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
             {t.navbar.startFree}
          </Link>
        </div>

      </div>
    </nav>
  );
}
