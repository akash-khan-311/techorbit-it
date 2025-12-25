"use client";
import { motion, Variants } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import Logo from "@/components/ui/shared/Logo";

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  color: string;
}

const Footer: React.FC = () => {
  const t = useTranslation();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61579782494800",
      color: "#1877F2",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "#1DA1F2",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "#E4405F",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      color: "#0A66C2",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com",
      color: "#FF0000",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20 backdrop-blur-sm">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <Container>
          <div className="py-12">
            <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-10 ">
              {/* Brand Info */}
              <motion.div
                variants={itemVariants}
                className="space-y-6 text-center lg:text-left  "
              >
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <Logo className="text-2xl md:text-3xl" />
                </div>
                <p className="text-slate-100 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t.footer.text}
                </p>
              </motion.div>

              {/* Footer Links */}
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:flex-1">
                {t.footer.linkInfo.map((section) => (
                  <motion.div
                    key={section.title}
                    variants={itemVariants}
                    className="space-y-4"
                  >
                    <motion.h4 className="text-base md:text-lg font-semibold text-white">
                      {section.title}
                    </motion.h4>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <motion.li
                          initial={{ opacity: 1, x: 0 }}
                          whileHover={{ opacity: 1, x: 5 }}
                          transition={{ duration: 0.2 }}
                          key={link.label}
                        >
                          <Link
                            href={link.href}
                            className="text-slate-300 hover:text-emerald-600 transition-colors duration-200 cursor-pointer flex items-center group text-sm md:text-base"
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom Section */}
        <div className="border-t border-emerald-200/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <motion.div
                variants={itemVariants}
                className="text-center md:text-left space-x-2  text-white"
              >
                <span>© {currentYear}. Made with</span>
                <span className="text-lg font-medium">TechOrbit IT</span>
                <span>All rights reserved.</span>
              </motion.div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 group"
                    target="_blank"
                  >
                    <social.icon
                      className={`w-5 h-5 text-slate-600 transition-colors duration-300 group-hover:[color:${social.color}]`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
