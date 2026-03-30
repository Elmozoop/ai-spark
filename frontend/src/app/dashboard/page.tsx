'use client';

import DocumentUploader from '@/components/dashboard/DocumentUploader';
import { Activity } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">Verify Identity Document</h1>
        <p className="text-sm text-slate-400">Upload a PAN Card, Aadhaar, Passport or Utility Bill for immediate multi-agent forensic analysis.</p>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 w-full items-start">
        {/* Left: Uploader / Results (takes 3/4 width on XL) */}
        <div className="xl:col-span-3 min-h-[520px]">
          <DocumentUploader />
        </div>

        {/* Right: Verification Pipeline */}
        <div className="space-y-6">
          <div className="p-5 rounded-2xl border border-slate-800/80" style={{ backdropFilter: 'blur(12px)', background: 'rgba(15, 23, 42, 0.5)' }}>
            <h2 className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-widest">Verification Pipeline</h2>
            <p className="text-[11px] text-slate-600 mb-5">How your document is processed</p>

            {/* Pipeline Steps */}
            <div className="relative">
              {[
                { step: 1, name: 'Intake & Validation', desc: 'Checks file integrity, resolution, and blur levels. Rejects corrupted uploads.', latency: '~200ms', dotColor: 'bg-sky-500', glowColor: 'shadow-sky-500/30' },
                { step: 2, name: 'Document Classification', desc: 'Identifies document type (Aadhaar, PAN, Passport) via OCR keyword & layout analysis.', latency: '~400ms', dotColor: 'bg-indigo-500', glowColor: 'shadow-indigo-500/30' },
                { step: 3, name: 'Forgery Detection', desc: 'Runs pixel tampering, ELA, font splicing, and metadata forensics in parallel.', latency: '~1.2s', dotColor: 'bg-purple-500', glowColor: 'shadow-purple-500/30' },
                { step: 4, name: 'Cross-Validation', desc: 'Correlates OCR fields against QR data and EXIF timestamps for consistency.', latency: '~800ms', dotColor: 'bg-amber-500', glowColor: 'shadow-amber-500/30' },
                { step: 5, name: 'Risk Scoring & Verdict', desc: 'Aggregates signals into a 0-100 score. Classifies as Genuine, Suspicious, or Fake.', latency: '~100ms', dotColor: 'bg-emerald-500', glowColor: 'shadow-emerald-500/30' },
              ].map((stage, i, arr) => (
                <div key={i} className="relative flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${stage.dotColor} shadow-lg ${stage.glowColor} ring-2 ring-slate-900 z-10 mt-1 group-hover:scale-125 transition-transform duration-200`} />
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-slate-700 to-slate-800 my-1" />
                    )}
                  </div>
                  <div className={`flex-1 pb-5 ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-slate-600 uppercase">Step {stage.step}</span>
                      <span className="text-[10px] text-slate-700">•</span>
                      <span className="text-[10px] font-mono text-slate-600">{stage.latency}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-white transition-colors">{stage.name}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats — refined */}
          <div className="p-5 rounded-2xl border border-slate-800/80" style={{ backdropFilter: 'blur(12px)', background: 'rgba(15, 23, 42, 0.5)' }}>
            <h2 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Today&apos;s Activity</h2>
            <div className="space-y-3">
              {[
                { label: 'Scans Today', value: '47', accent: 'text-sky-400' },
                { label: 'Auto-Approved', value: '38', accent: 'text-emerald-400' },
                { label: 'Flagged', value: '9', accent: 'text-rose-400' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/20 border border-slate-800/40">
                  <span className="text-xs font-medium text-slate-400">{stat.label}</span>
                  <span className={`text-lg font-bold ${stat.accent}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
