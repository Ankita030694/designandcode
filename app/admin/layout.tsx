"use client";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../lib/firebase";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
            <Link
              href="/admin/contactsubmission"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                pathname.includes("/admin/contactsubmission") 
                  ? "bg-zinc-800 text-white" 
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
              }`}
            >
              <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Submissions
            </Link>
            <Link
              href="/admin/blog"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                pathname.includes("/admin/blog") 
                  ? "bg-blue-600 text-white" 
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
              }`}
            >
              <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" /></svg>
              Blog Manager
            </Link>
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
           <Link href="/admin/contactsubmission" className={`flex-1 py-2 text-center text-xs font-bold rounded-lg ${pathname.includes('contactsubmission') ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500'}`}>Contact Submissions</Link>
           <Link href="/admin/blog" className={`flex-1 py-2 text-center text-xs font-bold rounded-lg ${pathname.includes('blog') ? 'bg-blue-50 text-blue-600' : 'text-zinc-500'}`}>Blog Manager</Link>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
