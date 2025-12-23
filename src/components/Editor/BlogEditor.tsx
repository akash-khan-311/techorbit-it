import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
type BlogEditorProps = {
  content: string;
  onChange: (html: string) => void;
};

export default function BlogEditor({ content, onChange }: BlogEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  return (
    <div className="border rounded-md p-3">
      <EditorContent editor={editor} />
    </div>
  );
}
