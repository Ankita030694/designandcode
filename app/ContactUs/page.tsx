"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";
import { COUNTRY_CODES } from "../../data/CC";

const logoRow1 = [
  "/LOGO%20DESIGNNCODE/88F8482F-C350-44A7-940E-386058BB49C9-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Anyadha-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Asset_1_2x_1-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Group_7-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/KM-gradient-logo-300x300-1__2_-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Logo_Lockup__1_-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/88F8482F-C350-44A7-940E-386058BB49C9-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Anyadha-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Asset_1_2x_1-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Group_7-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/KM-gradient-logo-300x300-1__2_-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Logo_Lockup__1_-removebg-preview%201.png",
];

const logoRow2 = [
  "/LOGO%20DESIGNNCODE/Logo_Primary_Logo%201.png",
  "/LOGO%20DESIGNNCODE/Red_w_transparent_bg_1-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/WhatsApp-Image-2022-08-04-at-1.16.15-AM-1-4-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/WhatsApp_Image_2025-09-30_at_10.44.53_c9d9cf5d-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/cropped-Black_and_White_Simple_Business_QR_Code_Square_Sticker__1_-removebg-preview-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/Logo_Primary_Logo%201.png",
  "/LOGO%20DESIGNNCODE/Red_w_transparent_bg_1-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/WhatsApp-Image-2022-08-04-at-1.16.15-AM-1-4-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/WhatsApp_Image_2025-09-30_at_10.44.53_c9d9cf5d-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/cropped-Black_and_White_Simple_Business_QR_Code_Square_Sticker__1_-removebg-preview-removebg-preview%201.png",
];

