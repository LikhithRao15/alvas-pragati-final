export default function Contact() {
  return (
    <section className="pt-40 pb-20">
      <div className="container max-w-7xl mx-auto px-10">
        <div className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
          <div className="w-10 h-0.5 bg-accent rounded-full"></div>
          Contact Us
        </div>
        <h1 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-8">
          Get In Touch
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <i className="fas fa-phone text-accent text-xl"></i>
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-envelope text-accent text-xl"></i>
                <span>info@alvaspragati.com</span>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-map-marker-alt text-accent text-xl"></i>
                <span>Moodbidri, Karnataka</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}