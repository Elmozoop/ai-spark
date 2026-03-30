'use client';

import { useEffect, useRef } from 'react';
import { ShieldCheck, Crosshair, BookOpen, Fingerprint, RefreshCcw, Database } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Features() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  const iconMap = [
    <ShieldCheck key="0" className="w-6 h-6 text-emerald-400" />,
    <Crosshair key="1" className="w-6 h-6 text-blue-400" />,
    <Fingerprint key="2" className="w-6 h-6 text-purple-400" />,
    <RefreshCcw key="3" className="w-6 h-6 text-indigo-400" />,
    <BookOpen key="4" className="w-6 h-6 text-rose-400" />,
    <Database key="5" className="w-6 h-6 text-amber-400" />,
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 relative w-full border-t border-slate-800/60 bg-slate-950/50"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section heading — reveals on scroll */}
        <div
          ref={headingRef}
          className="reveal-card text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-3">
             {t.features.badge}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
             {t.features.title}
          </h3>
          <p className="text-slate-400 text-lg">
             {t.features.description}
          </p>
        </div>

        {/* Feature cards — staggered scroll-reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="reveal-card group p-8 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-slate-700/50
                         hover:bg-slate-800/60 hover:border-indigo-500/30
                         transition-all duration-300 ease-out
                         hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]
                         cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon box — slight scale on card hover */}
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 group-hover:border-white/10 transition-all duration-300">
                {iconMap[i]}
              </div>

              <h4 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-white transition-colors duration-200">
                {feature.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                {feature.description}
              </p>

              {/* Bottom accent line that grows on hover */}
              <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-indigo-500/60 to-purple-500/60 transition-all duration-500 ease-out rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
