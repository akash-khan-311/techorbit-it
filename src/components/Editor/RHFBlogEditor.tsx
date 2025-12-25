"use client";
import { Controller } from "react-hook-form";
import BlogEditor from "./BlogEditor";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface RHFBlogEditorProps {
  name: string;
  control: any;
  label?: string;
  error?: string;
}

export default function RHFBlogEditor({
  name,
  control,
  label,
  error,
}: RHFBlogEditorProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-white">{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{ required: "Content is required" }}
        render={({ field }) => (
          <BlogEditor content={field.value || ""} onChange={field.onChange} />
        )}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
