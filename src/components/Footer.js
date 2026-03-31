export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-4 gap-20">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Alvas Pragati</h3>
            <p className="text-slate-300">Connecting Talent with Opportunity</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-accent no-underline">Home</a></li>
              <li><a href="/about-pragati" className="text-slate-300 hover:text-accent no-underline">About</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-accent no-underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Registrations</h4>
            <ul className="space-y-2">
              <li><a href="/company-registration" className="text-slate-300 hover:text-accent no-underline">Company</a></li>
              <li><a href="/candidate-registration" className="text-slate-300 hover:text-accent no-underline">Candidate</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-slate-300">info@alvaspragati.com</p>
            <p className="text-slate-300">+91 9876543210</p>
          </div>
        </div>
      </div>
    </footer>
  );
}