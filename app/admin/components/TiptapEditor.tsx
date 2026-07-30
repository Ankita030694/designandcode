'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Youtube from '@tiptap/extension-youtube';
import { common, createLowlight } from 'lowlight';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../lib/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBold, faItalic, faUnderline, faStrikethrough, faSubscript, faSuperscript,
  faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify,
  faHeading, faListUl, faListOl, faQuoteLeft, faCode, faMinus,
  faLink, faLinkSlash, faImage, faTable, faTrash, faUndo, faRedo, faHighlighter, faParagraph,
  faTasks, faVideo, faEraser
} from '@fortawesome/free-solid-svg-icons';

const lowlight = createLowlight(common);

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  className?: string;
}

// Add image compression helper function
const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = document.createElement('img');
      img.src = event.target?.result as string;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Calculate new dimensions while maintaining aspect ratio
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round(height * (MAX_WIDTH / width));
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round(width * (MAX_HEIGHT / height));
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Canvas to Blob conversion failed'));
              return;
            }
            
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            
            resolve(compressedFile);
          },
          'image/jpeg',
          0.7
        );
      };
      
      img.onerror = () => {
        reject(new Error('Error loading image for compression'));
      };
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file for compression'));
    };
  });
};

// MenuBar component
const MenuBar = ({ editor }: { editor: any }) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!editor) {
    return null;
  }

  // Color options
  const colors = [
    { name: 'Default', value: '#1E293B' },
    { name: 'Gold/Amber', value: '#B8860B' },
    { name: 'Gray', value: '#64748B' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Orange', value: '#F97316' },
    { name: 'Yellow', value: '#EAB308' },
    { name: 'Green', value: '#22C55E' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Indigo', value: '#6366F1' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Pink', value: '#EC4899' },
  ];

  // Handle image upload locally
  const handleImageUpload = async (file: File) => {
    try {
      setUploading(true);
      
      // Check file size (limit to 10MB)
      const MAX_FILE_SIZE = 10 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
        alert("Image is too large. Maximum size is 10MB.");
        return;
      }

      // Compress the image if it's an image file
      let fileToUpload = file;
      if (file.type.startsWith('image/')) {
        fileToUpload = await compressImage(file);
      }

      const fileName = `editor-images/${Date.now()}-${fileToUpload.name}`;
      const storageRef = ref(storage, fileName);
      
      await uploadBytes(storageRef, fileToUpload);
      const url = await getDownloadURL(storageRef);
      
      // Insert the image into the editor
      editor.chain().focus().setImage({ src: url, alt: file.name }).run();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="sticky top-0 z-10 border-b border-slate-200 p-2 flex flex-wrap gap-1 bg-slate-50 rounded-t-xl text-slate-600">
      {/* Text Formatting */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('bold') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Bold"
        >
          <FontAwesomeIcon icon={faBold} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('italic') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Italic"
        >
          <FontAwesomeIcon icon={faItalic} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('underline') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Underline"
        >
          <FontAwesomeIcon icon={faUnderline} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('strike') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Strike"
        >
          <FontAwesomeIcon icon={faStrikethrough} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('subscript') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Subscript"
        >
          <FontAwesomeIcon icon={faSubscript} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('superscript') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Superscript"
        >
          <FontAwesomeIcon icon={faSuperscript} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          className="p-2 rounded hover:bg-slate-200/60 ml-1 text-slate-400 hover:text-red-500"
          title="Clear Formatting"
        >
          <FontAwesomeIcon icon={faEraser} className="w-3.5 h-3.5" />
        </button>
      </div>

      <span className="border-r border-slate-200 mx-1"></span>
      
      {/* Headings */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('paragraph') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Paragraph"
        >
          <FontAwesomeIcon icon={faParagraph} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-1.5 px-2 rounded hover:bg-slate-200/60 text-xs font-bold ${editor.isActive('heading', { level: 1 }) ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 px-2 rounded hover:bg-slate-200/60 text-xs font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-1.5 px-2 rounded hover:bg-slate-200/60 text-xs font-bold ${editor.isActive('heading', { level: 3 }) ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Heading 3"
        >
          H3
        </button>
      </div>

      <span className="border-r border-slate-200 mx-1"></span>
      
      {/* Lists */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('bulletList') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Bullet List"
        >
          <FontAwesomeIcon icon={faListUl} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('orderedList') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Ordered List"
        >
          <FontAwesomeIcon icon={faListOl} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('taskList') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Task List"
        >
          <FontAwesomeIcon icon={faTasks} className="w-3.5 h-3.5" />
        </button>
      </div>

      <span className="border-r border-slate-200 mx-1"></span>
      
      {/* Alignment */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive({ textAlign: 'left' }) ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Align Left"
        >
          <FontAwesomeIcon icon={faAlignLeft} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive({ textAlign: 'center' }) ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Align Center"
        >
          <FontAwesomeIcon icon={faAlignCenter} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive({ textAlign: 'right' }) ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Align Right"
        >
          <FontAwesomeIcon icon={faAlignRight} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive({ textAlign: 'justify' }) ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Justify"
        >
          <FontAwesomeIcon icon={faAlignJustify} className="w-3.5 h-3.5" />
        </button>
      </div>

      <span className="border-r border-slate-200 mx-1"></span>
      
      {/* Special Elements */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('blockquote') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Blockquote"
        >
          <FontAwesomeIcon icon={faQuoteLeft} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('codeBlock') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Code Block"
        >
          <FontAwesomeIcon icon={faCode} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded hover:bg-slate-200/60"
          title="Horizontal Rule"
        >
          <FontAwesomeIcon icon={faMinus} className="w-3.5 h-3.5" />
        </button>
      </div>

      <span className="border-r border-slate-200 mx-1"></span>
      
      {/* Color */}
      <div className="flex gap-1 mr-2 items-center">
        <select
          className="p-1.5 rounded border border-slate-250 bg-white text-slate-700 text-xs focus:outline-none"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          title="Text Color"
        >
          <option value="">Text Color</option>
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('highlight') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Highlight"
        >
          <FontAwesomeIcon icon={faHighlighter} className="w-3.5 h-3.5 text-yellow-600" />
        </button>
      </div>

      <span className="border-r border-slate-200 mx-1"></span>
      
      {/* Links and Media */}
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Enter the URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`p-2 rounded hover:bg-slate-200/60 ${editor.isActive('link') ? 'bg-slate-200 text-[#0F172A]' : ''}`}
          title="Link"
        >
          <FontAwesomeIcon icon={faLink} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
          className="p-2 rounded hover:bg-slate-200/60 disabled:opacity-40"
          title="Remove Link"
        >
          <FontAwesomeIcon icon={faLinkSlash} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => {
            if (uploading) return;
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
          className="p-2 rounded hover:bg-slate-200/60"
          title="Image"
        >
          {uploading ? <span className="text-[10px] font-bold">...</span> : <FontAwesomeIcon icon={faImage} className="w-3.5 h-3.5" />}
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Enter YouTube Video URL');
            if (url) {
              editor.commands.setYoutubeVideo({ src: url });
            }
          }}
          className="p-2 rounded hover:bg-slate-200/60 text-slate-500 hover:text-red-500"
          title="YouTube Video"
        >
          <FontAwesomeIcon icon={faVideo} className="w-3.5 h-3.5" />
        </button>
      </div>

      <span className="border-r border-slate-200 mx-1"></span>
      
      {/* Table */}
      <div className="flex gap-1 mr-2 items-center">
        <button
          type="button"
          onClick={() => {
            const rows = parseInt(window.prompt('Number of rows', '3') || '3');
            const cols = parseInt(window.prompt('Number of columns', '3') || '3');
            editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
          }}
          className="p-1.5 px-2 rounded hover:bg-slate-200/60 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider"
          title="Insert Table"
        >
          <FontAwesomeIcon icon={faTable} className="w-3.5 h-3.5" /> +
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().deleteTable().run()}
          disabled={!editor.can().deleteTable()}
          className="p-2 rounded hover:bg-red-50 hover:text-red-600 disabled:opacity-40"
          title="Delete Table"
        >
          <FontAwesomeIcon icon={faTrash} className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Undo/Redo */}
      <div className="flex gap-1 ml-auto">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-slate-200/60 disabled:opacity-40"
          title="Undo"
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <FontAwesomeIcon icon={faUndo} className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-slate-200/60 disabled:opacity-40"
          title="Redo"
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <FontAwesomeIcon icon={faRedo} className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            handleImageUpload(file);
          }
        }}
      />
    </div>
  );
};

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange, className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Define the editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg border border-slate-200 my-4 shadow-sm',
          loading: 'lazy',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#B8860B] hover:underline font-semibold',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Subscript,
      Superscript,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Youtube.configure({
        inline: false,
        width: 640,
        height: 360,
      }),
    ],
    content: content || '<p></p>',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-slate prose-sm sm:prose lg:prose-lg w-full !max-w-none p-6 min-h-[400px] focus:outline-none text-slate-800 bg-white',
      },
    },
  });

  // Handle client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set content when the prop changes and the editor is ready
  useEffect(() => {
    if (editor && content !== undefined) {
      const currentHtml = editor.getHTML();
      // If the parent passes entirely new content, inject it
      if (currentHtml === '<p></p>' || currentHtml === '') {
        editor.commands.setContent(content);
      } else if (content && Math.abs(currentHtml.length - content.length) > 100) {
        editor.commands.setContent(content);
      }
    }
  }, [content, editor]);

  // Custom styles for headings and editor elements - premium light theme
  const editorStyles = `
    .ProseMirror {
      min-height: 400px;
      outline: none;
      color: #334155;
    }
    .ProseMirror p.is-editor-empty:first-child::before {
      color: #94a3b8;
      content: 'Start writing your blog...';
      float: left;
      height: 0;
      pointer-events: none;
    }
    .ProseMirror h1 { font-size: 1.8em; font-weight: bold; margin-top: 0.8em; margin-bottom: 0.6em; color: #0F172A; }
    .ProseMirror h2 { font-size: 1.4em; font-weight: bold; margin-top: 0.9em; margin-bottom: 0.6em; color: #0F172A; }
    .ProseMirror h3 { font-size: 1.2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.6em; color: #0F172A; }
    
    .ProseMirror p { margin: 0.8em 0; line-height: 1.6; }
    .ProseMirror blockquote { border-left: 4px solid #B8860B; margin-left: 0; padding-left: 1.2em; font-style: italic; color: #64748B; }
    .ProseMirror pre { background-color: #F8FAFC; padding: 0.8em; border-radius: 0.5rem; font-family: monospace; border: 1px solid #E2E8F0; color: #334155; }
    .ProseMirror table { border-collapse: collapse; margin: 1em 0; overflow: hidden; table-layout: fixed; width: 100%; }
    .ProseMirror table td, .ProseMirror table th { border: 1px solid #E2E8F0; box-sizing: border-box; min-width: 1em; padding: 8px 10px; position: relative; vertical-align: top; }
    .ProseMirror table th { background-color: #F8FAFC; font-weight: bold; text-align: left; color: #B8860B; }
    
    /* List styles */
    .ProseMirror ul { 
      list-style-type: disc; 
      padding-left: 1.8em; 
      margin: 0.8em 0;
      color: #334155;
    }
    .ProseMirror ol { 
      list-style-type: decimal; 
      padding-left: 1.8em; 
      margin: 0.8em 0;
      color: #334155;
    }
    .ProseMirror li { 
      margin: 0.4em 0; 
      display: list-item;
    }
    
    .ProseMirror hr { border: none; border-top: 1px solid #E2E8F0; margin: 1.5em 0; }
    .ProseMirror img { max-width: 100%; height: auto; border-radius: 0.5rem; }
    .ProseMirror iframe { border-radius: 0.5rem; width: 100%; max-width: 640px; }
    
    /* Task List */
    .ProseMirror ul[data-type="taskList"] {
      list-style: none;
      padding: 0;
    }
    .ProseMirror ul[data-type="taskList"] li {
      display: flex;
      align-items: flex-start;
      margin: 0.5em 0;
    }
    .ProseMirror ul[data-type="taskList"] li > label {
      flex: 0 0 auto;
      margin-right: 0.5rem;
      user-select: none;
      padding-top: 0.1rem;
    }
    .ProseMirror ul[data-type="taskList"] li > div {
      flex: 1 1 auto;
    }
  `;

  return (
    <div className={`${className} relative flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all`}>
      <style dangerouslySetInnerHTML={{__html: editorStyles}} />
      {isMounted && editor && (
        <div className="flex flex-col bg-white">
          <MenuBar editor={editor} />
          <div className="bg-white">
            <EditorContent editor={editor} className="cursor-text" onClick={() => editor?.commands.focus()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TiptapEditor;
