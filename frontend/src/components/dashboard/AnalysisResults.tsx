'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, Fingerprint, Database, Maximize, Shield, ScanEye, FileText, AlertTriangle, CheckCircle2, Eye, Terminal, ChevronRight, Brain } from 'lucide-react';

interface Props {
  fileName: string;
  preview: string | null;
  onReset: () => void;
  isForged?: boolean;
}

/* ─── Typewriter Hook ─── */
function useTypewriter(text: string, speed = 30) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

/* ─── Animated Score Counter ─── */
function AnimatedScore({ target, color }: { target: number; color: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.round(current));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <span className={`text-6xl font-black tabular-nums ${color}`}>
      {count}
    </span>
  );
}

/* ─── Heatmap Slider ─── */
function HeatmapSlider({ preview }: { preview: string | null }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleGlobalUp = () => { isDragging.current = false; };
    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('mouseup', handleGlobalUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('mouseup', handleGlobalUp);
    };
  }, []);

  // For the demo, we use the uploaded preview as the "original" and a CSS-filtered version as "heatmap"
  const src = preview || '/placeholder-doc.png';

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80">
        <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
          <Eye className="w-4 h-4 text-purple-400" />
          ELA Forensic Heatmap
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Drag to reveal</span>
      </div>
      <div
        ref={containerRef}
        className="relative w-full h-56 cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* Original Layer (full) */}
        <div className="absolute inset-0">
          <img src={src} alt="Original" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/20" />
        </div>

        {/* Heatmap Layer (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={src}
            alt="Heatmap"
            className="w-full h-full object-cover"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              filter: 'hue-rotate(180deg) saturate(3) contrast(1.5) brightness(0.8)',
              mixBlendMode: 'screen',
            }}
          />
          {/* Heatmap color overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-yellow-500/20 to-green-500/10 mix-blend-overlay" />
        </div>

        {/* Slider handle bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/90 shadow-xl flex items-center justify-center">
            <div className="flex gap-0.5">
              <ChevronRight className="w-3 h-3 text-slate-900 rotate-180" />
              <ChevronRight className="w-3 h-3 text-slate-900" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-2 left-3 text-[10px] font-bold text-red-400 uppercase bg-black/60 px-2 py-0.5 rounded z-20">
          Heatmap
        </div>
        <div className="absolute bottom-2 right-3 text-[10px] font-bold text-slate-300 uppercase bg-black/60 px-2 py-0.5 rounded z-20">
          Original
        </div>
      </div>
    </div>
  );
}

/* ─── Agent Check Card ─── */
function AgentCard({ icon: Icon, title, description, passed, failed, delay }: {
  icon: React.ElementType; title: string; description: string; passed?: boolean; failed?: boolean; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`p-5 rounded-xl border flex items-start gap-4 transition-all
        ${failed ? 'bg-red-500/5 border-red-500/20' :
          passed ? 'bg-emerald-500/5 border-emerald-500/20' :
          'bg-slate-800/30 border-slate-700/50'}
      `}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
        failed ? 'bg-red-500/10' : passed ? 'bg-emerald-500/10' : 'bg-slate-800'
      }`}>
        <Icon className={`w-5 h-5 ${failed ? 'text-red-400' : passed ? 'text-emerald-400' : 'text-indigo-400'}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-slate-200">{title}</h4>
          {failed && <span className="text-[10px] uppercase font-bold text-red-400 border border-red-500/30 px-2 py-0.5 rounded">FAILED</span>}
          {passed && <span className="text-[10px] uppercase font-bold text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">PASSED</span>}
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════════
   MAIN ANALYSIS RESULTS COMPONENT
   ═════════════════════════════════════════════════ */
export default function AnalysisResults({ fileName, preview, onReset, isForged = false }: Props) {
  const riskScore = isForged ? 89 : 12;
  const circumference = 2 * Math.PI * 80;

  const aiExplanation = isForged
    ? `The uploaded document exhibits significant signs of digital manipulation. Error Level Analysis detected inconsistent compression artifacts in the photo region and name fields, indicating post-processing edits. EXIF metadata contains Adobe Photoshop markers absent from legitimate government-issued documents. The OCR-extracted name "Rahul Sharma" does not match the embedded QR-decoded name "Rajesh Kumar", confirming data tampering. This document has been auto-rejected with a risk score of 89/100.`
    : `The uploaded document passes all integrity and forensic validation checks. Error Level Analysis shows uniform compression consistent with a genuine scan. EXIF metadata confirms capture via a standard mobile camera with no editing software signatures. The OCR-extracted name "Rahul Sharma" perfectly matches the QR-decoded data. All template bounding boxes align within expected tolerances. This document is classified as authentic with a risk score of 12/100.`;

  const { displayed: typedExplanation, done: typingDone } = useTypewriter(aiExplanation, 18);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
    >
      {/* ─── Header ─── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Analysis Complete
          </p>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 flex-wrap">
            {fileName}
            <motion.span 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: 'spring', delay: 0.3 }}
              className={`text-xs px-3 py-1.5 border rounded-full font-bold ${
                isForged 
                  ? 'bg-red-500/10 border-red-500/20 text-red-400' 
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}
            >
              {isForged ? '⚠ Forged / Tampered' : '✓ Genuine'}
            </motion.span>
          </h2>
        </div>
        <button 
          onClick={onReset} 
          className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all bg-slate-900/50"
        >
          <RefreshCcw className="w-4 h-4" /> Scan Another
        </button>
      </div>

      {/* ─── Top Row: Score + Heatmap ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        
        {/* Risk Score Gauge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="col-span-1 p-8 rounded-2xl border border-slate-800/80 flex flex-col items-center justify-center text-center relative overflow-hidden"
          style={{ backdropFilter: 'blur(16px)', background: 'rgba(15, 23, 42, 0.6)' }}
        >
          {/* Background glow */}
          <div className={`absolute top-0 right-0 w-40 h-40 blur-[80px] opacity-25 rounded-full ${isForged ? 'bg-red-500' : 'bg-emerald-500'}`} />
          
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Fraud Risk Score</p>
          
          {/* SVG Ring Gauge */}
          <div className="relative w-44 h-44 flex items-center justify-center mb-6">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 180 180">
              {/* Background ring */}
              <circle cx="90" cy="90" r="80" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-800/80" />
              {/* Score arc */}
              <motion.circle
                cx="90" cy="90" r="80"
                fill="transparent"
                strokeWidth="8"
                strokeLinecap="round"
                className={isForged ? 'text-red-500' : 'text-emerald-500'}
                stroke="currentColor"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference - (circumference * riskScore) / 100 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              />
            </svg>
            <div className="flex flex-col items-center">
              <AnimatedScore target={riskScore} color={isForged ? 'text-red-400' : 'text-emerald-400'} />
              <span className="text-xs text-slate-500 font-bold mt-1">/ 100</span>
            </div>
          </div>
          
          <p className={`text-sm font-medium ${isForged ? 'text-red-400' : 'text-emerald-400'}`}>
            {riskScore <= 30 ? 'Genuine' : riskScore <= 65 ? 'Suspicious — Manual Review' : 'Forged — Auto-Rejected'}
          </p>
        </motion.div>

        {/* Heatmap Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="col-span-1 md:col-span-2"
        >
          <HeatmapSlider preview={preview} />
          
          {/* Cross-Validation Below Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 p-5 rounded-xl border border-slate-800/80"
            style={{ backdropFilter: 'blur(12px)', background: 'rgba(15, 23, 42, 0.5)' }}
          >
            <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
              <Database className="w-4 h-4 text-indigo-400" /> Cross-Validation: OCR ↔ QR Data
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'OCR Name', value: 'Rahul Sharma', match: true },
                { label: 'QR Name', value: isForged ? 'Rajesh Kumar' : 'Rahul Sharma', match: !isForged },
                { label: 'OCR DOB', value: '15/08/1995', match: true },
                { label: 'QR DOB', value: isForged ? '15/08/1996' : '15/08/1995', match: !isForged },
              ].map((field, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{field.label}</span>
                  <p className={`text-sm font-medium ${field.match ? 'text-slate-200' : 'text-red-400 line-through'}`}>
                    {field.value}
                  </p>
                  {!field.match && <span className="text-[10px] text-red-400 font-bold">MISMATCH</span>}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Multi-Agent Grid ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <AgentCard
          icon={Shield}
          title="Integrity Validation"
          description={isForged 
            ? 'Resolution is acceptable but Laplacian variance indicates possible selective blurring in the photo region.'
            : 'Image passes all integrity checks. Resolution: 2400×1600. Laplacian variance: 142.7 (sharp). No corruption detected.'}
          passed={!isForged}
          failed={isForged}
          delay={0.4}
        />
        <AgentCard
          icon={ScanEye}
          title="Template & Layout Match"
          description={isForged
            ? 'DOB field alignment differs from standard Aadhaar template by 4px. Font weight anomaly detected in name field.'
            : 'All bounding boxes match known Aadhaar template within ±1px tolerance. Font families are consistent.'}
          passed={!isForged}
          failed={isForged}
          delay={0.5}
        />
        <AgentCard
          icon={Fingerprint}
          title="EXIF Metadata Forensics"
          description={isForged
            ? 'Adobe Photoshop CC 2024 signature detected in EXIF header. Last modified timestamp: 2 hours before upload.'
            : 'Standard Android camera metadata (Samsung SM-A546B). No editing software signatures found in EXIF stream.'}
          passed={!isForged}
          failed={isForged}
          delay={0.6}
        />
        <AgentCard
          icon={FileText}
          title="QR Signature Verification"
          description={isForged
            ? 'QR payload decoded but name field does not match OCR extraction. Digital signature verification: FAILED.'
            : 'UIDAI secure QR decoded successfully. All fields match OCR extraction. Digital signature: VALID.'}
          passed={!isForged}
          failed={isForged}
          delay={0.7}
        />
      </div>

      {/* ─── AI Explanation Terminal ─── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="rounded-xl border border-slate-800/80 overflow-hidden"
        style={{ backdropFilter: 'blur(12px)', background: 'rgba(15, 23, 42, 0.5)' }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/80 bg-slate-900/50">
          <Brain className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Reasoning Engine</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
        </div>
        <div className="p-5 font-mono">
          <div className="flex items-start gap-2">
            <Terminal className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-300 leading-relaxed">
              {typedExplanation}
              {!typingDone && <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse ml-0.5 align-middle" />}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
