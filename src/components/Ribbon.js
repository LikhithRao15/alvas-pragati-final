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
    <div id="ribbon" className={`fixed top-0 left-0 right-0 z-[1001] bg-primary h-10 px-15 flex items-center justify-between text-xs text-white/80 transition-transform duration-700 ${scrolled ? '-translate-y-full' : ''}`}>
      <div className="ribbon-item flex items-center gap-2">
        <i className="fas fa-phone text-accent"></i>
        <span>+91 9876543210</span>
      </div>
      <div className="ribbon-divider w-px h-3 bg-white/15 mx-5"></div>
      <div className="ribbon-item flex items-center gap-2">
        <i className="fas fa-envelope text-accent"></i>
        <span>info@alvaspragati.com</span>
      </div>
      <div className="ribbon-divider w-px h-3 bg-white/15 mx-5"></div>
      <div className="ribbon-item flex items-center gap-2">
        <i className="fas fa-map-marker-alt text-accent"></i>
        <span>Moodbidri, Karnataka</span>
      </div>
    </div>
  );
}