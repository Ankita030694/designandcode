"use client";

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faArrowLeft, faRotateLeft, faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../lib/firebase';
import { marked } from 'marked';
import TiptapEditor from './TiptapEditor';

interface Props {
  onClose?: () => void;
}

export default function BlogGenerationUI({ onClose }: Props) {
  const [blogContext, setBlogContext] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [newBlog, setNewBlog] = useState({
    title: '',
    subtitle: '',
    slug: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    author: 'Admin Team',
    metaTitle: '',
    metaDescription: '',
    faqs: []
  });

  // 1. Handle Text Content Generation
  const handleGenerate = async () => {
    if (!blogContext) {
      alert('Please enter the blog context');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ primaryKeyword: blogContext }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to generate';
        try {
          const errData = await response.json();
          errorMsg = errData.error || errorMsg;
        } catch(e) {}
        throw new Error(errorMsg);
      }

      // The backend streams JSON back
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          result += decoder.decode(value, { stream: true });
        }
      }

      const generatedData = JSON.parse(result);

      // Auto-fill the form with the AI's response
      let finalDescriptionHtml = newBlog.description;
      if (generatedData.description) {
        // Backend now generates HTML directly, no need to parse Markdown
        finalDescriptionHtml = generatedData.description;
      }

      setNewBlog((prev) => ({
        ...prev,
        title: generatedData.title || prev.title,
        subtitle: generatedData.subtitle || prev.subtitle,
        description: finalDescriptionHtml,
        metaTitle: generatedData.metaTitle || prev.metaTitle,
        metaDescription: generatedData.metaDescription || prev.metaDescription,
        slug: generatedData.slug || prev.slug,
        faqs: generatedData.faqs || prev.faqs,
      }));

      // Pre-fill the image prompt suggestion
      if (generatedData.suggestedImagePrompt) {
        setImagePrompt(generatedData.suggestedImagePrompt);
      }

      alert('Blog generated successfully!');
    } catch (error) {
      alert(`Failed to generate blog: ${error}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // 2. Handle Image Generation
  const handleGenerateImage = async () => {
    if (!imagePrompt) {
      alert('Please enter an image prompt');
      return;
    }

    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imagePrompt }),
      });

      if (!response.ok) throw new Error('Failed to generate image');

      const data = await response.json();
      let finalUrl = data.url;

      // If the backend returned a base64 data URI, upload it to Firebase from the client
      if (finalUrl && finalUrl.startsWith('data:image')) {
        try {
          const base64Data = finalUrl.split(',')[1];
          const fileName = `generated-covers/cover-${Date.now()}-${Math.floor(Math.random() * 1000)}.png`;
          const storageRef = ref(storage, fileName);
          
          await uploadString(storageRef, base64Data, 'base64', {
            contentType: 'image/png',
          });
          
          finalUrl = await getDownloadURL(storageRef);
        } catch (uploadError) {
          console.error("Client Firebase upload failed:", uploadError);
          alert("Firebase upload failed, falling back to base64.");
        }
      }

      // Display the generated image and save the URL
      setNewBlog((prev) => ({ ...prev, image: finalUrl }));
      setImagePreview(finalUrl);
      
    } catch (error) {
      alert('Image generation failed.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // 3. Handle Publishing to Firestore
  const handlePublish = async () => {
    if (!newBlog.title || !newBlog.slug || !newBlog.description) {
      alert("Title, Slug, and Description are required to publish!");
      return;
    }

    try {
      setIsPublishing(true);

      // We explicitly request a URL from the API now, so no Base64 strings should reach here.
      // If one magically does, we fallback to Pollinations to avoid crashing Firestore.
      let finalImageUrl = newBlog.image;
      if (finalImageUrl && finalImageUrl.startsWith("data:image")) {
        const encodedPrompt = encodeURIComponent(newBlog.title || "web design");
        finalImageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
        setNewBlog((prev) => ({ ...prev, image: finalImageUrl }));
      }

      await addDoc(collection(db, "blogs"), {
        ...newBlog,
        image: finalImageUrl,
        createdAt: new Date(),
        published: true
      });
      alert("Blog published successfully to the database!");
    } catch (error: any) {
      console.error("Error publishing blog:", error);
      alert(`Failed to publish blog. Error: ${error.message || error}`);
    } finally {
      setIsPublishing(false);
    }
  };

  // Form input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm flex flex-col">
      
      {/* ─── HEADER SECTION ─── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 pb-6 border-b border-zinc-100 gap-6">
        <div className="flex items-center gap-4">
          {onClose && (
            <button 
              onClick={onClose} 
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 transition-colors flex-shrink-0"
              aria-label="Back"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Publish a New Blog Post</h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">Set up titles, subtitle blocks, canonical slug, Rich Tiptap body content, FAQs, and reviews.</p>
          </div>
        </div>
      </div>

      {/* ─── AI ARTICLE WRITER ─── */}
      <div className="mb-10 rounded-2xl border border-indigo-200 bg-indigo-50/40 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-600 flex items-center justify-center shadow-sm">
              <FontAwesomeIcon icon={faWandSparkles} className="w-4 h-4" />
            </div>
            <h3 className="text-[13px] font-bold text-slate-700 tracking-wider">AI ARTICLE WRITER</h3>
          </div>
          <p className="text-[13px] text-slate-500 mb-4 font-medium ml-11">Provide context, topic, or a writeup. AI will generate a complete blog post including FAQs and reviews.</p>
          <textarea
            value={blogContext}
            onChange={(e) => setBlogContext(e.target.value)}
            placeholder="Provide detailed context, a writeup, or topic here to generate a comprehensive blog article..."
            rows={4}
            className="w-full p-4 border border-zinc-200/80 rounded-2xl text-sm focus:outline-none focus:border-red-300 shadow-sm bg-white resize-y text-slate-700 placeholder-slate-400"
            disabled={isGenerating}
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !blogContext}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-sm transition-colors disabled:opacity-50 flex items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faWandSparkles} />
              {isGenerating ? "Generating..." : "Generate Blog with AI"}
            </button>
          </div>
        </div>
      </div>

      {/* ─── FORM FIELDS (2 COLUMN GRID) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-10">
        
        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Blog Title *</label>
          <input 
            type="text" 
            name="title" 
            value={newBlog.title} 
            onChange={handleInputChange} 
            placeholder="e.g. Defeating Bank Harassment & Debt Settlement" 
            className="w-full p-4 border border-zinc-200 rounded-2xl text-[15px] font-semibold text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-slate-400" 
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Subtitle Block</label>
          <input 
            type="text" 
            name="subtitle" 
            value={newBlog.subtitle} 
            onChange={handleInputChange} 
            placeholder="e.g. A comprehensive guide on debtor legal rights and RBI OTS pr" 
            className="w-full p-4 border border-zinc-200 rounded-2xl text-[15px] text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-slate-400" 
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
            URL Slug * <span className="text-zinc-400 font-normal normal-case italic ml-1">(only letters, numbers, hyphens)</span>
          </label>
          <input 
            type="text" 
            name="slug" 
            value={newBlog.slug} 
            onChange={handleInputChange} 
            placeholder="e.g. defeating-bank-harassment" 
            className="w-full p-4 border border-zinc-200 rounded-2xl text-[15px] font-mono font-medium text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-slate-400" 
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Publication Date *</label>
          <input 
            type="date" 
            name="date" 
            value={newBlog.date} 
            onChange={handleInputChange} 
            className="w-full p-4 border border-zinc-200 rounded-2xl text-[15px] font-semibold text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all" 
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Featured Author Profile</label>
          <select 
            name="author" 
            value={newBlog.author} 
            onChange={handleInputChange} 
            className="w-full p-4 border border-zinc-200 rounded-2xl text-[15px] font-semibold text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 appearance-none bg-white transition-all cursor-pointer"
          >
            <option value="Admin Team">Admin Team</option>
            <option value="Rahul Verma">Rahul Verma</option>
          </select>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Cover Image URL *</label>
          <div className="relative">
            <input 
              type="text" 
              name="image" 
              value={newBlog.image} 
              onChange={handleInputChange} 
              placeholder="e.g. /api/blog/image/... or select local file" 
              className="w-full p-4 pr-32 border border-zinc-200 rounded-2xl text-[15px] text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-slate-400" 
            />
            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#eff2f6] hover:bg-[#e2e6eb] text-slate-700 px-5 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer">
              <FontAwesomeIcon icon={faUpload} /> Upload
            </button>
          </div>
        </div>

      </div>

      {/* ─── AI IMAGE GENERATOR ─── */}
      <div className="mb-10 rounded-2xl border border-zinc-200 overflow-hidden bg-white">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">AI Image DALL-E Generator</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
             <input 
               type="text" 
               value={imagePrompt} 
               onChange={(e) => setImagePrompt(e.target.value)} 
               placeholder="Enter an image prompt (e.g. 'A sleek modern office')..." 
               className="flex-1 p-4 border border-zinc-200 rounded-2xl text-[15px] bg-slate-50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-slate-400" 
               disabled={isGeneratingImage} 
             />
             <button 
               onClick={handleGenerateImage} 
               disabled={isGeneratingImage || !imagePrompt} 
               className="px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-2xl text-sm font-bold transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer shadow-sm"
             >
               {isGeneratingImage ? "Generating..." : "Generate Image"}
             </button>
          </div>
          {imagePreview && (
            <div className="mt-8 flex justify-center border-t border-zinc-100 pt-8">
              <img src={imagePreview} className="w-full max-w-lg h-64 object-cover rounded-2xl shadow-sm border border-zinc-200" alt="Generated preview" />
            </div>
          )}
        </div>
      </div>

      {/* ─── BLOG CONTENT ─── */}
      <div className="flex flex-col gap-2.5">
        <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Detailed Blog Content Body</label>
        <TiptapEditor 
          content={newBlog.description} 
          onChange={(html) => setNewBlog(prev => ({ ...prev, description: html }))} 
        />
      </div>

      {/* ─── FOOTER ACTIONS ─── */}
      <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-col-reverse sm:flex-row justify-end gap-3 items-center">
        <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-zinc-200 text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
          <FontAwesomeIcon icon={faRotateLeft} className="text-slate-400" /> Restore Draft
        </button>
        <button 
          onClick={handlePublish} 
          disabled={isPublishing} 
          className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold shadow-sm disabled:opacity-50 transition-colors flex items-center justify-center min-w-[180px]"
        >
          {isPublishing ? "Publishing..." : "Publish Blog"}
        </button>
      </div>

    </div>
  );
}
