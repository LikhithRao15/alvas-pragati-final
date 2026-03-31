"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [revealItems, setRevealItems] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.querySelector("[data-reveals='true']");
      if (!target) return;
      if (window.scrollY > 120) setRevealItems(true);
      else setRevealItems(false);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative" data-reveals="true">
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-30">
        <div className="hero-bg absolute inset-0"></div>
        <Image
          src="/alvas-pragati-2024-job-fair-1715499747.webp"
          alt="Alvas Pragati Job Fair"
          fill
          className="fixed inset-0 object-cover z-10"
          priority
        />

        <div className="hero-content relative z-20 max-w-4xl text-center p-16">
          <div className="hero-badge inline-flex items-center bg-primary text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-md">
            ✦ Alva's Education Foundation · Since 1988
          </div>
          <h1 className="hero-title font-heading text-5xl md:text-7xl font-black text-primary leading-tight mb-6">
            Welcome to<br />
            <span className="text-accent">Alvas Pragati</span>
          </h1>
          <p className="hero-sub text-xl text-text-muted mb-8">
            Connecting Talent with Opportunity
          </p>

          <div className="hero-buttons flex flex-wrap justify-center gap-5">
            <Link href="/candidate-registration" className="hero-cta-secondary bg-white text-primary px-8 py-4 rounded-xl border-2 border-primary font-semibold shadow-lg hover:bg-primary hover:text-white transition-all">
              <i className="fas fa-user-graduate mr-2"></i>
              Candidate Registration
            </Link>
            <Link href="/company-registration" className="hero-cta-secondary bg-white text-primary px-8 py-4 rounded-xl border-2 border-primary font-semibold shadow-lg hover:bg-primary hover:text-white transition-all">
              <i className="fas fa-building mr-2"></i>
              Company Registration
            </Link>
          </div>

          <div className="hero-stats flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/30">
            {[
              { value: "500+", label: "Companies" },
              { value: "8K+", label: "Placements" },
              { value: "98%", label: "Success Rate" },
            ].map((item) => (
              <div key={item.label} className="stat text-center">
                <div className="stat-num font-heading text-3xl md:text-4xl font-extrabold text-primary">
                  {item.value}
                </div>
                <div className="stat-label text-xs text-text-muted uppercase tracking-wide mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-xs text-text-muted uppercase tracking-widest animate-bounce">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down mt-2 text-accent"></i>
        </div>
      </section>

      <section id="companies" className="bg-white/20 backdrop-blur-[10px] border-t border-b border-white/30 py-20">
        <div className="container max-w-7xl mx-auto px-10">
          <div className="header text-center pb-10">
            <div className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
              <div className="w-10 h-0.5 bg-accent rounded-full"></div>
              Our Partners
            </div>
            <h2 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Join hundreds of companies that trust Alvas Pragati for your recruitment needs.
            </p>
          </div>

          <div className="marquee-track overflow-hidden relative">
            <div className="marquee-row flex gap-6 w-max animate-marquee">
              {['T', 'I', 'S', 'L', 'C'].map((ch, i) => (
                <div key={i} className="company-card flex-shrink-0 w-48 bg-white/60 backdrop-blur-20 border border-glass-border rounded-3xl p-5 text-center cursor-pointer shadow-sm transition-all duration-700 hover:translate-y-[-6px] hover:rotate-1 hover:scale-105 hover:shadow-md">
                  <div className="company-logo-wrap w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white shadow-md bg-gradient-to-br from-indigo-500 to-blue-500">
                    {ch}
                  </div>
                  <div className="company-name text-sm font-semibold text-primary">Company {i + 1}</div>
                  <div className="company-sector text-xs text-text-muted">Industry</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container max-w-7xl mx-auto px-10">
          <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="about-text">
              <span className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
                <div className="w-10 h-0.5 bg-accent rounded-full"></div>
                About Us
              </span>
              <h2 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                Empowering Careers, Building Futures
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Alvas Pragati delivers the best career opportunities by matching talent with leading companies across multiple domains.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Through partnerships, training, and personalized guidance, we create success journeys for every candidate.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="about-feature p-4 rounded-2xl border border-glass-border bg-white/60 shadow-sm">
                  <h3 className="about-feature-title">Placement Drives</h3>
                  <p className="about-feature-text">Campus drives and recruitment events across domains.</p>
                </div>
                <div className="about-feature p-4 rounded-2xl border border-glass-border bg-white/60 shadow-sm">
                  <h3 className="about-feature-title">Career Counseling</h3>
                  <p className="about-feature-text">Career planning support and mentorship.</p>
                </div>
              </div>
            </div>
            <div className="about-images grid grid-cols-2 gap-4">
              <div className="about-img-card rounded-3xl overflow-hidden aspect-square shadow-md relative">
                <Image src="/Dr.Mohan-Alva-1.jpg" alt="Dr. Mohan Alva" fill className="object-cover" />
              </div>
              <div className="about-img-card rounded-3xl overflow-hidden aspect-[0.85] shadow-md relative">
                <Image src="/images.jpeg" alt="Event" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

