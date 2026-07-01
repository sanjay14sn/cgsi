import React, { useState, useEffect, useMemo } from "react";
import { collection, getDocs, query, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { X, Edit2, Trash2 } from "lucide-react";

const ADMIN_NUMBER = "9999999999";
const ADMIN_PASS = "admin123";

const ITEMS_PER_PAGE = 10;

const AdminDashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [registrations, setRegistrations] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);

    // Modals
    const [editingReg, setEditingReg] = useState<any>(null);

    useEffect(() => {
        if (sessionStorage.getItem("adminAuth") === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if (isLoggedIn) fetchData();
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (mobile === ADMIN_NUMBER && password === ADMIN_PASS) {
            setIsLoggedIn(true);
            sessionStorage.setItem("adminAuth", "true");
            setError("");
        } else {
            setError("Invalid mobile number or password.");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem("adminAuth");
        setRegistrations([]);
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "cgsi"));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            data.sort((a: any, b: any) => {
                const timeA = a.timestamp ? a.timestamp.toMillis() : 0;
                const timeB = b.timestamp ? b.timestamp.toMillis() : 0;
                return timeB - timeA;
            });
            setRegistrations(data);
            setCurrentPage(1);
        } catch (err) {
            console.error("Error fetching registrations: ", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this registration? This cannot be undone.")) {
            try {
                await deleteDoc(doc(db, "cgsi", id));
                setRegistrations(prev => prev.filter(r => r.id !== id));
            } catch (err) {
                console.error("Error deleting: ", err);
                alert("Failed to delete registration.");
            }
        }
    };

    const handleSaveEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { id, timestamp, ...updateData } = editingReg;
            await updateDoc(doc(db, "cgsi", id), updateData);
            setRegistrations(prev => prev.map(r => r.id === id ? { ...r, ...updateData } : r));
            setEditingReg(null);
        } catch (err) {
            console.error("Error updating: ", err);
            alert("Failed to update registration.");
        }
    };

    const totalPages = Math.ceil(registrations.length / ITEMS_PER_PAGE);
    const paginatedRegistrations = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return registrations.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [registrations, currentPage]);

    const val = (v: any) => v || "-";

    // ----- Login View -----
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">Admin Portal</h2>
                        <p className="mt-2 text-center text-sm text-gray-500">Log in to view CGCON 2026 registrations</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                                <input type="text" required className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d87a76]/20 focus:border-[#d87a76] outline-none transition" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Password</label>
                                <input type="password" required className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#d87a76]/20 focus:border-[#d87a76] outline-none transition" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
                        <button type="submit" className="w-full py-3 px-4 text-sm font-bold rounded-lg text-white bg-[#d87a76] hover:bg-[#c46a66] transition shadow-md">
                            Secure Log In
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
            <div className="max-w-[1600px] mx-auto space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-200 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Registration Dashboard</h1>
                        <p className="text-sm text-gray-500 mt-1">Manage all CGCON 2026 signups securely.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold border border-blue-100">
                            Total: {registrations.length}
                        </div>
                        <button onClick={fetchData} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-bold hover:bg-gray-200 transition">
                            Refresh Data
                        </button>
                        <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition shadow-sm">
                            Log Out
                        </button>
                    </div>
                </div>

                {/* Main Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {loading ? (
                        <div className="flex justify-center items-center py-32">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#d87a76]"></div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-max w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-50 text-gray-500 text-[10px] sm:text-xs uppercase font-bold border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 whitespace-nowrap">Date</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Category</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Title</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Name</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Mobile</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Email</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Institution</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Designation</th>
                                        <th className="px-4 py-3 whitespace-nowrap">City</th>
                                        <th className="px-4 py-3 whitespace-nowrap">State</th>
                                        <th className="px-4 py-3 whitespace-nowrap">MCI Number</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Specialty</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Medical Council</th>
                                        <th className="px-4 py-3 whitespace-nowrap">CGSI Member</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Member No.</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Package</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Amount (₹)</th>
                                        <th className="px-4 py-3 whitespace-nowrap">UTR</th>
                                        <th className="px-4 py-3 whitespace-nowrap">Screenshot</th>
                                        <th className="px-4 py-3 whitespace-nowrap max-w-xs">Message</th>
                                        <th className="px-4 py-3 whitespace-nowrap sticky right-0 bg-gray-50 border-l border-gray-200 text-center shadow-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {paginatedRegistrations.length === 0 ? (
                                        <tr>
                                            <td colSpan={20} className="px-6 py-16 text-center text-gray-400">
                                                No registrations found yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        paginatedRegistrations.map((reg) => (
                                            <tr key={reg.id} className="hover:bg-gray-50/80 transition">
                                                <td className="px-4 py-3 whitespace-nowrap">{reg.timestamp ? new Date(reg.timestamp.toDate()).toLocaleDateString('en-GB') : '-'}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.category)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.title)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">{val(reg.name)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.mobile)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.email)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.institution)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.designation)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.city)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.state)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.mciNumber)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.specialty)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.stateMedicalCouncil)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.cgsiMember)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">{val(reg.cgsiMemberNo)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-800">{val(reg.conferencePackage)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap font-bold text-green-600">₹{val(reg.totalAmount)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap font-mono text-xs">{val(reg.utr)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    {reg.paymentScreenshotUrl ? (
                                                        <a href={reg.paymentScreenshotUrl} target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline flex items-center gap-1 text-xs">
                                                            View Image
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-400">-</span>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 max-w-xs truncate" title={val(reg.message)}>{val(reg.message)}</td>
                                                
                                                <td className="px-4 py-3 whitespace-nowrap sticky right-0 bg-white border-l border-gray-100 group-hover:bg-gray-50/80 transition shadow-[inset_1px_0_0_rgba(0,0,0,0.05)]">
                                                    <div className="flex justify-center gap-2">
                                                        <button onClick={() => setEditingReg(reg)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded border border-transparent hover:border-blue-100 transition" title="Edit">
                                                            <Edit2 size={16} />
                                                        </button>
                                                        <button onClick={() => handleDelete(reg.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded border border-transparent hover:border-red-100 transition" title="Delete">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <div className="flex items-center justify-between px-2">
                        <p className="text-sm text-gray-500 font-medium">
                            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, registrations.length)} of {registrations.length}
                        </p>
                        <div className="flex gap-2">
                            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold disabled:opacity-50 hover:bg-gray-50 transition">Prev</button>
                            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold disabled:opacity-50 hover:bg-gray-50 transition">Next</button>
                        </div>
                    </div>
                )}
            </div>

            {/* ----- Edit Modal ----- */}
            {editingReg && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col border border-gray-100">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2"><Edit2 size={20} className="text-[#d87a76]"/> Edit Registration</h3>
                            <button type="button" onClick={() => setEditingReg(null)} className="p-2 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full transition"><X size={20} /></button>
                        </div>
                        <form id="editForm" onSubmit={handleSaveEdit} className="flex-1 overflow-y-auto p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                                {Object.keys(editingReg).filter(k => k !== "id" && k !== "timestamp").map(key => (
                                    <div key={key}>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                        <input 
                                            type="text" 
                                            value={editingReg[key] || ""} 
                                            onChange={(e) => setEditingReg({ ...editingReg, [key]: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d87a76]/20 focus:border-[#d87a76] transition"
                                        />
                                    </div>
                                ))}
                            </div>
                        </form>
                        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50 rounded-b-2xl">
                            <button type="button" onClick={() => setEditingReg(null)} className="px-5 py-2.5 text-sm font-bold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">Cancel</button>
                            <button type="submit" form="editForm" className="px-5 py-2.5 text-sm font-bold text-white bg-[#d87a76] rounded-lg hover:bg-[#c46a66] shadow-md transition">Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
