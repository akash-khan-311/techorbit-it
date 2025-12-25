"use client";

import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Code,
  Quote,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
} from "lucide-react";

interface Props {
  editor: Editor;
}

export default function EditorToolbar({ editor }: Props) {
  const btn = "p-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition";

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-neutral-800 px-3 py-2">
      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <Code size={16} />
      </button>

      <div className="w-px h-5 bg-neutral-700 mx-1" />

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1 size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading3 size={16} />
      </button>

      <div className="w-px h-5 bg-neutral-700 mx-1" />

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote size={16} />
      </button>

      <button
        type="button"
        className={btn}
        onClick={() => {
          const url = prompt("Enter link");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
      >
        <LinkIcon size={16} />
      </button>
    </div>
  );
}
