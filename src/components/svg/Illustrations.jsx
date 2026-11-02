import React from 'react';

// ==========================================
// CUSTOM HANDCRAFTED SVG ILLUSTRATIONS & ICONS
// ==========================================
export const CustomIcon = ({ type, className = "w-12 h-12" }) => {
  switch (type) {
    case 'sun':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <g stroke="#1B4332" strokeWidth="3.5" strokeLinecap="round">
            <line x1="40" y1="6" x2="40" y2="15" />
            <line x1="40" y1="65" x2="40" y2="74" />
            <line x1="6" y1="40" x2="15" y2="40" />
            <line x1="65" y1="40" x2="74" y2="40" />
            <line x1="16" y1="16" x2="23" y2="23" />
            <line x1="57" y1="57" x2="64" y2="64" />
            <line x1="64" y1="16" x2="57" y2="23" />
            <line x1="23" y1="57" x2="16" y2="64" />
          </g>
          <circle cx="40" cy="40" r="19" fill="#F4A261" stroke="#1B4332" strokeWidth="3.5" />
          <circle cx="40" cy="40" r="13" fill="#E9C46A" />
        </svg>
      );
    case 'water':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <path
            d="M40 10 C40 10 64 38 64 53 C64 66 53 72 40 72 C27 72 16 66 16 53 C16 38 40 10 40 10 Z"
            fill="#48CAE4"
            stroke="#1B4332"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M28 52 C28 44 33 36 36 32" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'co2':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <path
            d="M22 56 C13 56 8 49 8 41 C8 34 14 28 21 27 C25 17 36 14 46 18 C54 21 58 28 58 34 C66 35 72 41 72 48 C72 55 66 56 58 56 Z"
            fill="#E2ECE9"
            stroke="#1B4332"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <text x="23" y="47" fontFamily="Fredoka, sans-serif" fontSize="18" fontWeight="700" fill="#1B4332">
            CO₂
          </text>
        </svg>
      );
    case 'chlorophyll':
    case 'leaf':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <path
            d="M14 66 C14 34 38 14 68 14 C68 44 48 66 14 66 Z"
            fill="#52B788"
            stroke="#1B4332"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path d="M14 66 Q40 40 60 22" stroke="#1B4332" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M32 50 L28 36 M45 37 L42 25 M36 46 L50 48" stroke="#1B4332" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'roots':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <rect x="10" y="16" width="60" height="54" rx="10" fill="#D4A373" stroke="#1B4332" strokeWidth="3.5" />
          <line x1="10" y1="28" x2="70" y2="28" stroke="#1B4332" strokeWidth="3" />
          <path d="M40 16 L40 42 M40 32 L24 54 M40 38 L58 58 M32 43 L28 62 M48 48 L44 64" stroke="#FAF6EE" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'stomata':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <circle cx="40" cy="40" r="28" fill="#74C69D" stroke="#1B4332" strokeWidth="3.5" />
          <path d="M26 24 C16 34 16 46 26 56 C32 50 32 30 26 24 Z" fill="#40916C" stroke="#1B4332" strokeWidth="3" />
          <path d="M54 24 C64 34 64 46 54 56 C48 50 48 30 54 24 Z" fill="#40916C" stroke="#1B4332" strokeWidth="3" />
          <ellipse cx="40" cy="40" rx="6" ry="13" fill="#1B4332" />
        </svg>
      );
    case 'glucose':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <polygon
            points="40,12 64,26 64,54 40,68 16,54 16,26"
            fill="#E9C46A"
            stroke="#1B4332"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <polygon points="40,20 56,30 56,50 40,60 24,50 24,30" fill="#F4A261" opacity="0.5" />
          <text x="23" y="45" fontFamily="Fredoka, sans-serif" fontSize="13" fontWeight="700" fill="#1B4332">
            GULA
          </text>
        </svg>
      );
    case 'oxygen':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <circle cx="32" cy="44" r="20" fill="#90E0EF" stroke="#1B4332" strokeWidth="3.5" />
          <circle cx="54" cy="26" r="12" fill="#CAF0F8" stroke="#1B4332" strokeWidth="3" />
          <text x="22" y="50" fontFamily="Fredoka, sans-serif" fontSize="18" fontWeight="700" fill="#1B4332">
            O₂
          </text>
        </svg>
      );
    case 'distractor_rock':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <path d="M16 56 L22 30 L42 22 L62 32 L66 56 Z" fill="#94A3B8" stroke="#1B4332" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M28 38 L42 32 L52 42" stroke="#1B4332" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case 'distractor_cone':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <polygon points="26,40 54,40 40,68" fill="#F4A261" stroke="#1B4332" strokeWidth="3.5" strokeLinejoin="round" />
          <circle cx="40" cy="30" r="15" fill="#F28482" stroke="#1B4332" strokeWidth="3.5" />
        </svg>
      );
    case 'distractor_bottle':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <rect x="33" y="12" width="14" height="8" fill="#E76F51" stroke="#1B4332" strokeWidth="3" />
          <path d="M28 28 L33 20 L47 20 L52 28 L52 66 L28 66 Z" fill="#A8DADC" stroke="#1B4332" strokeWidth="3.5" strokeLinejoin="round" />
          <rect x="28" y="38" width="24" height="12" fill="#F4A261" stroke="#1B4332" strokeWidth="2.5" />
        </svg>
      );
    case 'distractor_car':
      return (
        <svg viewBox="0 0 80 80" className={className}>
          <path d="M14 48 L22 30 L56 30 L66 48 L66 58 L14 58 Z" fill="#E76F51" stroke="#1B4332" strokeWidth="3.5" strokeLinejoin="round" />
          <circle cx="26" cy="58" r="8" fill="#1B4332" />
          <circle cx="54" cy="58" r="8" fill="#1B4332" />
          <circle cx="26" cy="58" r="3" fill="#FAF6EE" />
          <circle cx="54" cy="58" r="3" fill="#FAF6EE" />
        </svg>
      );
    default:
      return null;
  }
};

