"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header id="header" className={`fixed left-0 w-full z-[1000] backdrop-blur-[15px] border-b border-black/5 ${navScrolled ? 'top-0 h-18 bg-white/[0.98] shadow-lg' : 'top-10 h-20 bg-white/[0.85]'} transition-all duration-400`}>
        <div className="header-inner max-w-7xl mx-auto flex items-center justify-between h-full px-10">
          <Link href="/" className="brand flex items-center gap-4 no-underline">
            <div className="brand-logo w-15 h-15 overflow-hidden rounded-full">
              <Image
                src="/ALVAS LOGO.png"
                alt="Alvas Pragati Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="brand-text flex flex-col">
              <div className="brand-name font-heading text-xl font-extrabold text-primary leading-none">Alvas Pragati</div>
              <div className="brand-sub text-sm text-accent font-semibold uppercase tracking-wider">Connecting Talent</div>
            </div>
          </Link>

          <nav id="main-nav" className="hidden lg:flex items-center gap-2">
            <Link href="/" className="nav-link">Home</Link>
            <div className="nav-dropdown relative group">
              <span className="nav-link inline-flex items-center gap-1">About <i className="fas fa-chevron-down caret"></i></span>
              <div className="nav-dropdown-menu absolute top-full left-0 bg-white border border-glass-border rounded-3xl shadow-lg min-w-[260px] p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto mt-4">
                <Link href="/about-pragati" className="dropdown-item">• Pragati</Link>
                <a className="dropdown-item" href="#">• AEF</a>
                <Link href="/chairman-message" className="dropdown-item">• Chairman's Message</Link>
                <Link href="/trustee-message" className="dropdown-item">• Trustee's Message</Link>
              </div>
            </div>
            <Link href="#companies" className="nav-link">Companies</Link>
            <Link href="/candidate-registration" className="nav-link">Candidate Registration</Link>
            <Link href="/company-registration" className="nav-link">Company Registration</Link>
            <Link href="#" className="nav-link">Result</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          <button className="menu-btn lg:hidden" onClick={() => setMenuOpen((s) => !s)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <div className={`mobile-nav lg:hidden ${menuOpen ? 'open' : ''}`} id="mobile-nav">
        <button className="mobile-nav-close" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about-pragati" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="#companies" className="nav-link" onClick={() => setMenuOpen(false)}>Companies</Link>
        <Link href="/candidate-registration" className="nav-link" onClick={() => setMenuOpen(false)}>Candidate Registration</Link>
        <Link href="/company-registration" className="nav-link" onClick={() => setMenuOpen(false)}>Company Registration</Link>
        <Link href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Result</Link>
        <Link href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </>
  );
}
