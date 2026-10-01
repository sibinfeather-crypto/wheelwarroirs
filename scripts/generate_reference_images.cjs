const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// 1.jpg - Falcon Club App Lobby Preview
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1440" viewBox="0 0 720 1440" style="background:#0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2A3" />
      <stop offset="40%" stop-color="#E5B942" />
      <stop offset="70%" stop-color="#C68E17" />
      <stop offset="100%" stop-color="#7B5306" />
    </linearGradient>
    <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#0f172a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#050811"/>
    </linearGradient>
    <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1e38"/>
      <stop offset="50%" stop-color="#16294d"/>
      <stop offset="100%" stop-color="#080e1c"/>
    </linearGradient>
    <linearGradient id="withdrawGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="depositGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#DC2626"/>
    </linearGradient>
    <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
    <linearGradient id="vipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background base -->
  <rect width="720" height="1440" fill="#090d16"/>

  <!-- Top Falcon Club Header -->
  <g transform="translate(360, 56)">
    <!-- Falcon Shield Motif -->
    <path d="M-40,-35 L40,-35 L30,5 L0,25 L-30,5 Z" fill="url(#goldGrad)" opacity="0.9"/>
    <path d="M-30,-28 L30,-28 L22,3 L0,18 L-22,3 Z" fill="#111827"/>
    <!-- Eagle Wings -->
    <path d="M-55,-10 Q-30,-25 0,-15 Q30,-25 55,-10 Q35,5 0,-2 Q-35,5 -55,-10 Z" fill="url(#goldGrad)"/>
    <text y="4" text-anchor="middle" font-size="11" font-weight="900" fill="#FFF2A3" letter-spacing="1">FALCON CLUB</text>
  </g>

  <!-- Marquee Notice -->
  <rect x="24" y="90" width="672" height="42" rx="10" fill="#131b2e" stroke="#223152" stroke-width="1"/>
  <circle cx="48" cy="111" r="10" fill="#f59e0b" opacity="0.2"/>
  <text x="44" y="115" font-size="12" fill="#fbbf24">📢</text>
  <text x="70" y="116" font-size="14" fill="#94a3b8" font-weight="500">siteMessage: ⚡ ₹37 Sign-up Bonus added! Min. withdrawal ₹100 instant payout...</text>

  <!-- Hero Banner (Falcon Club Welcome) -->
  <g transform="translate(24, 150)" filter="url(#shadow)">
    <rect width="672" height="340" rx="24" fill="url(#bannerGrad)" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.4"/>
    
    <!-- Ambient glow circle -->
    <circle cx="480" cy="170" r="130" fill="#38bdf8" opacity="0.15" filter="blur(30px)"/>
    <circle cx="200" cy="170" r="110" fill="#eab308" opacity="0.12" filter="blur(25px)"/>

    <!-- Left Brand Text -->
    <g transform="translate(48, 110)">
      <path d="M-10,-45 L10,-45 L0,-30 Z" fill="#ef4444" opacity="0.8"/>
      <text x="0" y="0" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="2">FALCON</text>
      <text x="0" y="52" font-size="52" font-weight="900" fill="url(#goldGrad)" letter-spacing="3">CLUB</text>
      
      <rect x="0" y="80" width="220" height="28" rx="6" fill="#0f172a" stroke="#eab308" stroke-width="1"/>
      <text x="110" y="99" text-anchor="middle" font-size="13" font-weight="800" fill="#fef08a" letter-spacing="2">★ WELCOME TO THE CLUB ★</text>
    </g>

    <!-- Golden Falcon Shield on Right -->
    <g transform="translate(480, 160)">
      <!-- Outer Winged Shield -->
      <path d="M-90,-60 Q-40,-120 0,-120 Q40,-120 90,-60 Q110,30 0,110 Q-110,30 -90,-60 Z" fill="url(#goldGrad)"/>
      <path d="M-75,-50 Q-35,-100 0,-100 Q35,-100 75,-50 Q90,25 0,92 Q-90,25 -75,-50 Z" fill="#0b1329"/>
      <!-- Inner Falcon Head -->
      <path d="M-40,-20 Q-20,-70 20,-50 Q50,-35 45,5 Q30,25 0,35 Q-35,30 -40,-20 Z" fill="url(#goldGrad)"/>
      <circle cx="10" cy="-25" r="4" fill="#000"/>
      <!-- Glowing arcs -->
      <path d="M-105,-80 Q0,-150 105,-80" fill="none" stroke="#67e8f9" stroke-width="3" opacity="0.8"/>
      <path d="M-115,20 Q0,140 115,20" fill="none" stroke="#eab308" stroke-width="2.5" opacity="0.7"/>
    </g>
  </g>

  <!-- Wallet & Action Buttons Section -->
  <g transform="translate(24, 520)">
    <!-- Wallet Balance Box -->
    <rect width="250" height="96" rx="16" fill="#131b2e" stroke="#233554" stroke-width="1.5"/>
    <text x="24" y="36" font-size="15" fill="#94a3b8" font-weight="500">🪙 Wallet balance</text>
    <text x="24" y="74" font-size="34" font-weight="900" fill="#f8fafc">₹37.00</text>
    <text x="145" y="72" font-size="14" fill="#22c55e" font-weight="700">+₹37 Bonus</text>

    <!-- Withdraw Button (Min 100) -->
    <g transform="translate(268, 0)">
      <rect width="190" height="96" rx="16" fill="url(#withdrawGrad)"/>
      <text x="95" y="42" text-anchor="middle" font-size="20" font-weight="800" fill="#ffffff">↑ Withdraw</text>
      <text x="95" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#fef3c7">Min ₹100 Only</text>
    </g>

    <!-- Deposit Button -->
    <g transform="translate(476, 0)">
      <rect width="196" height="96" rx="16" fill="url(#depositGrad)"/>
      <text x="98" y="42" text-anchor="middle" font-size="20" font-weight="800" fill="#ffffff">↓ Deposit</text>
      <text x="98" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#fee2e2">Instant Credit</text>
    </g>
  </g>

  <!-- Wheel of Fortune & VIP Privileges -->
  <g transform="translate(24, 640)">
    <!-- Wheel card -->
    <rect width="324" height="110" rx="18" fill="url(#wheelGrad)" filter="url(#shadow)"/>
    <circle cx="65" cy="55" r="38" fill="#fff" opacity="0.25"/>
    <text x="50" y="65" font-size="32">🎡</text>
    <text x="125" y="48" font-size="22" font-weight="900" fill="#ffffff">Wheel</text>
    <text x="125" y="76" font-size="20" font-weight="800" fill="#ffedd5">of fortune</text>

    <!-- VIP Card -->
    <g transform="translate(348, 0)">
      <rect width="324" height="110" rx="18" fill="url(#vipGrad)" filter="url(#shadow)"/>
      <circle cx="65" cy="55" r="38" fill="#fff" opacity="0.25"/>
      <text x="50" y="65" font-size="32">👑</text>
      <text x="125" y="48" font-size="22" font-weight="900" fill="#ffffff">VIP</text>
      <text x="125" y="76" font-size="20" font-weight="800" fill="#ede9fe">privileges</text>
    </g>
  </g>

  <!-- Categories Tab -->
  <g transform="translate(24, 780)">
    <rect width="672" height="64" rx="14" fill="#131c30"/>
    <g transform="translate(24, 40)">
      <text x="0" y="0" font-size="17" font-weight="800" fill="#ef4444">🏠 Lobby</text>
      <line x1="-4" y1="12" x2="68" y2="12" stroke="#ef4444" stroke-width="3"/>
    </g>
    <g transform="translate(150, 40)">
      <text x="0" y="0" font-size="17" font-weight="700" fill="#94a3b8">🎮 Mini Game</text>
    </g>
    <g transform="translate(310, 40)">
      <text x="0" y="0" font-size="17" font-weight="700" fill="#94a3b8">🎰 Slots</text>
    </g>
    <g transform="translate(440, 40)">
      <text x="0" y="0" font-size="17" font-weight="700" fill="#94a3b8">🃏 Card</text>
    </g>
    <g transform="translate(560, 40)">
      <text x="0" y="0" font-size="17" font-weight="700" fill="#94a3b8">🐟 Fishing</text>
    </g>
  </g>

  <!-- Lottery Title -->
  <g transform="translate(24, 880)">
    <circle cx="22" cy="22" r="22" fill="#ef4444"/>
    <text x="14" y="30" font-size="20" font-weight="900" fill="#ffffff">8</text>
    <text x="60" y="24" font-size="22" font-weight="900" fill="#ffffff">Lottery Games</text>
    <text x="60" y="48" font-size="14" fill="#64748b">Independently verified, 100% fair, secure and instant withdrawals</text>
  </g>

  <!-- Game Cards (WIN GO & Official Channel) -->
  <g transform="translate(24, 955)">
    <!-- Win Go Card -->
    <rect width="324" height="240" rx="20" fill="#19325c" stroke="#38bdf8" stroke-width="1.5"/>
    <rect width="324" height="70" rx="20" fill="#0284c7" opacity="0.3"/>
    <text x="162" y="50" text-anchor="middle" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="1">WIN GO</text>
    <!-- Balls -->
    <circle cx="110" cy="130" r="42" fill="#ef4444"/>
    <text x="98" y="145" font-size="44" font-weight="900" fill="#ffffff">1</text>
    <circle cx="210" cy="150" r="32" fill="#3b82f6"/>
    <text x="200" y="162" font-size="34" font-weight="900" fill="#ffffff">8</text>
    <rect x="36" y="196" width="252" height="30" rx="8" fill="#0ea5e9"/>
    <text x="162" y="217" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">PLAY NOW · INSTANT WIN</text>

    <!-- Channel Card -->
    <g transform="translate(348, 0)">
      <rect width="324" height="240" rx="20" fill="#2d1c3a" stroke="#f43f5e" stroke-width="1.5"/>
      <rect width="324" height="70" rx="20" fill="#f43f5e" opacity="0.2"/>
      <text x="162" y="50" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">Official Channel</text>
      <!-- Dice & Coin graphics -->
      <rect x="130" y="90" width="60" height="60" rx="10" fill="#fff"/>
      <circle cx="150" cy="110" r="5" fill="#ef4444"/>
      <circle cx="170" cy="130" r="5" fill="#ef4444"/>
      <rect x="36" y="196" width="252" height="30" rx="8" fill="#0284c7"/>
      <text x="162" y="217" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff">JOIN TELEGRAM ✈</text>
    </g>
  </g>

  <!-- Floating Join Falcon Club CTA Banner at bottom -->
  <g transform="translate(24, 1220)">
    <rect width="672" height="100" rx="24" fill="url(#goldGrad)" filter="url(#shadow)"/>
    <text x="336" y="44" text-anchor="middle" font-size="24" font-weight="900" fill="#0f172a" letter-spacing="1">⚡ JOIN FALCON CLUB NOW</text>
    <text x="336" y="76" text-anchor="middle" font-size="16" font-weight="800" fill="#451a03">GET ₹37 BONUS · MIN WITHDRAWAL ₹100</text>
  </g>
