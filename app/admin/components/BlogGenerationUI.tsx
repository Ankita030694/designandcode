"use client";

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPaperPlane, faMagic } from '@fortawesome/free-solid-svg-icons';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../lib/firebase';

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

  const fileInputRef = useRef<HTMLInputElement>(null);

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
      setNewBlog((prev) => ({
        ...prev,
        title: generatedData.title || prev.title,
        subtitle: generatedData.subtitle || prev.subtitle,
        description: generatedData.description || prev.description,
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

      // Display the generated image and save the URL
      setNewBlog((prev) => ({ ...prev, image: data.url }));
      setImagePreview(data.url);
      
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBlog(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm overflow-hidden flex flex-col xl:flex-row">
      
      {/* ─── LEFT PANEL: THE AI GENERATOR FORM ─── */}
      <div className="w-full xl:w-1/2 p-6 sm:p-10 border-b xl:border-b-0 xl:border-r border-zinc-200/60 bg-zinc-50/30">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
              <FontAwesomeIcon icon={faMagic} className="text-indigo-500 w-5 h-5" />
              AI Blog Generator
            </h2>
            <p className="text-zinc-500 text-sm mt-1.5">
              Instantly generate an SEO-optimized blog with 8-9 headings.
            </p>
          </div>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-sm font-bold text-zinc-500 hover:text-zinc-900 bg-white border border-zinc-200 px-4 py-2 rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              Back to Dashboard
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-blue-600 font-bold animate-pulse">✨</span>
          <div>
            <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">AI Writeup Auto-Generator</h3>
            <p className="text-slate-500 text-xs mt-1">Paste the raw writeup or keyword below. The AI will draft the title, slug, HTML body, and FAQs automatically.</p>
          </div>
        </div>

        <textarea
          value={blogContext}
          onChange={(e) => setBlogContext(e.target.value)}
          placeholder="Enter primary keyword or draft notes here..."
          rows={4}
          className="w-full p-3 bg-white border border-slate-200 focus:border-blue-400 rounded-xl text-sm text-slate-800 focus:outline-none shadow-sm"
          disabled={isGenerating}
        />

        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating || !blogContext}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-sm transition-all disabled:opacity-50 cursor-pointer"
          >
            {isGenerating ? '💫 Generating Content...' : '✨ Generate Blog with AI'}
          </button>
        </div>
      </div>

      {/* ─── RIGHT PANEL: STANDARD FORM FIELDS ─── */}
      <div className="w-full xl:w-1/2 p-6 sm:p-10 flex flex-col bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-bold uppercase text-slate-400">Blog Title</label>
            <input
              type="text"
              name="title"
              value={newBlog.title}
              onChange={handleInputChange}
              className="p-3.5 border border-slate-200 rounded-xl focus:border-blue-500 font-semibold"
            />
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-bold uppercase text-slate-400">URL Slug</label>
            <input
              type="text"
              name="slug"
              value={newBlog.slug}
              onChange={handleInputChange}
              className="p-3.5 border border-slate-200 rounded-xl focus:border-blue-500 font-mono font-semibold text-blue-600"
            />
          </div>

          {/* IMAGE GENERATION/UPLOAD BLOCK */}
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-bold uppercase text-slate-400">Cover Image URL</label>
            
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                name="image"
                value={newBlog.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                className="p-3.5 border border-slate-200 rounded-xl flex-1 bg-slate-50"
              />
              
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => alert("Upload logic not implemented.")}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold cursor-pointer"
                >
                  <FontAwesomeIcon icon={faUpload} className="mr-2" /> Upload
                </button>
                
                <button
                  type="button"
                  onClick={handleGenerateImage}
                  disabled={isGeneratingImage || !imagePrompt}
                  className="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-sm font-bold disabled:opacity-50 cursor-pointer"
                >
                  {isGeneratingImage ? '💫 Generating...' : '✨ Generate AI Image'}
                </button>
              </div>
            </div>

            <div className="mt-2">
              <input
                type="text"
                value={imagePrompt}
                onChange={(e) => setImagePrompt(e.target.value)}
                placeholder="Prompt for AI image generator... (Auto-filled by AI)"
                className="w-full p-2 border border-slate-200 rounded-lg text-sm bg-white"
                disabled={isGeneratingImage}
              />
            </div>
            
            {imagePreview && (
              <div className="mt-4 p-4 bg-slate-50 rounded-2xl flex flex-col items-center">
                <img src={imagePreview} alt="Preview" className="w-full max-w-sm h-40 object-cover rounded-xl shadow-sm" />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="text-xs font-bold uppercase text-slate-400">Blog Content (Markdown)</label>
            <textarea
              name="description"
              value={newBlog.description}
              onChange={handleInputChange}
              rows={15}
              className="p-3.5 border border-slate-200 rounded-xl focus:border-blue-500 font-mono text-sm bg-slate-50"
            />
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={handlePublish}
            disabled={isPublishing}
            className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full font-bold shadow-md transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            {isPublishing ? "Publishing..." : "Publish to Website"}
          </button>
        </div>
      </div>

    </div>
  );
}
