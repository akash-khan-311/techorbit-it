"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "./LowLight";

import EditorToolbar from "./EditorToolBar";

interface BlogEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function BlogEditor({ content, onChange }: BlogEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        heading: {
          levels: [1, 2, 3],
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Underline,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder:
          "Start writing your article here… (Markdown style supported)",
      }),
    ],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-invert max-w-none focus:outline-none min-h-[320px] " +
          "prose-p:text-sm prose-p:leading-7 " +
          "prose-ul:list-disc prose-ul:pl-6 " +
          "prose-ol:list-decimal prose-ol:pl-6 " +
          "prose-li:marker:text-neutral-300 prose-li:my-1 " +
          "prose-blockquote:border-l-4 prose-blockquote:border-neutral-600 prose-blockquote:pl-4 prose-blockquote:text-neutral-300 " +
          "prose-h1:text-2xl prose-h1:font-semibold " +
          "prose-h2:text-xl prose-h2:font-semibold " +
          "prose-h3:text-lg prose-h3:font-medium",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="rounded-2xl border border-neutral-800 text-white">
      {/* Toolbar */}
      <EditorToolbar editor={editor} />
      {/* Editor */}
      <div className="px-6 py-5">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
