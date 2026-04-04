import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-48 pb-20 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Breadcrumb / Tag */}
        <div className="flex items-center gap-3 mb-8 animate-fadeIn">
          <div className="w-12 h-[2px] bg-accent rounded-full" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Leadership Vision</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Column */}
          <div className="lg:col-span-5 relative group animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-white">
              <Image 
                src="/Dr.Mohan-Alva-1.jpg"
                alt="Dr. Mohan Alva - Chairman"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-[280px] animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-heading text-xl font-bold text-primary mb-1">Dr. Mohan Alva</h3>
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Chairman, Alva's Education Foundation</p>
              <div className="w-10 h-1 bg-accent/20 rounded-full" />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-10 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div>
              <h1 className="font-heading text-5xl lg:text-7xl font-black text-primary leading-[1.1] mb-6">
                Nurturing <span className="text-accent">Talent</span>,<br />
                Empowering <span className="text-accent">Dreams</span>.
              </h1>
              <div className="w-24 h-1.5 bg-accent rounded-full mb-8" />
            </div>

            <div className="relative">
              {/* Decorative Quote Mark */}
              <span className="absolute -top-10 -left-6 text-[120px] text-accent/10 font-serif leading-none italic pointer-events-none">"</span>
              
              <div className="space-y-6 text-slate-600 text-lg lg:text-xl leading-relaxed">
                <p className="font-medium">
                  "At Alvas Pragati, we believe that education is not just about imparting knowledge; it's about nurturing talent, fostering creativity, and empowering young minds to reach their full potential."
                </p>
                <p>
                  Our yearly placement drives connect students with amazing opportunities and world-class companies, creating a bridge between academic excellence and professional success. We are committed to fostering an environment where every individual can bloom and contribute meaningfully to society.
                </p>
                <p>
                  Through Alvas Pragati, we aim to provide a platform that not only supports the career aspirations of our students but also helps them build a strong character and a sense of responsibility.
                </p>
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm italic mb-2 font-serif">Warmest Regards,</p>
                <p className="font-heading text-2xl font-bold text-primary tracking-tight">Dr. Mohan Alva</p>
              </div>
              <div className="hidden md:block">
                 <div className="px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-accent font-bold text-xs uppercase tracking-widest">Excellence in Education</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}