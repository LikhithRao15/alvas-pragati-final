"use client";

import { useState } from "react";

export default function CandidateRegistration() {
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Personal Profile
    fullName: "",
    gender: "Male",
    mobileNumber: "",
    dob: "",
    email: "",
    familyIncome: "",
    address: "",

    // Section 2: Academic Details - Individual States for clarity
    sslc: { mode: "Regular", year: "", marks: "" },
    puc: { course: "", mode: "Regular", year: "", marks: "" },
    iti: { course: "", mode: "Regular", year: "", marks: "" },
    diploma: { course: "", mode: "Regular", year: "", marks: "" },
    degree: { course: "", stream: "", mode: "Regular", year: "", marks: "" },
    pg: { course: "", stream: "", mode: "Regular", year: "", marks: "" },

    // Section 3: Skills & Aspirations
    technicalSkills: "",
    languagesKnown: "",
    industryAspiration: "",

    // Section 4: Questions
    higherStudies: "No",
    shiftWork: "No",
    validPassport: "No",
    validLicense: "No",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAcademicChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleReview = (e) => {
    e.preventDefault();
    setIsReviewMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalSubmit = () => {
    alert("Candidate registration details submitted successfully!");
    console.log("Final Submission Data:", formData);
    // Here you would typically make an API call
  };

  const handleClear = () => {
    if (confirm("Clear all form data?")) {
      window.location.reload();
    }
  };

  // UI Helpers
  const sectionHeader = "border-b-2 border-accent/20 pb-2 mb-8 mt-12 flex items-center justify-between";
  const sectionTitle = "text-xl font-bold text-primary font-heading uppercase tracking-wider";
  const inputGroup = "flex flex-col gap-1.5";
  const labelStyle = "text-[11px] font-bold text-slate-500 uppercase tracking-widest";
  const inputStyle = "px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm";
  const selectStyle = "px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm appearance-none cursor-pointer";
  const radioGroup = "flex items-center gap-6 mt-1";
  const radioLabel = "flex items-center gap-2 text-sm text-slate-700 cursor-pointer";

  const ReviewItem = ({ label, value }) => (
    <div className="flex flex-col border-b border-slate-100 pb-2">
      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">{label}</span>
      <span className="text-sm font-semibold text-primary">{value || "N/A"}</span>
    </div>
  );

  if (isReviewMode) {
    return (
      <main className="min-h-screen bg-slate-50 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Review Your Details</h1>
            <p className="text-slate-500">Please confirm your information before final submission.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-14 border border-white space-y-12">
            {/* Personal Details Preview */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Personal Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ReviewItem label="Full Name" value={formData.fullName} />
                <ReviewItem label="Gender" value={formData.gender} />
                <ReviewItem label="Mobile" value={formData.mobileNumber} />
                <ReviewItem label="DOB" value={formData.dob} />
                <ReviewItem label="Email" value={formData.email} />
                <ReviewItem label="Family Income" value={formData.familyIncome} />
                <div className="md:col-span-2 lg:col-span-3">
                   <ReviewItem label="Address" value={formData.address} />
                </div>
              </div>
            </section>

            {/* Academic Details Preview */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Academic History
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-slate-50 font-bold text-slate-500 text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Level</th>
                      <th className="px-6 py-4">Course/Stream</th>
                      <th className="px-6 py-4">Mode</th>
                      <th className="px-6 py-4">Year</th>
                      <th className="px-6 py-4">Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { l: "SSLC", d: formData.sslc },
                      { l: "PUC/12th", d: formData.puc },
                      { l: "ITI", d: formData.iti },
                      { l: "Diploma", d: formData.diploma },
                      { l: "Degree", d: formData.degree },
                      { l: "PG", d: formData.pg },
                    ].map((item, idx) => (
                      <tr key={idx} className="text-xs">
                        <td className="px-6 py-4 font-bold">{item.l}</td>
                        <td className="px-6 py-4">{item.d.course || (item.d.stream ? `${item.d.stream}` : "N/A")} {item.d.stream && `(${item.d.stream})`}</td>
                        <td className="px-6 py-4">{item.d.mode}</td>
                        <td className="px-6 py-4">{item.d.year}</td>
                        <td className="px-6 py-4 font-semibold text-accent">{item.d.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Skills & Aspirations Preview */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Skills & Aspirations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ReviewItem label="Technical Skills" value={formData.technicalSkills} />
                <ReviewItem label="Languages Known" value={formData.languagesKnown} />
                <ReviewItem label="Industry Aspiration" value={formData.industryAspiration} />
              </div>
            </section>

            {/* Additional Info Preview */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Additional Info
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <ReviewItem label="Higher Studies" value={formData.higherStudies} />
                <ReviewItem label="Shift Ready" value={formData.shiftWork} />
                <ReviewItem label="Valid Passport" value={formData.validPassport} />
                <ReviewItem label="Driving License" value={formData.validLicense} />
              </div>
            </section>

            {/* Review Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-slate-100 mt-12">
              <button 
                type="button" 
                onClick={() => { setIsReviewMode(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
                className="w-full sm:w-auto px-12 py-4 rounded-full border-2 border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 focus:outline-none"
              >
                Back to Edit
              </button>
              <button 
                type="button" 
                onClick={handleFinalSubmit} 
                className="w-full sm:w-auto px-16 py-4 rounded-full bg-accent text-white font-bold uppercase tracking-widest text-xs shadow-2xl shadow-accent/30 hover:bg-accent-light transition-all transform hover:-translate-y-1 focus:outline-none"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Page Title */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Candidate Registration</h1>
          <p className="text-slate-500 font-medium">Empowering your future. Please provide your comprehensive details to join our placement drive.</p>
        </div>

        <form onSubmit={handleReview} className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-14 border border-white">
          
          {/* Section 1: Personal Profile */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Personal Profile:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={inputGroup}>
                <label className={labelStyle}>Full Name:</label>
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} className={inputStyle} required placeholder="Enter your full name" />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Gender:</label>
                <div className={radioGroup}>
                  <label className={radioLabel}><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} /> Male</label>
                  <label className={radioLabel}><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange} /> Female</label>
                </div>
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Mobile Number:</label>
                <input name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleInputChange} className={inputStyle} required placeholder="10-digit mobile number" />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Date of Birth:</label>
                <input name="dob" type="date" value={formData.dob} onChange={handleInputChange} className={inputStyle} required />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Email ID:</label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} className={inputStyle} required placeholder="example@email.com" />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Family Income (Annual):</label>
                <input name="familyIncome" type="number" value={formData.familyIncome} onChange={handleInputChange} className={inputStyle} placeholder="e.g. 500000" />
              </div>
              <div className={`${inputGroup} md:col-span-2 lg:col-span-3`}>
                <label className={labelStyle}>Address:</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} rows="2" className={inputStyle} required placeholder="Enter your full permanent address" />
              </div>
            </div>
          </section>

          {/* Section 2: Academic Details */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Academic Details:</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm mb-6">
              <table className="w-full text-left text-sm border-collapse min-w-[800px]">
                <thead className="bg-slate-50/80 border-b border-slate-100 uppercase tracking-wider text-[10px] font-bold text-slate-400">
                  <tr>
                    <th className="px-6 py-4 w-1/4">Education Level</th>
                    <th className="px-6 py-4">Course / Stream</th>
                    <th className="px-6 py-4">Mode</th>
                    <th className="px-6 py-4">Year of Passing</th>
                    <th className="px-6 py-4">Marks / %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {/* SSLC */}
                  <tr className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">SSLC</td>
                    <td className="px-6 py-4 text-slate-400 italic text-xs">Standardized</td>
                    <td className="px-6 py-4">
                      <select name="sslc-mode" defaultValue="Regular" onChange={(e) => handleAcademicChange("sslc", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option>Regular</option>
                        <option>Correspondence</option>
                      </select>
                    </td>
                    <td className="px-6 py-4"><input type="number" value={formData.sslc.year} placeholder="YYYY" onChange={(e) => handleAcademicChange("sslc", "year", e.target.value)} className="w-20 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                    <td className="px-6 py-4"><input type="text" value={formData.sslc.marks} placeholder="%" onChange={(e) => handleAcademicChange("sslc", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                  </tr>
                  {/* PUC */}
                  <tr className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">PUC / 12th</td>
                    <td className="px-6 py-4">
                      <select value={formData.puc.course} onChange={(e) => handleAcademicChange("puc", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option value="">Select Course</option>
                        <option>Science</option>
                        <option>Commerce</option>
                        <option>Arts</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select name="puc-mode" defaultValue="Regular" onChange={(e) => handleAcademicChange("puc", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option>Regular</option>
                        <option>Correspondence</option>
                      </select>
                    </td>
                    <td className="px-6 py-4"><input type="number" value={formData.puc.year} placeholder="YYYY" onChange={(e) => handleAcademicChange("puc", "year", e.target.value)} className="w-20 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                    <td className="px-6 py-4"><input type="text" value={formData.puc.marks} placeholder="%" onChange={(e) => handleAcademicChange("puc", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                  </tr>
                  {/* ITI */}
                  <tr className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">ITI</td>
                    <td className="px-6 py-4">
                      <select value={formData.iti.course} onChange={(e) => handleAcademicChange("iti", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option value="">Select Trade</option>
                        <option>Fitter</option>
                        <option>Electrician</option>
                        <option>Machinist</option>
                        <option>Welder</option>
                        <option>Diesel Mechanic</option>
                        <option>Turner</option>
                        <option>Instrument Mechanic</option>
                        <option>Draftsman (Mechanical)</option>
                        <option>Draftsman (Civil)</option>
                        <option>Refrigeration and AC Mechanic</option>
                        <option>Electronics Mechanic</option>
                        <option>Computer Operator and Programming Assistant (COPA)</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select name="iti-mode" defaultValue="Regular" onChange={(e) => handleAcademicChange("iti", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option>Regular</option>
                        <option>Correspondence</option>
                      </select>
                    </td>
                    <td className="px-6 py-4"><input type="number" value={formData.iti.year} placeholder="YYYY" onChange={(e) => handleAcademicChange("iti", "year", e.target.value)} className="w-20 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                    <td className="px-6 py-4"><input type="text" value={formData.iti.marks} placeholder="%" onChange={(e) => handleAcademicChange("iti", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                  </tr>
                  {/* Diploma */}
                  <tr className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">Diploma</td>
                    <td className="px-6 py-4">
                      <select value={formData.diploma.course} onChange={(e) => handleAcademicChange("diploma", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option value="">Select Branch</option>
                        <option>Mechanical Engineering</option>
                        <option>Civil Engineering</option>
                        <option>Computer Science & Engineering</option>
                        <option>Electrical & Electronics Engineering</option>
                        <option>Electronics & Communication Engineering</option>
                        <option>Information Technology</option>
                        <option>Automobile Engineering</option>
                        <option>Mechatronics Engineering</option>
                        <option>Chemical Engineering</option>
                        <option>Aeronautical Engineering</option>
                        <option>Fashion Design</option>
                        <option>Interior Design</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select name="diploma-mode" defaultValue="Regular" onChange={(e) => handleAcademicChange("diploma", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option>Regular</option>
                        <option>Correspondence</option>
                      </select>
                    </td>
                    <td className="px-6 py-4"><input type="number" value={formData.diploma.year} placeholder="YYYY" onChange={(e) => handleAcademicChange("diploma", "year", e.target.value)} className="w-20 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                    <td className="px-6 py-4"><input type="text" value={formData.diploma.marks} placeholder="%" onChange={(e) => handleAcademicChange("diploma", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                  </tr>
                  {/* Degree */}
                  <tr className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">Graduation (Degree)</td>
                    <td className="px-6 py-4 flex flex-col gap-2">
                      <select value={formData.degree.course} onChange={(e) => handleAcademicChange("degree", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option value="">Select Course</option>
                        <option>BE / B.Tech</option>
                        <option>B.Sc</option>
                        <option>B.Com</option>
                        <option>BCA</option>
                        <option>BBA</option>
                      </select>
                      <input type="text" value={formData.degree.stream} placeholder="Stream (e.g. CS, Mechanical)" onChange={(e) => handleAcademicChange("degree", "stream", e.target.value)} className="w-full bg-transparent border-b border-slate-200 focus:outline-none text-[10px]" />
                    </td>
                    <td className="px-6 py-4">
                      <select name="degree-mode" defaultValue="Regular" onChange={(e) => handleAcademicChange("degree", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option>Regular</option>
                        <option>Correspondence</option>
                      </select>
                    </td>
                    <td className="px-6 py-4"><input type="number" value={formData.degree.year} placeholder="YYYY" onChange={(e) => handleAcademicChange("degree", "year", e.target.value)} className="w-20 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                    <td className="px-6 py-4"><input type="text" value={formData.degree.marks} placeholder="%" onChange={(e) => handleAcademicChange("degree", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                  </tr>
                  {/* PG */}
                  <tr className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">Post Graduation</td>
                    <td className="px-6 py-4 flex flex-col gap-2">
                       <select value={formData.pg.course} onChange={(e) => handleAcademicChange("pg", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option value="">Select Course</option>
                        <option>ME / M.Tech</option>
                        <option>M.Sc</option>
                        <option>MCA</option>
                        <option>MBA</option>
                      </select>
                      <input type="text" value={formData.pg.stream} placeholder="Stream (e.g. Data Science)" onChange={(e) => handleAcademicChange("pg", "stream", e.target.value)} className="w-full bg-transparent border-b border-slate-200 focus:outline-none text-[10px]" />
                    </td>
                    <td className="px-6 py-4">
                      <select name="pg-mode" defaultValue="Regular" onChange={(e) => handleAcademicChange("pg", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-200">
                        <option>Regular</option>
                        <option>Correspondence</option>
                      </select>
                    </td>
                    <td className="px-6 py-4"><input type="number" value={formData.pg.year} placeholder="YYYY" onChange={(e) => handleAcademicChange("pg", "year", e.target.value)} className="w-20 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                    <td className="px-6 py-4"><input type="text" value={formData.pg.marks} placeholder="%" onChange={(e) => handleAcademicChange("pg", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-200 focus:outline-none text-xs" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Skills & Aspirations */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Skills & Industry Aspirations:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={inputGroup}>
                <label className={labelStyle}>Technical Skills:</label>
                <textarea name="technicalSkills" value={formData.technicalSkills} onChange={handleInputChange} rows="3" className={inputStyle} placeholder="e.g. React, Node.js, Python, AWS" />
                <p className="text-[10px] text-slate-400 mt-1">Separate skills with commas</p>
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Languages Known:</label>
                <textarea name="languagesKnown" value={formData.languagesKnown} onChange={handleInputChange} rows="3" className={inputStyle} placeholder="e.g. English, Kannada, Hindi" />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Industry Aspiration:</label>
                <select name="industryAspiration" value={formData.industryAspiration} onChange={handleInputChange} className={selectStyle}>
                  <option value="">Select Domain</option>
                  <option>Software Development</option>
                  <option>Data Analytics</option>
                  <option>Digital Marketing</option>
                  <option>Finance & Banking</option>
                  <option>Core Engineering</option>
                  <option>Research & Development</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 4: Yes/No Questions */}
          <section className="mt-12 bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
            <h2 className={`${sectionTitle} mb-8 border-b border-slate-200 pb-3`}>Additional Information:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">Are you interested in higher studies?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="higherStudies" value="Yes" checked={formData.higherStudies === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="higherStudies" value="No" checked={formData.higherStudies === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">Are you ready to work in shift?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="shiftWork" value="Yes" checked={formData.shiftWork === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="shiftWork" value="No" checked={formData.shiftWork === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">Do you have a valid passport?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="validPassport" value="Yes" checked={formData.validPassport === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="validPassport" value="No" checked={formData.validPassport === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">Do you have a valid driving license?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="validLicense" value="Yes" checked={formData.validLicense === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="validLicense" value="No" checked={formData.validLicense === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

            </div>
          </section>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-5 pt-16 border-t border-slate-100 mt-16">
            <button type="button" onClick={handleClear} className="px-10 py-4 rounded-full border-2 border-slate-200 text-slate-400 font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all focus:outline-none">
              Clear All Details
            </button>
            <button type="submit" className="px-12 py-4 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-xs shadow-2xl shadow-primary/30 hover:bg-primary-light transition-all transform hover:-translate-y-1 focus:outline-none">
              Review & Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}