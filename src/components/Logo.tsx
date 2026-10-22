import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showUploadTrigger?: boolean;
  onOpenUpload?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showUploadTrigger = false,
  onOpenUpload,
}) => {
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Check if custom logo was uploaded in browser storage
    const saved = localStorage.getItem('marketer_ides_custom_logo');
    if (saved) {
      setCustomLogo(saved);
    }

    // Listen to custom event for logo updates across components
    const handleStorageChange = () => {
      const updated = localStorage.getItem('marketer_ides_custom_logo');
      setCustomLogo(updated);
      setImageError(false);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('marketer_logo_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('marketer_logo_updated', handleStorageChange);
    };
  }, []);

  const isDark = variant === 'dark';

  return (
    <div className={`relative inline-flex items-center group ${className}`}>
      {/* If custom logo is set and didn't error, render it */}
      {customLogo && !imageError ? (
        <img
          src={customLogo}
          alt="Marketer Ides Logo"
          className="h-10 md:h-12 w-auto object-contain transition-transform duration-200"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Native Marketer Ides Brand Logo with exact proportions */
        <div className="flex items-center gap-3">
          {/* Logo Emblem */}
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-neutral-950 flex items-center justify-center border border-orange-500/30 shadow-md shrink-0">
            <svg
              viewBox="0 0 60 60"
              className="w-7 h-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoEmblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
              {/* Performance Growth Bars */}
              <rect x="12" y="36" width="6" height="14" rx="2" fill="#F97316" fillOpacity="0.5" />
              <rect x="22" y="27" width="6" height="23" rx="2" fill="#F97316" fillOpacity="0.8" />
              <rect x="32" y="17" width="6" height="33" rx="2" fill="url(#logoEmblemGrad)" />
              {/* Dynamic Upward Trajectory Arrow & Spark */}
              <path
                d="M15 34L25 25L35 15L45 11"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37 11H45V19"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="45" cy="11" r="2" fill="#FB923C" />
            </svg>
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col text-left select-none">
            <div className="flex items-baseline">
              <span
                className={`text-xl md:text-2xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                MARKETER
              </span>
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-orange-500 ml-1">
                IDES
              </span>
            </div>
            <span
              className={`text-[8.5px] md:text-[9.5px] font-semibold tracking-wider uppercase -mt-0.5 ${
                isDark ? 'text-orange-400/90' : 'text-orange-600'
              }`}
            >
              Digital Marketing &amp; Agency
            </span>
          </div>
        </div>
      )}

      {/* Quick Upload Action if enabled */}
      {showUploadTrigger && onOpenUpload && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenUpload();
          }}
          className="ml-2 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-orange-500/10 text-orange-500 transition-all text-xs flex items-center gap-1 border border-orange-500/20"
          title="Upload or Change Logo File"
          aria-label="Upload logo file"
        >
          <Upload className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px] font-medium">Change Logo</span>
        </button>
      )}
    </div>
  );
};
