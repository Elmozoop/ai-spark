'use client';

import { motion } from 'framer-motion';
import { Activity, TrendingUp, TrendingDown, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const SIGNAL_DATA = [
  { name: 'ELA Pixel Analysis', flagRate: 34, avgScore: 0.61, trend: 'up' },
  { name: 'EXIF Metadata', flagRate: 22, avgScore: 0.48, trend: 'down' },
  { name: 'QR Cross-Validation', flagRate: 19, avgScore: 0.71, trend: 'up' },
  { name: 'OCR Font Check', flagRate: 8, avgScore: 0.29, trend: 'down' },
  { name: 'Face Swap Detection', flagRate: 6, avgScore: 0.21, trend: 'down' },
];

const RECENT_ALERTS = [
  { msg: 'QR payload mismatch detected on Aadhaar submission', severity: 'Critical', time: '2 min ago' },
  { msg: 'Photoshop EXIF tag on PAN card upload', severity: 'High', time: '11 min ago' },
  { msg: 'ELA anomaly in photo region — salary slip', severity: 'Medium', time: '34 min ago' },
  { msg: 'Batch of 5 documents passed integrity check', severity: 'Info', time: '1 hr ago' },
];

const severityConfig = {
  Critical: 'text-red-700 bg-red-50 border-red-200',
  High: 'text-orange-700 bg-orange-50 border-orange-200',
  Medium: 'text-amber-700 bg-amber-50 border-amber-200',
  Info: 'text-stone-700 bg-stone-50 border-stone-200',
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900 tracking-tight mb-1">Risk Analytics</h1>
        <p className="text-sm text-stone-500">Forensic signal performance and fraud threat overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Fraud Rate', value: '19.1%', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Avg Risk Score', value: '38.4', icon: Activity, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Auto-Approved', value: '80.9%', icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Avg Scan Time', value: '2.8s', icon: Zap, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <div className={`w-9 h-9 rounded-lg ${kpi.bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <p className={`text-3xl font-black ${kpi.color} mb-1`}>{kpi.value}</p>
              <p className="text-xs text-stone-500 uppercase tracking-wider font-bold">{kpi.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Signal Performance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-stone-100">
            <h2 className="text-sm font-bold text-stone-800 flex items-center gap-2">
              <Activity className="w-4 h-4 text-orange-500" />
              Forensic Signal Performance
            </h2>
          </div>
          <div className="p-6 space-y-5">
            {SIGNAL_DATA.map((sig, i) => {
              const Trend = sig.trend === 'up' ? TrendingUp : TrendingDown;
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-stone-800 font-medium">{sig.name}</span>
                    <div className="flex items-center gap-3">
                      <Trend className={`w-4 h-4 ${sig.trend === 'up' ? 'text-red-500' : 'text-green-600'}`} />
                      <span className="text-xs text-stone-500 tabular-nums">{sig.flagRate}% flag rate</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${sig.flagRate * 2}%` }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-xs text-stone-400 mt-1">Avg confidence score: {sig.avgScore.toFixed(2)}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-stone-100">
            <h2 className="text-sm font-bold text-stone-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Live Threat Feed
            </h2>
          </div>
          <div className="divide-y divide-stone-100">
            {RECENT_ALERTS.map((alert, i) => {
              const cls = severityConfig[alert.severity as keyof typeof severityConfig];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="px-6 py-4 flex items-start gap-4 hover:bg-stone-50 transition-colors"
                >
                  <span className={`mt-0.5 text-[10px] font-bold px-2 py-0.5 rounded border whitespace-nowrap ${cls}`}>
                    {alert.severity}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-stone-800 leading-relaxed">{alert.msg}</p>
                    <p className="text-xs text-stone-400 mt-1">{alert.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
