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
    <ShieldCheck key="0" className="w-6 h-6 text-green-600" />,
    <Crosshair key="1" className="w-6 h-6 text-orange-500" />,
    <Fingerprint key="2" className="w-6 h-6 text-stone-700" />,
    <RefreshCcw key="3" className="w-6 h-6 text-orange-600" />,
    <BookOpen key="4" className="w-6 h-6 text-red-500" />,
    <Database key="5" className="w-6 h-6 text-amber-500" />,
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 relative w-full border-t border-stone-200 bg-[#fafafa]"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section heading — reveals on scroll */}
        <div
          ref={headingRef}
          className="reveal-card text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
             {t.features.badge}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
             {t.features.title}
          </h3>
          <p className="text-stone-600 text-lg">
             {t.features.description}
          </p>
        </div>

        {/* Feature cards — staggered scroll-reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="reveal-card group p-8 rounded-2xl bg-white border border-stone-200 shadow-sm
                         hover:shadow-[0_8px_30px_rgba(249,115,22,0.12)] hover:border-orange-500/30
                         transition-all duration-300 ease-out
                         hover:-translate-y-1.5
                         cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon box — slight scale on card hover */}
              <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 group-hover:border-orange-200 transition-all duration-300">
                {iconMap[i]}
              </div>

              <h4 className="text-xl font-semibold text-stone-800 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                {feature.title}
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed transition-colors duration-200">
                {feature.description}
              </p>

              {/* Bottom accent line that grows on hover */}
              <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-orange-500/60 to-green-600/60 transition-all duration-500 ease-out rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