const logoRow3 = [
  "/LOGO%20DESIGNNCODE/foire_logo_1_-01-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/image_url__2Ftrans-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/logo-01_400x200-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/mama_jama_logo_2__page-0001-removebg-preview%20(1)%201.png",
  "/LOGO%20DESIGNNCODE/transparent-D0veniAb__1_-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/foire_logo_1_-01-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/image_url__2Ftrans-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/logo-01_400x200-removebg-preview%201.png",
  "/LOGO%20DESIGNNCODE/mama_jama_logo_2__page-0001-removebg-preview%20(1)%201.png",
  "/LOGO%20DESIGNNCODE/transparent-D0veniAb__1_-removebg-preview%201.png",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+1",
    phoneNumber: "",
    email: "",
    service: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isCcOpen, setIsCcOpen] = useState(false);
  const [ccSearch, setCcSearch] = useState("");

  const selectedCcObj =
    COUNTRY_CODES.find((c) => c.dialCode === formData.countryCode) || COUNTRY_CODES[0];

  const filteredCc = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(ccSearch.toLowerCase()) ||
      c.code.toLowerCase().includes(ccSearch.toLowerCase()) ||
      c.dialCode.includes(ccSearch)
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        countryCode: "+1",
        phoneNumber: "",
        email: "",
        service: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="relative flex flex-col flex-1 min-h-screen pt-24 pb-12 bg-[#FFFCF5]">
      {/* ── Main Contact Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & 3 Infinite Sliding Rows */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-4">
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.12] mb-6">
              Grow your business <br />
              <span className="text-zinc-900 font-medium">with Designncode</span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-500 text-base sm:text-md leading-relaxed max-w-xl mb-12">
              Contact our team to learn how Designncode can help you build stronger connections, modernise tech, and drive sales.
            </p>

            {/* 3 Infinite Carousel Rows */}
            <div className="flex flex-col gap-8 w-full max-w-full overflow-hidden marquee-container py-2 select-none">
              
              {/* Row 1: Right to Left */}
              <div className="relative flex w-full overflow-hidden">
                <div className="flex gap-12 items-center shrink-0 animate-marquee pr-12 whitespace-nowrap">
                  {logoRow1.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Client Logo ${i + 1}`}
                      width={180}
                      height={54}
                      className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[185px] object-contain opacity-60 hover:opacity-95 transition-opacity duration-300"
                    />
                  ))}
                </div>
                <div className="flex gap-12 items-center shrink-0 animate-marquee pr-12 whitespace-nowrap" aria-hidden="true">
                  {logoRow1.map((src, i) => (
                    <Image
                      key={`dup-${i}`}
                      src={src}
                      alt=""
                      width={180}
                      height={54}
                      className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[185px] object-contain opacity-60 hover:opacity-95 transition-opacity duration-300"
                    />
                  ))}
                </div>
              </div>

              {/* Row 2: Left to Right */}
              <div className="relative flex w-full overflow-hidden">
                <div className="flex gap-12 items-center shrink-0 animate-marquee-reverse pr-12 whitespace-nowrap">
                  {logoRow2.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Client Logo ${i + 1}`}
                      width={180}
                      height={54}
                      className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[185px] object-contain opacity-60 hover:opacity-95 transition-opacity duration-300"
                    />
                  ))}
                </div>
                <div className="flex gap-12 items-center shrink-0 animate-marquee-reverse pr-12 whitespace-nowrap" aria-hidden="true">
                  {logoRow2.map((src, i) => (
                    <Image
                      key={`dup-${i}`}
                      src={src}
                      alt=""
                      width={180}
                      height={54}
                      className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[185px] object-contain opacity-60 hover:opacity-95 transition-opacity duration-300"
                    />
                  ))}
                </div>
              </div>

              {/* Row 3: Right to Left */}
              <div className="relative flex w-full overflow-hidden">
                <div className="flex gap-12 items-center shrink-0 animate-marquee pr-12 whitespace-nowrap">
                  {logoRow3.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Client Logo ${i + 1}`}
                      width={180}
                      height={54}
                      className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[185px] object-contain opacity-60 hover:opacity-95 transition-opacity duration-300"
                    />
                  ))}
                </div>
                <div className="flex gap-12 items-center shrink-0 animate-marquee pr-12 whitespace-nowrap" aria-hidden="true">
                  {logoRow3.map((src, i) => (
                    <Image
                      key={`dup-${i}`}
                      src={src}
                      alt=""
                      width={180}
                      height={54}
                      className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[185px] object-contain opacity-60 hover:opacity-95 transition-opacity duration-300"
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form Card (Matching Image 1:1) */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#F7F6F3] rounded-[28px] p-6 sm:p-8 md:p-10 shadow-xs border border-zinc-100/60">
              
              {formSubmitted ? (
                <div className="py-16 flex flex-col items-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-xs">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Thank you!</h3>
                  <p className="text-zinc-500 text-sm mt-2 max-w-xs leading-relaxed">
                    Your message has been sent successfully. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Field 1: Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-600 text-left">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all border border-zinc-100 shadow-2xs"
                    />
                  </div>

                  {/* Field 2: Phone number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-600 text-left">
                      Phone number
                    </label>
                    <div className="flex items-center gap-3 relative">
                      
                      {/* Country Code Trigger Button */}
                      <div className="relative shrink-0">
                        <button
                          type="button"
                          onClick={() => setIsCcOpen(!isCcOpen)}
                          className="flex items-center gap-2 px-4 py-3.5 bg-white rounded-2xl text-sm text-zinc-700 font-medium border border-zinc-100 shadow-2xs hover:bg-zinc-50 transition-all cursor-pointer min-w-[110px] justify-between"
                        >
                          <span>{selectedCcObj.flag} {selectedCcObj.dialCode}</span>
                          <svg className={`w-4 h-4 text-zinc-400 transition-transform ${isCcOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown Menu - Opens BELOW the button */}
                        {isCcOpen && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setIsCcOpen(false)} />
                            <div className="absolute left-0 top-full mt-2 w-72 max-h-64 bg-white border border-zinc-200 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col animate-fade-in">
                              <div className="p-2 border-b border-zinc-100 bg-zinc-50">
                                <input
                                  type="text"
                                  placeholder="Search country or code..."
                                  value={ccSearch}
                                  onChange={(e) => setCcSearch(e.target.value)}
                                  className="w-full px-3 py-1.5 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-800 focus:outline-none"
                                />
                              </div>
                              <div className="overflow-y-auto max-h-48 py-1 divide-y divide-zinc-50">
                                {filteredCc.map((c, idx) => (
                                  <button
                                    key={`${c.code}-${c.dialCode}-${idx}`}
                                    type="button"
                                    onClick={() => {
                                      setFormData((prev) => ({ ...prev, countryCode: c.dialCode }));
                                      setIsCcOpen(false);
                                      setCcSearch("");
                                    }}
                                    className="w-full flex items-center justify-between px-3 py-2 text-xs text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-left"
                                  >
                                    <span className="flex items-center gap-2 font-medium">
                                      <span>{c.flag}</span>
                                      <span>{c.name}</span>
                                    </span>
                                    <span className="font-mono text-zinc-400 font-semibold">{c.dialCode}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all border border-zinc-100 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Field 3: Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-600 text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all border border-zinc-100 shadow-2xs"
                    />
                  </div>

                  {/* Field 4: Service */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-600 text-left">
                      Service
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all border border-zinc-100 shadow-2xs cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="ui_ux">UI/UX Design</option>
                      <option value="web_dev">Web Development</option>
                      <option value="marketing">Performance Marketing</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="startup">Startup</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>
                  </div>

                  {/* Field 5: Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-600 text-left">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message goes here..."
                      className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all resize-none border border-zinc-100 shadow-2xs"
                    />
                  </div>

                  {/* Field 6: Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#facc15] hover:bg-[#facc15] text-white font-bold rounded-full text-base transition-colors duration-200 shadow-md cursor-pointer mt-2"
                  >
                    Submit
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-zinc-100">
        <TestimonialsSection />
      </section>

      <FAQ />
      {/* Footer component */}
      <Footer />
    </main>
  );
}

const testimonials = [
  {
    category: "Web Development",
    name: "Kelsey Oliver",
    role: "Marketing Manager, WPEngine",
    avatar: "/ankita.png",
    logo: "/Client_Logo/Clip path group.svg",
    quote: "Designncode has done so much work with Headless platforms, and we knew the Designncode team was incredibly well-versed in that space. They were one of the first to do it, and they've done it exceptionally well.",
  },
  {
    category: "UI/UX Design",
    name: "Alex Sterling",
    role: "Product Lead, Amplifidor",
    avatar: "/bhavya.png",
    logo: "/Client_Logo/Group 14.svg",
    quote: "The design system and atomic components delivered by Designncode transformed our user engagement metrics. Our team was able to ship product updates 3x faster.",
  },
  {
    category: "Data & Analytics",
    name: "Elena Rostova",
    role: "Head of Growth, DataFlex",
    avatar: "/zaib.png",
    logo: "/Client_Logo/Vector.svg",
    quote: "Working with Designncode gave us real-time insights into our user funnels. Their technical precision and speed to execution are unmatched in the industry.",
  },
  {
    category: "Enterprise",
    name: "Marcus Vance",
    role: "VP of Engineering, Bank Al Etihad",
    avatar: "/charlie.png",
    logo: "/Client_Logo/Clip path group-2.svg",
    quote: "Decoupling our legacy monolith with Designncode's composable architecture guaranteed 99.99% uptime during peak holiday traffic surges without single point of failure.",
  },
  {
    category: "E-Commerce",
    name: "Sarah Jenkins",
    role: "Director of Digital, RetailPro",
    avatar: "/dewey.png",
    logo: "/Client_Logo/Clip path group-1.svg",
    quote: "Our headless storefront achieved sub-second mobile page loads and boosted checkout conversion rates by 34% within the first month of launch.",
  },
  {
    category: "Start-Up",
    name: "David Chen",
    role: "Co-Founder & CTO, NextGen AI",
    avatar: "/tayo.png",
    logo: "/Client_Logo/Clip path group-3.svg",
    quote: "Designncode turned our napkin sketch into a production-ready MVP in under 6 weeks. They passed our VC technical due diligence with flying colors.",
  },
];

function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const categories = [
    "Web Development",
    "UI/UX Design",
    "Data & Analytics",
    "Enterprise",
    "E-Commerce",
    "Start-Up",
  ];

  const current = testimonials[currentIdx];

  const handleCategorySelect = (category: string) => {
    const foundIdx = testimonials.findIndex((t) => t.category === category);
    if (foundIdx !== -1) {
      setCurrentIdx(foundIdx);
    }
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col items-center text-center w-full">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-12">
        What People Say
      </h2>

      

      {/* Testimonial Card Box */}
      <div className="w-full max-w-4xl bg-white border border-zinc-100 rounded-[32px] p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between text-left min-h-[320px]">
        
        {/* Background Large Quote Mark */}
        <div className="absolute right-8 bottom-8 text-zinc-100 select-none pointer-events-none text-9xl font-serif leading-none opacity-60">
          ”
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Avatar & Author Info */}
          <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg sm:text-md font-bold text-zinc-900">
                {current.name}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                {current.role}
              </p>
            </div>
          </div>

          {/* Quote Text */}
          <div className="md:col-span-8 flex items-center">
            <blockquote className="text-md sm:text-l md:text-xl text-zinc-800 font-normal leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

        </div>

        {/* Bottom Bar: Arrows & Company Logo */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 mt-8 border-t border-zinc-100 relative z-10">
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
            <span className="text-xs sm:text-sm font-medium text-zinc-400 ml-2">
              {currentIdx + 1} of {testimonials.length}
            </span>
          </div>

          {/* Company Logo */}
          <div className="flex items-center">
            <Image
              src={current.logo}
              alt="Company Logo"
              width={110}
              height={32}
              className="h-7 w-auto object-contain opacity-70"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

