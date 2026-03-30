'use client';

import React from 'react';

/**
 * A complex CSS 3D graphic inspired by the layered 
 * document planes in the reference.
 */
export default function HeroGraphic() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1200px]">
      
      {/* Back plane - Code base */}
      <div className="absolute w-[440px] h-[320px] bg-[#000044] rounded-lg border border-[#47afff]/30 shadow-2xl rotate-y-[-25deg] rotate-x-[15deg] translate-z-0 overflow-hidden transform group hover:translate-z-10 transition-all duration-700">
        <div className="p-6 font-mono text-[11px] text-[#47afff]/80 leading-relaxed opacity-60">
          <p className="text-emerald-400">def calculate_entropy(b: bytes) -&gt; float:</p>
          <p className="ml-4">if not b: return 0.0</p>
          <p className="ml-4">freq = [b.count(i) for i in range(256)]</p>
          <p className="ml-4">total = len(b)</p>
          <p className="ml-4">return sum((f/total) * math.log2(f/total))</p>
          <p className="mt-2 text-rose-400"># verify_authenticity(doc_path)</p>
          <p className="text-emerald-400">async def validate_document(uri):</p>
          <p className="ml-4">meta = await get_exif_data(uri)</p>
          <p className="ml-4 font-bold text-sky-300">layer_checks = [pixel_tampering, font_splicing]</p>
        </div>
      </div>

      {/* Middle plane - Feature Labels */}
      <div className="absolute w-[440px] h-[320px] bg-transparent rounded-lg border border-sky-400/40 rotate-y-[-25deg] rotate-x-[15deg] translate-z-[60px] transform group hover:translate-z-[80px] transition-all duration-700 pointer-events-none">
        <div className="absolute top-10 left-10 text-rose-500 font-bold text-xs tracking-widest bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">LOGO_CHECK {"->"} FAILED</div>
        <div className="absolute top-28 left-20 text-rose-500 font-bold text-xs tracking-widest bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">FONT_MISMATCH {"->"} SUSPICIOUS</div>
        <div className="absolute bottom-16 right-10 text-emerald-400 font-bold text-xs tracking-widest bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30">EXTRACTED {"->"} ADDRESS</div>
      </div>

      {/* Front plane - Highlighting boxes */}
      <div className="absolute w-[440px] h-[320px] bg-white/5 backdrop-blur-sm rounded-lg border-2 border-white/10 rotate-y-[-25deg] rotate-x-[15deg] translate-z-[120px] transform group hover:translate-z-[140px] transition-all duration-700 group pointer-events-none shadow-[0_0_50px_rgba(79,70,229,0.15)]">
        {/* Animated scanning box */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-400/20 to-transparent h-10 w-full animate-scan" style={{ animation: 'scan 3s linear infinite' }} />
        
        {/* Highlighted regions */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 border border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)] bg-sky-500/5" />
        <div className="absolute top-12 left-12 w-20 h-20 border border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)] bg-emerald-500/5" />
      </div>

      {/* Glowing background elements */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(300px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
