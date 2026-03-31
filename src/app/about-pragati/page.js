import Image from "next/image";

export default function AboutPragati() {
  return (
    <section className="pt-40 pb-20">
      <div className="container max-w-7xl mx-auto px-10">
        <div className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
          <div className="w-10 h-0.5 bg-accent rounded-full"></div>
          About Pragati
        </div>
        <h1 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-8">
          About Alvas Pragati
        </h1>
        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="about-text">
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Alvas Pragati is a premier placement and career development initiative by Alvas Education Foundation. We connect talented students and professionals with leading companies across various industries.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-12">
              Our mission is to empower careers and build futures by providing unparalleled opportunities for growth and success in the professional world.
            </p>
            <div className="features-grid grid grid-cols-1 gap-6">
              <div className="feature-item flex gap-4">
                <div className="feature-item-title font-semibold text-primary">Placement Drives</div>
                <div className="feature-item-desc text-text-muted">Organized job fairs and recruitment events</div>
              </div>
              <div className="feature-item flex gap-4">
                <div className="feature-item-title font-semibold text-primary">Career Counseling</div>
                <div className="feature-item-desc text-text-muted">Guidance and support for career planning</div>
              </div>
              <div className="feature-item flex gap-4">
                <div className="feature-item-title font-semibold text-primary">Skill Development</div>
                <div className="feature-item-desc text-text-muted">Workshops and training programs</div>
              </div>
            </div>
          </div>
          <div className="about-images">
            <Image src="/Dr.Mohan-Alva-1.jpg" alt="Dr. Mohan Alva" width={400} height={400} className="rounded-3xl shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}