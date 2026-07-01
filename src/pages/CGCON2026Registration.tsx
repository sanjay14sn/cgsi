import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const LOGO =
    "https://res.cloudinary.com/ddibq0tya/image/upload/v1771404636/ChatGPT_Image_Feb_18_2026_02_20_16_PM_dtmwyu.png";

const PACKAGES = [
    { id: "cgsi-conf",     label: "CGSI members – Conference only – Rs 15,000", amount: "15000" },
    { id: "cgsi-both",     label: "CGSI members – Conference + Workshop – Rs 20,800", amount: "20800" },
    { id: "noncgsi-conf",  label: "Non-CGSI members – Conference only – Rs 16,000", amount: "16000" },
    { id: "noncgsi-both",  label: "Non-CGSI members – Conference + Workshop – Rs 21,800", amount: "21800" },
    { id: "pg-conf",       label: "Post Graduate – Conference only – Rs 10,000", amount: "10000" },
];

const inp = "w-full border rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-white transition-colors";

const ErrorMsg = ({ msg }: { msg?: string }) => {
    if (!msg) return null;
    return <p className="text-red-500 text-xs font-semibold mt-1 animate-in fade-in slide-in-from-top-1">{msg}</p>;
};

const CGCON2026Registration = () => {
    const [form, setForm] = useState({
        category: "Delegate", title: "Dr", name: "", mobile: "",
        email: "", institution: "", designation: "",
        city: "", state: "", mciNumber: "",
        cgsiMember: "", cgsiMemberNo: "",
        specialty: "", stateMedicalCouncil: "",
        totalAmount: "", utr: "", message: "",
    });
    const [selectedPkg, setSelectedPkg] = useState("");
    const [submitted, setSubmitted]      = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentImageFile, setPaymentImageFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(p => ({ ...p, [e.target.name]: e.target.value }));
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        
        if (!form.name.trim()) newErrors.name = "Name is required.";
        
        const mobileRegex = /^[0-9]{10}$/;
        const cleanMobile = form.mobile.replace(/[\s-]/g, '');
        if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required.";
        else if (!mobileRegex.test(cleanMobile)) newErrors.mobile = "Enter a valid 10-digit mobile number.";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email.trim()) newErrors.email = "Email is required.";
        else if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email address.";

        if (!form.institution.trim()) newErrors.institution = "Institution is required.";
        if (!form.city.trim()) newErrors.city = "City is required.";
        if (!form.state.trim()) newErrors.state = "State is required.";

        if (!form.cgsiMember) newErrors.cgsiMember = "Please select Yes or No.";
        if (form.cgsiMember === "Yes" && !form.cgsiMemberNo.trim()) {
            newErrors.cgsiMemberNo = "Membership number is required.";
        }

        if (!selectedPkg) newErrors.selectedPkg = "Please select a conference package.";
        
        if (!form.totalAmount.trim()) newErrors.totalAmount = "Amount paid is required.";
        else if (isNaN(Number(form.totalAmount))) newErrors.totalAmount = "Amount must be a valid number.";

        setErrors(newErrors);
        
        if (Object.keys(newErrors).length > 0) {
            // Check for specific error groups to alert appropriately
            alert("Please fill in all required fields correctly. Check the form for red error messages.");
            return false;
        }
        return true;
    };

    const uploadToCloudinary = async (file: File) => {
        const cloudName = "dbr2hadbm";
        const apiKey = "282644665192215";
        const apiSecret = "cuzzr6X7qZkchx9Nh61xt-JWxMI";
        
        const timestamp = Math.round((new Date()).getTime() / 1000);
        const strToSign = `timestamp=${timestamp}${apiSecret}`;
        
        const encoder = new TextEncoder();
        const data = encoder.encode(strToSign);
        const hashBuffer = await crypto.subtle.digest('SHA-1', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", apiKey);
        formData.append("timestamp", timestamp.toString());
        formData.append("signature", signature);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData
        });
        
        if (!res.ok) throw new Error("Cloudinary upload failed");
        const json = await res.json();
        return json.secure_url;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        
        try {
            // 1. Upload Image (only if attached)
            let imageUrl = "";
            if (paymentImageFile) {
                imageUrl = await uploadToCloudinary(paymentImageFile);
            }

            const registrationData = {
                ...form,
                conferencePackage: selectedPkg,
                paymentScreenshotUrl: imageUrl
            };
            console.log("Submitting Registration Data: ", registrationData);

            // 2. Save to Firestore 'cgsi' collection
            await addDoc(collection(db, "cgsi"), {
                ...registrationData,
                timestamp: serverTimestamp(),
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("There was an error submitting your registration. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const getInputClass = (fieldName: string) => {
        return `${inp} ${errors[fieldName] ? 'border-red-400 focus:border-red-500 bg-red-50' : 'border-gray-300 focus:border-gray-500'}`;
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted!</h2>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                    Thank you for registering for CGCON 2026. We will contact you shortly with payment details and confirmation.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                    Queries: <a href="mailto:info.thecgsi@gmail.com" className="text-[#d87a76] font-semibold hover:underline">info.thecgsi@gmail.com</a>
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            
            {/* Full-page Loader Overlay */}
            {isSubmitting && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-300">
                    <svg className="animate-spin h-16 w-16 text-[#d87a76] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-900">Processing Registration...</h2>
                    <p className="text-gray-500 mt-2 font-medium">Please do not close or refresh this window.</p>
                </div>
            )}

            {/* Banner */}
            <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#fef7f7] via-white to-[#fbf1f1] border-b border-rose-100/50 overflow-hidden">
                <div className="absolute inset-3 sm:inset-5 border border-[#e8c3b9]/35 rounded-[1.75rem] pointer-events-none" />
                <div className="absolute top-0 left-0 w-40 sm:w-56 aspect-square opacity-20 pointer-events-none">
                    <img src="https://lvrii.in/conferences/wp-content/uploads/2025/08/flower-33-2.png"
                        className="w-full h-full object-contain -translate-x-5 -translate-y-5 rotate-90 scale-x-[-1]" alt="" />
                </div>
                <div className="absolute bottom-0 right-0 w-40 sm:w-56 aspect-square opacity-20 pointer-events-none">
                    <img src="https://lvrii.in/conferences/wp-content/uploads/2025/08/flower-33-2.png"
                        className="w-full h-full object-contain translate-x-5 translate-y-5" alt="" />
                </div>
                <div className="container mx-auto px-5 text-center relative z-10">
                    <img src={LOGO} alt="CGSI" className="h-40 sm:h-52 w-auto mx-auto mb-4 mix-blend-multiply" />
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#3a2f2c] uppercase tracking-wide">CGCON 2026</h1>
                    <p className="mt-1.5 text-[#d87a76] font-serif text-base sm:text-lg font-semibold italic">3<sup>rd</sup> Cosmetic Gynecology World Congress</p>
                </div>
            </section>

            {/* Form */}
            <section className="py-10 sm:py-14 bg-white">
                <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>

                        {/* ── REGISTRATION heading ── */}
                        <div>
                            <h2 className="text-lg font-extrabold text-gray-900 uppercase tracking-wide mb-1">Registration</h2>
                            <hr className="border-gray-300" />
                        </div>

                        {/* Row 1: Category · Title · Name · Mobile */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Category <span className="text-red-500">*</span></label>
                                <select name="category" value={form.category} onChange={handleChange} className={getInputClass('category')}>
                                    <option>Delegate</option>
                                    <option>Faculty</option>
                                    <option>Post Graduate</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                                <select name="title" value={form.title} onChange={handleChange} className={getInputClass('title')}>
                                    <option>Dr</option>
                                    <option>Prof</option>
                                    <option>Mr</option>
                                    <option>Ms</option>
                                    <option>Mrs</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className={getInputClass('name')} />
                                <ErrorMsg msg={errors.name} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile <span className="text-red-500">*</span></label>
                                <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile" className={getInputClass('mobile')} />
                                <ErrorMsg msg={errors.mobile} />
                            </div>
                        </div>

                        {/* Row 2: Email · Institution · Designation */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={getInputClass('email')} />
                                <ErrorMsg msg={errors.email} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Institution Name <span className="text-red-500">*</span></label>
                                <input name="institution" value={form.institution} onChange={handleChange} className={getInputClass('institution')} />
                                <ErrorMsg msg={errors.institution} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Designation</label>
                                <input name="designation" value={form.designation} onChange={handleChange} className={getInputClass('designation')} />
                            </div>
                        </div>

                        {/* Row 3: City · State · MCI Number */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                                <input name="city" value={form.city} onChange={handleChange} className={getInputClass('city')} />
                                <ErrorMsg msg={errors.city} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                                <input name="state" value={form.state} onChange={handleChange} className={getInputClass('state')} />
                                <ErrorMsg msg={errors.state} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">MCI Number</label>
                                <input name="mciNumber" value={form.mciNumber} onChange={handleChange} className={getInputClass('mciNumber')} />
                            </div>
                        </div>

                        {/* Row 4: Specialty · State Medical Council */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Specialty</label>
                                <input name="specialty" value={form.specialty} onChange={handleChange} className={getInputClass('specialty')} />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">State Medical Council</label>
                                <input name="stateMedicalCouncil" value={form.stateMedicalCouncil} onChange={handleChange} className={getInputClass('stateMedicalCouncil')} />
                            </div>
                        </div>

                        {/* CGSI Member */}
                        <div className="flex flex-wrap items-center gap-6 p-4 bg-gray-50 border border-gray-100 rounded-lg">
                            <span className="text-sm font-bold text-gray-900">Are you a CGSI Member? <span className="text-red-500">*</span></span>
                            <div className="flex gap-4">
                                {["Yes", "No"].map(opt => (
                                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer font-medium">
                                        <input type="radio" name="cgsiMember" value={opt}
                                            checked={form.cgsiMember === opt} 
                                            onChange={(e) => {
                                                handleChange(e);
                                                if (errors.cgsiMember) setErrors(prev => ({ ...prev, cgsiMember: "" }));
                                            }}
                                            className="accent-[#d87a76] w-4 h-4" />
                                        {opt}
                                    </label>
                                ))}
                            </div>
                            <ErrorMsg msg={errors.cgsiMember} />

                            <div className="flex items-center gap-3 flex-1 min-w-[200px] border-l border-gray-200 pl-6">
                                <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">Membership No.</label>
                                <div className="flex-1">
                                    <input name="cgsiMemberNo" value={form.cgsiMemberNo} onChange={handleChange}
                                        disabled={form.cgsiMember === "No"}
                                        placeholder="If yes, enter number"
                                        className={getInputClass('cgsiMemberNo')} />
                                    <ErrorMsg msg={errors.cgsiMemberNo} />
                                </div>
                            </div>
                        </div>

                        {/* ── Packages ── */}
                        <div className={`pt-4 p-5 rounded-lg ${errors.selectedPkg ? 'bg-red-50 border border-red-200' : 'bg-transparent'}`}>
                            <h3 className="text-base font-extrabold text-gray-900 underline mb-3">Conference Package <span className="text-red-500">*</span></h3>
                            <div className="space-y-2">
                                {PACKAGES.map(pkg => (
                                    <label key={pkg.id} className="flex items-center gap-3 text-sm font-semibold text-gray-800 cursor-pointer p-2 hover:bg-gray-50 rounded transition">
                                        <input type="radio"
                                            name="conferencePackage"
                                            value={pkg.id}
                                            checked={selectedPkg === pkg.id}
                                            onChange={() => {
                                                setSelectedPkg(pkg.id);
                                                setForm(prev => ({ ...prev, totalAmount: pkg.amount }));
                                                if (errors.selectedPkg) setErrors(prev => ({ ...prev, selectedPkg: "" }));
                                                if (errors.totalAmount) setErrors(prev => ({ ...prev, totalAmount: "" }));
                                            }}
                                            className="accent-[#d87a76] w-4 h-4 shrink-0" />
                                        {pkg.label}
                                    </label>
                                ))}
                            </div>
                            <ErrorMsg msg={errors.selectedPkg} />
                        </div>

                        {/* ── Attach Payment Screenshot ── */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 max-w-4xl mx-auto mt-6">
                                <img src="https://res.cloudinary.com/dq6gr5zjc/image/upload/v1782807227/WhatsApp_Image_2026-06-30_at_10.53.53_AM_ae7fyw.jpg" alt="Payment details" className="w-full max-w-xs h-auto rounded-xl shadow-sm border border-gray-200" />
                                
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm w-full max-w-sm">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Bank Details</h4>
                                    <table className="w-full text-sm text-left text-gray-700 align-top">
                                        <tbody className="divide-y divide-gray-100">
                                            <tr>
                                                <td className="py-2 font-semibold pr-3 whitespace-nowrap">Bank Name:</td>
                                                <td className="py-2 text-gray-900 font-medium">Indian Overseas Bank</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 font-semibold pr-3 whitespace-nowrap">Bank Address:</td>
                                                <td className="py-2 text-gray-900 font-medium">Kilpauk Branch, Chennai</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 font-semibold pr-3 whitespace-nowrap">AC. NO.:</td>
                                                <td className="py-2 text-gray-900 font-medium">057101000057779</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 font-semibold pr-3 whitespace-nowrap align-top">AC. Name:</td>
                                                <td className="py-2 text-gray-900 font-medium">Cosmetic Gynecology<br/>Society of India</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 font-semibold pr-3 whitespace-nowrap">IFSC Code:</td>
                                                <td className="py-2 text-gray-900 font-medium">IOBA0000571</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <h3 className="text-base font-bold text-gray-900 mb-4">Attach Your Payment Screenshot</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        IMAGE UPLOAD (Payment Screenshot)
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            setPaymentImageFile(e.target.files?.[0] || null);
                                            if (errors.paymentImageFile) setErrors(prev => ({ ...prev, paymentImageFile: "" }));
                                        }}
                                        className={`w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 cursor-pointer ${errors.paymentImageFile ? 'p-1 bg-red-50 border border-red-200 rounded' : ''}`}
                                    />
                                    <ErrorMsg msg={errors.paymentImageFile} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Total Amount Paid <span className="text-[#d87a76]">*</span>
                                    </label>
                                    <input name="totalAmount" value={form.totalAmount} readOnly placeholder="Select a package..." className={`${getInputClass('totalAmount')} bg-gray-100 cursor-not-allowed font-bold text-gray-600`} />
                                    <ErrorMsg msg={errors.totalAmount} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        UTR / UPI Transaction ID
                                    </label>
                                    <input name="utr" value={form.utr} onChange={handleChange} placeholder="" className={getInputClass('utr')} />
                                    <ErrorMsg msg={errors.utr} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message if any</label>
                                    <input name="message" value={form.message} onChange={handleChange} placeholder="" className={getInputClass('message')} />
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-8 pb-6 border-t border-gray-100 flex flex-col items-center sm:items-start">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-10 py-3.5 bg-[#d87a76] hover:bg-[#c46a66] text-white font-bold rounded-xl text-lg transition-all duration-200 disabled:opacity-50 shadow-md hover:shadow-lg w-full sm:w-auto"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Uploading & Submitting...
                                    </span>
                                ) : "Submit Registration"}
                            </button>
                            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                                <span className="text-red-500">*</span> indicates required field
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CGCON2026Registration;
