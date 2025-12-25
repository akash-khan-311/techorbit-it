import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Users2,
  Users,
  ChartNoAxesCombined,
  RotateCcwKey,
  GraduationCap,
  FileUser,
  BookCheck,
  NotebookPen,
  UserRoundCheck,
} from "lucide-react";
import { FaCheck, FaTimes } from "react-icons/fa";

const en = {
  registrationButton: { title: "Registration" },
  navItems: [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Pricing", link: "#pricing" },
    { name: "Careers", link: "#careers" },
    { name: "Blogs", link: "#blogs" },
    { name: "Contact", link: "#contact" },
  ],
  blogsSection: {
    title: "Our Blogs",
    subTitle: "Read and Explore Our Latest Insights and Updates",
  },

  hero: {
    title: "Your Trusted Partner in the Digital Orbit",
    subTitle:
      "We provide web design, development, and digital solutions to help your business grow online.",
  },
  about: {
    title: "About TechOrbit IT",
    subTitle:
      "At TechOrbit IT, we are passionate about helping businesses grow through innovative digital solutions. Our team of developers, designers, and IT experts focus on delivering high-quality, scalable, and modern software tailored to your needs.",
    mission: {
      title: "Our Mission",
      text: "Our mission is to deliver innovative, reliable, and high-quality digital solutions that empower businesses and individuals to achieve their goals. We are committed to providing exceptional service, fostering long-term relationships, and ensuring customer satisfaction through creativity, dedication, and integrity.",
    },

    vision: {
      title: "Our Vision",
      text: "Our vision is to become a trusted global technology partner, recognized for excellence, innovation, and value. We aim to inspire growth and transformation for businesses worldwide by leveraging modern technologies and creating sustainable digital experiences that make a positive impact on society.",
    },
    do: {
      title: "What We Do",
      list: [
        "E-commerce Solutions",
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Support And Maintenance",
        "Training and Consulting",
        "Project Management",
        "Quality Assurance",
      ],
    },
    whoWeAre: {
      title: "Who We Are",
      text1:
        "TechOrbit IT is a modern software and digital solutions company dedicated to transforming ideas into powerful technology. We build secure, scalable, and high-performance software that helps businesses grow, operate smarter, and stay ahead in a competitive world.",
      text2:
        "Our mission is to turn ideas into meaningful, user-friendly, and result-driven digital solutions. From design to deployment, every project is handled with precision, innovation, and a strong commitment to quality.",
      text3:
        "Our team consists of experienced Full-Stack Developers, UI/UX Designers, Software Engineers, and Cloud Specialists — all working together to build digital solutions that create real value and long-term impact.",
      tagLine:
        "We are a passionate tech team creating smart, modern digital solutions that empower businesses to grow and succeed.",
    },
    team: {
      title: "Our Team",
      text: "Meet the passionate minds powering TechOrbit IT — a team of experts dedicated to innovation, creativity, and building world-class digital solutions.",
    },
  },
  services: {
    title: "Our Services",
    text: "At TechOrbit IT, we offer a wide range of IT solutions to help businesses grow and succeed in the digital world.",
    info: [
      {
        title: "Web Development",
        des: "A well-developed website is essential for any business aiming to grow in today’s digital world. It helps you build trust, reach more customers, and present your services in a professional way. A modern, fast, and mobile-friendly website enhances user experience and makes it easier for people to interact with your business. With features like online booking, service details, contact forms, and secure payment options, your business becomes more efficient and accessible. A website also works as a 24/7 digital office—always open to customers, even when you’re offline. Whether you run a startup or an established company, a strong website strengthens your brand and gives you a competitive advantage.",
      },
      {
        title: "E-commerce Solutions",
        des: "Selling products online is no longer just a trend—it’s an essential way to grow your business. A professional e-commerce website helps you reach a wider audience beyond the local market. Product management, secure checkout, order tracking, and inventory control streamline your business operations. A modern design, mobile-friendly interface, and fast loading speed provide a seamless shopping experience for customers. Whether you sell clothing, electronics, or services, a strong e-commerce platform enables 24/7 sales and business accessibility.",
      },
      {
        title: "IT Consulting",
        des: "To grow and operate smarter, proper technology guidance is crucial. IT consulting services analyze your business needs and provide the best technological solutions. From software selection, system upgrades, security enhancements, automation, to scaling—right guidance saves time, cost, and resources. We assess your current systems and create effective development plans, helping your business become faster, safer, and more competitive. From startups to established companies, the right IT consulting ensures increased efficiency and better decision-making.",
      },
    ],
    support: [
      {
        title: "Support And Maintenance",
        des: "At TechOrbit IT, we provide continuous support and maintenance to ensure your digital solutions run smoothly. Our team monitors your systems, fixes issues promptly, updates software, and optimizes performance. Whether it’s a website, application, or e-commerce platform, we make sure your technology stays secure, reliable, and up-to-date, so your business can operate without interruptions and focus on growth.",
      },
      {
        title: "24/7 Support",
        des: "TechOrbit IT offers round-the-clock support and maintenance to keep your websites, applications, and e-commerce platforms running smoothly. Our team monitors systems continuously, fixes issues promptly, and ensures your technology remains secure, reliable, and up-to-date so your business never faces interruptions.",
      },
    ],
    service: [
      {
        title: "Web Development",
        description:
          "Custom, responsive, and modern websites built using the latest technologies.",
        icon: "💻",
      },
      {
        title: "IT Consultancy",
        description:
          "Expert guidance and support to help businesses navigate the complex world of technology.",
        icon: "💡",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Secure, scalable, and user-friendly e-commerce platforms for online businesses.",
        icon: "👨‍💻",
      },
    ],
  },

  review: {
    title: "Trusted by ",
    subTitle: "Industry Leaders",
    tagLine: "Client Success Stories",
    text: "Join thousands of businesses already transforming their operations with our premium AI solutions.",
  },

  stats: [
    { value: 120, suffix: "+", label: "Projects Completed" },
    { value: 85, suffix: "+", label: "Happy Clients" },
    { value: 75, suffix: "+", label: "Websites Developed" },
    { value: 95, suffix: "%", label: "Customer Satisfaction Rate" },
  ],
  careers: {
    title: "Join Our Team",
    text: "Be part of TechOrbit IT — where innovation meets excellence.",
    des: "Join our team at TechOrbit IT and become part of a dynamic environment where innovation and collaboration drive our success. We are committed to providing comprehensive software development services, ensuring that our clients' needs are met and their goals are accomplished.",
    button: "Apply Now",
    noOpenings: {
      title: "🚫 No Current Openings",
      text: "We’re not hiring right now, but the next opportunity might be yours! Send your CV to careers@techorbitit.com and we’ll get in touch when new positions open.",
    },
    openings: {
      title: "Current Openings",
      text: "We're currently looking for talented individuals to join our team. Check out our current openings and apply today!",
    },
    benefits: {
      title: "Benefits",
      text: "Why you Should Join Our Awesome Team We will want you to feel like home when you will be working at TechOrbit IT, and for that, we will have curated a great set of benefits for you.",
      info: [
        {
          icon: Users,
          title: "Collaborative Efforts",
          des: "Join a collaborative team environment where your contributions are valued, and teamwork is key to success. Work alongside talented professionals from diverse backgrounds to tackle challenging projects and achieve shared goals.",
        },
        {
          icon: ChartNoAxesCombined,
          title: "Upgrade Skills",
          des: "Unlock opportunities for personal and professional growth with access to ongoing training and development programs. Stay ahead of the curve by enhancing your skills and knowledge in the rapidly evolving field of technology.",
        },
        {
          icon: RotateCcwKey,
          title: "Secured Future",
          des: "Build a secure future by investing in your professional growth and career development. Our team is committed to providing comprehensive training and support to help you excel in your chosen field.",
        },
        {
          icon: GraduationCap,
          title: "Learning Opportunity",
          des: "Embrace a culture of continuous learning and innovation with abundant opportunities to expand your knowledge and expertise. Whether it's through mentorship, workshops, or online courses, we're dedicated to fostering your professional development journey.",
        },
      ],
    },
    join: {
      title: "How to join our dynamic team",
      text: "Become a part of the TechOrbit IT family through our 4-step hiring process.",
      info: [
        {
          icon: FileUser,
          title: "Apply",
          des: "Do you want to be a part of the TechOrbit IT team? Go through our job openings and submit your application.",
        },
        {
          icon: BookCheck,
          title: "Assessment",
          des: "If your skills and experience match our needs, we'll reach out to you for a skills assessment.",
        },
        {
          icon: NotebookPen,
          title: "Interview",
          des: "After the assessment, we'll schedule an interview with you to understand your skills and experience.",
        },
        {
          icon: UserRoundCheck,
          title: "Welcoming You to Our Team",
          des: "Pending successful assessment and interview, expect a job offer to join our dedicated team.",
        },
      ],
    },
  },
  attraction: {
    title: "Looking for a Website for Your Facebook Page?",
    text: "Nowadays, many people run their businesses through Facebook. You chat with 100 customers, but only a few orders actually get confirmed — which is exhausting and disappointing. But imagine this: without talking to anyone in the inbox, orders start coming in automatically. How amazing would that be? The only solution is an e-commerce website.With a website, all your product information is clearly displayed. Customers can browse and place orders by themselves — no need for inbox conversations, no manual effort. Our expert team will build a powerful, user-friendly, and secure e-commerce platform tailored to your business needs. We offer custom design, payment gateway integration, product management, and many more essential features to make your online store truly successful.Register today for free and take the first step toward building your e-commerce business!",
  },
  contact: {
    title: "Contact Us",
    subTitle:
      "We'd love to hear from you! Whether you have a question or want to work together, our team is here to help. Let's connect and build something amazing together.",
    contactInfo: [
      {
        icon: Mail,
        title: "Email Us",
        content: "techorbitit3@gmail.com",
        description: "Send us an email anytime!",
      },
      {
        icon: Phone,
        title: "Call Us",
        content: "+880 1870-018508",
        description: "Sat-Thur from 9am to 6pm",
      },
      {
        icon: MapPin,
        title: "Visit Us",
        content:
          "73/1 Diamond Tower (9th Floor), College Road, Opposite Of Matuail Medicale, Jatrabari, Dhaka-1362",
        description: "Come say hello at our office",
      },
    ],
    form: {
      title: "Get In Touch",
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        error: "Name is required",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        error: "Email Address is required",
      },
      phone: {
        label: "Phone Number (Whatsapp)",
        placeholder: "Enter your phone number",
        error: "Phone Number is required",
      },
      facebookPage: {
        label: "Facebook Page URL",
        placeholder: "www.facebook.com/yourpage",
      },
      address: {
        label: "Address",
        placeholder: "Enter your full address",
        error: "Address is required",
      },
      button: "Submit",
      exitButton: "Exit",
    },

    features: {
      title: "Why Choose Us",
      info: [
        {
          icon: Clock,
          title: "Quick Response",
          description: "We respond within 24 hours",
        },
        {
          icon: Users2,
          title: "Expert Team",
          description: "Dedicated support specialists",
        },
        {
          icon: MessageSquare,
          title: "Multiple Channels",
          description: "Email, phone, or live chat",
        },
      ],
    },
  },
  footer: {
    text: "Building amazing digital experiences that transform businesses and delight users around the world.",
    linkInfo: [
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/about#team" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Web Development", href: "/services#web" },
          { label: "E-Commerce", href: "/services#e_commerce" },
          { label: "Consulting", href: "/services#consulting" },
          { label: "Support", href: "/services#support" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Help Center", href: "/help" },
          { label: "Community", href: "/community" },
          { label: "FAQ's", href: "/faqs" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms & Conditions", href: "/terms" },
          { label: "Cookie Policy", href: "/cookies" },
          { label: "GDPR", href: "/gdpr" },
          { label: "Licensing", href: "/license" },
        ],
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    subtitle: "Here are some common questions and answers about our services",
    data: [
      {
        question: "What services does TechOrbit IT offer?",
        answer:
          "We provide premium digital services including web development, mobile app development, UI/UX design, digital marketing, branding, and software automation solutions.",
      },
      {
        question: "How can I contact TechOrbit IT for support?",
        answer:
          "You can contact us via email, live chat, phone, or through our help center. We strive to respond within 1–2 business hours for general inquiries.",
      },
      {
        question: "Do you offer custom solutions for businesses?",
        answer:
          "Yes! We provide fully customized solutions tailored to your business needs. Our team works closely with you to ensure the solution matches your requirements.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept international credit/debit cards, bank transfers, bKash, Nagad, and SSLCommerz payments for all our services.",
      },
      {
        question: "How long does it take to complete a project?",
        answer:
          "Project duration depends on complexity. Simple projects may take a few days, while large-scale projects may require several weeks to months.",
      },
      {
        question:
          "Do you provide maintenance and support after project delivery?",
        answer:
          "Yes, we offer post-launch maintenance and support to ensure your website or application runs smoothly and stays up-to-date.",
      },
      {
        question: "Can you help with digital marketing?",
        answer:
          "Absolutely! We offer SEO, social media marketing, PPC, and content marketing services to help grow your online presence.",
      },
      {
        question: "Are your websites mobile-friendly?",
        answer:
          "Yes, all websites we build are fully responsive, mobile-friendly, and optimized for performance on all devices.",
      },
      {
        question: "Do you provide training for using the software?",
        answer:
          "Yes, we provide basic training and documentation to help you and your team efficiently use the delivered solution.",
      },
      {
        question: "How do I request a refund?",
        answer:
          "Refunds are processed according to our Refund Policy. Generally, they are applicable only for undelivered services or verified critical issues.",
      },
      {
        question: "Where can I contact if I have more questions?",
        answer:
          "You can contact us via email, phone, or through our contact page. Our team is ready to answer all your questions.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    date: "Last Updated: September 1, 2025",
    data: [
      {
        title: "Introduction",
        des: "At TechOrbit IT, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website, applications, and services.",
      },
      {
        title: "Information We Collect",
        des: "We may collect personal information such as your name, email, phone number, and any details you provide through contact forms, service requests, or account registrations. Additionally, we may collect usage data, device information, and analytics to enhance your browsing experience.",
      },
      {
        title: "How We Use Your Information",
        des: "We use the collected information for the following purposes:",
        info: [
          "To Provide and improve our services",
          "To respond to your inquiries and support requests",
          "To send important updates or service notifications",
          "To improve website performance and user experience",
          "To ensure security and prevent fraudulent activities",
        ],
      },
      {
        title: "Data Protection & Security",
        des: "We implement advanced security measures—including encryption, secure servers, and regular monitoring—to protect your data from unauthorized access, modification, or disclosure. We also implement data retention policies to ensure that we only retain your personal information for as long as necessary to fulfill the purposes for which it was collected.",
      },
      {
        title: "Sharing of Information",
        des: "We do not sell or rent your personal data. We only share information with trusted partners when required for service delivery or legal compliance.",
      },
      {
        title: "Cookies and Tracking Technologies",
        des: "We use cookies and similar technologies to enhance your browsing experience and collect analytics data. You can manage your cookie preferences in your browser settings.",
      },
      {
        title: "Third-Party Services",
        des: "We may use third-party tools such as analytics or payment gateways. These services have their own privacy policies, and we encourage you to review them.",
      },
      {
        title: "Your Rights and Choices",
        des: "You have the right to access, rectify, or delete your personal information. If you wish to exercise these rights, please contact us using the contact information provided in this Privacy Policy.",
        info: [
          "Access your information",
          "Rectify your information",
          "Delete your information",
          "Opt-out of marketing communications",
          "Withdraw your consent for non-essential data use",
        ],
      },
      {
        title: "Changes to this Privacy Policy",
        des: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically for any updates.",
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    date: "Last Updated: September 1, 2025",
    data: [
      {
        title: "Acceptance of Terms",
        des: "By using TechOrbit IT’s website or services, you agree to comply with all terms and conditions outlined in this document. If you do not agree, you must discontinue using our platform.",
      },
      {
        title: "Use of Services",
        des: "Our services may only be used for legal and authorized purposes. Any misuse, unauthorized access, or harmful activities are strictly prohibited.",
      },
      {
        title: "Intellectual Property",
        des: "All content, branding, graphics, code, and materials on this website are the property of TechOrbit IT. Reproduction or redistribution without permission is prohibited.",
      },
      {
        title: "User Responsibilities",
        des: "You are responsible for providing accurate information, maintaining account security, and ensuring proper use of our services.",
      },
      {
        title: "Limitation of Liability",
        des: "TechOrbit IT is not liable for any direct or indirect damages caused by misuse, service downtime, or third-party issues.",
      },
      {
        title: "Updates to Terms",
        des: "We may update these Terms & Conditions at any time. Continued use of our services means you accept the updated policy.",
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    date: "Last Updated: September 1, 2025",
    data: [
      {
        title: "Eligibility for Refunds",
        des: "Refunds are applicable only for specific digital services where delivery has not been completed or a critical issue is verified from our side.",
      },
      {
        title: "Non-Refundable Services",
        des: "Completed projects, delivered digital assets, consultancy sessions, domain/hosting services, and custom development work are non-refundable.",
      },
      {
        title: "Request Timeline",
        des: "All refund requests must be submitted within 3 days of service purchase. Requests submitted after the time period will not be accepted.",
      },
      {
        title: "Investigation Process",
        des: "Each refund request is manually reviewed by our support team to ensure fairness and transparency before approval.",
      },
      {
        title: "Refund Method",
        des: "Approved refunds are processed through the original payment method within 5–10 business days.",
      },
    ],
  },
  cookie: {
    title: "Cookies Policy",
    date: "Last Updated: September 1, 2025",
    data: [
      {
        title: "Use of Cookies",
        des: "TechOrbit IT uses cookies to enhance user experience, improve performance, and personalize website functionality.",
      },
      {
        title: "Types of Cookies",
        des: "We use essential, analytical, functional, and advertising cookies to ensure smooth operation and better service insights.",
      },
      {
        title: "Why We Use Cookies",
        des: "Cookies help us analyze traffic, remember user preferences, improve loading speed, and provide customized content.",
      },
      {
        title: "Managing Cookies",
        des: "Users can disable or manage cookies through browser settings, but some website features may not work properly afterward.",
      },
      {
        title: "Third-Party Cookies",
        des: "Some external services (Analytics, Ads, Social Media) may set their own cookies while interacting with our website.",
      },
    ],
  },
  gdpr: {
    title: "GDPR Policy",
    date: "Last Updated: September 1, 2025",
    data: [
      {
        title: "Information We Collect",
        des: "We collect the following types of personal data:",
        info: [
          "Personal data such as name, email, and contact information.",
          "Usage data such as pages visited, IP address, browser type, and device info.",
          "Cookies and tracking technologies.",
        ],
      },
      {
        title: "How We Use Your Data",
        des: "We use your personal data for the following purposes:",
        info: [
          "To provide and maintain our services.",
          "To improve user experience and personalize content.",
          "To communicate updates, offers, and notifications.",
          "For analytics and security monitoring.",
        ],
      },
      {
        title: "How We Protect Your Data",
        des: "We implement industry-standard security measures to protect your data from unauthorized access, modification, or disclosure.",
        info: [
          "Encrypted data transmission using HTTPS.",
          "Secured storage following industry standards.",
          "Restricted access based on authorization roles.",
        ],
      },
      {
        title: "Your GDPR Rights",
        des: "You have the following rights under GDPR:",
        info: [
          "Right to access your data.",
          "Right to request corrections.",
          "Right to delete your data.",
          "Right to restrict processing.",
          "Right to data portability.",
          "Right to withdraw consent anytime.",
        ],
      },
      {
        title: "Data Sharing",
        des: "We do not sell or rent your personal data. We only share information with trusted partners when required for service delivery or legal compliance.",
        info: [
          "We DO NOT sell personal data.",
          "We may share with trusted service providers under strict agreements.",
          "Shared only when legally required.",
        ],
      },
      {
        title: "Data Retention",
        des: "We retain your personal data for as long as necessary to fulfill the purposes for which it was collected.",
        info: [
          "Data is retained only as long as necessary.",
          "Users can request deletion anytime.",
        ],
      },
      {
        title: "Contact for Data Requests",
        des: "Please contact us at support@example.com if you have any questions or concerns regarding your data.",
        info: ["Email: support@example.com", "Subject: GDPR Data Request"],
      },
    ],
  },
  licensing: {
    title: "Licensing Policy",
    date: "Last Updated: September 1, 2025",
    data: [
      {
        title: "License Types",
        des: "We offer different types of licenses depending on usage:",
        info: [
          "Personal License: For individual or personal use only.",
          "Commercial License: For business use or revenue-generating projects.",
          "Extended License: For redistribution, reselling, or enterprise-level usage.",
        ],
      },
      {
        title: "Allowed Usage",
        des: "With a valid license, you are allowed to:",
        info: [
          "Use the assets in personal or commercial projects according to the license.",
          "Modify, adapt, or customize assets for your project.",
          "Host on personal or business websites or servers.",
        ],
      },
      {
        title: "Restricted Usage",
        des: "You are NOT allowed to:",
        info: [
          "Resell or redistribute assets as-is without modification.",
          "Claim ownership of original copyrighted materials.",
          "Use assets for illegal, harmful, or unauthorized purposes.",
        ],
      },
      {
        title: "Redistribution Rules",
        des: "Redistribution of assets is only allowed under the Extended License:",
        info: [
          "Assets must be part of a larger project, not standalone.",
          "Proper attribution is required where applicable.",
        ],
      },
      {
        title: "Intellectual Property",
        des: "All original assets remain the property of TechOrbit IT:",
        info: [
          "Purchasing a license grants you permission to use the assets, not ownership.",
          "You must respect copyrights and intellectual property rights.",
        ],
      },
      {
        title: "Termination of License",
        des: "Violation of any licensing terms may result in termination:",
        info: [
          "Upon termination, you must immediately stop using the assets.",
          "You must remove all copies from your systems.",
        ],
      },
      {
        title: "License Support",
        des: "For any questions or clarifications regarding licensing, please contact us:",
        info: ["Email: license@example.com", "Subject: Licensing Query"],
      },
    ],
  },
  documentation: {
    title: "Documentation",
    des: "Find detailed guides, setup instructions, technical explanations, and examples on how to use our platform and services.",
    data: [
      {
        title: "Getting Started",
        des: "Step-by-step instructions for new users to start using our services.",
      },
      {
        title: "API Reference",
        des: "Detailed explanation of API endpoints, parameters, and response structures for developers.",
      },
      {
        title: "Integration Guide",
        des: "Complete instructions on integrating our system into your website or application.",
      },
      {
        title: "Configuration",
        des: "Descriptions of all settings needed to customize or configure your application or system.",
      },

      // ---------------- NEW ITEMS (15) ----------------

      {
        title: "Authentication & Security",
        des: "Learn how to securely authenticate users using our platform’s built-in security protocols. This guide covers token management, session handling, OAuth and SSO support, password encryption, verification workflows, and access control rules. It also provides recommendations for implementing role-based permissions and mitigating common security risks such as unauthorized access, data misuse, and token expiration. You’ll also find best practices for protecting your application, ensuring compliance, and maintaining a secure, reliable environment for your users and systems.",
      },
      {
        title: "Webhooks",
        des: "Understand how to utilize our webhook system to receive real-time notifications for key events within your application. This section explains how to register webhooks, validate signatures, handle payload responses, retry failed deliveries, and maintain endpoint security. You will also learn to process asynchronous events effectively, debug delivery issues, and integrate webhooks into automated workflows. Whether you're building event-driven systems or triggering background processes, this guide ensures robust, scalable implementation.",
      },
      {
        title: "Error Handling",
        des: "This guide explains all error formats, error codes, and recommended best practices for identifying, logging, and resolving issues within your integration. You’ll learn how to interpret API error responses, gracefully manage failures, display user-friendly messages, and implement retry strategies for unstable network conditions. It also includes advanced debugging tips, common scenarios, and guidance on preventing recurring issues. This ensures your application remains stable, resilient, and easy to maintain.",
      },
      {
        title: "Deployment Guide",
        des: "A complete walkthrough of preparing, optimizing, and deploying your application to production environments. This guide covers build processes, environment variables, CDN usage, caching strategies, versioning, and performance optimization. You’ll also learn about zero-downtime deployment workflows, monitoring production logs, handling rollback operations, and following security best practices to maintain system integrity and reliability throughout your deployment pipeline.",
      },
      {
        title: "Performance Optimization",
        des: "Learn how to maximize the speed, efficiency, and scalability of your integration. This section covers caching layers, database indexing, API response optimization, lazy loading, background job execution, and minimizing network overhead. You will also learn performance measurement techniques, stress testing strategies, and best practices to avoid bottlenecks. These optimizations ensure smooth and fast operation even under high user loads.",
      },
      {
        title: "Database Schema",
        des: "This section provides a full overview of recommended database structures, table relationships, indexing strategies, and data normalization guidelines. It explains how our platform stores data internally and how you can design your own schema for seamless integration. You'll learn about foreign keys, constraints, migrations, and data lifecycle management to maintain clean, scalable, and efficient database operations.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        des: "Explore how to implement fine-grained access permissions using our RBAC architecture. Learn how roles, scopes, and privileges interact within your system and how you can apply them to limit or grant access to specific resources. This guide includes examples, best practices, and strategies for maintaining a secure, flexible authorization system tailored to your organization’s needs.",
      },
      {
        title: "Frontend Integration",
        des: "A complete guide for integrating our platform with frontend frameworks like React, Next.js, Vue, and Angular. Learn how to fetch data securely, manage state efficiently, handle loading phases, and optimize UI performance. This section includes reusable components, recommended folder structures, and tips for creating intuitive, responsive user experiences powered by our services.",
      },
      {
        title: "Backend Integration",
        des: "Learn how to integrate our platform with backend technologies such as Node.js, Express, Django, Laravel, and others. You’ll understand how to handle server-side authentication, process API requests, store data, and build secure endpoints. This guide also includes debugging tips, architectural recommendations, and best practices for building scalable server-side applications.",
      },
      {
        title: "CLI Tools",
        des: "Discover how to use our Command Line Interface (CLI) for managing projects, generating components, performing migrations, and automating development tasks. This documentation explains all available commands with examples, usage scenarios, and helpful shortcuts to speed up your workflow and improve productivity.",
      },
      {
        title: "Versioning & Updates",
        des: "Learn how versioning works across our platform, including breaking changes, deprecated features, and long-term support releases. This section explains how to safely upgrade your integration, test compatibility, and stay updated with new improvements. It also outlines how minor updates, patches, and major releases may affect your application and how to prepare for them in advance.",
      },
      {
        title: "Testing & QA",
        des: "A detailed guide on testing workflows for your integration, including unit tests, integration tests, end-to-end tests, and mock API setups. Learn how to validate critical functions, simulate real-world scenarios, prevent regressions, and maintain overall system reliability. This ensures that your application remains stable and production-ready at all times.",
      },
      {
        title: "Logging & Monitoring",
        des: "Explore best practices for application monitoring, log management, and real-time system tracking. This guide covers log formats, event tracing, crash reports, uptime monitoring, and integrating third-party tools. You'll learn how to detect issues early, analyze behaviors, and maintain a highly reliable environment with detailed insights.",
      },
      {
        title: "Data Export & Backup",
        des: "A comprehensive guide on exporting, importing, and backing up your data securely. Learn multiple export formats, data migration strategies, backup schedules, and retention policies. This section also covers best practices for restoring data in case of corruption, accidental deletion, or system failure to ensure long-term data integrity and reliability.",
      },
      {
        title: "Advanced Customization",
        des: "Explore the advanced customization options available in our platform. This guide covers UI customization, feature toggles, custom logic, modular configurations, and integration of third-party plugins. It also explains how to extend default functionalities, override behaviors, and tailor the system to meet specific business needs while keeping everything scalable and maintainable.",
      },
    ],
  },
  helpCenter: {
    title: "Help Center",
    des: "Access a wide collection of support articles, troubleshooting guides, FAQs, and step-by-step instructions designed to help users understand and resolve issues quickly. Our Help Center provides clear, easy-to-follow resources for both beginners and advanced users. Whether you need assistance with account setup, billing questions, feature usage, or technical errors, you’ll find detailed solutions here. Every article is written to ensure users can solve problems without needing external support. The Help Center is continuously updated with new topics based on user feedback to ensure an efficient and hassle-free experience for all.",
    data: [
      {
        title: "Account Management",
        des: "Learn how to create, update, and manage your account securely and efficiently. This section includes detailed guides on password reset, email verification, profile updates, security best practices, and how to recover access if you are locked out. These instructions help ensure your account remains protected at all times.",
      },
      {
        title: "Billing & Payments",
        des: "Find comprehensive instructions for handling billing issues, payment methods, subscription upgrades, refunds, and payment failures. This section helps you understand charges, resolve transaction problems, and manage your financial preferences without confusion.",
      },
      {
        title: "Troubleshooting",
        des: "Explore solutions for common technical issues users face, including login problems, slow loading, feature malfunctions, and general system errors. Each guide walks you through the steps needed to identify the issue and resolve it quickly.",
      },
      {
        title: "Feature Guides",
        des: "Learn how to properly use all the major features of our platform. Every guide includes screenshots, examples, and explanations to ensure you can take full advantage of the tools available.",
      },
      {
        title: "Security Help",
        des: "Understand how to protect your account with two-factor authentication, secure passwords, safe browsing, and reporting suspicious activity. These resources ensure you remain protected while using our services.",
      },
      {
        title: "Data & Privacy",
        des: "Learn how your data is collected, processed, and used. This section includes clear explanations of privacy settings, data control tools, export options, and how to request deletion of your information.",
      },
      {
        title: "Product Updates",
        des: "Stay informed about new features, improvements, and changes introduced to our platform. Each update includes detailed notes on what’s new and how it affects your experience.",
      },
      {
        title: "Notifications & Alerts",
        des: "Understand how notifications work, how to manage your preferences, and how to troubleshoot issues such as missing emails or SMS alerts.",
      },
      {
        title: "User Safety",
        des: "Learn how we maintain a safe environment for all users. Get guidance on avoiding scams, reporting abuse, and protecting your identity.",
      },
      {
        title: "App Installation",
        des: "Step-by-step instructions for installing and updating our app on mobile and desktop devices. Includes solutions for installation errors.",
      },
      {
        title: "Guided Tutorials",
        des: "Access interactive tutorials designed to walk you through complex tasks in a simple and structured manner.",
      },
      {
        title: "FAQ",
        des: "Find answers to the most common questions asked by users across different topics, making it quick and easy to solve problems.",
      },
      {
        title: "Language Support",
        des: "Learn how to switch languages, troubleshoot localization issues, and understand region-specific features.",
      },
      {
        title: "Support Contact",
        des: "Get instructions on how to contact customer support through email, chat, or phone when you need direct assistance.",
      },
      {
        title: "Service Status",
        des: "Check real-time information about system status, scheduled maintenance, and service interruptions.",
      },
    ],
  },
  community: {
    title: "Community",
    des: "Join a vibrant, growing community of users, developers, creators, and experts who actively share knowledge, help each other, and build meaningful connections. The Community is the perfect place to ask questions, learn from real experiences, participate in discussions, share ideas, request features, contribute feedback, and stay updated with platform-related announcements. Whether you're a beginner seeking advice, a developer looking to collaborate, or a business owner hoping to learn best practices, the Community provides an open, supportive, and friendly environment for everyone. Engage in conversations, explore insights, and become part of a global network.",
    data: [
      {
        title: "Discussion Forums",
        des: "Participate in open discussions about features, issues, updates, and best practices. The forum enables users to engage in meaningful conversations and learn from others.",
      },
      {
        title: "User Groups",
        des: "Connect with like-minded users through topic-based groups, including developers, designers, business owners, and learners. A perfect place to share knowledge and build networks.",
      },
      {
        title: "Q&A Board",
        des: "Ask questions and get answers from experienced community members. This section encourages collaborative problem-solving and shared learning.",
      },
      {
        title: "Feature Requests",
        des: "Submit ideas for improvements or new features you would like to see. Other members can vote, helping us prioritize innovations.",
      },
      {
        title: "Announcements",
        des: "Stay updated with official announcements, upcoming features, promotions, and important notices shared by the platform team.",
      },
      {
        title: "Tutorial Sharing",
        des: "Community members can share self-created tutorials, guides, or tips to help others learn and grow.",
      },
      {
        title: "Project Showcase",
        des: "Share your own projects, get feedback, and discover what others are building using our tools and services.",
      },
      {
        title: "Events & Meetups",
        des: "Discover online and offline events, webinars, workshops, and meetups organized by our community and partners.",
      },
      {
        title: "Code Snippets",
        des: "Developers can exchange useful code snippets, boilerplates, utilities, and best practices to simplify workflows.",
      },
      {
        title: "Learning Resources",
        des: "Access curated learning materials recommended by community members, including articles, videos, and courses.",
      },
      {
        title: "Moderation Guidelines",
        des: "Understand the rules and expectations of participating in the community to ensure a safe and respectful environment.",
      },
      {
        title: "Bug Reports",
        des: "Report bugs, errors, or unexpected behavior. Other community members can validate, discuss, and help identify solutions.",
      },
      {
        title: "Networking",
        des: "Build valuable connections with professionals, students, freelancers, and experts from different fields.",
      },
      {
        title: "Polls & Surveys",
        des: "Participate in community polls and surveys to influence decisions, provide insights, and share your preferences.",
      },
      {
        title: "Mentorship",
        des: "Experienced members offer mentorship and guidance to beginners, helping them grow and develop skills effectively.",
      },
    ],
  },
  notFound: {
    title: "Page Not Found",
    des: "Sorry, the page you are looking for could not be found.",
    button: "Back to Home",
  },

  pricing: {
    title: "Pricing Plans",
    text: "Choose the best plan for your business. Prices start from ৳7,999 only.",
    plans: [
      {
        id: "basic",
        title: "Basic",
        description: "Perfect for small businesses — simple and easy to start.",
        priceYear: "৳7,999 / year",
        renewalMonthly: "৳799 / month (from next year)",
        popular: {
          isPopular: false,
          text: "Popular",
        },
        features: [
          { icon: FaCheck, text: "Superfast performance and low latency" },
          { icon: FaCheck, text: "Domain and Hosting included" },
          { icon: FaCheck, text: "Order Management System" },
          { icon: FaCheck, text: "Inventory Management" },
          { icon: FaCheck, text: "Facebook Conversion API (CAPI)" },
          { icon: FaCheck, text: "Facebook Tracking Dataset: 2 sets" },
          { icon: FaCheck, text: "Order processing (monthly): 500 orders" },
          { icon: FaCheck, text: "Google Tag Manager (GTM) + Data Layer" },
          { icon: FaCheck, text: "Unlimited Product Management" },
          { icon: FaCheck, text: "Unlimited Bandwidth" },
          { icon: FaCheck, text: "Payment Methods: Customizable" },
          { icon: FaCheck, text: "Drag & Drop Full Website Builder" },
          { icon: FaCheck, text: "Employee Management: 2 users" },
          { icon: FaTimes, text: "Customization" },
        ],
        button: "Buy Now",
      },
      {
        id: "regular",
        title: "Regular",
        description: "Great for small teams — includes more advanced features.",
        priceYear: "৳14,999 / year",
        renewalMonthly: "৳1,499 / month (from next year)",
        popular: {
          isPopular: true,
          text: "Popular",
        },

        features: [
          { icon: FaCheck, text: "Superfast performance and low latency" },
          { icon: FaCheck, text: "Domain and Hosting included" },
          { icon: FaCheck, text: "Order Management System" },
          { icon: FaCheck, text: "Inventory Management" },
          { icon: FaCheck, text: "Facebook Conversion API (CAPI)" },
          { icon: FaCheck, text: "Facebook Tracking Dataset: 3 sets" },
          { icon: FaCheck, text: "Order processing (monthly): 1500 orders" },
          { icon: FaCheck, text: "Google Tag Manager (GTM) + Data Layer" },
          { icon: FaCheck, text: "Unlimited Product Management" },
          { icon: FaCheck, text: "Unlimited Bandwidth" },
          { icon: FaCheck, text: "Payment Methods: Customizable" },
          { icon: FaCheck, text: "Drag & Drop Full Website Builder" },
          { icon: FaCheck, text: "Employee Management: 5 users" },
          { icon: FaTimes, text: "Customization" },
        ],
        button: "Buy Now",
      },
      {
        id: "advanced",
        title: "Advanced",
        description: "Best for growing businesses — scale as you expand.",
        priceYear: "৳27,999 / year",
        renewalMonthly: "৳2,799 / month (from next year)",
        popular: {
          isPopular: false,
          text: "Popular",
        },
        features: [
          { icon: FaCheck, text: "Superfast performance and low latency" },
          { icon: FaCheck, text: "Domain and Hosting included" },
          { icon: FaCheck, text: "Order Management System" },
          { icon: FaCheck, text: "Inventory Management" },
          { icon: FaCheck, text: "Facebook Conversion API (CAPI)" },
          { icon: FaCheck, text: "Facebook Tracking Dataset: 5 sets" },
          { icon: FaCheck, text: "Order processing (monthly): 3000 orders" },
          { icon: FaCheck, text: "Google Tag Manager (GTM) + Data Layer" },
          { icon: FaCheck, text: "Unlimited Product Management" },
          { icon: FaCheck, text: "Unlimited Bandwidth" },
          { icon: FaCheck, text: "Payment Methods: Customizable" },
          { icon: FaCheck, text: "Drag & Drop Full Website Builder" },
          { icon: FaCheck, text: "Employee Management: 10 users" },
          { icon: FaTimes, text: "Customization" },
        ],
        button: "Buy Now",
      },
      {
        id: "custom",
        title: "Custom",
        description: "Fully customized solution for your business needs.",
        priceYear: "Contact for Pricing",
        renewalMonthly: "Contact for Pricing",
        popular: {
          isPopular: false,
          text: "Popular",
        },
        features: [
          { icon: FaCheck, text: "Superfast performance and low latency" },
          { icon: FaCheck, text: "Domain and Hosting included" },
          { icon: FaCheck, text: "Order Management System" },
          { icon: FaCheck, text: "Inventory Management" },
          { icon: FaCheck, text: "Facebook Conversion API (CAPI)" },
          { icon: FaCheck, text: "Facebook Tracking Dataset: Unlimited" },
          { icon: FaCheck, text: "Order processing (monthly): Unlimited" },
          { icon: FaCheck, text: "Google Tag Manager (GTM) + Data Layer" },
          { icon: FaCheck, text: "Unlimited Product Management" },
          { icon: FaCheck, text: "Unlimited Bandwidth" },
          { icon: FaCheck, text: "Payment Methods: Fully Customizable" },
          { icon: FaCheck, text: "Drag & Drop Full Website Builder" },
          { icon: FaCheck, text: "Employee Management: Unlimited" },
          { icon: FaCheck, text: "Full Customization" },
        ],
        button: "Contact Us",
      },
    ],
  },
  checkout: {
    title: "Checkout",
    instructions: {
      title: "Payment instructions (Bkash Send Money)",
      description: "Please send the exact amount to the following Bkash number",
      number: "01711462869",
      text: "After sending the money, enter your Transaction ID below.",
      note: "You will have to bear the 1.5% Send Money charge. ",
      plan: {
        title: "Your selected plan:",
        payment: "Payable Amount:",
      },
    },
    form: {
      name: {
        label: "Your Full Name",
        placeholder: "Enter your full name",
        error: "Full Name is required",
      },
      email: {
        label: "Your Email Address",
        placeholder: "Enter your email address",
        error: "Email Address is required",
      },
      phone: {
        label: "Your Phone Number (Whatsapp)",
        placeholder: "Enter your phone number",
        error: "Phone Number is required",
      },
      address: {
        label: "Your Address",
        placeholder: "Enter your full address",
        error: "Address is required",
      },
      tranId: {
        label: "Transaction ID",
        placeholder: "Enter your payment transaction id",
        error: "Transaction ID is required",
      },
      button: "Confirm Order",
      exitButton: "Cancel Order",
      success: {
        title: "Success",
        text: "Your order has been placed successfully.",
      },
      error: {
        title: "Not Success",
        text: "Your order has not been placed successfully.",
      },
    },
  },
};

export default en;
