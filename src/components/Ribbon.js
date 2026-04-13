"use client";

import { useEffect, useState } from 'react';

export default function Ribbon() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="ribbon" className={`fixed top-0 left-0 right-0 z-[1001] bg-primary h-10 px-4 sm:px-8 lg:px-12 flex items-center justify-center sm:justify-between gap-4 sm:gap-0 text-[10px] sm:text-xs text-white/80 transition-transform duration-700 ${scrolled ? '-translate-y-full' : ''}`}>
      <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-0">
        <div className="ribbon-item flex items-center gap-1.5 sm:gap-2">
          <i className="fas fa-phone text-accent"></i>
          <span className="font-semibold tracking-wider">+91 9876543210</span>
        </div>
        <div className="ribbon-divider hidden sm:block w-px h-3 bg-white/15 mx-3 md:mx-5"></div>
        <div className="ribbon-item flex items-center gap-1.5 sm:gap-2">
          <i className="fas fa-envelope text-accent"></i>
          <span className="tracking-wide">info@alvaspragati.com</span>
        </div>
      </div>
      <div className="hidden sm:flex items-center">
        <div className="ribbon-item flex items-center gap-1.5 sm:gap-2">
          <i className="fas fa-map-marker-alt text-accent"></i>
          <span className="tracking-wide">Moodbidri, Karnataka</span>
        </div>
      </div>
    </div>
  );
}