// Custom Vector Shield/Medal Badges
export const BadgeShieldSVG = ({ id, unlocked, className = "w-14 h-14" }) => {
  const bgFill = !unlocked
    ? '#CBD5E1'
    : id === 'leaf_explorer'
    ? '#52B788'
    : id === 'energy_collector'
    ? '#F4A261'
    : '#48CAE4';

  return (
    <svg viewBox="0 0 80 80" className={className}>
      {/* Ribbon */}
      <polygon points="24,54 16,74 30,68 36,56" fill={unlocked ? '#E76F51' : '#94A3B8'} stroke="#1B4332" strokeWidth="3" strokeLinejoin="round" />
      <polygon points="56,54 64,74 50,68 44,56" fill={unlocked ? '#E76F51' : '#94A3B8'} stroke="#1B4332" strokeWidth="3" strokeLinejoin="round" />
      {/* Shield Body */}
      <path
        d="M40 8 L66 18 L66 40 C66 56 40 66 40 66 C40 66 14 56 14 40 L14 18 Z"
        fill={bgFill}
        stroke="#1B4332"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M40 14 L59 22 L59 39 C59 51 40 59 40 59 C40 59 21 51 21 39 L21 22 Z"
        fill="none"
        stroke="#FAF6EE"
        strokeWidth="2"
        strokeDasharray="4,3"
      />
      {/* Center Emblem */}
      {!unlocked ? (
        <g stroke="#1B4332" strokeWidth="3" fill="none">
          <rect x="31" y="34" width="18" height="14" rx="3" fill="#FAF6EE" />
          <path d="M35 34 V28 C35 25 45 25 45 28 V34" />
        </g>
      ) : id === 'leaf_explorer' ? (
        <path d="M28 46 C28 30 40 22 52 22 C52 38 42 46 28 46 Z" fill="#FAF6EE" stroke="#1B4332" strokeWidth="2.5" />
      ) : id === 'energy_collector' ? (
        <circle cx="40" cy="36" r="11" fill="#E9C46A" stroke="#1B4332" strokeWidth="2.5" />
      ) : (
        <polygon points="40,22 44,31 54,32 46,39 48,49 40,44 32,49 34,39 26,32 36,31" fill="#E9C46A" stroke="#1B4332" strokeWidth="2.5" />
      )}
    </svg>
  );
};


// ==========================================
// CUSTOM MASCOT: KAPTEN KLORO (STORYBOOK STYLE)
// ==========================================
export const KaptenKloro = ({ mood = 'happy', size = 'md', message = null }) => {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-28 h-28'
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className={`relative ${sizeClasses[size]} flex-shrink-0 select-none`}>
        <svg viewBox="0 0 180 180" className="w-full h-full">
          {/* Solid Offset Shadow behind Mascot */}
          <circle cx="94" cy="98" r="70" fill="#1B4332" />
          <circle cx="90" cy="94" r="70" fill="#E9C46A" stroke="#1B4332" strokeWidth="4" />
          {/* Explorer Pith Helmet */}
          <path d="M38 62 C38 28 142 28 142 62 Z" fill="#F4A261" stroke="#1B4332" strokeWidth="4" strokeLinejoin="round" />
          <rect x="30" y="56" width="120" height="12" rx="6" fill="#E9C46A" stroke="#1B4332" strokeWidth="4" />
          {/* Sprout on Top */}
          <path d="M90 32 C90 12 118 12 114 30 C110 40 90 34 90 32 Z" fill="#52B788" stroke="#1B4332" strokeWidth="3.5" />
          {/* Leaf Character Body */}
          <path
            d="M90 64 C132 64 146 102 136 138 C126 164 108 170 90 170 C72 170 54 164 44 138 C34 102 48 64 90 64 Z"
            fill="#52B788"
            stroke="#1B4332"
            strokeWidth="4"
          />
          {/* Face Expression */}
          {mood === 'excited' ? (
            <>
              <path d="M64 104 L72 95 L80 104" fill="none" stroke="#1B4332" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M100 104 L108 95 L116 104" fill="none" stroke="#1B4332" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
          ) : (
            <>
              <circle cx="72" cy="102" r="8" fill="#1B4332" />
              <circle cx="74" cy="99" r="2.5" fill="#FAF6EE" />
              <circle cx="108" cy="102" r="8" fill="#1B4332" />
              <circle cx="110" cy="99" r="2.5" fill="#FAF6EE" />
            </>
          )}
          {/* Cheeks */}
          <ellipse cx="56" cy="112" rx="7" ry="4" fill="#E76F51" />
          <ellipse cx="124" cy="112" rx="7" ry="4" fill="#E76F51" />
          {/* Mouth */}
          {mood === 'thinking' ? (
            <circle cx="94" cy="122" r="6" fill="#1B4332" />
          ) : (
            <path d="M76 118 Q90 134 104 118 Z" fill="#1B4332" stroke="#1B4332" strokeWidth="3" strokeLinejoin="round" />
          )}
        </svg>
      </div>

      {message && (
        <div className="flex-1 bg-[#FFFDF9] border-[2.5px] border-[#1B4332] rounded-2xl p-4 shadow-[4px_4px_0px_#1B4332]">
          <div className="font-heading font-bold text-[#2D6A4F] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E76F51]" />
            Catatan Kapten Kloro:
          </div>
          <p className="text-sm sm:text-base text-[#1B4332] font-medium leading-relaxed">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};


export default CustomIcon;
