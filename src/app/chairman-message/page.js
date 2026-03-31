export default function ChairmanMessage() {
  return (
    <section className="pt-40 pb-20">
      <div className="container max-w-6xl mx-auto px-10">
        <div className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
          <div className="w-10 h-0.5 bg-accent rounded-full"></div>
          Chairman's Message
        </div>
        <h1 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-8">
          Message from the Chairman
        </h1>
        <div className="bg-white/70 backdrop-blur-10 border border-glass-border rounded-3xl p-10">
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            "At Alvas Pragati, we believe in nurturing talent, fostering creativity, and empowering young minds to reach their full potential. Our yearly placement drives connect students with amazing opportunities and world-class companies."
          </p>
          <p className="text-text-muted text-lg leading-relaxed">
            "We are committed to excellence and to building a platform that supports the dreams and aspirations of every participant." 
          </p>
        </div>
      </div>
    </section>
  );
}