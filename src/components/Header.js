"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 w-full z-[1000] transition-all duration-300 ${
          navScrolled
            ? 'top-0 h-20 bg-white/85 backdrop-blur-md shadow-sm border-b border-black/5'
            : 'top-10 h-24 bg-white/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-4 lg:gap-8 group no-underline">
            <div className="flex items-center gap-4 lg:gap-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="relative h-12 w-auto lg:h-16 flex items-center">
                <Image
                  src="/pragathi.png"
                  alt="Pragathi Logo"
                  width={180}
                  height={80}
                  className="h-full w-auto object-contain drop-shadow-sm"
                  priority
                />
              </div>
              <div className="w-px h-10 lg:h-12 bg-black/10 hidden sm:block"></div>
              <div className="relative h-11 w-auto lg:h-14 flex items-center">
                <Image
                  src="/alva's.png"
                  alt="Alva's Logo"
                  width={150}
                  height={60}
                  className="h-full w-auto object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 font-main text-sm font-semibold">
            <Link
              href="/"
              className="text-text-main hover:text-accent transition-colors duration-200"
            >
              Home
            </Link>
            
            <div className="relative group p-2 -m-2">
              <button className="flex items-center gap-1.5 text-text-main group-hover:text-accent transition-colors duration-200 focus:outline-none font-semibold">
                About
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-glass-border min-w-[240px] p-2 overflow-hidden flex flex-col gap-1">
                  <Link href="/about-pragati" className="px-5 py-3 rounded-xl hover:bg-slate-50 text-text-main hover:text-accent transition-all duration-200 font-medium whitespace-nowrap">
                    Pragati
                  </Link>
                  <a href="#" className="px-5 py-3 rounded-xl hover:bg-slate-50 text-text-main hover:text-accent transition-all duration-200 font-medium whitespace-nowrap">
                    AEF
                  </a>
                  <Link href="/chairman-message" className="px-5 py-3 rounded-xl hover:bg-slate-50 text-text-main hover:text-accent transition-all duration-200 font-medium whitespace-nowrap">
                    Chairman's Message
                  </Link>
                  <Link href="/trustee-message" className="px-5 py-3 rounded-xl hover:bg-slate-50 text-text-main hover:text-accent transition-all duration-200 font-medium whitespace-nowrap">
                    Trustee's Message
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#companies" className="text-text-main hover:text-accent transition-colors duration-200">Participating<br/>Companies</Link>
            <Link href="/candidate-registration" className="text-text-main hover:text-accent transition-colors duration-200">Candidate<br/>Registration</Link>
            <Link href="/company-registration" className="text-text-main hover:text-accent transition-colors duration-200">Company <br/>Registration</Link>
            <Link href="#" className="text-text-main hover:text-accent transition-colors duration-200">Result</Link>
            
            <Link 
              href="/contact" 
              className="ml-2 px-7 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-accent transition-all duration-300 transform hover:-translate-y-[2px] shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden relative z-[1001] w-12 h-12 rounded-full hover:bg-slate-100 flex flex-col items-center justify-center gap-[5px] focus:outline-none transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-primary transition-all duration-200 ${menuOpen ? 'opacity-0 translate-x-4' : 'opacity-100 mr-1'}`}></span>
            <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[999] xl:hidden transition-all duration-500 overflow-y-auto ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className={`flex flex-col items-center justify-start min-h-full gap-5 px-6 font-main text-lg py-32 transition-transform duration-500 delay-100 ${
            menuOpen ? 'translate-y-0' : 'translate-y-12'
          }`}
        >
          <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          
          <div className="w-full max-w-sm bg-slate-50/80 rounded-3xl p-6 flex flex-col items-center gap-4 my-2 border border-slate-100">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">About Us</span>
             <Link href="/about-pragati" className="text-lg font-medium text-text-main hover:text-accent transition-colors text-center w-full" onClick={() => setMenuOpen(false)}>
               Pragati
             </Link>
             <a href="#" className="text-lg font-medium text-text-main hover:text-accent transition-colors text-center w-full" onClick={() => setMenuOpen(false)}>
               AEF
             </a>
             <Link href="/chairman-message" className="text-lg font-medium text-text-main hover:text-accent transition-colors text-center w-full" onClick={() => setMenuOpen(false)}>
               Chairman's Message
             </Link>
             <Link href="/trustee-message" className="text-lg font-medium text-text-main hover:text-accent transition-colors text-center w-full" onClick={() => setMenuOpen(false)}>
               Trustee's Message
             </Link>
          </div>

          <Link href="#companies" className="text-2xl font-bold text-primary hover:text-accent transition-colors" onClick={() => setMenuOpen(false)}>
            Companies
          </Link>
          <Link href="/candidate-registration" className="text-2xl font-bold text-primary hover:text-accent transition-colors" onClick={() => setMenuOpen(false)}>
            Candidate Registration
          </Link>
          <Link href="/company-registration" className="text-2xl font-bold text-primary hover:text-accent transition-colors" onClick={() => setMenuOpen(false)}>
            Company Registration
          </Link>
          <Link href="#" className="text-2xl font-bold text-primary hover:text-accent transition-colors" onClick={() => setMenuOpen(false)}>
            Result
          </Link>
          <Link href="/contact" className="text-xl font-bold px-10 py-4 bg-primary text-white rounded-full mt-6 shadow-md hover:bg-accent transition-colors w-full max-w-sm text-center" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