</svg>`;

// 2.jpg - Win Go Color Prediction Screen
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1440" viewBox="0 0 720 1440" style="background:#0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <defs>
    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
    <linearGradient id="timerCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F43F5E"/>
      <stop offset="100%" stop-color="#E11D48"/>
    </linearGradient>
    <linearGradient id="greenBtn" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#22C55E"/>
      <stop offset="100%" stop-color="#16A34A"/>
    </linearGradient>
    <linearGradient id="violetBtn" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#A855F7"/>
      <stop offset="100%" stop-color="#9333EA"/>
    </linearGradient>
    <linearGradient id="redBtn" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#DC2626"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect width="720" height="70" fill="#090d16"/>
  <text x="36" y="44" font-size="28" fill="#ffffff">‹</text>
  <text x="360" y="44" text-anchor="middle" font-size="20" font-weight="900" fill="url(#goldGrad2)">FALCON CLUB</text>
  <text x="660" y="44" font-size="22" fill="#ffffff">🎧</text>

  <!-- Win Go Timer Selection Tabs -->
  <g transform="translate(24, 90)">
    <!-- Active Tab: Win Go 30s -->
    <rect width="158" height="110" rx="16" fill="#f43f5e"/>
    <circle cx="79" cy="42" r="24" fill="#ffffff" opacity="0.3"/>
    <text x="70" y="48" font-size="18">⏱</text>
    <text x="79" y="86" text-anchor="middle" font-size="15" font-weight="800" fill="#ffffff">Win Go 30s</text>

    <!-- 1Min -->
    <g transform="translate(172, 0)">
      <rect width="158" height="110" rx="16" fill="#1e293b"/>
      <circle cx="79" cy="42" r="24" fill="#334155"/>
      <text x="70" y="48" font-size="18">⏱</text>
      <text x="79" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#94a3b8">Win Go 1Min</text>
    </g>

    <!-- 3Min -->
    <g transform="translate(344, 0)">
      <rect width="158" height="110" rx="16" fill="#1e293b"/>
      <circle cx="79" cy="42" r="24" fill="#334155"/>
      <text x="70" y="48" font-size="18">⏱</text>
      <text x="79" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#94a3b8">Win Go 3Min</text>
    </g>

    <!-- 5Min -->
    <g transform="translate(516, 0)">
      <rect width="156" height="110" rx="16" fill="#1e293b"/>
      <circle cx="78" cy="42" r="24" fill="#334155"/>
      <text x="69" y="48" font-size="18">⏱</text>
      <text x="78" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#94a3b8">Win Go 5Min</text>
    </g>
  </g>

  <!-- Big Timer Countdown Card -->
  <g transform="translate(24, 220)">
    <rect width="672" height="170" rx="20" fill="url(#timerCard)"/>
    
    <!-- Left side: How to play & Win Go 30s -->
    <rect x="24" y="24" width="180" height="38" rx="19" fill="#ffffff" opacity="0.25"/>
    <text x="114" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">📖 How to play</text>
    <text x="26" y="98" font-size="18" font-weight="800" fill="#ffffff">Win Go 30s</text>
    
    <!-- Previous winning balls -->
    <circle cx="45" cy="132" r="16" fill="#8b5cf6"/>
    <text x="40" y="138" font-size="15" font-weight="900" fill="#fff">5</text>
    <circle cx="85" cy="132" r="16" fill="#10b981"/>
    <text x="80" y="138" font-size="15" font-weight="900" fill="#fff">3</text>
    <circle cx="125" cy="132" r="16" fill="#10b981"/>
    <text x="120" y="138" font-size="15" font-weight="900" fill="#fff">9</text>
    <circle cx="165" cy="132" r="16" fill="#10b981"/>
    <text x="160" y="138" font-size="15" font-weight="900" fill="#fff">7</text>
    <circle cx="205" cy="132" r="16" fill="#10b981"/>
    <text x="200" y="138" font-size="15" font-weight="900" fill="#fff">1</text>

    <!-- Divider dots -->
    <line x1="336" y1="24" x2="336" y2="146" stroke="#ffffff" stroke-width="2" stroke-dasharray="4 4" opacity="0.4"/>

    <!-- Right side: Time remaining -->
    <text x="500" y="44" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">Time remaining</text>
    
    <!-- Digital Flip Timer -->
    <g transform="translate(390, 60)">
      <rect x="0" y="0" width="44" height="56" rx="8" fill="#ffffff"/>
      <text x="22" y="40" text-anchor="middle" font-size="34" font-weight="900" fill="#0f172a">0</text>
      
      <rect x="52" y="0" width="44" height="56" rx="8" fill="#ffffff"/>
      <text x="74" y="40" text-anchor="middle" font-size="34" font-weight="900" fill="#0f172a">0</text>
      
      <text x="108" y="38" font-size="32" font-weight="900" fill="#ffffff">:</text>

      <rect x="124" y="0" width="44" height="56" rx="8" fill="#ffffff"/>
      <text x="146" y="40" text-anchor="middle" font-size="34" font-weight="900" fill="#0f172a">1</text>
      
      <rect x="176" y="0" width="44" height="56" rx="8" fill="#ffffff"/>
      <text x="198" y="40" text-anchor="middle" font-size="34" font-weight="900" fill="#e11d48">8</text>
    </g>
    <text x="500" y="148" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff" letter-spacing="1">20261001051258</text>
  </g>

  <!-- Color Selector Buttons (Green, Violet, Red) -->
  <g transform="translate(24, 410)">
    <rect width="210" height="66" rx="14" fill="url(#greenBtn)"/>
    <text x="105" y="42" text-anchor="middle" font-size="22" font-weight="800" fill="#ffffff">Green</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="66" rx="14" fill="url(#violetBtn)"/>
      <text x="105" y="42" text-anchor="middle" font-size="22" font-weight="800" fill="#ffffff">Violet</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="212" height="66" rx="14" fill="url(#redBtn)"/>
      <text x="106" y="42" text-anchor="middle" font-size="22" font-weight="800" fill="#ffffff">Red</text>
    </g>
  </g>

  <!-- Number Balls Grid 0 - 9 -->
  <g transform="translate(24, 500)">
    <rect width="672" height="230" rx="20" fill="#1e293b"/>
    
    <!-- Row 1: 0 1 2 3 4 -->
    <!-- 0: violet/red half -->
    <circle cx="80" cy="65" r="42" fill="#ef4444" stroke="#a855f7" stroke-width="6"/>
    <text x="80" y="78" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">0</text>
    
    <!-- 1: green -->
    <circle cx="210" cy="65" r="42" fill="#22c55e"/>
    <text x="210" y="78" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">1</text>
    
    <!-- 2: red -->
    <circle cx="340" cy="65" r="42" fill="#ef4444"/>
    <text x="340" y="78" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">2</text>
    
    <!-- 3: green -->
    <circle cx="470" cy="65" r="42" fill="#22c55e"/>
    <text x="470" y="78" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">3</text>
    
    <!-- 4: red -->
    <circle cx="600" cy="65" r="42" fill="#ef4444"/>
    <text x="600" y="78" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">4</text>

    <!-- Row 2: 5 6 7 8 9 -->
    <!-- 5: violet/green half -->
    <circle cx="80" cy="165" r="42" fill="#22c55e" stroke="#a855f7" stroke-width="6"/>
    <text x="80" y="178" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">5</text>
    
    <!-- 6: red -->
    <circle cx="210" cy="165" r="42" fill="#ef4444"/>
    <text x="210" y="178" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">6</text>
    
    <!-- 7: green -->
    <circle cx="340" cy="165" r="42" fill="#22c55e"/>
    <text x="340" y="178" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">7</text>
    
    <!-- 8: red -->
    <circle cx="470" cy="165" r="42" fill="#ef4444"/>
    <text x="470" y="178" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">8</text>
    
    <!-- 9: green -->
    <circle cx="600" cy="165" r="42" fill="#22c55e"/>
    <text x="600" y="178" text-anchor="middle" font-size="36" font-weight="900" fill="#ffffff">9</text>
  </g>

  <!-- Multiplier Selectors -->
  <g transform="translate(24, 750)">
    <rect width="100" height="50" rx="10" fill="#0f172a" stroke="#475569" stroke-width="1"/>
    <text x="50" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#f59e0b">Random</text>

    <rect x="110" y="0" width="70" height="50" rx="10" fill="#22c55e"/>
    <text x="145" y="32" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">X1</text>

    <rect x="190" y="0" width="70" height="50" rx="10" fill="#1e293b"/>
    <text x="225" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">X5</text>

    <rect x="270" y="0" width="70" height="50" rx="10" fill="#1e293b"/>
    <text x="305" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">X10</text>

    <rect x="350" y="0" width="70" height="50" rx="10" fill="#1e293b"/>
    <text x="385" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">X20</text>

    <rect x="430" y="0" width="70" height="50" rx="10" fill="#1e293b"/>
    <text x="465" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">X50</text>

    <rect x="510" y="0" width="80" height="50" rx="10" fill="#1e293b"/>
    <text x="550" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">X100</text>
  </g>

  <!-- Big / Small Buttons -->
  <g transform="translate(24, 820)">
    <rect width="330" height="66" rx="14" fill="#f59e0b"/>
    <text x="165" y="42" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">Big</text>

    <g transform="translate(342, 0)">
      <rect width="330" height="66" rx="14" fill="#3b82f6"/>
      <text x="165" y="42" text-anchor="middle" font-size="22" font-weight="900" fill="#ffffff">Small</text>
    </g>
  </g>

  <!-- Tabs: Game history / Chart / My history -->
  <g transform="translate(24, 910)">
    <rect width="216" height="50" rx="12" fill="#ef4444"/>
    <text x="108" y="32" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">Game history</text>

    <rect x="228" y="0" width="216" height="50" rx="12" fill="#1e293b"/>
    <text x="336" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">Chart</text>

    <rect x="456" y="0" width="216" height="50" rx="12" fill="#1e293b"/>
    <text x="564" y="32" text-anchor="middle" font-size="16" font-weight="700" fill="#94a3b8">My history</text>
  </g>

  <!-- History Results Table -->
  <g transform="translate(24, 980)">
    <!-- Header row -->
    <rect width="672" height="50" rx="10" fill="#ef4444"/>
    <text x="100" y="32" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">Period</text>
    <text x="290" y="32" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">Number</text>
    <text x="440" y="32" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">Big Small</text>
    <text x="580" y="32" text-anchor="middle" font-size="16" font-weight="800" fill="#ffffff">Color</text>

    <!-- Row 1 -->
    <rect y="60" width="672" height="60" rx="8" fill="#1e293b"/>
    <text x="100" y="96" text-anchor="middle" font-size="15" fill="#cbd5e1" font-weight="600">20261001051258</text>
    <text x="290" y="98" text-anchor="middle" font-size="24" fill="#22c55e" font-weight="900">5</text>
    <text x="440" y="96" text-anchor="middle" font-size="15" fill="#f8fafc" font-weight="700">Big</text>
    <circle cx="570" cy="92" r="8" fill="#22c55e"/>
    <circle cx="590" cy="92" r="8" fill="#a855f7"/>

    <!-- Row 2 -->
    <rect y="130" width="672" height="60" rx="8" fill="#131d2e"/>
    <text x="100" y="166" text-anchor="middle" font-size="15" fill="#cbd5e1" font-weight="600">20261001051257</text>
    <text x="290" y="168" text-anchor="middle" font-size="24" fill="#22c55e" font-weight="900">3</text>
    <text x="440" y="166" text-anchor="middle" font-size="15" fill="#f8fafc" font-weight="700">Small</text>
    <circle cx="580" cy="162" r="8" fill="#22c55e"/>
  </g>

  <!-- Floating Join Falcon Club CTA at bottom -->
  <g transform="translate(24, 1220)">
    <rect width="672" height="100" rx="24" fill="url(#goldGrad2)"/>
    <text x="336" y="44" text-anchor="middle" font-size="24" font-weight="900" fill="#0f172a" letter-spacing="1">⚡ JOIN FALCON CLUB NOW</text>
    <text x="336" y="76" text-anchor="middle" font-size="16" font-weight="800" fill="#451a03">GET ₹37 BONUS · MIN WITHDRAWAL ₹100</text>
  </g>
</svg>`;

fs.writeFileSync('/tmp/1.svg', svg1);
fs.writeFileSync('/tmp/2.svg', svg2);

console.log('SVGs created. Converting to JPG via ImageMagick...');
try {
  execSync('convert -density 150 /tmp/1.svg public/1.jpg');
  execSync('convert -density 150 /tmp/2.svg public/2.jpg');
  console.log('Successfully created public/1.jpg and public/2.jpg!');
} catch (e) {
  console.error('Convert failed, copying SVGs as fallback:', e);
}
