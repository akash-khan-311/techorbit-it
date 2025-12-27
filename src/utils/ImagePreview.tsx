"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageLightboxProps {
  images: string[];
}
export default function ImagePreview({ images }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const slides = images.map((img) => ({ src: img }));
  return (
    <>
      {/* Small Image */}
      <div className="flex items-center mt-6 gap-x-5">
        {images.map((img, idx) => (
          <div key={idx} className="">
            <Image
              src={img}
              onClick={() => setOpen(true)}
              width={200}
              height={100}
              alt="NID Card"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </>
  );
}
