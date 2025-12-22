"use client";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("@/components/ui/Container"), {
  ssr: false,
});
const TextType = dynamic(() => import("@/components/ui/TextType"), {
  ssr: false,
});

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import RegistrationForm from "@/components/ui/RegistrationForm";

const ContactSection: React.FC = () => {
  const t = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="contact" className="relative py-6 px-4  overflow-hidden mt-20">
      {/* Floating Shapes */}

      <Container>
        <div className=" relative z-10 ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <TextType
                text={t.contact.title}
                key={t.contact.title}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              />

              <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
                {t.contact.subTitle}
              </p>
            </motion.div>
            <div className="flex bg-slate-900 shadow-[0px_0px_15px_0px_#1BCDD2] flex-col md:flex-row  mt-20 ">
              <div className=" md:p-10 p-6 rounded-md md:rounded-none md:w-1/2">
                <h1 className="text-4xl font-bold text-center pb-10 text-white">
                  {t.contact.form.title}
                </h1>
                <RegistrationForm />
              </div>
              <div className="md:w-1/2 flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.0296323640445!2d90.46501410368651!3d23.697934049768254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7000037977d%3A0x47a0ed33b5ed5c98!2sDiamond%20Tower!5e0!3m2!1sen!2sbd!4v1763376663428!5m2!1sen!2sbd"
                  width={800}
                  height={700}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16"
            >
              {t.contact.contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20 rounded-full text-white mr-4">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200">
                      {info.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg font-medium text-gray-300 mb-2">
                    {info.content}
                  </p>
                  <p className="text-gray-300 ">{info.description}</p>
                </motion.div>
              ))}
            </motion.div>
            {/* <div className="flex bg-slate-900 shadow-[0px_0px_15px_0px_#1BCDD2] flex-col md:flex-row  mt-20 ">
              <div className=" p-10 md:w-1/2">
                <h1 className="text-4xl font-bold text-center pb-10 text-white">
                  {t.contact.form.title}
                </h1>
                <RegistrationForm />
              </div>
              <div className="md:w-1/2 flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.0296323640445!2d90.46501410368651!3d23.697934049768254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7000037977d%3A0x47a0ed33b5ed5c98!2sDiamond%20Tower!5e0!3m2!1sen!2sbd!4v1763376663428!5m2!1sen!2sbd"
                  width={800}
                  height={700}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div> */}
            <div className="">
              {/* Features */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">
                  {t.contact.features.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t.contact.features.info.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-gradient-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20  p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20 rounded-full text-white">
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-300 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
