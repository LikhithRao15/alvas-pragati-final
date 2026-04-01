import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#020212] pt-20 pb-4 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 lg:col-span-1 pr-0 lg:pr-6">
            <div className="flex items-start gap-3 mb-5">
              <span className="text-accent text-sm pt-0.5">✦</span>
              <div className="flex flex-col">
                <h3 className="font-serif font-bold text-[22px] text-white leading-none mb-1 shadow-sm drop-shadow-sm">Alvas Pragati</h3>
                <h4 className="text-[11px] tracking-[0.2em] text-red-700/80 uppercase font-bold">Placement Cell</h4>
              </div>
            </div>
            <p className="text-[13px] text-white leading-relaxed mb-8 font-medium">
              Alvas Pragati is the annual placement drive of Alva's Education Foundation, connecting thousands of students with industry opportunities across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all hover:-translate-y-0.5" aria-label="Facebook">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all hover:-translate-y-0.5" aria-label="Instagram">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all hover:-translate-y-0.5" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all hover:-translate-y-0.5" aria-label="Twitter">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-md transition-all hover:-translate-y-0.5" aria-label="YouTube">
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-[11px] uppercase tracking-widest text-white mb-6 drop-shadow-sm">Quick Links</h4>
            <ul className="space-y-3.5">
              <li><Link href="/" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link href="/about-pragati" className="text-[13px] text-white hover:text-primary transition-colors font-medium">About Pragati</Link></li>
              <li><Link href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">About AEF</Link></li>
              <li><Link href="#companies" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Participating Companies</Link></li>
              <li><Link href="/candidate-registration" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Candidate Registration</Link></li>
              <li><Link href="/company-registration" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Company Registration</Link></li>
              <li><Link href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Results</Link></li>
            </ul>
          </div>

          {/* Column 3: Institutions */}
          <div className="col-span-1">
            <h4 className="font-bold text-[11px] uppercase tracking-widest text-white mb-6 drop-shadow-sm">Institutions</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Alva's College of Engg.</a></li>
              <li><a href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Alva's Institute of Engg.</a></li>
              <li><a href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Alva's College</a></li>
              <li><a href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Alva's Dental College</a></li>
              <li><a href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Alva's Nursing College</a></li>
              <li><a href="#" className="text-[13px] text-white hover:text-primary transition-colors font-medium">Alva's College of Education</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1">
            <h4 className="font-bold text-[11px] uppercase tracking-widest text-white mb-6 drop-shadow-sm">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-accent mt-0.5 text-[15px]"></i>
                <span className="text-[13px] text-white font-medium leading-relaxed">Alva's College, Vidyagiri, Moodbidri, DK, <br/> Karnataka – 574 227</span>
              </li>
              <li className="flex items-center gap-4 hover:cursor-pointer group">
                <i className="fas fa-phone-alt text-accent text-[14px]"></i>
                <span className="text-[13px] text-white font-medium group-hover:text-primary transition-colors">+91 820 222 2222 / +91 820 222 3333</span>
              </li>
              <li className="flex items-center gap-4 hover:cursor-pointer group">
                <i className="fas fa-envelope text-accent text-[14px]"></i>
                <span className="text-[13px] text-white font-medium group-hover:text-primary transition-colors">pragati@alvas.org</span>
              </li>
              <li className="flex items-center gap-4 hover:cursor-pointer group">
                <i className="fas fa-globe text-accent text-[14px]"></i>
                <span className="text-[13px] text-white font-medium group-hover:text-primary transition-colors">www.alvas.org</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white font-medium">© 2025 Alva's Education Foundation. All rights reserved.</p>
          <div className="text-[#c5a059] text-[11px] font-semibold tracking-wide flex items-center gap-2">
            <span className="text-[14px]">✦</span> Alvas Pragati — Connecting Talent with Opportunity
          </div>
        </div>
      </div>
    </footer>
  );
}