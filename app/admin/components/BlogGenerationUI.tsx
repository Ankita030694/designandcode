"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faArrowLeft, faRotateLeft, faWandSparkles, faImage, faChartLine, faCheck } from '@fortawesome/free-solid-svg-icons';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../lib/firebase';
import TiptapEditor from './TiptapEditor';

interface Props {
  onClose?: () => void;
}

export default function BlogGenerationUI({ onClose }: Props) {
  const [blogContext, setBlogContext] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Web Development & Architecture');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  
  // Cover Image
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // 3D Infographic Image
  const [infographicPrompt, setInfographicPrompt] = useState('');
  const [isGeneratingInfographic, setIsGeneratingInfographic] = useState(false);
  const [infographicPreview, setInfographicPreview] = useState<string | null>(null);

  const [newBlog, setNewBlog] = useState({
    title: '',
    subtitle: '',
    slug: '',
    category: 'Web Development & Architecture',
    exactTopic: '',
    techFramework: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    infographic: '',
    author: 'DesignNCode Architecture Team',
    metaTitle: '',
    metaDescription: '',
    keyTakeaways: [] as string[],
    popularSearches: [] as string[],
    faqs: [] as { question: string; answer: string }[],
    reviews: [] as any[]
  });

  // 1. Handle Full AI Blog Generation Pipeline (<8s via Parallel API)
  const handleGenerate = async () => {
    if (!blogContext) {
      alert('Please enter the blog topic brief or primary keyword');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          primaryKeyword: blogContext,
          category: selectedCategory 
        }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to generate';
        try {
          const errData = await response.json();
          errorMsg = errData.error || errorMsg;
        } catch(e) {}
        throw new Error(errorMsg);
      }

      const generatedData = await response.json();

      setNewBlog((prev) => ({
        ...prev,
        title: generatedData.title || prev.title,
        subtitle: generatedData.subtitle || prev.subtitle,
        category: generatedData.category || prev.category,
        exactTopic: generatedData.exactTopic || prev.exactTopic,
        techFramework: generatedData.techFramework || prev.techFramework,
        description: generatedData.description || prev.description,
        metaTitle: generatedData.metaTitle || prev.metaTitle,
        metaDescription: generatedData.metaDescription || prev.metaDescription,
        slug: generatedData.slug || prev.slug,
        keyTakeaways: generatedData.keyTakeaways || [],
        popularSearches: generatedData.popularSearches || [],
        faqs: generatedData.faqs || [],
        reviews: generatedData.reviews || [],
      }));

      // Pre-fill prompts
      if (generatedData.suggestedImagePrompt) {
        setImagePrompt(generatedData.suggestedImagePrompt);
      }
      if (generatedData.infographicPrompt) {
        setInfographicPrompt(generatedData.infographicPrompt);
      }

      alert('Flagship blog blueprint and deep sections generated successfully in parallel!');
    } catch (error) {
      alert(`Failed to generate blog: ${error}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Live Telemetry & Log Console
  const [imageLogs, setImageLogs] = useState<string[]>([
    "[System Ready] Standby for AI Image / Infographic generation...",
  ]);
  const [modelTelemetry, setModelTelemetry] = useState<{
    modelUsed?: string;
    isFallback?: boolean;
    diagnostics?: any;
    lastGeneratedFor?: string;
  } | null>(null);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  const appendLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setImageLogs((prev) => [...prev, `[${time}] ${msg}`]);
  };

  // 2. Handle Cover Image Generation
  const handleGenerateCoverImage = async () => {
    if (!imagePrompt) {
      alert('Please enter a cover image prompt');
      return;
    }

    try {
      setIsGeneratingImage(true);
      appendLog(`[Cover Generator] Initiating request with model "gpt-image-2"...`);
      
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imagePrompt, isInfographic: false, model: "gpt-image-2" }),
      });

      const data = await response.json();
      
      if (data.logs && Array.isArray(data.logs)) {
        setImageLogs((prev) => [...prev, ...data.logs]);
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate image');
      }

      let finalUrl = data.url || data.imageUrl;
      setNewBlog((prev) => ({ ...prev, image: finalUrl }));
      setImagePreview(finalUrl);

      setModelTelemetry({
        modelUsed: data.modelUsed || "gpt-image-2",
        isFallback: data.isFallback,
        diagnostics: data.diagnostics,
        lastGeneratedFor: "Hero Cover Banner",
      });

      appendLog(`[Cover Generator] Image generation completed via "${data.modelUsed}".`);
      
    } catch (error: any) {
      appendLog(`[Cover Generator Error] ${error.message || error}`);
      alert(`Cover image generation error: ${error.message || error}`);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // 3. Handle 3D Isometric Infographic Generation
  const handleGenerateInfographic = async () => {
    if (!infographicPrompt) {
      alert('Please enter an infographic visual prompt');
      return;
    }

    try {
      setIsGeneratingInfographic(true);
      appendLog(`[Infographic Generator] Initiating 3D visual request with model "gpt-image-2"...`);

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: infographicPrompt, isInfographic: true, model: "gpt-image-2" }),
      });

      const data = await response.json();

      if (data.logs && Array.isArray(data.logs)) {
        setImageLogs((prev) => [...prev, ...data.logs]);
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to generate infographic');
      }

      let finalUrl = data.url || data.imageUrl;
      setNewBlog((prev) => ({ ...prev, infographic: finalUrl }));
      setInfographicPreview(finalUrl);

      setModelTelemetry({
        modelUsed: data.modelUsed || "gpt-image-2",
        isFallback: data.isFallback,
        diagnostics: data.diagnostics,
        lastGeneratedFor: "3D Isometric Infographic",
      });

      appendLog(`[Infographic Generator] Infographic generation completed via "${data.modelUsed}".`);
      
    } catch (error: any) {
      appendLog(`[Infographic Generator Error] ${error.message || error}`);
      alert(`Infographic generation error: ${error.message || error}`);
    } finally {
      setIsGeneratingInfographic(false);
    }
  };

  // 4. Handle Publishing to Firestore
  const handlePublish = async () => {
    if (!newBlog.title || !newBlog.slug || !newBlog.description) {
      alert("Title, Slug, and Description are required to publish!");
      return;
    }

    try {
      setIsPublishing(true);

      let finalImageUrl = newBlog.image || "/Web.svg";
      let finalInfographicUrl = newBlog.infographic || "";

      await addDoc(collection(db, "blogs"), {
        ...newBlog,
        image: finalImageUrl,
        infographic: finalInfographicUrl,
        createdAt: new Date().toISOString(),
        published: true
      });
      
      alert("Blog article published successfully to Firebase Firestore!");
      if (onClose) onClose();
    } catch (error: any) {
      console.error("Error publishing blog:", error);
      alert(`Failed to publish blog. Error: ${error.message || error}`);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col">
      
      {/* ─── HEADER SECTION ─── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 pb-6 border-b border-slate-100 gap-6">
        <div className="flex items-center gap-4">
          {onClose && (
            <button 
              onClick={onClose} 
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors flex-shrink-0 cursor-pointer"
              aria-label="Back"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Create Flagship Blog Post</h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">Parallel AI pipeline with Google Rich Schemas, Key Takeaways, Infographics, and Reviews.</p>
          </div>
        </div>
      </div>

      {/* ─── AI ARTICLE WRITER CARD ─── */}
      <div className="mb-10 rounded-2xl border border-indigo-200 bg-indigo-50/40 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-600 flex items-center justify-center shadow-xs">
              <FontAwesomeIcon icon={faWandSparkles} className="w-4 h-4" />
            </div>
            <h3 className="text-[13px] font-bold text-slate-800 tracking-wider uppercase">Next-Gen Parallel AI Generator</h3>
          </div>
          <p className="text-[13px] text-slate-500 mb-4 font-medium ml-11">
            Generates a ~2,000 word deep dive with comparison tables, 8–10 FAQs, 5 client reviews, 3D infographic prompt, and rich SEO schemas in under 8 seconds.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <textarea
                value={blogContext}
                onChange={(e) => setBlogContext(e.target.value)}
                placeholder="Enter topic brief or primary keyword (e.g. 'Next.js 16 Server Actions vs API Routes Architecture')..."
                rows={3}
                className="w-full p-4 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-indigo-400 shadow-xs bg-white resize-y text-slate-800 placeholder-slate-400 font-medium"
                disabled={isGenerating}
              />
            </div>
            <div>
              <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block mb-1">Target Taxonomy Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3.5 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-indigo-400"
              >
                <option value="Web Development & Architecture">Web Development & Architecture</option>
                <option value="UI/UX Design & Frontend Engineering">UI/UX Design & Frontend Engineering</option>
                <option value="Tech Comparisons & ROI Frameworks">Tech Comparisons & ROI Frameworks</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !blogContext}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm transition-colors disabled:opacity-50 flex items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faWandSparkles} />
              {isGenerating ? "Running Parallel Generation..." : "Generate Blog with AI"}
            </button>
          </div>
        </div>
      </div>

      {/* ─── KEY TAKEAWAYS PREVIEW ─── */}
      {newBlog.keyTakeaways.length > 0 && (
        <div className="mb-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />
            Generated Key Architectural Takeaways (5 Points)
          </h4>
          <div className="space-y-2">
            {newBlog.keyTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">✓</span>
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const updated = [...newBlog.keyTakeaways];
                    updated[idx] = e.target.value;
                    setNewBlog(prev => ({ ...prev, keyTakeaways: updated }));
                  }}
                  className="w-full bg-transparent focus:outline-none text-slate-800 font-medium"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── FORM FIELDS (2 COLUMN GRID) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
        
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">H1 Article Title *</label>
          <input 
            type="text" 
            name="title" 
            value={newBlog.title} 
            onChange={handleInputChange} 
            placeholder="e.g. Next.js 16 Architecture: The Complete Production Guide" 
            className="w-full p-3.5 border border-slate-200 rounded-2xl text-[15px] font-semibold text-slate-800 focus:outline-none focus:border-indigo-400" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Subtitle Block</label>
          <input 
            type="text" 
            name="subtitle" 
            value={newBlog.subtitle} 
            onChange={handleInputChange} 
            placeholder="e.g. How modular React Server Components scale enterprise web apps" 
            className="w-full p-3.5 border border-slate-200 rounded-2xl text-[15px] text-slate-800 focus:outline-none focus:border-indigo-400" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
            Canonical URL Slug *
          </label>
          <input 
            type="text" 
            name="slug" 
            value={newBlog.slug} 
            onChange={handleInputChange} 
            placeholder="e.g. nextjs-16-architecture-guide" 
            className="w-full p-3.5 border border-slate-200 rounded-2xl text-[15px] font-mono font-medium text-slate-800 focus:outline-none focus:border-indigo-400" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Publication Category *</label>
          <select 
            name="category" 
            value={newBlog.category} 
            onChange={handleInputChange} 
            className="w-full p-3.5 border border-slate-200 rounded-2xl text-[15px] font-semibold text-slate-800 focus:outline-none focus:border-indigo-400 bg-white" 
          >
            <option value="Web Development & Architecture">Web Development & Architecture</option>
            <option value="UI/UX Design & Frontend Engineering">UI/UX Design & Frontend Engineering</option>
            <option value="Tech Comparisons & ROI Frameworks">Tech Comparisons & ROI Frameworks</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Publication Date *</label>
          <input 
            type="date" 
            name="date" 
            value={newBlog.date} 
            onChange={handleInputChange} 
            className="w-full p-3.5 border border-slate-200 rounded-2xl text-[15px] font-semibold text-slate-800 focus:outline-none focus:border-indigo-400" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Featured Author Profile</label>
          <input 
            type="text" 
            name="author" 
            value={newBlog.author} 
            onChange={handleInputChange} 
            className="w-full p-3.5 border border-slate-200 rounded-2xl text-[15px] font-semibold text-slate-800 focus:outline-none focus:border-indigo-400" 
          />
        </div>

      </div>

      {/* ─── AI VISUAL MEDIA GENERATION SECTION (COVER & 3D INFOGRAPHIC) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* Cover Photo */}
        <div className="rounded-2xl border border-slate-200 p-6 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon icon={faImage} className="text-indigo-600 text-sm" />
              <h3 className="text-xs font-bold text-slate-700 tracking-wider uppercase">Editorial Hero Banner</h3>
            </div>
            <textarea 
              value={imagePrompt} 
              onChange={(e) => setImagePrompt(e.target.value)} 
              placeholder="Cover image prompt..." 
              rows={3}
              className="w-full p-3 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-indigo-400 mb-3"
            />
          </div>
          <div>
            <button 
              onClick={handleGenerateCoverImage} 
              disabled={isGeneratingImage || !imagePrompt} 
              className="w-full py-2.5 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isGeneratingImage ? "Generating Cover..." : "Generate Hero Cover"}
            </button>
            {imagePreview && (
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 h-36 relative">
                <img src={imagePreview} className="w-full h-full object-cover" alt="Cover preview" />
              </div>
            )}
          </div>
        </div>

        {/* 3D Isometric Infographic */}
        <div className="rounded-2xl border border-slate-200 p-6 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon icon={faChartLine} className="text-indigo-600 text-sm" />
              <h3 className="text-xs font-bold text-slate-700 tracking-wider uppercase">3D Isometric Infographic</h3>
            </div>
            <textarea 
              value={infographicPrompt} 
              onChange={(e) => setInfographicPrompt(e.target.value)} 
              placeholder="Infographic flowchart prompt..." 
              rows={3}
              className="w-full p-3 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-indigo-400 mb-3"
            />
          </div>
          <div>
            <button 
              onClick={handleGenerateInfographic} 
              disabled={isGeneratingInfographic || !infographicPrompt} 
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isGeneratingInfographic ? "Generating Infographic..." : "Generate 3D Infographic"}
            </button>
            {infographicPreview && (
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 h-36 relative bg-slate-900">
                <img src={infographicPreview} className="w-full h-full object-contain" alt="Infographic preview" />
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ─── LIVE AI IMAGE GENERATION & TELEMETRY LOG ─── */}
      <div className="mb-10 rounded-2xl bg-slate-950 border border-slate-800 p-6 text-slate-200 shadow-xl overflow-hidden font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isGeneratingImage || isGeneratingInfographic ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`} />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Live AI Image Generation & Model Telemetry
            </h4>
          </div>
          
          <div className="flex items-center gap-2">
            {modelTelemetry && (
              <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${
                modelTelemetry.modelUsed === "gpt-image-2"
                  ? "bg-purple-950/80 text-purple-300 border-purple-800"
                  : modelTelemetry.modelUsed === "dall-e-3"
                  ? "bg-emerald-950/80 text-emerald-300 border-emerald-800"
                  : "bg-amber-950/80 text-amber-300 border-amber-800"
              }`}>
                Model: {modelTelemetry.modelUsed} {modelTelemetry.isFallback ? "(Fallback)" : "(Primary)"}
              </span>
            )}
            <button
              onClick={() => setShowDiagnostics(!showDiagnostics)}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-slate-300 transition-colors cursor-pointer"
            >
              {showDiagnostics ? "Hide Diagnostics" : "Raw Diagnostics"}
            </button>
            <button
              onClick={() => setImageLogs(["[Console Cleared]"])}
              className="px-2.5 py-1 rounded-md bg-slate-850 hover:bg-slate-800 text-[11px] font-bold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Console Output Feed */}
        <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 max-h-48 overflow-y-auto space-y-1.5 scrollbar-thin text-[11px] leading-relaxed">
          {imageLogs.map((log, index) => {
            const isSuccess = log.includes("✓ Success") || log.includes("completed");
            const isError = log.includes("✖") || log.includes("Error") || log.includes("failed");
            const isWarn = log.includes("⚠") || log.includes("Fallback") || log.includes("Attempting");

            return (
              <div 
                key={index} 
                className={`${
                  isSuccess ? "text-emerald-400 font-semibold" : 
                  isError ? "text-rose-400 font-semibold" : 
                  isWarn ? "text-amber-300" : 
                  "text-slate-300"
                }`}
              >
                {log}
              </div>
            );
          })}
          {(isGeneratingImage || isGeneratingInfographic) && (
            <div className="text-amber-400 animate-pulse font-semibold">
              › Processing generation stream across AI neural endpoints...
            </div>
          )}
        </div>

        {/* Expandable Raw Diagnostics JSON */}
        {showDiagnostics && modelTelemetry?.diagnostics && (
          <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-400 overflow-x-auto max-h-48">
            <div className="text-slate-300 font-bold uppercase text-[10px] mb-2 tracking-wider">Raw API Response Diagnostics:</div>
            <pre>{JSON.stringify(modelTelemetry.diagnostics, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* ─── BLOG CONTENT BODY ─── */}
      <div className="flex flex-col gap-2.5 mb-10">
        <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Detailed Blog Content Body (HTML)</label>
        <TiptapEditor 
          content={newBlog.description} 
          onChange={(html) => setNewBlog(prev => ({ ...prev, description: html }))} 
        />
      </div>

      {/* ─── FOOTER ACTIONS ─── */}
      <div className="pt-6 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-end gap-3 items-center">
        <button 
          onClick={handlePublish} 
          disabled={isPublishing} 
          className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[15px] font-bold shadow-md disabled:opacity-50 transition-colors flex items-center justify-center min-w-[200px] cursor-pointer"
        >
          {isPublishing ? "Publishing to Firestore..." : "Publish Flagship Article"}
        </button>
      </div>

    </div>
  );
}
