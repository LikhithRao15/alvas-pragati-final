
"use client";

import { useState } from "react";

const courseMapping = {
  "SSLC": ["NA"],
  "PUC": ["Science", "Commerce", "Arts"],
  "ITI": ["Fitter", "Electrician", "Mechanic", "Welder", "Turner", "Machinist", "Other"],
  "Diploma": ["3D Animation", "Aeronautical", "Agriculture", "Animation", "Architecture", "Automobile", "Civil", "Computer Science", "Electrical", "Electronics", "Mechanical", "Other"],
  "Degree": ["ANM", "B.A", "B.B.M", "B.Com", "B.E/B.Tech", "B.Ed", "B.H.M.S", "B.H.R.D", "B.Pharm", "B.Sc", "BAMS", "BBA", "BCA", "BDS", "BHM", "BHS", "BNYS", "BPT", "BSW", "BVA", "EEG", "GNM", "LLB", "MBBS", "Microbiology"],
  "PG": ["DNB", "M Ch", "M.A", "M.Com", "M.DS", "M.E./M.Tech", "M.Ed", "M.H.R.D", "M.Pharm", "M.S", "M.S.W", "M.Sc", "MBA", "MCA", "MD", "MHA", "MHM", "MPT", "PGDDC"],
  "Doctorate": ["Ph.D", "M.Phil", "Other"]
};
export default function CompanyRegistration() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Company Profile
    organizationName: "",
    companyUrl: "",
    sector: "Construction",
    contactPerson: "",
    emailId: "",
    designation: "",
    gender: "Male",
    countryCode: "+91",
    mobileNumber: "",
    companyLogo: null,
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

  const initialOpening = {
    vacancies: "", designation: "", qualification: ["Degree"], course: [], stream: "",
    fromCTC: "", toCTC: "", cutOff: "", jobLocation: "", jobDescription: "",
    expFrom: "3", expTo: "7"
  };

  // Section 5: Current Openings
  const [openings, setOpenings] = useState(
    Array.from({ length: 5 }, () => ({ ...initialOpening }))
  );
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleExecChange = (index, e) => {
    const { name, value } = e.target;
    const newExecs = [...executives];
    newExecs[index] = { ...newExecs[index], [name]: value };
    setExecutives(newExecs);
  };

  const addExecutive = () => {
    setExecutives([...executives, { name: "", designation: "", mobile: "", email: "", gender: "Male" }]);
  };

  const handleOpeningChange = (index, e) => {
    const { name, value, type, options } = e.target;
    const newOpenings = [...openings];
    newOpenings[index] = { ...newOpenings[index] };
    
    if (type === "select-multiple") {
       const selectedValues = Array.from(options).filter(op => op.selected).map(op => op.value);
       newOpenings[index][name] = selectedValues;
    } else {
       newOpenings[index][name] = value;
    }

    if (name === "qualification") {
      newOpenings[index].course = [];
    }
    setOpenings(newOpenings);
  };

  const addOpening = () => {
    setOpenings([...openings, { ...initialOpening }]);
  };

  const handleClear = () => {
    if (confirm("Clear all form data?")) {
      window.location.reload();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!e.target.checkValidity()) return;
    alert("Company registration data submitted successfully!");
    console.log({ ...formData, executives, openings });
  };

  // UI Helpers
  const sectionHeader = "border-b-2 border-accent/20 pb-2 mb-8 mt-12 flex items-center justify-between";
  const sectionTitle = "text-xl font-bold text-primary font-heading uppercase tracking-wider";
  const inputGroup = "flex flex-col gap-1.5 relative";
  const labelStyle = "text-[11px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1";
  
  const baseInputStyle = "px-4 py-2.5 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm w-full peer";
  const inputStyle = submitted ? `${baseInputStyle} border-slate-200 invalid:border-red-500 invalid:bg-red-50` : `${baseInputStyle} border-slate-200`;
  const baseSelectStyle = "px-4 py-2.5 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all text-sm appearance-none cursor-pointer w-full peer";
  const selectStyle = submitted ? `${baseSelectStyle} border-slate-200 invalid:border-red-500 invalid:bg-red-50` : `${baseSelectStyle} border-slate-200`;
  
  const ErrorMsg = () => submitted ? <span className="hidden peer-invalid:block text-red-500 text-[10px] mt-0.5 font-semibold">This field is required</span> : null;
  const radioGroup = "flex flex-wrap items-center gap-4 sm:gap-6 mt-1";
  const radioLabel = "flex items-center gap-2 text-sm text-slate-700 cursor-pointer";

  const getAvailableCourses = (qualifications) => {
    if (!qualifications) return [];
    if (!Array.isArray(qualifications)) qualifications = [qualifications];
    let courses = [];
    qualifications.forEach(q => {
      if (courseMapping[q] && q !== "SSLC") {
        courses = [...courses, ...courseMapping[q]];
      }
    });
    return [...new Set(courses)];
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Page Title */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Company Registration</h1>
          <p className="text-slate-500 font-medium">Please fill in the comprehensive details below to register for the placement drive.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-5 sm:p-8 md:p-14 border border-white">

          {/* Section 1: Company Profile */}
          <section>
            <div className={sectionHeader}>
              <h2 className={sectionTitle}>Company Profile:</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={inputGroup}>
                <label className={labelStyle}>Organization Name:<span className="text-red-500 text-sm">*</span></label>
                <input name="organizationName" value={formData.organizationName} onChange={handleInputChange} className={inputStyle} required />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Company URL (Optional):</label>
                <input name="companyUrl" type="url" value={formData.companyUrl} onChange={handleInputChange} className={inputStyle} placeholder="https://www.example.com" />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Sector:<span className="text-red-500 text-sm">*</span></label>
                <select name="sector" value={formData.sector} onChange={handleInputChange} className={selectStyle}>
                  <option>Banking & Finance</option>
                  <option>Construction</option>
                  <option>Defence</option>
                  <option>Education/NGO</option>
                  <option>Healthcare </option>
                  <option>Hospitality </option>
                  <option>HR Consultancy </option>
                  <option>Infrastructure</option>
                  <option>IT/ITES</option>
                  <option>Logistics</option>
                  <option>Manufacturing</option>
                  <option>Media</option>
                  <option>Pharmaceuticals</option>
                  <option>Reatail & Sales</option>
                  <option>Telecom</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Contact Person:<span className="text-red-500 text-sm">*</span></label>
                <input name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className={inputStyle} required />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Email ID:<span className="text-red-500 text-sm">*</span></label>
                <input name="emailId" type="email" value={formData.emailId} onChange={handleInputChange} className={inputStyle} required />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Designation:<span className="text-red-500 text-sm">*</span></label>
                <input name="designation" value={formData.designation} onChange={handleInputChange} className={inputStyle} required />
                <ErrorMsg />
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Gender:</label>
                <div className={radioGroup}>
                  <label className={radioLabel}><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} /> Male</label>
                  <label className={radioLabel}><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange} /> Female</label>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className={`${inputGroup} sm:col-span-1`}>
                  <label className={labelStyle}>Code:</label>
                  <input name="countryCode" value={formData.countryCode} onChange={handleInputChange} className={inputStyle} />
                </div>
                <div className={`${inputGroup} sm:col-span-3`}>
                  <label className={labelStyle}>Mobile Number:<span className="text-red-500 text-sm">*</span></label>
                  <input name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className={inputStyle} required />
                  <ErrorMsg />
                </div>
              </div>
              <div className={inputGroup}>
                <label className={labelStyle}>Company Logo:<span className="text-red-500 text-sm">*</span></label>
                <input name="companyLogo" type="file" accept="image/*" onChange={handleFileChange} className={`${inputStyle} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 text-slate-500`} required />
                <ErrorMsg />
              </div>
              <div className={`${inputGroup} md:col-span-2`}>
                <label className={labelStyle}>Address:<span className="text-red-500 text-sm">*</span></label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} rows="2" className={inputStyle} required />
                <ErrorMsg />
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
              <table className="w-full text-left text-sm border-collapse min-w-[800px]">
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
                      <td className="px-4 py-3"><input name="name" value={exec.name} onChange={(e) => handleExecChange(idx, e)} className={`w-full bg-transparent p-2 outline-none border-b-2 focus:border-accent transition-colors peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-gray-400' : 'border-gray-400'}`} required /></td>
                      <td className="px-4 py-3"><input name="designation" value={exec.designation} onChange={(e) => handleExecChange(idx, e)} className={`w-full bg-transparent p-2 outline-none border-b-2 focus:border-accent transition-colors peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-gray-400' : 'border-gray-400'}`} required /></td>
                      <td className="px-4 py-3"><input name="mobile" value={exec.mobile} onChange={(e) => handleExecChange(idx, e)} className={`w-full bg-transparent p-2 outline-none border-b-2 focus:border-accent transition-colors peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-gray-400' : 'border-gray-400'}`} required /></td>
                      <td className="px-4 py-3"><input name="email" value={exec.email} onChange={(e) => handleExecChange(idx, e)} className={`w-full bg-transparent p-2 outline-none border-b-2 focus:border-accent transition-colors peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-gray-400' : 'border-gray-400'}`} required /></td>
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-8 border-b border-slate-200 pb-3">
                <h3 className="font-bold text-primary tracking-tight">Accommodation Details :</h3>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="accRequired" value="Yes" checked={formData.accRequired === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="accRequired" value="No" checked={formData.accRequired === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              {formData.accRequired === "Yes" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={inputGroup}>
                      <label className={labelStyle}>No of Male Executives:<span className="text-red-500 text-sm">*</span></label>
                      <input name="maleExecutives" value={formData.maleExecutives} onChange={handleInputChange} type="number" className={inputStyle} required />
                      <ErrorMsg />
                    </div>
                    <div className={inputGroup}>
                      <label className={labelStyle}>No of Female Executives</label>
                      <input name="femaleExecutives" value={formData.femaleExecutives} onChange={handleInputChange} type="number" className={inputStyle} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={inputGroup}>
                      <label className={labelStyle}>Checkin Date:<span className="text-red-500 text-sm">*</span></label>
                      <input name="checkInDate" value={formData.checkInDate} onChange={handleInputChange} type="date" className={inputStyle} required />
                      <ErrorMsg />
                    </div>
                    <div className={inputGroup}>
                      <label className={labelStyle}>Checkout Date:<span className="text-red-500 text-sm">*</span></label>
                      <input name="checkOutDate" value={formData.checkOutDate} onChange={handleInputChange} type="date" className={inputStyle} required />
                      <ErrorMsg />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Transportation */}
            <section className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-8 border-b border-slate-200 pb-3">
                <h3 className="font-bold text-primary tracking-tight">Transportation Required:</h3>
                <div className="flex gap-4">
                  <label className={radioLabel}><input type="radio" name="transRequired" value="Yes" checked={formData.transRequired === "Yes"} onChange={handleInputChange} /> Yes</label>
                  <label className={radioLabel}><input type="radio" name="transRequired" value="No" checked={formData.transRequired === "No"} onChange={handleInputChange} /> No</label>
                </div>
              </div>

              {formData.transRequired === "Yes" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={inputGroup}>
                      <label className={labelStyle}>From Location:<span className="text-red-500 text-sm">*</span></label>
                      <input name="fromLocation" value={formData.fromLocation} onChange={handleInputChange} className={inputStyle} required />
                      <ErrorMsg />
                    </div>
                    <div className={inputGroup}>
                      <label className={labelStyle}>To Location:<span className="text-red-500 text-sm">*</span></label>
                      <input name="toLocation" value={formData.toLocation} onChange={handleInputChange} className={inputStyle} required />
                      <ErrorMsg />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className={inputGroup}>
                      <label className={labelStyle}>PickUp Date:<span className="text-red-500 text-sm">*</span></label>
                      <input name="pickUpDate" value={formData.pickUpDate} onChange={handleInputChange} type="date" className={inputStyle} required />
                      <ErrorMsg />
                    </div>
                    <div className={inputGroup}>
                      <label className={labelStyle}>PickUp Time:<span className="text-red-500 text-sm">*</span></label>
                      <input name="pickUpTime" value={formData.pickUpTime} onChange={handleInputChange} type="time" className={inputStyle} required />
                      <ErrorMsg />
                    </div>
                    <div className={inputGroup}>
                      <label className={labelStyle}>No of Executives:<span className="text-red-500 text-sm">*</span></label>
                      <input name="numExecs" value={formData.numExecs} onChange={handleInputChange} type="number" className={inputStyle} required />
                      <ErrorMsg />
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


            <div className="mt-12 space-y-12">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h4 className="text-lg font-bold text-primary mb-6">Aptitude Test Hall:</h4>

                <div className="space-y-10">
                  <div className={inputGroup}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
                      <label className={labelStyle}>Online Exam:</label>
                      <div className="flex gap-4">
                        <label className={radioLabel}><input type="radio" name="onlineExam" value="Yes" checked={formData.onlineExam === "Yes"} onChange={handleInputChange} /> Yes</label>
                        <label className={radioLabel}><input type="radio" name="onlineExam" value="No" checked={formData.onlineExam === "No"} onChange={handleInputChange} /> No</label>
                      </div>
                    </div>
                    {formData.onlineExam === "Yes" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
                        <div className={inputGroup}>
                          <label className={labelStyle}>No of Computers:<span className="text-red-500 text-sm">*</span></label>
                          <input name="numComputers" value={formData.numComputers} onChange={handleInputChange} type="number" className={inputStyle} required />
                          <ErrorMsg />
                        </div>
                        <div className={inputGroup}>
                          <label className={labelStyle}>No of Headphones</label>
                          <input name="numHeadphones" value={formData.numHeadphones} onChange={handleInputChange} className={inputStyle} />
                        </div>
                        <div className={inputGroup}>
                          <label className={labelStyle}>No of Webcams</label>
                          <input name="numWebcams" value={formData.numWebcams} onChange={handleInputChange} className={inputStyle} />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={inputGroup}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
                      <label className={labelStyle}>Written Exam:</label>
                      <div className="flex gap-4">
                        <label className={radioLabel}><input type="radio" name="writtenExam" value="Yes" checked={formData.writtenExam === "Yes"} onChange={handleInputChange} /> Yes</label>
                        <label className={radioLabel}><input type="radio" name="writtenExam" value="No" checked={formData.writtenExam === "No"} onChange={handleInputChange} /> No</label>
                      </div>
                    </div>
                    {formData.writtenExam === "Yes" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
                        <div className={inputGroup}>
                          <label className={labelStyle}>Seating Capacity:<span className="text-red-500 text-sm">*</span></label>
                          <select name="seatingCapacity" value={formData.seatingCapacity} onChange={handleInputChange} className={selectStyle} required>
                            <option value="">Please Select</option>
                            <option>25</option>
                            <option>50</option>
                            <option>75</option>
                            <option>100</option>
                          </select>
                          <ErrorMsg />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={inputGroup}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
                      <label className={labelStyle}>Group Discussion:</label>
                      <div className="flex gap-4">
                        <label className={radioLabel}><input type="radio" name="groupDiscussion" value="Yes" checked={formData.groupDiscussion === "Yes"} onChange={handleInputChange} /> Yes</label>
                        <label className={radioLabel}><input type="radio" name="groupDiscussion" value="No" checked={formData.groupDiscussion === "No"} onChange={handleInputChange} /> No</label>
                      </div>
                    </div>
                    {formData.groupDiscussion === "Yes" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
                        <div className={inputGroup}>
                          <label className={labelStyle}>Purpose:<span className="text-red-500 text-sm">*</span></label>
                          <input name="gdPurpose" value={formData.gdPurpose} onChange={handleInputChange} className={inputStyle} required />
                          <ErrorMsg />
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
            <div className="w-full overflow-x-auto rounded-3xl border border-slate-100 shadow-sm pb-40">
              <table className="w-full text-left text-[11px] border-collapse min-w-[1200px]">
                <thead className="bg-primary/5 border-b border-primary/10 font-bold text-primary uppercase">
                  <tr>
                    <th className="px-4 py-4 min-w-[80px]">*No of Vacancies</th>
                    <th className="px-4 py-4 min-w-[120px]">*Designation/Position</th>
                    <th className="px-4 py-4 min-w-[130px]">Qualification</th>
                    <th className="px-4 py-4 min-w-[130px]">Course</th>
                    <th className="px-4 py-4 min-w-[90px]">*From CTC(L/A)</th>
                    <th className="px-4 py-4 min-w-[90px]">*To CTC(L/A)</th>
                    <th className="px-4 py-4 min-w-[80px]">*Cut Off%</th>
                    <th className="px-4 py-4 min-w-[100px]">*Job Location</th>
                    <th className="px-4 py-4 min-w-[150px]">*Job Description</th>
                    <th className="px-4 py-4 min-w-[80px]">Exp From</th>
                    <th className="px-4 py-4 min-w-[80px]">Exp To</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {openings.map((op, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-2 py-3"><input name="vacancies" value={op.vacancies} onChange={(e) => handleOpeningChange(idx, e)} className={`w-full bg-white border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-slate-100' : 'border-slate-100'}`} required /></td>
                      <td className="px-2 py-3"><input name="designation" value={op.designation} onChange={(e) => handleOpeningChange(idx, e)} className={`w-full bg-white border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-slate-100' : 'border-slate-100'}`} required /></td>
                      <td className="px-2 py-3 align-top relative" onMouseLeave={() => setOpenDropdown(null)}>
                        <div 
                          onClick={() => setOpenDropdown(openDropdown === `qual-${idx}` ? null : `qual-${idx}`)}
                          className="w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent text-[10px] cursor-pointer flex items-center justify-between min-h-[30px]"
                        >
                          <span className="truncate pr-1 block w-[100px]">
                            {Array.isArray(op.qualification) && op.qualification.length > 0 ? op.qualification.join(", ") : "Select"}
                          </span>
                          <span className="text-slate-400">▼</span>
                        </div>
                        {openDropdown === `qual-${idx}` && (
                          <div className="absolute z-50 left-2 top-11 w-40 bg-white border border-slate-200 rounded-lg shadow-2xl p-2 space-y-1">
                            {["SSLC", "PUC", "ITI", "Diploma", "Degree", "PG", "Doctorate"].map(q => {
                              const isChecked = Array.isArray(op.qualification) ? op.qualification.includes(q) : op.qualification === q;
                              return (
                                <label key={q} className="flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 py-1 rounded px-1">
                                  <input 
                                    type="checkbox" 
                                    checked={isChecked} 
                                    onChange={(e) => {
                                      let newQuals = Array.isArray(op.qualification) ? [...op.qualification] : (op.qualification ? [op.qualification] : []);
                                      if (e.target.checked) newQuals.push(q);
                                      else newQuals = newQuals.filter(v => v !== q);
                                      handleOpeningChange(idx, { target: { name: "qualification", value: newQuals } });
                                    }} 
                                    className="w-3 h-3 text-accent border-slate-300 rounded focus:ring-accent/30"
                                  />
                                  {q}
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </td>
                      <td className="px-2 py-3 align-top relative" onMouseLeave={() => setOpenDropdown(null)}>
                        <div 
                          onClick={() => { if(getAvailableCourses(op.qualification).length > 0) setOpenDropdown(openDropdown === `course-${idx}` ? null : `course-${idx}`) }}
                          className={`w-full bg-white border border-slate-100 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent text-[10px] cursor-pointer flex items-center justify-between min-h-[30px] ${getAvailableCourses(op.qualification).length === 0 ? 'opacity-50 pointer-events-none' : ''}`}
                        >
                          <span className="truncate pr-1 block w-[110px]">
                             {Array.isArray(op.course) && op.course.length > 0 ? op.course.join(", ") : "Select"}
                          </span>
                          <span className="text-slate-400">▼</span>
                        </div>
                        {openDropdown === `course-${idx}` && (
                          <div className="absolute z-50 left-2 top-11 w-48 bg-white border border-slate-200 rounded-lg shadow-2xl p-2 space-y-1">
                            {getAvailableCourses(op.qualification).map((courseOption, cIdx) => {
                              const isChecked = Array.isArray(op.course) ? op.course.includes(courseOption) : op.course === courseOption;
                              return (
                                <label key={cIdx} className="flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 py-1 rounded px-1">
                                  <input 
                                    type="checkbox" 
                                    checked={isChecked} 
                                    onChange={(e) => {
                                      let newCourses = Array.isArray(op.course) ? [...op.course] : (op.course ? [op.course] : []);
                                      if (e.target.checked) newCourses.push(courseOption);
                                      else newCourses = newCourses.filter(v => v !== courseOption);
                                      handleOpeningChange(idx, { target: { name: "course", value: newCourses } });
                                    }} 
                                    className="w-3 h-3 text-accent border-slate-300 rounded focus:ring-accent/30"
                                  />
                                  {courseOption}
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </td>

                      <td className="px-2 py-3"><input name="fromCTC" value={op.fromCTC} onChange={(e) => handleOpeningChange(idx, e)} className={`w-full bg-white border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-slate-100' : 'border-slate-100'}`} required /></td>
                      <td className="px-2 py-3"><input name="toCTC" value={op.toCTC} onChange={(e) => handleOpeningChange(idx, e)} className={`w-full bg-white border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-slate-100' : 'border-slate-100'}`} required /></td>
                      <td className="px-2 py-3"><input name="cutOff" value={op.cutOff} onChange={(e) => handleOpeningChange(idx, e)} className={`w-full bg-white border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-slate-100' : 'border-slate-100'}`} required /></td>
                      <td className="px-2 py-3"><input name="jobLocation" value={op.jobLocation} onChange={(e) => handleOpeningChange(idx, e)} className={`w-full bg-white border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-slate-100' : 'border-slate-100'}`} required /></td>
                      <td className="px-2 py-3"><textarea name="jobDescription" value={op.jobDescription} onChange={(e) => handleOpeningChange(idx, e)} className={`w-full bg-white border rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-accent peer ${submitted ? 'invalid:border-red-500 invalid:bg-red-50 border-slate-100' : 'border-slate-100'}`} rows="1" required /></td>
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
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}


