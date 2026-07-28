import React from "react";

interface BlogHTMLRendererProps {
  content: string;
  className?: string;
}

export default function BlogHTMLRenderer({ content, className = "" }: BlogHTMLRendererProps) {
  return (
    <div className={`blog-content prose prose-zinc max-w-none space-y-6 text-zinc-700 text-[15px] sm:text-[17px] leading-relaxed ${className}`}>
      <style>{`
        .blog-content h1 { font-size: 2em; font-weight: bold; margin-top: 0.67em; margin-bottom: 0.67em; line-height: 1.2; }
        .blog-content h2 { font-size: 1.5em; font-weight: bold; margin-top: 0.83em; margin-bottom: 0.83em; line-height: 1.3; }
        .blog-content h3 { font-size: 1.17em; font-weight: bold; margin-top: 1em; margin-bottom: 1em; line-height: 1.4; }
        .blog-content h4 { font-size: 1em; font-weight: bold; margin-top: 1.33em; margin-bottom: 1.33em; line-height: 1.4; }
        .blog-content h5 { font-size: 0.83em; font-weight: bold; margin-top: 1.67em; margin-bottom: 1.67em; line-height: 1.5; }
        .blog-content h6 { font-size: 0.67em; font-weight: bold; margin-top: 2.33em; margin-bottom: 2.33em; line-height: 1.5; }
        
        .blog-content p { margin: 1em 0; }
        .blog-content blockquote { border-left: 4px solid #ccc; margin-left: 0; padding-left: 1em; }
        .blog-content pre { background-color: #f5f5f5; padding: 0.5em; border-radius: 0.3em; font-family: monospace; }
        .blog-content table { border-collapse: collapse; margin: 0; overflow: hidden; table-layout: fixed; width: 100%; }
        .blog-content table td, .blog-content table th { border: 2px solid #ced4da; box-sizing: border-box; min-width: 1em; padding: 3px 5px; position: relative; vertical-align: top; }
        .blog-content table th { background-color: #f8f9fa; font-weight: bold; text-align: left; }
        
        .blog-content ul { 
          list-style-type: disc; 
          padding-left: 1.5em; 
          margin: 1em 0;
        }
        .blog-content ol { 
          list-style-type: decimal; 
          padding-left: 1.5em; 
          margin: 1em 0;
        }
        .blog-content li { 
          margin: 0.5em 0; 
          display: list-item;
        }
        
        .blog-content hr { border: none; border-top: 2px solid #ced4da; margin: 1em 0; }
        .blog-content img { max-width: 100%; height: auto; }
      `}</style>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
