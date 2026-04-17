'use client';

import Link from 'next/link';
import DashboardPreview from './DashboardPreview';
import { ArrowRight, Play } from 'lucide-react';
import BrandName from './BrandName';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 overflow-hidden z-10 w-full">

      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[120px] animate-gradient-shift" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-red-500/8 blur-[100px] animate-gradient-shift delay-400" />
        {/* Extra decorative orb */}
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-green-600/5 blur-[80px] animate-gradient-shift delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative">

        {/* Badge — enters first */}
        <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-medium mb-8 animate-pulse-border">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          {t.hero.badge}
        </div>

        {/* Main Headline — staggered after badge */}
        <h1 className="animate-fade-in-up delay-200 text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6 leading-tight">
          {t.hero.headline} <br className="hidden md:block" />
          <span className="animate-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-green-600">
            {t.hero.headlineAccent}
          </span>
          {t.hero.headlineSuffix}
        </h1>

        {/* Brand name — rotates between English/Hindi */}
        <div className="animate-fade-in-up delay-250 mb-2">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white/60 border border-stone-200 backdrop-blur-md shadow-xl">
            <span className="text-stone-500 text-sm font-medium uppercase tracking-widest">Powered by</span>
            <BrandName
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-300 max-w-2xl mx-auto text-lg text-stone-600 mt-8 mb-10 leading-relaxed">
           {t.hero.subheadline}
        </p>

        {/* Calls to Action */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/dashboard"
            className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 flex items-center justify-center gap-2 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_30px_rgba(249,115,22,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-lg overflow-hidden before:absolute before:inset-[-100%] before:top-0 before:block before:w-[60%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:skew-x-[-20deg] before:translate-x-[-100%] group-hover:before:translate-x-[300%] before:transition-transform before:duration-700"
            />
            {t.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Mockup Dashboard — floats gently */}
        <div className="animate-scale-in delay-600 animate-float">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}
