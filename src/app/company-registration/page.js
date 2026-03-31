"use client";

import { useRef } from "react";

export default function CompanyRegistration() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const logoInput = form.querySelector("#compLogo");
    if (logoInput?.files?.length > 0 && logoInput.files[0].size > 2 * 1024 * 1024) {
      alert("Company logo must be smaller than 2MB.");
      logoInput.value = "";
      return;
    }

    alert("Company registration submitted successfully!");
    form.reset();
  };

  return (
    <section id="company-registration" className="form-section pt-40 pb-20">
      <div className="container max-w-6xl mx-auto px-10">
        <div className="section-tag inline-flex items-center gap-3 text-sm uppercase tracking-widest text-accent font-extrabold mb-6">
          <div className="w-10 h-0.5 bg-accent rounded-full"></div>
          Company Registration
        </div>
        <h1 className="section-title font-heading text-4xl md:text-5xl font-black text-primary leading-tight mb-8">
          Join Our Recruitment Drive
        </h1>
        <form className="bg-white/6 backdrop-blur-20 border border-glass-border rounded-3xl p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Person</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Industry</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" required>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Job Openings</label>
            <textarea rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Describe the positions you're hiring for"></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-3" required />
            <label htmlFor="terms" className="text-sm">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors w-full">Register Company</button>
        </form>
      </div>
    </section>
  );
}