"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { db, auth } from "../../lib/firebase";
import BlogManagerUI from "./components/BlogManagerUI";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: string;
  createdAt: any;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<"leads" | "blogs">("leads");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch leads when user is authenticated
  useEffect(() => {
    if (!user) {
      setLeads([]);
      return;
    }
    
    setLoading(true);
    const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const leadsData: Lead[] = [];
      querySnapshot.forEach((docSnap) => {
        leadsData.push({ id: docSnap.id, ...docSnap.data() } as Lead);
      });
      setLeads(leadsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged will handle setting the user
    } catch (error: any) {
      console.error("Login Error:", error);
      setLoginError(error.message || "Invalid email or password.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const markAsRead = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "new" ? "read" : "new";
    try {
      await updateDoc(doc(db, "leads", id), {
        status: newStatus,
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const deleteLead = async (id: string) => {
    if (confirm("Are you sure you want to delete this lead?")) {
      try {
        await deleteDoc(doc(db, "leads", id));
      } catch (error) {
        console.error("Error deleting lead:", error);
      }
    }
  };

  if (authChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F6F3]">
        <div className="animate-pulse text-zinc-500 font-medium tracking-wide">Checking secure session...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F6F3]">
        <div className="bg-white p-10 rounded-[28px] shadow-sm border border-zinc-100 max-w-sm w-full relative z-20">
          <h1 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Admin Secure Login</h1>
          
          {loginError && (
            <div className="bg-red-50 text-red-600 text-xs p-3 rounded-xl mb-4 border border-red-100">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3.5 bg-zinc-50 rounded-2xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 border border-zinc-200"
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3.5 bg-zinc-50 rounded-2xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 border border-zinc-200"
            />
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 bg-[#AD8BFF] text-white font-bold rounded-full text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#F7F6F3] overflow-hidden relative z-20">
      {/* ─── SIDEBAR ─── */}
      <aside className="w-64 bg-[#1e2330] flex flex-col justify-between text-white border-r border-zinc-800 hidden md:flex shrink-0">
        <div className="flex flex-col">
          {/* Logo */}
          <div className="p-6 pb-10 flex items-center gap-3">
            <img src="/icon.svg" alt="DesignNCode Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-lg tracking-wide">DesignNCode</span>
          </div>

          {/* Nav Items */}
          <nav className="flex flex-col gap-1 px-3">
            <button
              onClick={() => setActiveTab("leads")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "leads" 
                  ? "bg-zinc-800 text-white" 
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
              }`}
            >
              <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Submissions
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "blogs" 
                  ? "bg-[#e53e3e] text-white" 
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
              }`}
            >
              <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" /></svg>
              Blog Manager
            </button>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800/50">
          <div className="bg-zinc-800/50 rounded-xl p-3 flex items-center gap-3 mb-2 border border-zinc-700/50">
            <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-xs font-bold shrink-0">SA</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate">Super Administrator</p>
              <p className="text-[10px] text-zinc-400 truncate">{user.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden bg-[#1e2330] p-4 flex items-center justify-between text-white shrink-0">
           <div className="flex items-center gap-2">
            <img src="/icon.svg" alt="DesignNCode Logo" className="w-6 h-6 rounded-md" />
            <span className="font-bold text-sm">DesignNCode</span>
           </div>
           <button onClick={handleLogout} className="text-xs font-bold bg-zinc-800 px-3 py-1.5 rounded-lg">Sign Out</button>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden flex p-2 gap-2 bg-white border-b border-zinc-200 shrink-0">
           <button onClick={() => setActiveTab("leads")} className={`flex-1 py-2 text-xs font-bold rounded-lg ${activeTab === 'leads' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500'}`}>Contact Submissions</button>
           <button onClick={() => setActiveTab("blogs")} className={`flex-1 py-2 text-xs font-bold rounded-lg ${activeTab === 'blogs' ? 'bg-red-50 text-red-600' : 'text-zinc-500'}`}>Blog Manager</button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            
            {activeTab === 'blogs' ? (
              <BlogManagerUI />
            ) : loading ? (
              <div className="text-center py-20 text-zinc-500 animate-pulse">
                Fetching leads from Firestore...
              </div>
            ) : leads.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 shadow-sm text-zinc-500">
                No contact submissions found yet.
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-2">
                <div className="mb-4">
                   <h2 className="text-2xl font-bold text-zinc-900">Contact Submissions</h2>
                   <p className="text-zinc-500 text-sm mt-1">Manage all leads and inquiries.</p>
                </div>
                {leads.map((lead) => (
                  <div 
                    key={lead.id} 
                    className={`bg-white rounded-2xl p-4 sm:p-6 border transition-all shadow-sm relative flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6
                      ${lead.status === 'new' ? 'border-orange-200 shadow-orange-100/50' : 'border-zinc-200'}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 w-full">
                      {/* Status Indicator */}
                      <div className="lg:w-16 shrink-0 flex items-center">
                        {lead.status === 'new' ? (
                          <span className="bg-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md">New</span>
                        ) : (
                          <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md">Read</span>
                        )}
                      </div>

                      {/* Main Info */}
                      <div className="lg:w-64 shrink-0 flex flex-col justify-center">
                        <h3 className="text-base font-bold text-zinc-900 leading-tight mb-1">{lead.name}</h3>
                        <p className="text-xs text-zinc-500 leading-snug">{lead.email}<br/>{lead.phone}</p>
                      </div>
                      
                      {/* Service */}
                      <div className="lg:w-32 shrink-0 flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Service</span>
                        <span className="text-xs font-medium text-zinc-800 bg-zinc-50 px-2.5 py-1 rounded-lg border border-zinc-100 self-start">{lead.service || 'N/A'}</span>
                      </div>

                      {/* Message Preview */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Message</span>
                        <div className="text-xs text-zinc-700 leading-relaxed bg-zinc-50 p-3 rounded-xl border border-zinc-100 max-h-[70px] overflow-y-auto whitespace-pre-wrap">
                          {lead.message || "No message provided."}
                        </div>
                      </div>

                      {/* Date */}
                      <div className="lg:w-24 shrink-0 flex flex-col justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Date</span>
                        <span className="text-xs font-medium text-zinc-800">
                          {lead.createdAt?.toDate ? lead.createdAt.toDate().toLocaleDateString() : 'Just now'}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="lg:w-auto shrink-0 flex items-center justify-end gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-100">
                        <button 
                          onClick={() => markAsRead(lead.id, lead.status)}
                          className={`px-3 py-1.5 text-[11px] font-bold rounded-full transition-colors border cursor-pointer whitespace-nowrap
                            ${lead.status === 'new' 
                              ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-transparent' 
                              : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border-emerald-200'}`}
                        >
                          {lead.status === 'new' ? 'Mark Read' : 'Read'}
                        </button>
                        <button 
                          onClick={() => deleteLead(lead.id)}
                          className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 text-[11px] font-bold rounded-full transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
