"use client";

import { useState } from "react";

const degreeStreamsMap = {
  "B.A": ["EHB", "EHC", "EJP", "HBC", "HEP", "HES", "HPS", "HRD", "KPS", "PEPS"],
  "B.B.M": ["Finance", "Human Resource", "Marketing"],
  "B.E/B.Tech": [
    "Aeronautical Engineering", "Automobile Engineering", "Biomedical Engineering", "Bio-technology", 
    "Ceramics and Cement Technology", "Chemical Engineering", "Civil Engineering", "Computer Engineering", 
    "Computer Science & Engineering", "Electrical & Electronics Engineering", "Electronics & Communication Engineering", 
    "Environmental Engineering", "Food Technology", "Industrial and Production Engineering", "Industrial Engineering and Management", 
    "Information Science & Engineering", "Information Technology", "Instrumentation Technology", "Manufacturing Science and Engineering", 
    "Marine Engineering", "Mechanical Engineering", "Mechatronics Engineering", "Medical Electronics", "Mining Engineering", 
    "Polymer Science and Technology", "Silk Technology", "Telecom Engineering", "Textile Technology"
  ],
  "B.Sc": [
    "Audiology", "BCB", "BCZ", "Biomedical", "BtCZ", "CBZ", "Chemical Engineering", "FND", "HS", "MBB", "MCZ", "Nursing", "PCM", "PMCs", "PME", "PMS", "Radiography"
  ]
};

const pgStreamsMap = {
  "M.A": ["Economics", "English", "Hindi", "History", "HRD", "Kannada", "Malayalam", "Mass Communication & Journalism", "Polytical Science", "Sankrith", "Travels & Tourism", "Urdu"],
  "M.E./M.Tech": ["Computer Integrated Manufacturing", "Computer Science", "Design Engineering", "Energy Engineering", "Manufacturing Engineering", "Mechetronic", "Nuclear Engineering", "Productive Line Manufacturing", "Robotics", "Structural Engineering", "Thermal Power Engineering", "VLSI & Embedded Design"],
  "M.Pharm": ["Pharmaceutical Analysis", "Pharmaceutical Chemistry", "Pharmaceutics"],
  "M.S.W": ["CD", "HRM", "MP"],
  "M.Sc": ["Analytical Chemistry", "Applied Botany", "Applied Chemistry", "Audiology", "Biotech", "Botany", "Chemical Engineering", "Computer Science", "Electronics Media", "Electronics", "FST", "General Chemistry", "Mathematics", "Microbiology", "Organic Chemistry", "Physics", "Psychology", "Statistics", "Zoology"],
  "MBA": ["Finance", "Human Resources", "Marketing", "Information Technology", "Operations"]
};

