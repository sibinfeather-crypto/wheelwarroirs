/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ExternalLink, 
  Check, 
  Copy, 
  Maximize2, 
  X, 
  Flame
} from 'lucide-react';

const FALCON_CLUB_URL = "https://falconclub.online/#/";

export default function App() {
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [countdown, setCountdown] = useState(18);
  const [periodId, setPeriodId] = useState("20261001051258");

  // Simulated Win Go 30s countdown to match reference image 2.jpg
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setPeriodId((pid) => String(BigInt(pid) + 1n));
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(FALCON_CLUB_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050811] text-slate-100 flex flex-col justify-center overflow-x-hidden selection:bg-amber-500 selection:text-black">
      {/* Background Atmosphere & Radial Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-900/25 via-amber-600/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[20%] left-[-10%] w-[550px] h-[550px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Subtle Luxury Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }} 
        />
      </div>

      {/* Main Single-Viewport Hero Section */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 flex flex-col justify-center min-h-screen">
        
        {/* Top Minimal Trust Band & Quick Status (No traditional header) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          {/* Brand Mark with Emblem */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-0.5 shadow-lg shadow-amber-500/20 shrink-0">
              <div className="w-full h-full bg-[#0b1120] rounded-[10px] flex items-center justify-center overflow-hidden">
                <img 
                  src="/falconclub-logo.png" 
                  alt="Falcon Club Logo" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'falconclub-logo.png';
                  }}
                />
              </div>
            </div>
            <div>
              <span className="font-cinzel text-xl md:text-2xl font-black tracking-wider gold-gradient-text block leading-none">
                FALCON CLUB
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
                Official Gaming &amp; Lottery Club
              </span>
            </div>
          </div>

          {/* Quick Stat Anchors */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>₹37 Welcome Bonus</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Min. Withdrawal ₹100</span>
            </div>
          </div>
        </div>

        {/* Hero Grid: Left Content / Right Visual Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT DECISION COLUMN (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Dominant Headline with Falcon Club Brand */}
            <div className="space-y-4">
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance">
                WELCOME TO <br />
                <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(245,158,11,0.3)]">
                  FALCON CLUB
                </span>
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Join India's premier online gaming, color prediction, and lottery club. Experience seamless entertainment, fair gameplay, and instant automated payouts 24/7.
              </p>
            </div>

            {/* PRIMARY CTA DECISION BLOCK */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* The Mandatory Join Now Button */}
                <a
                  href={FALCON_CLUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-pulse-cta group flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-slate-950 text-base sm:text-lg gold-metallic-bg shadow-xl shadow-amber-500/30 hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <Flame className="w-5 h-5 text-slate-950 fill-current" />
                  <span>JOIN FALCON CLUB NOW</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Secondary: Quick Copy Link Button */}
                <button
                  onClick={handleCopyLink}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all active:scale-[0.98] whitespace-nowrap"
                  title="Copy official website link"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Link Footnote */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  Official verified portal: <a href={FALCON_CLUB_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">falconclub.online</a>
                </span>
                <span className="hidden sm:inline text-slate-500">256-bit SSL encrypted</span>
              </div>
            </div>

          </div>

          {/* RIGHT SHOWCASE COLUMN (6 cols): Reference Images Mockups */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Mobile Devices Showcase Container */}
            <div className="relative w-full flex items-center justify-center gap-4 py-2">
              
              {/* IMAGE 1: Falcon Club Official Lobby */}
              <div className="w-[48%] max-w-[280px] sm:max-w-[300px] animate-float-1 relative group transition-all duration-300">
                {/* Phone Bezel */}
                <div className="relative rounded-[2.2rem] p-2 sm:p-2.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black border border-amber-500/40 shadow-2xl shadow-amber-500/10 hover:border-amber-400 transition-all">
                  
                  {/* Speaker Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-full z-20 border border-slate-800" />
                  
                  {/* Screen Frame */}
                  <div className="relative rounded-[1.8rem] overflow-hidden bg-slate-950 aspect-[9/18.5] flex flex-col">
                    <img 
                      src="/1.jpg" 
                      alt="Falcon Club App Lobby"
                      className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      onClick={() => setActiveImageModal('/1.jpg')}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '1.jpg';
                      }}
                    />

                    {/* Expand Overlay on Hover */}
                    <button
                      type="button"
                      onClick={() => setActiveImageModal('/1.jpg')}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs backdrop-blur-[2px]"
                    >
                      <Maximize2 className="w-4 h-4 text-amber-400" />
                      <span>View Full Screen</span>
                    </button>
                  </div>

                  {/* Bottom Home Indicator */}
                  <div className="w-20 h-1 bg-slate-600/60 rounded-full mx-auto mt-2" />
                </div>
              </div>

              {/* IMAGE 2: Win Go Live Game Screen */}
              <div className="w-[48%] max-w-[280px] sm:max-w-[300px] animate-float-2 relative group transition-all duration-300">
                {/* Phone Bezel */}
                <div className="relative rounded-[2.2rem] p-2 sm:p-2.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black border border-emerald-500/40 shadow-2xl shadow-emerald-500/10 hover:border-emerald-400 transition-all">
                  
                  {/* Speaker Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-full z-20 border border-slate-800" />
                  
                  {/* Screen Frame */}
                  <div className="relative rounded-[1.8rem] overflow-hidden bg-slate-950 aspect-[9/18.5] flex flex-col">
                    <img 
                      src="/2.jpg" 
                      alt="Falcon Club Win Go"
                      className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      onClick={() => setActiveImageModal('/2.jpg')}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '2.jpg';
                      }}
                    />

                    {/* Real-time interactive ticker sync */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">Win Go 30s:</span>
                      <span className="text-rose-400 font-bold">
                        00:{countdown < 10 ? `0${countdown}` : countdown}
                      </span>
                    </div>

                    {/* Expand Overlay on Hover */}
                    <button
                      type="button"
                      onClick={() => setActiveImageModal('/2.jpg')}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs backdrop-blur-[2px]"
                    >
                      <Maximize2 className="w-4 h-4 text-emerald-400" />
                      <span>View Full Screen</span>
                    </button>
                  </div>

                  {/* Bottom Home Indicator */}
                  <div className="w-20 h-1 bg-slate-600/60 rounded-full mx-auto mt-2" />
                </div>
              </div>

            </div>

            {/* Direct Join Action underneath Mockups on Mobile */}
            <div className="w-full mt-4 flex items-center justify-center">
              <a
                href={FALCON_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm text-center py-2.5 px-4 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>Click here to open Falcon Club in new tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>

          </div>

        </div>

      </main>

      {/* FULLSCREEN LIGHTBOX MODAL FOR 1.JPG & 2.JPG */}
      {activeImageModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveImageModal(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center bg-[#0b101d] rounded-2xl border border-amber-500/30 p-4 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <img 
                  src="/falconclub-logo.png" 
                  alt="Falcon Club" 
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'falconclub-logo.png';
                  }}
                />
                <span className="font-cinzel text-base font-bold text-amber-400">
                  {activeImageModal.includes('1.jpg') ? 'Falcon Club App Lobby' : 'Falcon Club Win Go'}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeImageModal.includes('1.jpg') ? '(₹37 Bonus & Lobby)' : '(Min. Withdrawal ₹100)'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveImageModal(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body with Scroll */}
            <div className="w-full overflow-y-auto max-h-[75vh] flex justify-center rounded-xl bg-black/60 p-2">
              <img 
                src={activeImageModal} 
                alt="Enlarged Reference Screenshot"
                className="max-h-[1100px] w-auto rounded-lg object-contain"
                onError={(e) => {
                  const fallback = activeImageModal.replace('/', '');
                  (e.currentTarget as HTMLImageElement).src = fallback;
                }}
              />
            </div>

            {/* Modal Footer CTA */}
            <div className="w-full pt-3 mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 text-xs">
              <span className="text-slate-400">
                Ready to play? Instant registration &amp; ₹37 bonus available now.
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={FALCON_CLUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-bold text-slate-950 gold-metallic-bg hover:brightness-110 flex items-center gap-1.5"
                >
                  <span>Join Falcon Club</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveImageModal(null)}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
