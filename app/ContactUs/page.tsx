"use client";

import { useState } from "react";
import Image from "next/image";
import SpecularButton from "@/components/SpecularButton";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";
import Reviews from "../Components/Reviews";
import { COUNTRY_CODES } from "../../data/CC";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "leads"), {
        name: formData.name,
        phone: `${formData.countryCode} ${formData.phoneNumber}`,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: "new"
      });

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
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <main className="relative flex flex-col flex-1 min-h-screen pt-24 bg-transparent">
      {/* ── Main Contact Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & 3 Infinite Sliding Rows */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-4">
            
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.12] mb-6">
              LET&apos;S BUILD SOMETHING <br />
              <span className="text-zinc-900 font-medium">GREAT TOGETHER</span>
            </h1>

            {/* Subtitle */}
            <div className="text-zinc-600 text-base sm:text-md leading-relaxed max-w-xl mb-8 space-y-3">
              <p className="font-semibold text-zinc-800">
                Have a website, digital product or e-commerce idea in mind?
              </p>
              <p>
                Talk to the DesignNCode team about UI/UX design, web development, Shopify development, SEO or your next digital project. Tell us what you are building and we will help you find the right way forward.
              </p>
              <p className="text-zinc-900 font-semibold pt-1">
                Call us at:{" "}
                <a href="tel:+919220721921" className="hover:text-black transition-colors underline">
                  +91 92207 21921
                </a>
              </p>
            </div>

            {/* Client Logos Header */}
            <div className="mb-4 mt-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-1.5">
                TRUSTED BY BRANDS BUILDING WHAT&apos;S NEXT
              </h2>
              <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                We work with ambitious businesses, startups and growing brands to create better digital experiences, websites and products.
              </p>
            </div>

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

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#F7F6F3] rounded-[28px] p-6 sm:p-8 md:p-10 shadow-xs border border-zinc-100/60">
              
              {/* Form Title & Description */}
              <div className="mb-6 text-left">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 uppercase mb-2">
                  TELL US ABOUT YOUR PROJECT
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  Have a project in mind? Share a few details with us and our team will get back to you with the next steps.
                </p>
              </div>

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
                    <label className="text-sm font-medium text-zinc-700 text-left">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all border border-zinc-100 shadow-2xs"
                    />
                  </div>

                  {/* Field 2: Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-700 text-left">
                      Phone Number
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
                        className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all border border-zinc-100 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Field 3: Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-700 text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all border border-zinc-100 shadow-2xs"
                    />
                  </div>

                  {/* Field 4: Service */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-700 text-left">
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
                      <option value="shopify_dev">Shopify Development</option>
                      <option value="perf_marketing">Performance Marketing</option>
                      <option value="seo">SEO & Organic Growth</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="startup">Startup</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>
                  </div>

                  {/* Field 5: Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-700 text-left">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us a little about your project, goals or requirements"
                      className="w-full px-5 py-3.5 bg-white rounded-2xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all resize-none border border-zinc-100 shadow-2xs"
                    />
                  </div>

                  {/* Field 6: Submit Button */}
                  <SpecularButton
                    type="submit"
                    className="w-full py-3.5 mt-2 text-base font-bold tracking-wide"
                    baseColor="#18181b"
                    textColor="#ffffff"
                    lineColor="#ffffff"
                    radius={9999}
                    intensity={1.2}
                  >
                    Send Project Inquiry
                  </SpecularButton>

                  {/* Supporting Text */}
                  <p className="text-xs text-zinc-500 text-center mt-1 leading-relaxed">
                    Your project details help us understand your requirements before we start the conversation.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ── Reviews Section ── */}
      <Reviews />

      {/* ── FAQ Section ── */}
      <FAQ />

      {/* Footer component */}
      <Footer />
    </main>
  );
}