export default function CandidateRegistration() {
  const [submitted, setSubmitted] = useState(false);
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
    resume: null,

    // Section 2: Academic Details - Individual States for clarity
    highestQualification: "",
    collegeName: "",
    universityBoard: "",
    sslc: { mode: "Regular", year: "", marks: "", isNotApplicable: false },
    puc: { course: "", mode: "Regular", year: "", marks: "", isNotApplicable: false },
    iti: { course: "", mode: "Regular", year: "", marks: "", isNotApplicable: false },
    diploma: { course: "", mode: "Regular", year: "", marks: "", isNotApplicable: false },
    degree: { course: "", stream: "", mode: "Regular", year: "", marks: "", isNotApplicable: false },
    pg: { course: "", stream: "", mode: "Regular", year: "", marks: "", isNotApplicable: false },

    // Section 3: Skills & Aspirations
    technicalSkills: "",
    otherTechnicalSkills: "",
    languagesKnown: "",
    otherLanguagesKnown: "",
    industryAspiration: "",
    otherIndustryAspiration: "",

    // Section 4: Questions
    higherStudies: "No",
    shiftWork: "No",
    validPassport: "No",
    validLicense: "No",
    readyToRelocate: "No",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files && files.length > 0 ? files[0] : null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const currentValues = prev[name] ? prev[name].split(", ").filter(Boolean) : [];
      let newValues;
      if (checked) {
        newValues = [...currentValues, value];
      } else {
        newValues = currentValues.filter((v) => v !== value);
      }
      return { ...prev, [name]: newValues.join(", ") };
    });
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
    setSubmitted(true);
    if (!e.target.checkValidity()) return;
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
  const inputGroup = "flex flex-col gap-1.5 relative";
  const labelStyle = "text-[11px] font-bold text-slate-900 uppercase tracking-widest flex items-center gap-1";
  
  const baseInputStyle = "px-4 py-2.5 bg-white border-2 border-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm w-full peer placeholder:text-slate-600 text-black font-semibold shadow-md hover:border-black";
  const inputStyle = submitted ? `${baseInputStyle} invalid:border-red-500 invalid:bg-red-50` : `${baseInputStyle}`;
  const baseSelectStyle = "px-4 py-2.5 bg-white border-2 border-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm appearance-none cursor-pointer w-full peer text-black font-semibold shadow-md hover:border-black";
  const selectStyle = submitted ? `${baseSelectStyle} invalid:border-red-500 invalid:bg-red-50` : `${baseSelectStyle}`;
  
  const ErrorMsg = () => submitted ? <span className="hidden peer-invalid:block text-red-500 text-[10px] mt-0.5 font-semibold">This field is required</span> : null;

  const radioGroup = "flex flex-wrap items-center gap-4 sm:gap-6 mt-1";
  const radioLabel = "flex items-center gap-2 text-sm text-black cursor-pointer hover:text-accent font-bold";

  const ReviewItem = ({ label, value }) => (
    <div className="flex flex-col border-b border-slate-100 pb-2">
      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">{label}</span>
      <span className="text-sm font-semibold text-primary">{value || "N/A"}</span>
    </div>
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  if (isReviewMode) {
    return (
      <main className="min-h-screen bg-slate-50 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Review Your Details</h1>
            <p className="text-slate-500">Please confirm your information before final submission.</p>
          </div>

          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-5 sm:p-8 md:p-14 border border-white space-y-12">
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
                <ReviewItem label="Highest Qual" value={formData.highestQualification} />
                <ReviewItem label="College Name" value={formData.collegeName} />
                <ReviewItem label="University/Board" value={formData.universityBoard} />
                <div className="md:col-span-2 lg:col-span-3">
                   <ReviewItem label="Address" value={formData.address} />
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                   <ReviewItem label="Resume" value={formData.resume ? formData.resume.name : "Not Provided"} />
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
                      { l: "SSLC", d: formData.sslc, show: !!formData.highestQualification },
                      { 
                        l: "PUC/12th", 
                        d: formData.puc, 
                        show: ["PUC", "ITI", "Diploma", "Degree", "PG"].includes(formData.highestQualification) 
                      },
                      { 
                        l: "ITI", 
                        d: formData.iti, 
                        show: ["ITI", "Degree", "PG"].includes(formData.highestQualification) 
                      },
                      { 
                        l: "Diploma", 
                        d: formData.diploma, 
                        show: ["Diploma", "Degree", "PG"].includes(formData.highestQualification) 
                      },
                      { 
                        l: "Degree", 
                        d: formData.degree, 
                        show: ["Degree", "PG"].includes(formData.highestQualification) 
                      },
                      { 
                        l: "PG", 
                        d: formData.pg, 
                        show: formData.highestQualification === "PG" 
                      },
                    ].filter(item => item.show && !item.d.isNotApplicable).map((item, idx) => (
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
                <ReviewItem label="Technical Skills" value={[formData.technicalSkills, formData.otherTechnicalSkills].filter(Boolean).join(", ")} />
                <ReviewItem label="Languages Known" value={[formData.languagesKnown, formData.otherLanguagesKnown].filter(Boolean).join(", ")} />
                <ReviewItem label="Industry Aspiration" value={[formData.industryAspiration, formData.otherIndustryAspiration].filter(Boolean).join(", ")} />
              </div>
            </section>

            {/* Additional Info Preview */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Additional Info
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 rounded-2xl border-2 border-slate-500 shadow-xl">
                <ReviewItem label="Higher Studies" value={formData.higherStudies} />
                <ReviewItem label="Shift Ready" value={formData.shiftWork} />
                <ReviewItem label="Valid Passport" value={formData.validPassport} />
                <ReviewItem label="Driving License" value={formData.validLicense} />
                <ReviewItem label="Ready to Relocate" value={formData.readyToRelocate} />
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

        <form onSubmit={handleReview} noValidate className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-slate-300 p-5 sm:p-8 md:p-14 border-2 border-slate-400">
          
          {/* Section 1: Personal Profile */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Personal Profile:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={inputGroup}>
                <label className={labelStyle}>Full Name:<span className="text-red-500 text-sm">*</span></label>
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} className={inputStyle} required placeholder="Enter your full name" />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Gender:</label>
                <div className={radioGroup}>
                  <label className={radioLabel}><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} /> Male</label>
                  <label className={radioLabel}><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange} /> Female</label>
                </div>
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Mobile Number:<span className="text-red-500 text-sm">*</span></label>
                <input name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleInputChange} className={inputStyle} required placeholder="10-digit mobile number" />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Date of Birth:<span className="text-red-500 text-sm">*</span></label>
                <input name="dob" type="date" value={formData.dob} onChange={handleInputChange} className={inputStyle} required />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Email ID:<span className="text-red-500 text-sm">*</span></label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} className={inputStyle} required placeholder="example@email.com" />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Family Income (Annual):</label>
                <input name="familyIncome" type="number" value={formData.familyIncome} onChange={handleInputChange} className={inputStyle} placeholder="e.g. 500000" />
              </div>
              <div className={`${inputGroup} md:col-span-2 lg:col-span-3`}>
                <label className={labelStyle}>Address:<span className="text-red-500 text-sm">*</span></label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} rows="2" className={inputStyle} required placeholder="Enter your full permanent address" />
                <ErrorMsg />
              </div>
              <div className={`${inputGroup} md:col-span-2 lg:col-span-3`}>
                <label className={labelStyle}>Upload Resume (Optional):</label>
                <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleInputChange} className="px-4 py-2.5 bg-white border-2 border-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer shadow-sm hover:border-slate-500" />
              </div>
            </div>
          </section>

          {/* Section 2: Academic Details */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Academic Details:</h2>
            </div>

            <div className={`${inputGroup} mb-8 max-w-md`}>
              <label className={labelStyle}>Highest Qualification:<span className="text-red-500 text-sm">*</span></label>
              <select 
                name="highestQualification" 
                value={formData.highestQualification} 
                onChange={handleInputChange} 
                className={selectStyle}
                required
              >
                <option value="" disabled>Select Highest Qualification</option>
                <option value="SSLC">SSLC</option>
                <option value="PUC">PUC / 12th</option>
                <option value="ITI">ITI</option>
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree / Graduation</option>
                <option value="PG">Post Graduation (PG)</option>
              </select>
               <ErrorMsg />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className={inputGroup}>
                <label className={labelStyle}>College/Institution Name:<span className="text-red-500 text-sm">*</span></label>
                <input name="collegeName" value={formData.collegeName} onChange={handleInputChange} className={inputStyle} required placeholder="Enter your college name" />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>University/Board:<span className="text-red-500 text-sm">*</span></label>
                <input name="universityBoard" value={formData.universityBoard} onChange={handleInputChange} className={inputStyle} required placeholder="Enter university or board" />
                <ErrorMsg />
              </div>
            </div>

            {formData.highestQualification && (
              <div className="overflow-x-auto rounded-2xl border-2 border-slate-500 shadow-2xl mb-6 bg-white">
                <table className="w-full text-left text-sm border-collapse min-w-[850px]">
                  <thead className="bg-slate-300 border-b-2 border-slate-500 uppercase tracking-wider text-[10px] font-bold text-black tracking-widest">
                    <tr>
                      <th className="px-4 py-4 w-16">N/A</th>
                      <th className="px-6 py-4 w-1/4">Education Level</th>
                      <th className="px-6 py-4">Course / Stream</th>
                      <th className="px-6 py-4">Mode</th>
                      <th className="px-6 py-4">Year of Passing</th>
                      <th className="px-6 py-4">Marks / %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {/* SSLC - Always show if qualification is selected */}
                    <tr className={`transition-colors ${formData.sslc.isNotApplicable ? 'bg-slate-50/50 opacity-60' : 'hover:bg-slate-50/30'}`}>
                      <td className="px-4 py-4"><input type="checkbox" checked={formData.sslc.isNotApplicable} onChange={(e) => handleAcademicChange("sslc", "isNotApplicable", e.target.checked)} /></td>
                      <td className="px-6 py-4 font-bold text-primary">SSLC</td>
                      <td className="px-6 py-4 text-slate-400 italic text-xs">Standardized</td>
                      <td className="px-6 py-4">
                        <select disabled={formData.sslc.isNotApplicable} name="sslc-mode" value={formData.sslc.mode} onChange={(e) => handleAcademicChange("sslc", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                          <option>Regular</option>
                          <option>Correspondence</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <select disabled={formData.sslc.isNotApplicable} value={formData.sslc.year} onChange={(e) => handleAcademicChange("sslc", "year", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                          <option value="">Year</option>
                          {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </td>
                      <td className="px-6 py-4"><input disabled={formData.sslc.isNotApplicable} type="text" value={formData.sslc.marks} placeholder="%" onChange={(e) => handleAcademicChange("sslc", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold" /></td>
                    </tr>
                    
                    {/* PUC - Show for PUC, ITI, Diploma, Degree and PG */}
                    {["PUC", "ITI", "Diploma", "Degree", "PG"].includes(formData.highestQualification) && (
                      <tr className={`transition-colors ${formData.puc.isNotApplicable ? 'bg-slate-50/50 opacity-60' : 'hover:bg-slate-50/30'}`}>
                        <td className="px-4 py-4"><input type="checkbox" checked={formData.puc.isNotApplicable} onChange={(e) => handleAcademicChange("puc", "isNotApplicable", e.target.checked)} /></td>
                        <td className="px-6 py-4 font-bold text-primary">PUC / 12th</td>
                        <td className="px-6 py-4">
                          <select disabled={formData.puc.isNotApplicable} value={formData.puc.course} onChange={(e) => handleAcademicChange("puc", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Select Course</option>
                            <option>Science</option>
                            <option>Commerce</option>
                            <option>Arts</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.puc.isNotApplicable} name="puc-mode" value={formData.puc.mode} onChange={(e) => handleAcademicChange("puc", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option>Regular</option>
                            <option>Correspondence</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.puc.isNotApplicable} value={formData.puc.year} onChange={(e) => handleAcademicChange("puc", "year", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </td>
                        <td className="px-6 py-4"><input disabled={formData.puc.isNotApplicable} type="text" value={formData.puc.marks} placeholder="%" onChange={(e) => handleAcademicChange("puc", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold" /></td>
                      </tr>
                    )}

                    {/* ITI - Show for ITI, Degree and PG */}
                    {["ITI", "Degree", "PG"].includes(formData.highestQualification) && (
                      <tr className={`transition-colors ${formData.iti.isNotApplicable ? 'bg-slate-50/50 opacity-60' : 'hover:bg-slate-50/30'}`}>
                        <td className="px-4 py-4"><input type="checkbox" checked={formData.iti.isNotApplicable} onChange={(e) => handleAcademicChange("iti", "isNotApplicable", e.target.checked)} /></td>
                        <td className="px-6 py-4 font-bold text-primary">ITI</td>
                        <td className="px-6 py-4">
                          <select disabled={formData.iti.isNotApplicable} value={formData.iti.course} onChange={(e) => handleAcademicChange("iti", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
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
                          <select disabled={formData.iti.isNotApplicable} name="iti-mode" value={formData.iti.mode} onChange={(e) => handleAcademicChange("iti", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option>Regular</option>
                            <option>Correspondence</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.iti.isNotApplicable} value={formData.iti.year} onChange={(e) => handleAcademicChange("iti", "year", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </td>
                        <td className="px-6 py-4"><input disabled={formData.iti.isNotApplicable} type="text" value={formData.iti.marks} placeholder="%" onChange={(e) => handleAcademicChange("iti", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold" /></td>
                      </tr>
                    )}

                    {/* Diploma - Show for Diploma, Degree and PG */}
                    {["Diploma", "Degree", "PG"].includes(formData.highestQualification) && (
                      <tr className={`transition-colors ${formData.diploma.isNotApplicable ? 'bg-slate-50/50 opacity-60' : 'hover:bg-slate-50/30'}`}>
                        <td className="px-4 py-4"><input type="checkbox" checked={formData.diploma.isNotApplicable} onChange={(e) => handleAcademicChange("diploma", "isNotApplicable", e.target.checked)} /></td>
                        <td className="px-6 py-4 font-bold text-primary">Diploma</td>
                        <td className="px-6 py-4">
                          <select disabled={formData.diploma.isNotApplicable} value={formData.diploma.course} onChange={(e) => handleAcademicChange("diploma", "course", e.target.value)} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
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
                          <select disabled={formData.diploma.isNotApplicable} name="diploma-mode" value={formData.diploma.mode} onChange={(e) => handleAcademicChange("diploma", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option>Regular</option>
                            <option>Correspondence</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.diploma.isNotApplicable} value={formData.diploma.year} onChange={(e) => handleAcademicChange("diploma", "year", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </td>
                        <td className="px-6 py-4"><input disabled={formData.diploma.isNotApplicable} type="text" value={formData.diploma.marks} placeholder="%" onChange={(e) => handleAcademicChange("diploma", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold" /></td>
                      </tr>
                    )}

                    {/* Degree - Show for Degree and PG */}
                    {["Degree", "PG"].includes(formData.highestQualification) && (
                      <tr className={`transition-colors ${formData.degree.isNotApplicable ? 'bg-slate-50/50 opacity-60' : 'hover:bg-slate-50/30'}`}>
                        <td className="px-4 py-4"><input type="checkbox" checked={formData.degree.isNotApplicable} onChange={(e) => handleAcademicChange("degree", "isNotApplicable", e.target.checked)} /></td>
                        <td className="px-6 py-4 font-bold text-primary">Graduation (Degree)</td>
                        <td className="px-6 py-4 flex flex-col gap-2">
                          <select disabled={formData.degree.isNotApplicable} value={formData.degree.course} onChange={(e) => {
                            handleAcademicChange("degree", "course", e.target.value);
                            handleAcademicChange("degree", "stream", "");
                          }} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Select Course</option>
                            <option>ANM</option>
                            <option>B.A</option>
                            <option>B.B.M</option>
                            <option>B.Com</option>
                            <option>B.E/B.Tech</option>
                            <option>B.Ed</option>
                            <option>B.H.M.S</option>
                            <option>B.H.R.D</option>
                            <option>B.Pharm</option>
                            <option>B.Sc</option>
                            <option>BAMS</option>
                            <option>BBA</option>
                            <option>BCA</option>
                            <option>BDS</option>
                            <option>BHM</option>
                            <option>BHS</option>
                            <option>BNYS</option>
                            <option>BPT</option>
                            <option>BSW</option>
                            <option>BVA</option>
                            <option>EEG</option>
                            <option>GNM</option>
                            <option>LLB</option>
                            <option>MBBS</option>
                            <option>Microbiology</option>
                           
                          </select>
                          {degreeStreamsMap[formData.degree.course] && (
                            <select disabled={formData.degree.isNotApplicable} value={formData.degree.stream} onChange={(e) => handleAcademicChange("degree", "stream", e.target.value)} className="w-full bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight focus:outline-none text-[10px] mt-2">
                              <option value="">Select Stream</option>
                              {degreeStreamsMap[formData.degree.course].map(stream => (
                                <option key={stream} value={stream}>{stream}</option>
                              ))}
                            </select>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.degree.isNotApplicable} name="degree-mode" value={formData.degree.mode} onChange={(e) => handleAcademicChange("degree", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option>Regular</option>
                            <option>Correspondence</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.degree.isNotApplicable} value={formData.degree.year} onChange={(e) => handleAcademicChange("degree", "year", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </td>
                        <td className="px-6 py-4"><input disabled={formData.degree.isNotApplicable} type="text" value={formData.degree.marks} placeholder="%" onChange={(e) => handleAcademicChange("degree", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight focus:outline-none text-xs" /></td>
                      </tr>
                    )}

                    {/* PG - Only for PG */}
                    {formData.highestQualification === "PG" && (
                      <tr className={`transition-colors ${formData.pg.isNotApplicable ? 'bg-slate-50/50 opacity-60' : 'hover:bg-slate-50/30'}`}>
                        <td className="px-4 py-4"><input type="checkbox" checked={formData.pg.isNotApplicable} onChange={(e) => handleAcademicChange("pg", "isNotApplicable", e.target.checked)} /></td>
                        <td className="px-6 py-4 font-bold text-primary">Post Graduation</td>
                        <td className="px-6 py-4 flex flex-col gap-2">
                           <select disabled={formData.pg.isNotApplicable} value={formData.pg.course} onChange={(e) => {
                             handleAcademicChange("pg", "course", e.target.value);
                             handleAcademicChange("pg", "stream", "");
                           }} className="w-full bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Select Course</option>
                            <option>DNB</option>
                            <option>M Ch</option>
                            <option>M.A</option>
                            <option>M.Com</option>
                            <option>M.DS</option>
                            <option>M.E./M.Tech</option>
                            <option>M.Ed</option>
                            <option>M.H.R.D</option>
                            <option>M.Pharm</option>
                            <option>M.S</option>
                            <option>M.S.W</option>
                            <option>M.Sc</option>
                            <option>MBA</option>
                            <option>MCA</option>
                            <option>MD</option>
                            <option>MHA</option>
                            <option>MHM</option>
                            <option>MPT</option>
                            <option>PGDDC</option>
                          </select>
                          {pgStreamsMap[formData.pg.course] && (
                            <select disabled={formData.pg.isNotApplicable} value={formData.pg.stream} onChange={(e) => handleAcademicChange("pg", "stream", e.target.value)} className="w-full bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight focus:outline-none text-[10px] mt-2">
                              <option value="">Select Stream</option>
                              {pgStreamsMap[formData.pg.course].map(stream => (
                                <option key={stream} value={stream}>{stream}</option>
                              ))}
                            </select>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.pg.isNotApplicable} name="pg-mode" value={formData.pg.mode} onChange={(e) => handleAcademicChange("pg", "mode", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option>Regular</option>
                            <option>Correspondence</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <select disabled={formData.pg.isNotApplicable} value={formData.pg.year} onChange={(e) => handleAcademicChange("pg", "year", e.target.value)} className="bg-transparent text-xs focus:outline-none border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight">
                            <option value="">Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </td>
                        <td className="px-6 py-4"><input disabled={formData.pg.isNotApplicable} type="text" value={formData.pg.marks} placeholder="%" onChange={(e) => handleAcademicChange("pg", "marks", e.target.value)} className="w-16 bg-transparent border-b border-slate-500 focus:border-accent text-black font-bold tracking-tight focus:outline-none text-xs" /></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Section 3: Skills & Aspirations */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Skills & Industry Aspirations:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`${inputGroup} md:col-span-2 lg:col-span-3`}>
                <label className={labelStyle}>Technical Skills:</label>
                <div className="flex flex-wrap gap-x-4 gap-y-3 mt-1 bg-slate-100 p-4 rounded-xl border-2 border-slate-500 shadow-md">
                  {["Java", "Python", "C/C++", "JavaScript", "React", "Node.js", "HTML/CSS", "SQL", "NoSQL", "AWS/Cloud", "Machine Learning", "Data Analytics", "UI/UX Design", "AutoCAD", "SolidWorks", "MATLAB"].map(skill => (
                    <label key={skill} className="flex items-center gap-2 text-sm text-black font-bold cursor-pointer bg-white px-3 py-1.5 rounded-lg border-2 border-slate-400 shadow-sm hover:border-black transition-all">
                      <input 
                        type="checkbox" 
                        name="technicalSkills" 
                        value={skill} 
                        checked={formData.technicalSkills ? formData.technicalSkills.split(", ").filter(Boolean).includes(skill) : false} 
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-accent border-2 border-slate-500 rounded focus:ring-accent/30 cursor-pointer"
                      />
                      {skill}
                    </label>
                  ))}
                </div>
                <input 
                  type="text" 
                  name="otherTechnicalSkills" 
                  value={formData.otherTechnicalSkills || ""} 
                  onChange={handleInputChange} 
                  placeholder="Other skills " 
                  className={inputStyle}
                />
              </div>
              <div className={`${inputGroup} md:col-span-2 lg:col-span-3`}>
                <label className={labelStyle}>Languages Known:</label>
                <div className="flex flex-wrap gap-x-4 gap-y-3 mt-1 bg-slate-100 p-4 rounded-xl border-2 border-slate-500 shadow-md">
                  {["English", "Kannada", "Hindi", "Telugu", "Tamil", "Malayalam", "Marathi", "Tulu", "Konkani"].map(lang => (
                    <label key={lang} className="flex items-center gap-2 text-sm text-black font-bold cursor-pointer bg-white px-3 py-1.5 rounded-lg border-2 border-slate-400 shadow-sm hover:border-black transition-all">
                      <input 
                        type="checkbox" 
                        name="languagesKnown" 
                        value={lang} 
                        checked={formData.languagesKnown ? formData.languagesKnown.split(", ").filter(Boolean).includes(lang) : false} 
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-accent border-2 border-slate-500 rounded focus:ring-accent/30 cursor-pointer"
                      />
                      {lang}
                    </label>
                  ))}
                </div>
                <input 
                  type="text" 
                  name="otherLanguagesKnown" 
                  value={formData.otherLanguagesKnown || ""} 
                  onChange={handleInputChange} 
                  placeholder="Other languages " 
                  className={inputStyle}
                />
              </div>
              <div className={`${inputGroup} md:col-span-2 lg:col-span-3`}>
                <label className={labelStyle}>Industry Aspiration:</label>
                <div className="flex flex-wrap gap-x-4 gap-y-3 mt-1 bg-slate-100 p-4 rounded-xl border-2 border-slate-500 shadow-md">
                  {["Automobile", "Banking and Financial Services", "Construction", "Defence", "Education/NGO", "Healthcare", "Hospitality", "HR Consultancy", "Infrastructure", "IT&ITES", "Manufacturing", "Media", "Pharmaceuticals", "Retail and Sales", "Telecom"].map(industry => (
                    <label key={industry} className="flex items-center gap-2 text-sm text-black font-bold cursor-pointer bg-white px-3 py-1.5 rounded-lg border-2 border-slate-400 shadow-sm hover:border-black transition-all">
                      <input 
                        type="checkbox" 
                        name="industryAspiration" 
                        value={industry} 
                        checked={formData.industryAspiration ? formData.industryAspiration.split(", ").filter(Boolean).includes(industry) : false} 
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-accent border-2 border-slate-500 rounded focus:ring-accent/30 cursor-pointer"
                      />
                      {industry}
                    </label>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-sm font-semibold text-slate-700">Others:</span>
                  <input 
                    type="text" 
                    name="otherIndustryAspiration" 
                    value={formData.otherIndustryAspiration || ""} 
                    onChange={handleInputChange} 
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Yes/No Questions */}
          <section className="mt-12 bg-slate-100 p-8 rounded-3xl border-2 border-slate-500 shadow-xl">
            <h2 className={`${sectionTitle} mb-8 border-b-2 border-slate-400 pb-3`}>Additional Information:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <label className="text-sm font-bold text-black">Are you interested in higher studies?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="higherStudies" value="Yes" checked={formData.higherStudies === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="higherStudies" value="No" checked={formData.higherStudies === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <label className="text-sm font-bold text-black">Are you ready to work in shift?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="shiftWork" value="Yes" checked={formData.shiftWork === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="shiftWork" value="No" checked={formData.shiftWork === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <label className="text-sm font-bold text-black">Do you have a valid passport?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="validPassport" value="Yes" checked={formData.validPassport === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="validPassport" value="No" checked={formData.validPassport === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <label className="text-sm font-bold text-black">Do you have a valid driving license?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="validLicense" value="Yes" checked={formData.validLicense === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="validLicense" value="No" checked={formData.validLicense === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <label className="text-sm font-bold text-black">Are you ready to relocate?</label>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="readyToRelocate" value="Yes" checked={formData.readyToRelocate === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="readyToRelocate" value="No" checked={formData.readyToRelocate === "No"} onChange={handleInputChange} /> No</label>
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