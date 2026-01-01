export type TCaseStudy = {
  id: number;
  title: string;
  description: string;
  image: string;
  live: string;
  github: string;
};
export const caseStudies: TCaseStudy[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution with admin dashboard and payment integration.",
    image: "/placeholder/project-1.jpg",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Corporate Business Website",
    description:
      "Professional corporate website designed for brand presence and lead generation.",
    image: "/placeholder/project-2.jpg",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard System",
    description:
      "Role-based admin dashboard for managing users, data, and analytics.",
    image: "/placeholder/project-3.jpg",
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "SaaS Web Application",
    description: "Scalable SaaS platform built with modern web technologies.",
    image: "/placeholder/project-4.jpg",
    live: "#",
    github: "#",
  },
];
