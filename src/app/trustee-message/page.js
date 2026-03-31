export default function TrusteeMessage() {
  return (
    <section className="pt-40 pb-20">
      <div className="container max-w-6xl mx-auto px-10">
        <div className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
          <div className="w-10 h-0.5 bg-accent rounded-full"></div>
          Trustee's Message
        </div>
        <h1 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-8">
          Message from the Trustee
        </h1>
        <div className="bg-white/70 backdrop-blur-10 border border-glass-border rounded-3xl p-10">
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            "Alvas Pragati is an initiative designed to accelerate career growth and foster long-term success. Our focus is on providing meaningful engagement between institutions and employers."
          </p>
          <p className="text-text-muted text-lg leading-relaxed">
            "We believe that every student has a unique potential, and through collaborative efforts, we can help them build strong professional journeys."
          </p>
        </div>
      </div>
    </section>
  );
}