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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/alvas-pragati-2024-job-fair-1715499747.webp"
            alt="Alvas Pragati Job Fair"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center mt-12">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 border border-white/30 bg-black/30 backdrop-blur-md text-white px-6 py-1.5 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            <span className="text-white text-[12px]">✦</span> ALVA'S EDUCATION FOUNDATION · SINCE 1988
          </div>

          {/* Main Typography */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-lg">
            <span className="text-white block">Welcome to</span>
            <span className="text-[#FACC15] block mt-2">Alvas Pragati</span>
          </h1>

          <p className="font-serif italic text-white/90 text-lg md:text-xl lg:text-2xl mb-12 drop-shadow-md font-light">
            Largest Placement Drive
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto mb-20">
            <Link 
              href="/candidate-registration" 
              className="inline-flex items-center justify-center gap-3 border border-white/50 bg-white/10 backdrop-blur-md text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all min-w-[240px]"
            >
              <i className="fas fa-user-graduate text-base"></i>
              Candidate Registration
            </Link>
            <Link 
              href="/company-registration" 
              className="inline-flex items-center justify-center gap-3 border border-white/50 bg-white/10 backdrop-blur-md text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all min-w-[240px]"
            >
              <i className="far fa-building text-base"></i> 
              Company Registration
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 w-full px-4">
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-white flex items-start justify-center drop-shadow-lg">
                500<span className="text-[#FACC15] text-xl md:text-2xl mt-1.5 ml-0.5 font-sans font-black">+</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium mt-1">Companies</div>
            </div>
            
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-white flex items-start justify-center drop-shadow-lg">
                8K<span className="text-[#FACC15] text-xl md:text-2xl mt-1.5 ml-0.5 font-sans font-black">+</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium mt-1">Placements</div>
            </div>
            
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-white flex items-start justify-center drop-shadow-lg">
                98<span className="text-[#FACC15] text-xl md:text-2xl mt-1.5 ml-0.5 font-sans font-black">%</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium mt-1">Success Rate</div>
            </div>
          </div>

        </div>
      </section>

      

      

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-[#f4f7fc] to-white relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/60 blur-3xl"></div>
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-blue-50/40 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-5 block drop-shadow-sm">
              Student Testimonials
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-8 drop-shadow-sm">
              What Our Students Say
            </h2>
            <div className="w-14 h-[3px] bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Scrollable Container */}
            <div 
              id="testimonials-container"
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                #testimonials-container::-webkit-scrollbar { display: none; }
              `}} />

              {/* Card 1 */}
              <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-accent text-sm tracking-widest mb-6">★★★★★</div>
                  <p className="font-serif italic text-slate-500 text-[17px] leading-relaxed mb-10">
                    <span className="text-accent/30 font-bold text-xl tracking-tighter mr-2 font-sans">//</span>
                    The placement process was impeccably organized. The company variety, interview rounds, and support from the placement cell were truly world-class.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-xl shadow-inner border border-blue-100/50">
                    👨‍💼
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm font-heading mb-0.5">Mohammed Adnan</h4>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">MBA, Batch 2023</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-accent text-sm tracking-widest mb-6">★★★★★</div>
                  <p className="font-serif italic text-slate-500 text-[17px] leading-relaxed mb-10">
                    <span className="text-accent/30 font-bold text-xl tracking-tighter mr-2 font-sans">//</span>
                    I was nervous about placements, but the mock interviews and guidance at Pragati built my confidence. Got placed at TCS with a great package!
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-xl shadow-inner border border-purple-100/50">
                    👩‍💻
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm font-heading mb-0.5">Priya Ganesh</h4>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">B.E. Electronics, 2024</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-accent text-sm tracking-widest mb-6">★★★★★</div>
                  <p className="font-serif italic text-slate-500 text-[17px] leading-relaxed mb-10">
                    <span className="text-accent/30 font-bold text-xl tracking-tighter mr-2 font-sans">//</span>
                    Pragati is not just a placement drive — it's a complete career launchpad. The exposure, the networking, the interviews — everything is first rate.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-xl shadow-inner border border-emerald-100/50">
                    👨‍🔧
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm font-heading mb-0.5">Karthik Bhat</h4>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">B.Tech Mechanical, 2023</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-accent text-sm tracking-widest mb-6">★★★★★</div>
                  <p className="font-serif italic text-slate-500 text-[17px] leading-relaxed mb-10">
                    <span className="text-accent/30 font-bold text-xl tracking-tighter mr-2 font-sans">//</span>
                    Getting shortlisted through Alvas Pragati was incredibly smooth. The entire process from registration to the final interview was transparent.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-xl shadow-inner border border-amber-100/50">
                    👩‍🎓
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm font-heading mb-0.5">Sneha Rao</h4>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">MCA, Batch 2024</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination & Controls */}
            <div className="flex items-center justify-center gap-5 mt-2">
              <button 
                onClick={() => document.getElementById('testimonials-container').scrollBy({ left: -420, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-slate-300 transition-all focus:outline-none hover:-translate-x-0.5"
                aria-label="Previous testimonial"
              >
                <i className="fas fa-chevron-left text-xs"></i>
              </button>
              
              <div className="flex items-center gap-2 px-3">
                <div className="w-5 h-1.5 rounded-full bg-primary transition-all"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200 transition-all"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200 transition-all"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200 transition-all"></div>
              </div>
              
              <button 
                onClick={() => document.getElementById('testimonials-container').scrollBy({ left: 420, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-primary hover:border-slate-300 transition-all focus:outline-none hover:translate-x-0.5"
                aria-label="Next testimonial"
              >
                <i className="fas fa-chevron-right text-xs"></i>
              </button>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}

