import React from "react";

interface BlogHTMLRendererProps {
  content: string;
  className?: string;
}

function injectHeadingIds(html: string): string {
  if (!html) return "";
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, innerText) => {
    if (attrs.includes("id=")) return match;
    const cleanText = innerText.replace(/<[^>]*>?/gm, "").trim();
    const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `<h2 id="${id || "section"}" ${attrs}>${innerText}</h2>`;
  });
}

export default function BlogHTMLRenderer({ content, className = "" }: BlogHTMLRendererProps) {
  const processedContent = injectHeadingIds(content);

  return (
    <div 
      className={`blog-content max-w-none space-y-6 text-slate-700 text-[16px] sm:text-[17px] leading-[1.8] font-normal ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    >
      <style>{`
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 {
          scroll-margin-top: 110px;
        }
        .blog-content h1 {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #0F172A;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .blog-content h2 {
          font-size: 1.65rem;
          font-weight: 750;
          letter-spacing: -0.02em;
          color: #0F172A;
          margin-top: 2.25rem;
          margin-bottom: 0.85rem;
          line-height: 1.3;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #F1F5F9;
        }
        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #1E293B;
          margin-top: 1.75rem;
          margin-bottom: 0.65rem;
          line-height: 1.4;
        }
        .blog-content h4 {
          font-size: 1.05rem;
          font-weight: 650;
          color: #334155;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .blog-content p {
          margin: 1.15rem 0;
          color: #334155;
          line-height: 1.8;
        }
        
        .blog-content a {
          color: #4F46E5;
          text-decoration: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 3px;
          font-weight: 600;
          transition: color 0.15s ease;
        }
        .blog-content a:hover {
          color: #3730A3;
        }

        .blog-content blockquote {
          border-left: 4px solid #6366F1;
          background: #F8FAFC;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
          border-radius: 0 0.75rem 0.75rem 0;
          font-style: italic;
          color: #475569;
        }
        .blog-content blockquote p {
          margin: 0;
        }

        .blog-content pre {
          background-color: #0F172A;
          color: #F8FAFC;
          padding: 1.25rem 1.5rem;
          border-radius: 1rem;
          overflow-x: auto;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875rem;
          line-height: 1.7;
          margin: 1.75rem 0;
          border: 1px solid #1E293B;
        }
        
        .blog-content code:not(pre code) {
          background-color: #F1F5F9;
          color: #4F46E5;
          padding: 0.15rem 0.4rem;
          border-radius: 0.375rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.875em;
          font-weight: 600;
          border: 1px solid #E2E8F0;
        }

        /* ─── 4-SIDED TABLE BORDER CSS ─── */
        .blog-content table {
          width: 100%;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          border: 1px solid #CBD5E1 !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin: 2rem 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .blog-content th {
          background: #F8FAFC;
          padding: 0.85rem 1rem;
          font-weight: 700;
          border-bottom: 1px solid #CBD5E1;
          border-right: 1px solid #E2E8F0;
          color: #0F172A;
          text-align: left;
          font-size: 0.875rem;
        }
        .blog-content th:last-child {
          border-right: none;
        }
        .blog-content td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #E2E8F0;
          border-right: 1px solid #E2E8F0;
          color: #334155;
          font-size: 0.875rem;
        }
        .blog-content td:last-child {
          border-right: none;
        }
        .blog-content tr:last-child td {
          border-bottom: none;
        }
        .blog-content tr:hover td {
          background-color: #F8FAFC;
        }
        
        .blog-content ul { 
          list-style-type: disc; 
          padding-left: 1.5em; 
          margin: 1.25rem 0;
        }
        .blog-content ol { 
          list-style-type: decimal; 
          padding-left: 1.5em; 
          margin: 1.25rem 0;
        }
        .blog-content li { 
          margin: 0.5rem 0; 
          display: list-item;
          color: #334155;
        }
        
        .blog-content hr {
          border: none;
          border-top: 1px solid #E2E8F0;
          margin: 2.5rem 0;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 1rem;
          margin: 2rem 0;
          border: 1px solid #E2E8F0;
        }
      `}</style>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

