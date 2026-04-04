"use client";

import { useState } from "react";

export default function CompanyRegistration() {
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Company Profile
    organizationName: "",
    sector: "Construction",
    contactPerson: "",
    emailId: "",
    designation: "",
    gender: "Male",
    countryCode: "+91",
    mobileNumber: "",
    landlineNo: "",
    address: "",
    interviewType: "Offline",

    // Section 3: Accommodation
    accRequired: "No",
    maleExecutives: "",
    femaleExecutives: "",
    checkInDate: "",
    checkOutDate: "",

    // Section 3: Transportation
    transRequired: "No",
    fromLocation: "",
    toLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    numExecs: "",

    // Section 4: Facilities & Exams
    interviewRooms: "",
    interviewPanels: "",
    onlineExam: "No",
    numComputers: "",
    systemSpec: "",
    writtenExam: "No",
    numVolunteers: "",
    seatingCapacity: "Please Select",
    groupDiscussion: "No",
    gdPurpose: "",
    gdRequirements: "",
  });

  // Section 2: Details of the Executive (Visiting)
  const [executives, setExecutives] = useState([
    { name: "", designation: "", mobile: "", email: "", gender: "Male" }
  ]);

  // Section 5: Current Openings
  const [openings, setOpenings] = useState([
    { 
      vacancies: "", designation: "", qualification: "Degree", course: "", stream: "", 
      fromCTC: "", toCTC: "", cutOff: "", jobLocation: "", jobDescription: "", 
      expFrom: "3", expTo: "7" 
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExecChange = (index, e) => {
    const { name, value } = e.target;
    const newExecs = [...executives];
    newExecs[index][name] = value;
    setExecutives(newExecs);
  };

  const addExecutive = () => {
    setExecutives([...executives, { name: "", designation: "", mobile: "", email: "", gender: "Male" }]);
  };

  const handleOpeningChange = (index, e) => {
    const { name, value } = e.target;
    const newOpenings = [...openings];
    newOpenings[index][name] = value;
    setOpenings(newOpenings);
  };

  const addOpening = () => {
    setOpenings([...openings, { 
      vacancies: "", designation: "", qualification: "Degree", course: "", stream: "", 
      fromCTC: "", toCTC: "", cutOff: "", jobLocation: "", jobDescription: "", 
      expFrom: "3", expTo: "7" 
    }]);
  };

  const handleReview = (e) => {
    e.preventDefault();
    setIsReviewMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalSubmit = () => {
    alert("Company registration details submitted successfully!");
    console.log("Final Submission Data:", { formData, executives, openings });
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
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Review Your Registration</h1>
            <p className="text-slate-500">Please confirm your company's details before final submission.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-14 border border-white space-y-12">
            
            {/* Company Profile Review */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Company Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ReviewItem label="Organization Name" value={formData.organizationName} />
                <ReviewItem label="Sector" value={formData.sector} />
                <ReviewItem label="Contact Person" value={formData.contactPerson} />
                <ReviewItem label="Email ID" value={formData.emailId} />
                <ReviewItem label="Designation" value={formData.designation} />
                <ReviewItem label="Gender" value={formData.gender} />
                <ReviewItem label="Mobile Number" value={`${formData.countryCode} ${formData.mobileNumber}`} />
                <ReviewItem label="Landline No" value={formData.landlineNo} />
                <ReviewItem label="Interview Type" value={formData.interviewType} />
                <div className="md:col-span-2 lg:col-span-3">
                   <ReviewItem label="Address" value={formData.address} />
                </div>
              </div>
            </section>

            {/* Visiting Executives Review */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Visiting Executives
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 font-bold text-slate-500 text-[10px] uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Designation</th>
                      <th className="px-6 py-4">Mobile</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Gender</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {executives.map((exec, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 font-bold text-primary">{exec.name}</td>
                        <td className="px-6 py-4">{exec.designation}</td>
                        <td className="px-6 py-4">{exec.mobile}</td>
                        <td className="px-6 py-4">{exec.email}</td>
                        <td className="px-6 py-4">{exec.gender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Logistics Review */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Logistics & Accommodation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Accommodation</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <ReviewItem label="Required" value={formData.accRequired} />
                    {formData.accRequired === "Yes" && (
                      <>
                        <ReviewItem label="Male Execs" value={formData.maleExecutives} />
                        <ReviewItem label="Female Execs" value={formData.femaleExecutives} />
                        <ReviewItem label="Check-in" value={formData.checkInDate} />
                        <ReviewItem label="Check-out" value={formData.checkOutDate} />
                      </>
                    )}
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Transportation</h3>
                   <div className="grid grid-cols-2 gap-4">
                    <ReviewItem label="Required" value={formData.transRequired} />
                    {formData.transRequired === "Yes" && (
                      <>
                        <ReviewItem label="From" value={formData.fromLocation} />
                        <ReviewItem label="To" value={formData.toLocation} />
                        <ReviewItem label="Pick-up" value={`${formData.pickUpDate} ${formData.pickUpTime}`} />
                        <ReviewItem label="No of Execs" value={formData.numExecs} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Facilities Review */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Facilities & Infrastructure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ReviewItem label="Interview Rooms" value={formData.interviewRooms} />
                <ReviewItem label="Interview Panels" value={formData.interviewPanels} />
                <ReviewItem label="Online Exam" value={formData.onlineExam} />
                {formData.onlineExam === "Yes" && (
                  <>
                    <ReviewItem label="No of Computers" value={formData.numComputers} />
                    <ReviewItem label="Specs" value={formData.systemSpec} />
                  </>
                )}
                <ReviewItem label="Written Exam" value={formData.writtenExam} />
                {formData.writtenExam === "Yes" && (
                   <>
                    <ReviewItem label="Volunteers" value={formData.numVolunteers} />
                    <ReviewItem label="Seating" value={formData.seatingCapacity} />
                  </>
                )}
                 <ReviewItem label="Group Discussion" value={formData.groupDiscussion} />
              </div>
            </section>

            {/* Openings Review */}
            <section>
              <h2 className="text-lg font-bold text-accent uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span> Current Openings
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                <table className="w-full text-left text-[10px] border-collapse min-w-[1000px]">
                  <thead className="bg-primary/5 font-bold text-primary uppercase">
                    <tr>
                      <th className="px-4 py-4">Vacancies</th>
                      <th className="px-4 py-4">Designation</th>
                      <th className="px-4 py-4">Qualification</th>
                      <th className="px-4 py-4">Course/Stream</th>
                      <th className="px-4 py-4">CTC Range</th>
                      <th className="px-4 py-4">Cut Off</th>
                      <th className="px-4 py-4">Location</th>
                      <th className="px-4 py-4">Exp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {openings.map((op, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-4 font-bold text-primary">{op.vacancies}</td>
                        <td className="px-4 py-4 font-semibold">{op.designation}</td>
                        <td className="px-4 py-4">{op.qualification}</td>
                        <td className="px-4 py-4">{op.course} {op.stream && `(${op.stream})`}</td>
                        <td className="px-4 py-4 text-accent font-bold">{op.fromCTC} - {op.toCTC} L/A</td>
                        <td className="px-4 py-4">{op.cutOff}</td>
                        <td className="px-4 py-4">{op.jobLocation}</td>
                        <td className="px-4 py-4">{op.expFrom} - {op.expTo} Years</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Company Registration</h1>
          <p className="text-slate-500 font-medium">Please fill in the comprehensive details below to register for the placement drive.</p>
        </div>

        <form onSubmit={handleReview} className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-14 border border-white">
          
          {/* Section 1: Company Profile */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Company Profile:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={inputGroup}>
                <label className={labelStyle}>Organization Name:</label>
                <input name="organizationName" value={formData.organizationName} onChange={handleInputChange} className={inputStyle} required />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Sector:</label>
                <select name="sector" value={formData.sector} onChange={handleInputChange} className={selectStyle}>
                  <option>Construction</option>
                  <option>IT/Software</option>
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Education</option>
                </select>
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Contact Person:</label>
                <input name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className={inputStyle} required />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Email ID:</label>
                <input name="emailId" type="email" value={formData.emailId} onChange={handleInputChange} className={inputStyle} required />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Designation:</label>
                <input name="designation" value={formData.designation} onChange={handleInputChange} className={inputStyle} required />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Gender:</label>
                <div className={radioGroup}>
                  <label className={radioLabel}><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} /> Male</label>
                  <label className={radioLabel}><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange} /> Female</label>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className={`${inputGroup} col-span-1`}>
                  <label className={labelStyle}>Code:</label>
                  <input name="countryCode" value={formData.countryCode} onChange={handleInputChange} className={inputStyle} />
                </div>
                <div className={`${inputGroup} col-span-3`}>
                  <label className={labelStyle}>Mobile Number:</label>
                  <input name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className={inputStyle} required />
                </div>
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Landline No:</label>
                <input name="landlineNo" value={formData.landlineNo} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div className={`${inputGroup} md:col-span-2`}>
                <label className={labelStyle}>Address:</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} rows="2" className={inputStyle} required />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Interview Type:</label>
                <div className={radioGroup}>
                  <label className={radioLabel}><input type="radio" name="interviewType" value="Offline" checked={formData.interviewType === "Offline"} onChange={handleInputChange} /> Offline</label>
                  <label className={radioLabel}><input type="radio" name="interviewType" value="Online" checked={formData.interviewType === "Online"} onChange={handleInputChange} /> Online</label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Details of the Executive */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Details of the Executive:</h2>
              <button type="button" onClick={addExecutive} className="text-xs font-bold text-accent hover:text-accent-dark transition-colors flex items-center gap-2">
                <i className="fas fa-plus-circle"></i> Add Executive Detail
              </button>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-50/80 border-b border-slate-100 uppercase tracking-wider text-[10px] font-bold text-slate-400">
                  <tr>
                    <th className="px-6 py-4">*Name of the Executive visiting</th>
                    <th className="px-6 py-4">*Designation/Position</th>
                    <th className="px-6 py-4">*Mobile No</th>
                    <th className="px-6 py-4">*Email Id</th>
                    <th className="px-6 py-4">*Gender</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {executives.map((exec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-4 py-3"><input name="name" value={exec.name} onChange={(e) => handleExecChange(idx, e)} className="w-full bg-transparent p-2 outline-none border-b border-transparent focus:border-accent" required /></td>
                      <td className="px-4 py-3"><input name="designation" value={exec.designation} onChange={(e) => handleExecChange(idx, e)} className="w-full bg-transparent p-2 outline-none border-b border-transparent focus:border-accent" required /></td>
                      <td className="px-4 py-3"><input name="mobile" value={exec.mobile} onChange={(e) => handleExecChange(idx, e)} className="w-full bg-transparent p-2 outline-none border-b border-transparent focus:border-accent" required /></td>
                      <td className="px-4 py-3"><input name="email" value={exec.email} onChange={(e) => handleExecChange(idx, e)} className="w-full bg-transparent p-2 outline-none border-b border-transparent focus:border-accent" required /></td>
                      <td className="px-4 py-3">
                        <div className="flex gap-4">
                           <label className="flex items-center gap-1.5 text-xs"><input type="radio" name={`gender-${idx}`} value="Male" checked={exec.gender === "Male"} onChange={(e) => handleExecChange(idx, { target: { name: 'gender', value: 'Male' } })} /> M</label>
                           <label className="flex items-center gap-1.5 text-xs"><input type="radio" name={`gender-${idx}`} value="Female" checked={exec.gender === "Female"} onChange={(e) => handleExecChange(idx, { target: { name: 'gender', value: 'Female' } })} /> F</label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Accommodation & Transportation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
            {/* Accommodation */}
            <section className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
               <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-3">
                  <h3 className="font-bold text-primary tracking-tight">Accommodation Details:</h3>
                  <div className="flex gap-4">
                    <label className={radioLabel}><input type="radio" name="accRequired" value="Yes" checked={formData.accRequired === "Yes"} onChange={handleInputChange} /> Yes</label>
                    <label className={radioLabel}><input type="radio" name="accRequired" value="No" checked={formData.accRequired === "No"} onChange={handleInputChange} /> No</label>
                  </div>
               </div>
               
               {formData.accRequired === "Yes" && (
                 <div className="space-y-6 animate-fadeIn">
                   <div className="grid grid-cols-2 gap-4">
                      <div className={inputGroup}>
                        <label className={labelStyle}>*No of Male Executives</label>
                        <input name="maleExecutives" value={formData.maleExecutives} onChange={handleInputChange} type="number" className={inputStyle} required />
                      </div>
                      <div className={inputGroup}>
                        <label className={labelStyle}>No of Female Executives</label>
                        <input name="femaleExecutives" value={formData.femaleExecutives} onChange={handleInputChange} type="number" className={inputStyle} />
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className={inputGroup}>
                        <label className={labelStyle}>*Checkin Date</label>
                        <input name="checkInDate" value={formData.checkInDate} onChange={handleInputChange} type="date" className={inputStyle} required />
                      </div>
                      <div className={inputGroup}>
                        <label className={labelStyle}>*Checkout Date</label>
                        <input name="checkOutDate" value={formData.checkOutDate} onChange={handleInputChange} type="date" className={inputStyle} required />
                      </div>
                   </div>
                 </div>
               )}
            </section>

            {/* Transportation */}
            <section className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
               <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-3">
                  <h3 className="font-bold text-primary tracking-tight">Transportation Required:</h3>
                  <div className="flex gap-4">
                    <label className={radioLabel}><input type="radio" name="transRequired" value="Yes" checked={formData.transRequired === "Yes"} onChange={handleInputChange} /> Yes</label>
                    <label className={radioLabel}><input type="radio" name="transRequired" value="No" checked={formData.transRequired === "No"} onChange={handleInputChange} /> No</label>
                  </div>
               </div>
               
               {formData.transRequired === "Yes" && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-4">
                      <div className={inputGroup}>
                        <label className={labelStyle}>*From Location</label>
                        <input name="fromLocation" value={formData.fromLocation} onChange={handleInputChange} className={inputStyle} required />
                      </div>
                      <div className={inputGroup}>
                        <label className={labelStyle}>*To Location</label>
                        <input name="toLocation" value={formData.toLocation} onChange={handleInputChange} className={inputStyle} required />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className={inputGroup}>
                        <label className={labelStyle}>*PickUp Date</label>
                        <input name="pickUpDate" value={formData.pickUpDate} onChange={handleInputChange} type="date" className={inputStyle} required />
                      </div>
                      <div className={inputGroup}>
                        <label className={labelStyle}>*PickUp Time</label>
                        <input name="pickUpTime" value={formData.pickUpTime} onChange={handleInputChange} type="time" className={inputStyle} required />
                      </div>
                      <div className={inputGroup}>
                        <label className={labelStyle}>*No of Executives</label>
                        <input name="numExecs" value={formData.numExecs} onChange={handleInputChange} type="number" className={inputStyle} required />
                      </div>
                    </div>
                  </div>
               )}
            </section>
          </div>

          {/* Section 4: Facilities Required */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Facilities Required:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
               <div className={inputGroup}>
                 <label className={labelStyle}>*Interview rooms(1000sq ft)</label>
                 <input name="interviewRooms" value={formData.interviewRooms} onChange={handleInputChange} className={inputStyle} required />
               </div>
               <div className={inputGroup}>
                 <label className={labelStyle}>*Interview panels</label>
                 <input name="interviewPanels" value={formData.interviewPanels} onChange={handleInputChange} className={inputStyle} required />
               </div>
            </div>
            
            <div className="mt-12 space-y-12">
               <div className="border-l-4 border-accent pl-6 py-2">
                 <h4 className="text-lg font-bold text-primary mb-6">Aptitude Test Hall:</h4>
                 
                 <div className="space-y-10">
                    <div className={inputGroup}>
                      <div className="flex items-center gap-12">
                         <label className={labelStyle}>Online Exam:</label>
                         <div className="flex gap-4">
                           <label className={radioLabel}><input type="radio" name="onlineExam" value="Yes" checked={formData.onlineExam === "Yes"} onChange={handleInputChange} /> Yes</label>
                           <label className={radioLabel}><input type="radio" name="onlineExam" value="No" checked={formData.onlineExam === "No"} onChange={handleInputChange} /> No</label>
                         </div>
                      </div>
                      {formData.onlineExam === "Yes" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
                          <div className={inputGroup}>
                            <label className={labelStyle}>*No of Computers</label>
                            <input name="numComputers" value={formData.numComputers} onChange={handleInputChange} type="number" className={inputStyle} required />
                          </div>
                          <div className={inputGroup}>
                            <label className={labelStyle}>System Specification</label>
                            <input name="systemSpec" value={formData.systemSpec} onChange={handleInputChange} className={inputStyle} />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={inputGroup}>
                      <div className="flex items-center gap-12">
                         <label className={labelStyle}>Written Exam:</label>
                         <div className="flex gap-4">
                           <label className={radioLabel}><input type="radio" name="writtenExam" value="Yes" checked={formData.writtenExam === "Yes"} onChange={handleInputChange} /> Yes</label>
                           <label className={radioLabel}><input type="radio" name="writtenExam" value="No" checked={formData.writtenExam === "No"} onChange={handleInputChange} /> No</label>
                         </div>
                      </div>
                      {formData.writtenExam === "Yes" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
                          <div className={inputGroup}>
                            <label className={labelStyle}>*No of Volunteers</label>
                            <input name="numVolunteers" value={formData.numVolunteers} onChange={handleInputChange} type="number" className={inputStyle} required />
                          </div>
                          <div className={inputGroup}>
                            <label className={labelStyle}>*Seating Capacity</label>
                            <select name="seatingCapacity" value={formData.seatingCapacity} onChange={handleInputChange} className={selectStyle}>
                               <option>Please Select</option>
                               <option>100</option>
                               <option>200</option>
                               <option>500</option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={inputGroup}>
                      <div className="flex items-center gap-12">
                         <label className={labelStyle}>Group Discussion:</label>
                         <div className="flex gap-4">
                           <label className={radioLabel}><input type="radio" name="groupDiscussion" value="Yes" checked={formData.groupDiscussion === "Yes"} onChange={handleInputChange} /> Yes</label>
                           <label className={radioLabel}><input type="radio" name="groupDiscussion" value="No" checked={formData.groupDiscussion === "No"} onChange={handleInputChange} /> No</label>
                         </div>
                      </div>
                      {formData.groupDiscussion === "Yes" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
                          <div className={inputGroup}>
                            <label className={labelStyle}>Purpose</label>
                            <input name="gdPurpose" value={formData.gdPurpose} onChange={handleInputChange} className={inputStyle} required />
                          </div>
                          <div className={inputGroup}>
                            <label className={labelStyle}>Specific requirements</label>
                            <input name="gdRequirements" value={formData.gdRequirements} onChange={handleInputChange} className={inputStyle} />
                          </div>
                        </div>
                      )}
                    </div>
                 </div>
               </div>
            </div>
          </section>

          {/* Section 5: Current Openings */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Current Openings</h2>
              <button type="button" onClick={addOpening} className="text-xs font-bold text-accent hover:text-accent-dark transition-colors flex items-center gap-2">
                <i className="fas fa-plus-circle"></i> Add Opening
              </button>
            </div>
             <p className="text-[10px] text-slate-400 font-bold mb-4">*Please mark NA for cut off percentage if not required.</p>
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-sm scrollbar-hide">
              <table className="w-full text-left text-[11px] border-collapse min-w-[1200px]">
                <thead className="bg-primary/5 border-b border-primary/10 font-bold text-primary uppercase">
                  <tr>
                    <th className="px-4 py-4 min-w-[80px]">No of Vacancies</th>
                    <th className="px-4 py-4 min-w-[120px]">Designation/Position</th>
                    <th className="px-4 py-4 min-w-[130px]">Qualification</th>
                    <th className="px-4 py-4 min-w-[130px]">Course</th>
                    <th className="px-4 py-4 min-w-[130px]">Stream</th>
                    <th className="px-4 py-4 min-w-[90px]">From CTC(L/A)</th>
                    <th className="px-4 py-4 min-w-[90px]">To CTC(L/A)</th>
                    <th className="px-4 py-4 min-w-[80px]">Cut Off%</th>
                    <th className="px-4 py-4 min-w-[100px]">Job Location</th>
                    <th className="px-4 py-4 min-w-[150px]">Job Description</th>
                    <th className="px-4 py-4 min-w-[80px]">Exp From</th>
                    <th className="px-4 py-4 min-w-[80px]">Exp To</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {openings.map((op, idx) => (
                     <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-2 py-3"><input name="vacancies" value={op.vacancies} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent" required /></td>
                        <td className="px-2 py-3"><input name="designation" value={op.designation} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent" required /></td>
                        <td className="px-2 py-3">
                           <select name="qualification" value={op.qualification} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent">
                             <option>Degree</option>
                             <option>PG</option>
                             <option>Diploma</option>
                           </select>
                        </td>
                        <td className="px-2 py-3">
                          <select name="course" value={op.course} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent">
                             <option>select Course</option>
                             <option>B.Pharm</option>
                             <option>B.Tech</option>
                           </select>
                        </td>
                        <td className="px-2 py-3">
                          <select name="stream" value={op.stream} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent">
                             <option>Select Stream</option>
                             <option>CS</option>
                             <option>Mechanical</option>
                           </select>
                        </td>
                        <td className="px-2 py-3"><input name="fromCTC" value={op.fromCTC} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent" required /></td>
                        <td className="px-2 py-3"><input name="toCTC" value={op.toCTC} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent" required /></td>
                        <td className="px-2 py-3"><input name="cutOff" value={op.cutOff} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent" required /></td>
                        <td className="px-2 py-3"><input name="jobLocation" value={op.jobLocation} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent" required /></td>
                        <td className="px-2 py-3"><textarea name="jobDescription" value={op.jobDescription} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent" rows="1" required /></td>
                        <td className="px-2 py-3">
                          <select name="expFrom" value={op.expFrom} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent">
                             <option>Exp</option>
                             <option>0</option>
                             <option>1</option>
                             <option>3</option>
                           </select>
                        </td>
                        <td className="px-2 py-3">
                          <select name="expTo" value={op.expTo} onChange={(e) => handleOpeningChange(idx, e)} className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent">
                             <option>Exp</option>
                             <option>2</option>
                             <option>5</option>
                             <option>7</option>
                           </select>
                        </td>
                     </tr>
                   ))}
                </tbody>
              </table>
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