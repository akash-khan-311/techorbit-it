// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://techorbitit.com",
      lastModified: new Date(),
    },
    {
      url: "https://techorbitit.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://techorbitit.com/careers",
      lastModified: new Date(),
    },
    // আরো routes যোগ করতে পারো
  ];
}
