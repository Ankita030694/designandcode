"use client";

import { useState } from "react";
import Image from "next/image";

type CategoryType = "Project" | "Careers" | "Partnership" | "Press";

interface FormFields {
  name: string;
  secondary: string; // Company, Role, Organization, or Publication
  email: string;
  description: string;
}

export default function ContactUs() {
  const [category, setCategory] = useState<CategoryType>("Project");
  const [formData, setFormData] = useState<FormFields>({
    name: "Evan Hartley",
    secondary: "Hartley, Hartley & Hartley",
    email: "evan@gmail.com",
    description: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(16); // Default to July 16
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Dynamic content depending on category selection
  const getFieldLabels = () => {
    switch (category) {
      case "Careers":
        return {
          secondaryLabel: "Role of Interest",
          secondaryPlaceholder: "Product Designer / Frontend Developer",
          descLabel: "Tell us about your experience",
          descPlaceholder: "Describe your background, skills, and what excites you about drawing...",
        };
      case "Partnership":
        return {
          secondaryLabel: "Organization",
          secondaryPlaceholder: "Acme Corp / Vercel Inc.",
          descLabel: "Partnership Proposal",
          descPlaceholder: "How can we collaborate? Describe your vision for a partnership...",
        };
      case "Press":
        return {
          secondaryLabel: "Publication",
          secondaryPlaceholder: "TechCrunch / Wired / Medium",
          descLabel: "Inquiry details",
          descPlaceholder: "What story are you working on? List any questions or topics of interest...",
        };
      case "Project":
      default:
        return {
          secondaryLabel: "Company",
          secondaryPlaceholder: "Hartley, Hartley & Hartley",
          descLabel: "About your project",
          descPlaceholder: "Describe your project scope, design needs, and budget timeline...",
        };
    }
  };

  const { secondaryLabel, secondaryPlaceholder, descLabel, descPlaceholder } = getFieldLabels();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", secondary: "", email: "", description: "" });
    }, 4000);
  };

  const handleBookCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) return;
    setBookingConfirmed(true);
  };

  const closeScheduler = () => {
    setIsSchedulerOpen(false);
    setBookingConfirmed(false);
    setSelectedTime(null);
  };

  // Static arrays for calendar layout
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1); // July has 31 days
  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  return (
    <div className="flex-1 w-full bg-white dark:bg-white font-sans transition-colors duration-200 relative overflow-hidden py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      {/* Background Tech Mesh/Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--navbar-dot-color)_1.5px,transparent_1.5px)] bg-[size:48px_48px] opacity-45 pointer-events-none z-0" />

      {/* Left Margin Ruler Scale */}
      <div className="absolute left-4 top-0 bottom-0 w-8 hidden md:flex flex-col items-center pointer-events-none select-none z-10 text-[10px] text-zinc-400 dark:text-zinc-600 font-mono">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200/80 dark:bg-zinc-800/80" />
        {Array.from({ length: 18 }).map((_, idx) => {
          const y = idx * 50;
          const isMajor = [0, 50, 150, 200, 300, 400, 500].includes(y);
          return (
            <div key={idx} className="absolute flex items-center justify-between w-full pr-1" style={{ top: `${y + 40}px` }}>
              <span className="text-right w-full mr-1.5 select-none text-[9px] text-zinc-400 dark:text-zinc-500">{isMajor ? y : ""}</span>
              <div className={`h-[1px] bg-zinc-350 dark:bg-zinc-750 ${isMajor ? "w-2.5 bg-zinc-450 dark:bg-zinc-550" : "w-1.5 opacity-60"}`} />
            </div>
          );
        })}
      </div>

      {/* Right Margin Ruler Scale */}
      <div className="absolute right-4 top-0 bottom-0 w-8 hidden md:flex flex-col items-center pointer-events-none select-none z-10 text-[10px] text-zinc-400 dark:text-zinc-600 font-mono">
        <div className="absolute right-1/2 top-0 bottom-0 w-[1px] bg-zinc-200/80 dark:bg-zinc-800/80" />
        {Array.from({ length: 18 }).map((_, idx) => {
          const y = idx * 50;
          const isMajor = [0, 50, 150, 200, 300, 400, 500].includes(y);
          return (
            <div key={idx} className="absolute flex items-center justify-between w-full pl-1" style={{ top: `${y + 40}px` }}>
              <div className={`h-[1px] bg-zinc-350 dark:bg-zinc-755 ${isMajor ? "w-2.5 bg-zinc-450 dark:bg-zinc-550" : "w-1.5 opacity-60"}`} />
              <span className="text-left w-full ml-1.5 select-none text-[9px] text-zinc-400 dark:text-zinc-500">{isMajor ? y : ""}</span>
            </div>
          );
        })}
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column: Title, Categories & Form */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          
          {/* Section Header */}
          <div className="flex flex-col gap-1.5 items-start">
            <span className="text-[13px] font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase select-none pl-12 sm:pl-16">
              Contact Us
            </span>
            <div className="relative mt-2 w-full">
              {/* Left Graffiti (Kite.svg Paper Airplane) positioned absolute left */}
              <div className="absolute -left-6 sm:-left-10 -top-3 w-16 h-16 sm:w-20 sm:h-20 -rotate-12 transition-transform hover:scale-105 hover:-rotate-6 duration-300 pointer-events-auto select-none z-10">
                <Image
                  src="/Kite.svg"
                  alt="Paper Airplane"
                  fill
                  className="object-contain filter drop-shadow-[0_8px_16px_rgba(168,85,247,0.15)]"
                  priority
                />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white pl-12 sm:pl-16 leading-tight select-none">
                Take a{" "}
                <span className="bg-gradient-to-r from-sky-450 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Seat
                </span>
              </h1>
            </div>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap items-center gap-3 mt-10 pl-0 md:pl-16">
            {(["Project", "Careers", "Partnership", "Press"] as CategoryType[]).map((cat) => {
              const isActive = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    // Clear secondary and description inputs on category change
                    setFormData((prev) => ({ ...prev, secondary: "", description: "" }));
                  }}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 select-none cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white dark:bg-white dark:text-black shadow-[0_8px_16px_-2px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_16px_rgba(255,255,255,0.05)] scale-[1.02]"
                      : "bg-white text-zinc-500 border border-zinc-200/60 hover:border-zinc-400 hover:text-black dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800/80 dark:hover:border-zinc-650 dark:hover:text-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Interactive Contact Form */}
          <form onSubmit={handleFormSubmit} className="mt-10 flex flex-col gap-6 max-w-lg pl-0 md:pl-16">
            
            {/* Input Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[13px] font-semibold text-zinc-500 dark:text-zinc-450 select-none">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Evan Hartley"
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-zinc-200/80 dark:bg-zinc-900 dark:border-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-800 dark:text-zinc-200 text-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] focus:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              />
            </div>

            {/* Input Secondary (Depends on Category Selection) */}
            <div className="flex flex-col gap-2">
              <label htmlFor="secondary" className="text-[13px] font-semibold text-zinc-500 dark:text-zinc-450 select-none">
                {secondaryLabel}
              </label>
              <input
                type="text"
                id="secondary"
                name="secondary"
                required
                value={formData.secondary}
                onChange={handleInputChange}
                placeholder={secondaryPlaceholder}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-zinc-200/80 dark:bg-zinc-900 dark:border-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-800 dark:text-zinc-200 text-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] focus:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] font-semibold text-zinc-500 dark:text-zinc-455 select-none">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="evan@gmail.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-zinc-200/80 dark:bg-zinc-900 dark:border-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-800 dark:text-zinc-200 text-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] focus:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              />
            </div>

            {/* About / Description Textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-[13px] font-semibold text-zinc-500 dark:text-zinc-450 select-none">
                {descLabel}
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                placeholder={descPlaceholder}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-zinc-200/80 dark:bg-zinc-900 dark:border-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-800 dark:text-zinc-200 text-[15px] resize-none shadow-[0_4px_12px_rgba(0,0,0,0.02)] focus:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
              />
            </div>

            {/* Form Submit Notification & Button */}
            <div className="mt-2 relative">
              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center text-sm font-semibold animate-fade-in dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-400">
                  🎉 Thank you for reaching out! We will be in touch shortly.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-zinc-950 text-white font-semibold hover:bg-zinc-850 transition-all shadow-md hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-zinc-100 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Submit Inquiry
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              )}
            </div>

          </form>

        </div>

        {/* Right Column: Book a Call Card & Decorative Graphics */}
        <div className="lg:col-span-5 flex flex-col justify-start items-center lg:items-end relative">
          
          {/* Background Decorative Outline Squares */}
          <div className="absolute right-36 bottom-20 w-12 h-12 border border-zinc-200 dark:border-zinc-800 rounded-2xl opacity-40 z-0 pointer-events-none rotate-12" />
          <div className="absolute right-48 bottom-40 w-10 h-10 border border-zinc-200 dark:border-zinc-800 rounded-xl opacity-30 z-0 pointer-events-none -rotate-6" />
          <div className="absolute right-12 bottom-64 w-14 h-14 border border-zinc-200 dark:border-zinc-800 rounded-2xl opacity-25 z-0 pointer-events-none rotate-45" />

          {/* Book a Call Main Card with glass-fade gradient background */}
          <div className="w-full max-w-sm rounded-[32px] overflow-hidden p-8 shadow-[0_20px_50px_rgba(59,130,246,0.12)] border border-zinc-200/40 dark:border-zinc-900/50 relative z-10 flex flex-col justify-between aspect-[1.45/1] group transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(59,130,246,0.18)]"
               style={{
                 background: 'linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(224,242,254,0.45) 50%, rgba(192,132,252,0.55) 100%)'
               }}>
            
            {/* Grid texture overlay */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none z-0"
              style={{
                backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
                backgroundSize: '16px 16px',
              }}
            />

            {/* Corner Decorative hyphens/markers */}
            <span className="absolute top-4 left-6 text-zinc-400 font-bold select-none text-xs">-</span>
            <span className="absolute top-4 right-6 text-zinc-400 font-bold select-none text-xs">-</span>

            {/* Card Content */}
            <div className="flex flex-col gap-2 relative z-10 pt-2 select-none">
              <h2 className="text-3xl font-extrabold text-black leading-tight">
                Book a <span className="bg-gradient-to-r from-blue-600 to-indigo-650 bg-clip-text text-transparent font-black">30-min</span> <br />
                Introduction Call
              </h2>
            </div>

            {/* CTA Button with Floating Waving Hand Icon */}
            <div className="relative mt-8 z-10">
              {/* Interactive Waving Hand Pointer */}
              <div 
                className="absolute -top-10 right-4 w-12 h-12 pointer-events-none select-none z-20 transition-transform duration-300"
                style={{
                  animation: "hand-wave 2.5s infinite ease-in-out",
                  transformOrigin: "bottom right"
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)]">
                  <path
                    d="M10.5 8.5V4.5C10.5 3.67 11.17 3 12 3C12.83 3 13.5 3.67 13.5 4.5V8.5M10.5 8.5C10.5 9.05 10.05 9.5 9.5 9.5C8.95 9.5 8.5 9.05 8.5 8.5V6.5C8.5 5.67 9.17 5 10 5C10.5 5 10.5 8.5 10.5 8.5ZM13.5 8.5C13.5 9.05 13.95 9.5 14.5 9.5C15.05 9.5 15.5 9.05 15.5 8.5V6.5C15.5 5.67 16.17 5 17 5C17.5 5 17.5 8.5 13.5 8.5ZM10.5 15V13.5C10.5 12.67 9.83 12 9 12C8.17 12 7.5 12.67 7.5 13.5V15.5M7.5 15.5C7.5 17.43 9.07 19 11 19H13C14.93 19 16.5 17.43 16.5 15.5V11.5C16.5 10.67 17.17 10 18 10C18.83 10 19.5 10.67 19.5 11.5V15.5C19.5 19.09 16.59 22 13 22H11C7.41 22 4.5 19.09 4.5 15.5V13.5C4.5 12.67 5.17 12 6 12C6.83 12 7.5 12.67 7.5 13.5V15.5"
                    stroke="#18181b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#f4f4f5"
                  />
                </svg>
              </div>

              <button
                onClick={() => setIsSchedulerOpen(true)}
                className="w-full py-4 bg-zinc-950 hover:bg-zinc-850 text-white font-semibold rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-[0_6px_12px_rgba(0,0,0,0.12)] group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer relative z-10 select-none"
              >
                <svg className="w-5 h-5 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Call
              </button>
            </div>

          </div>

          {/* Graphics Section under the Card */}
          <div className="w-full max-w-sm flex items-end justify-between mt-12 relative z-10 h-[220px]">
            
            {/* Globe Vector with neon glow circle */}
            <div className="absolute left-6 bottom-4 transition-transform hover:scale-105 duration-300 z-10">
              <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-tr from-purple-500/20 via-indigo-500/10 to-pink-500/20 p-4 border border-purple-300/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                {/* Inner glowing circle */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-purple-650/40 to-pink-500/40 blur-[8px]" />
                <Image
                  src="/globe.svg"
                  alt="Globe Graffiti"
                  width={64}
                  height={64}
                  className="relative z-10 brightness-0 invert opacity-80"
                />
              </div>
            </div>

            {/* Spotlight / Tech Projector - Right Bottom */}
            <div className="absolute right-0 bottom-0 transition-all hover:scale-105 duration-300 z-10">
              <svg width="120" height="210" viewBox="0 0 100 200" fill="none">
                <defs>
                  <linearGradient id="lamp-body" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="60%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                  <radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="lamp-highlight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e879f9" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <ellipse cx="50" cy="190" rx="30" ry="7" fill="#e4e4e7" className="dark:fill-zinc-900" opacity="0.4" />
                {/* Stand base */}
                <path d="M28 185 C28 181, 72 181, 72 185 L66 189 L34 189 Z" fill="url(#lamp-body)" />
                {/* Flexible neck arm */}
                <path d="M50 182 Q48 135 68 95 T82 60" stroke="url(#lamp-body)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
                {/* Joint links */}
                <circle cx="50" cy="180" r="3.5" fill="url(#lamp-highlight)" />
                <circle cx="80" cy="62" r="3.5" fill="url(#lamp-highlight)" />
                {/* Light head base structure */}
                <g transform="rotate(-30, 80, 60)">
                  <path d="M70 42 L90 42 L94 65 L66 65 Z" fill="url(#lamp-body)" />
                  <ellipse cx="80" cy="65" rx="14" ry="4" fill="url(#lamp-highlight)" />
                  <circle cx="80" cy="62" r="7.5" fill="#c084fc" />
                </g>
                {/* Neon light source glow beam */}
                <circle cx="50" cy="50" r="28" fill="url(#lamp-glow)" className="mix-blend-screen" />
              </svg>
            </div>

            {/* Spotlight Projection Beam */}
            <div className="absolute right-12 bottom-16 w-36 h-60 bg-gradient-to-bl from-purple-400/20 via-indigo-500/5 to-transparent origin-bottom-right -rotate-12 blur-md rounded-full pointer-events-none z-0" />

            {/* Blurry Purple Background Graffiti take a seat 1.svg */}
            <div className="absolute -right-16 -bottom-12 w-[420px] h-[300px] opacity-75 pointer-events-none z-0">
              <Image
                src="/take a seat 1.svg"
                alt="Graffiti Purple Background Blur"
                fill
                className="object-contain filter blur-[3px]"
              />
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Modal: Time slot booking scheduler */}
      {isSchedulerOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          
          <div className="bg-white dark:bg-zinc-950 rounded-[32px] border border-zinc-100 dark:border-zinc-900 w-full max-w-lg overflow-hidden shadow-2xl relative transform transition-all duration-300 scale-100">
            
            {/* Modal header */}
            <div className="px-8 py-6 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">Book an Intro Call</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">30-min consultation call</p>
              </div>
              <button 
                onClick={closeScheduler}
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-8">
              {!bookingConfirmed ? (
                <form onSubmit={handleBookCallSubmit} className="flex flex-col gap-6">
                  
                  {/* Step 1: Calendar Grid */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[13px] font-bold text-zinc-500 dark:text-zinc-400">
                      July 2026
                    </span>
                    
                    {/* Grid Days headings */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-400 dark:text-zinc-500 select-none">
                      {weekDays.map((day) => (
                        <div key={day} className="py-1">{day}</div>
                      ))}
                    </div>

                    {/* Grid Days dates */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {/* Empty slots for starting padding (July 2026 starts on Wednesday = 2 empty slots) */}
                      <div className="py-2" />
                      <div className="py-2" />
                      
                      {calendarDays.map((day) => {
                        const isSelected = selectedDate === day;
                        const isSelectable = day >= 16; // mock selectable dates from current date onward
                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={!isSelectable}
                            onClick={() => {
                              setSelectedDate(day);
                              setSelectedTime(null);
                            }}
                            className={`py-2 rounded-xl text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                : isSelectable
                                ? "hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 cursor-pointer"
                                : "text-zinc-300 dark:text-zinc-800 cursor-default"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Time slot Selector */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[13px] font-bold text-zinc-500 dark:text-zinc-400">
                      Available Time Slots
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((slot) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                              isSelected
                                ? "bg-zinc-950 border-zinc-950 text-white dark:bg-white dark:border-white dark:text-black"
                                : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-650 cursor-pointer"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Booking input (Name & Email pre-populated if they filled left form) */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">Name</label>
                      <input 
                        type="text" 
                        required 
                        defaultValue={formData.name}
                        placeholder="Your Name"
                        className="px-4 py-2.5 rounded-xl text-xs bg-zinc-50 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 text-zinc-800 dark:text-zinc-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        defaultValue={formData.email}
                        placeholder="you@domain.com"
                        className="px-4 py-2.5 rounded-xl text-xs bg-zinc-50 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 text-zinc-800 dark:text-zinc-200"
                      />
                    </div>
                  </div>

                  {/* Confirm Scheduler CTA Button */}
                  <button
                    type="submit"
                    disabled={!selectedTime}
                    className={`w-full py-4 rounded-2xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2 ${
                      selectedTime
                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl cursor-pointer"
                        : "bg-zinc-100 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600 cursor-not-allowed"
                    }`}
                  >
                    Confirm Booking
                  </button>

                </form>
              ) : (
                // Step 3: Success booking display
                <div className="flex flex-col items-center text-center py-6 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h4 className="text-2xl font-extrabold text-black dark:text-white">Call Confirmed!</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm leading-relaxed">
                    Your 30-min Introduction Call has been successfully scheduled. A calendar invitation has been sent to your inbox.
                  </p>

                  <div className="my-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 dark:bg-zinc-900 dark:border-zinc-900/60 w-full flex flex-col gap-2.5 text-left text-sm max-w-xs">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">30-min Intro Call</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-xs">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>July {selectedDate}, 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-xs">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{selectedTime}</span>
                    </div>
                  </div>

                  <button
                    onClick={closeScheduler}
                    className="py-3 px-8 bg-zinc-950 text-white font-semibold rounded-xl hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100 transition-colors shadow cursor-pointer text-sm"
                  >
                    Done
                  </button>

                </div>
              )}
            </div>

          </div>

        </div>
      )}

      {/* Inject custom CSS keyframes animation */}
      <style>{`
        @keyframes hand-wave {
          0%, 100% { transform: rotate(0deg) translate(0, 0); }
          25% { transform: rotate(-8deg) translate(-2px, -1px); }
          50% { transform: rotate(12deg) translate(2px, 1px); }
          75% { transform: rotate(-5deg) translate(-1px, 0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </div>
  );
}
