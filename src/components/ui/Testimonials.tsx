"use client";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { useState, useEffect, useRef, FC } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import StatsCount from "./StatCount";
import { useTranslation } from "@/hooks/useTranslation";

const testimonials = [
  {
    name: "Sayed Yeasmin",
    role: "CEO - From99",
    company: "From99",
    avatar: "/images/clients/client-1.jpg",
    rating: 5,
    text: "TechOrbit IT has transformed our website and digital solutions with utmost professionalism. Their service is fast, efficient, and reliable. Highly recommended!",
    results: [
      "300% efficiency increase",
      "$2M cost savings",
      "24/7 automation",
    ],
  },
  {
    name: "Mosharof Hossain",
    role: "Owner - Sundarban Printers Ltd.",
    company: "Sundarban Printers Ltd.",
    avatar: "/images/clients/client-2.jpg",
    rating: 5,
    text: "Working with TechOrbit IT was an absolute pleasure. They delivered our IT project on time with top-quality code and exceptional support.",
    results: [
      "40% satisfaction boost",
      "Instant responses",
      "Seamless integration",
    ],
  },
  {
    name: "Bulbul Ahmed",
    role: "CEO - Nickbd",
    company: "Nickbd",
    avatar: "/images/clients/client-3.jpg",
    rating: 5,
    text: "TechOrbit IT helped elevate our digital presence to new heights. Their team is highly professional, responsive, and results-driven.",
    results: ["Full automation", "Strategic focus", "Team productivity"],
  },
  {
    name: "Zahid Hossain",
    role: "Director, Nick Electronics",
    company: "Nick Electronics",
    avatar: "/images/clients/client-4.jpg",
    rating: 5,
    text: "The team at TechOrbit IT is incredibly knowledgeable and creative. They understood our requirements perfectly and delivered outstanding solutions.",
    results: ["Immediate results", "Smooth integration", "High ROI"],
  },
];

type TestimonialsProps = {
  title?: string;
  subTitle?: string;
  tagline?: string;
  des?: string;
};

export const Testimonials: FC<TestimonialsProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.23, 0.86, 0.39, 0.96),
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="relative overflow-hidden text-white">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">{/* Animated linear mesh */}</div>

      <motion.div
        ref={containerRef}
        className="relative z-10 px-6 mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="mb-20 text-center" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 mb-6 border rounded-full bg-white/8 border-white/15 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-indigo-300" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">
              ✨ {t.review.tagLine}
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2
            className="mb-8 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl "
            variants={fadeInUp}
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/80">
              {t.review.title}
            </span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-purple-300 to-rose-300"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {t.review.subTitle}
            </motion.span>
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto text-sm leading-relaxed md:text-base text-white/60"
            variants={fadeInUp}
          >
            {t.review.text}
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative h-175 md:h-100 perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-linear-to-br from-white/8 to-white/2 backdrop-blur-xl rounded-3xl border border-white/[0.15] p-8 md:p-12 overflow-hidden group">
                  {/* Animated background linear */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-indigo-500/8 via-purple-500/5 to-rose-500/8 rounded-3xl"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "300% 300%",
                    }}
                  />

                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-8 right-8 opacity-20"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-16 h-16 text-white" />
                  </motion.div>

                  <div className="relative z-10 flex flex-col items-center h-full gap-8 md:flex-row">
                    {/* User Info */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative w-24 h-24 mx-auto overflow-hidden border-4 rounded-full md:mx-0 border-white/20">
                          <Image
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            className="object-cover w-full h-full"
                            height={100}
                            width={100}
                            priority
                          />
                          <motion.div
                            className="absolute inset-0 bg-linear-to-br from-indigo-400/20 to-rose-400/20"
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </div>

                        {/* Floating ring animation */}
                        <motion.div
                          className="absolute inset-0 border-2 rounded-full border-indigo-400/30"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      <h3 className="mb-2 text-xl font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="mb-1 font-medium text-indigo-300">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="mb-4 text-white/60">
                        {testimonials[currentIndex].company}
                      </p>

                      {/* Star Rating */}
                      <div className="flex justify-center gap-1 mb-6 md:justify-start ">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left ">
                      <motion.blockquote
                        className="mb-8 italic font-light leading-relaxed text-white/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        {testimonials[currentIndex].text}
                      </motion.blockquote>

                      {/* Results */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/[0.05] rounded-lg p-3 border border-white/[0.1] backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            whileHover={{
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <span className="text-sm font-medium text-white/70">
                              {result}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-indigo-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <StatsCount stats={t.stats} />
      </motion.div>
    </section>
  );
};
