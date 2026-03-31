"use client";

import { useRef } from "react";

export default function CandidateRegistration() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const photoInput = form.querySelector("#photo");
    if (photoInput.files.length > 0 && photoInput.files[0].size > 2 * 1024 * 1024) {
      alert("Photo size must be less than 2MB.");
      photoInput.value = "";
      return;
    }

    alert("Candidate registration submitted successfully!");
    form.reset();
  };

  return (
    <section id="candidate-registration" className="form-section pt-40 pb-20">
      <div className="container max-w-6xl mx-auto px-10">
        <div className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
          <div className="w-10 h-0.5 bg-accent rounded-full"></div>
          Candidate Registration
        </div>
        <h1 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-8">
          Candidate Registration
        </h1>

        <form ref={formRef} onSubmit={handleSubmit} className="registration-form grid gap-6 bg-white/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-primary">Candidate Details</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="candName" className="font-medium">Full Name <span className="required">*</span></label>
              <input type="text" id="candName" name="candName" className="w-full mt-2 px-4 py-3 border rounded-xl" required />
            </div>
            <div className="form-group">
              <label htmlFor="candEmail" className="font-medium">Email <span className="required">*</span></label>
              <input type="email" id="candEmail" name="candEmail" className="w-full mt-2 px-4 py-3 border rounded-xl" required />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="candPhone" className="font-medium">Phone <span className="required">*</span></label>
              <input type="tel" id="candPhone" name="candPhone" className="w-full mt-2 px-4 py-3 border rounded-xl" pattern="[0-9]{10}" required />
            </div>
            <div className="form-group">
              <label htmlFor="candDob" className="font-medium">Date of Birth</label>
              <input type="date" id="candDob" name="candDob" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="course" className="font-medium">Course</label>
              <input type="text" id="course" name="course" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
            <div className="form-group">
              <label htmlFor="year" className="font-medium">Year</label>
              <input type="text" id="year" name="year" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="cgpa" className="font-medium">CGPA</label>
              <input type="text" id="cgpa" name="cgpa" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
            <div className="form-group">
              <label htmlFor="branch" className="font-medium">Branch</label>
              <input type="text" id="branch" name="branch" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="skills" className="font-medium">Skills</label>
            <input type="text" id="skills" name="skills" className="w-full mt-2 px-4 py-3 border rounded-xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="experience" className="font-medium">Experience (Years)</label>
              <input type="number" id="experience" name="experience" min="0" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
            <div className="form-group">
              <label htmlFor="portfolio" className="font-medium">Portfolio URL</label>
              <input type="url" id="portfolio" name="portfolio" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="preferredRole" className="font-medium">Preferred Role</label>
              <input type="text" id="preferredRole" name="preferredRole" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
            <div className="form-group">
              <label htmlFor="photo" className="font-medium">Upload Photo</label>
              <input type="file" id="photo" name="photo" accept="image/*" className="w-full mt-2" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary mt-8">Emergency Contact</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="emergencyName" className="font-medium">Emergency Contact Name</label>
              <input type="text" id="emergencyName" name="emergencyName" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyPhone" className="font-medium">Emergency Phone</label>
              <input type="tel" id="emergencyPhone" name="emergencyPhone" className="w-full mt-2 px-4 py-3 border rounded-xl" />
            </div>
          </div>

          <div className="terms-row flex flex-col gap-3">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" id="agreeTerms" required />
              I agree to the terms & conditions
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" id="agreeData" required />
              I consent to data usage policies
            </label>
          </div>

          <button type="submit" className="btn-primary bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl w-full">
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  );
}