import clinic from "../../Assets/Projects/clinic.png";
import jawwal from "../../Assets/Projects/jawwal.png";
import sport from "../../Assets/Projects/sportsocitey.png";
import haat from "../../Assets/Projects/haat.png";
import goldendeal from "../../Assets/Projects/goldendeal.png";
import medicalsass from "../../Assets/Projects/medicalsass.png";
import foodbank from "../../Assets/Projects/foodbank.png";
import rinku from "../../Assets/Projects/rinku.png";

// Screenshot API Configuration
// Get your FREE API key from: https://screenshotone.com/
// Free tier: 100 screenshots/month, no credit card required
const SCREENSHOT_API_KEY = process.env.REACT_APP_SCREENSHOT_API_KEY || "DEMO_KEY";

// Screenshot API URL generator
const getScreenshot = (url) => {
  if (!url) return clinic; // Fallback to placeholder if no URL

  // ScreenshotOne API with optimized settings for portfolio cards
  return `https://api.screenshotone.com/take?access_key=${SCREENSHOT_API_KEY}&url=${encodeURIComponent(url)}&viewport_width=1920&viewport_height=1080&device_scale_factor=1&format=webp&image_quality=80&block_ads=true&block_cookie_banners=true&block_trackers=true&cache=true&cache_ttl=2592000&full_page=false`;
};

// Mobile screenshot for mobile apps/responsive sites
const getMobileScreenshot = (url) => {
  if (!url) return clinic;

  // Mobile viewport (iPhone 12 Pro dimensions)
  return `https://api.screenshotone.com/take?access_key=${SCREENSHOT_API_KEY}&url=${encodeURIComponent(url)}&viewport_width=390&viewport_height=844&device_scale_factor=2&format=webp&image_quality=80&block_ads=true&block_cookie_banners=true&block_trackers=true&cache=true&cache_ttl=2592000&full_page=false`;
};

export const projectsData = [
  {
    id: 1,
    imgPath: getScreenshot("https://kwealth.sa/"),
    title: "Kwealth – FinTech Trading Platform",
    description: "Built real-time trading dashboards with React.js and WebSocket for live stock updates. Designed portfolio management UI and integrated an AI-powered assistant into the frontend.",
    techStack: ["React.js", "WebSocket", "FinTech", "AI Integration"],
    demoLink: "https://kwealth.sa/",
    category: "Frontend"
  },
  {
    id: 2,
    imgPath: getScreenshot("https://shiprexnow.com/en/"),
    title: "Shiprex – Shipping ERP System",
    description: "Developed interactive logistics dashboards and shipment tracking pages with JavaScript. Integrated API-driven data tables and reporting views for real-time updates.",
    techStack: ["JavaScript", "PHP", "CakePHP", "ERP"],
    technologies: { frontend: ["JavaScript"], backend: ["PHP", "CakePHP"] },
    demoLink: "https://shiprexnow.com/en/",
    category: "Full Stack"
  },
  {
    id: 3,
    imgPath: getScreenshot("http://www.aramhrm.net/"),
    title: "Aram – HR Management System",
    description: "The Future of HR Management - A comprehensive HR management system designed specifically for Saudi companies. Built frontend modules for payroll, attendance, and employee workflows. Designed a custom workflow builder UI with drag-and-drop features in React.js.",
    techStack: ["React.js", "Drag & Drop", "HR Tech", "Workflows"],
    demoLink: "http://www.aramhrm.net/",
    category: "Frontend"
  },
  {
    id: 4,
    imgPath: getScreenshot("https://kera.sa"),
    title: "Kreaa – Real Estate Management (Saudi Market)",
    description: "Developed property management dashboards with React.js. Built a Hijri date picker component for a localized Saudi market experience.",
    techStack: ["React.js", "PHP", "Laravel", "Filament"],
    technologies: { frontend: ["React.js"], backend: ["PHP", "Laravel", "Filament"] },
    demoLink: "https://kera.sa/",
    category: "Full Stack"
  },
  {
    id: 5,
    imgPath: medicalsass, // No live URL provided yet
    title: "Medical SaaS Platform",
    description: "Built a scalable, responsive SaaS platform using React.js, focusing on healthcare workflows and patient management. Developed reusable UI components, integrated external APIs for identity verification and medical data.",
    techStack: ["React.js", "Node.js", "SaaS", "Healthcare", "API Integration"],
    technologies: { frontend: ["React.js"], backend: ["Node.js", "API Integration"] },
    category: "Full Stack"
  },
  {
    id: 6,
    imgPath: getScreenshot("https://landing-dev.tarh.com.sa/"),
    title: "Tarh Platform – Real Estate Investment",
    description: "Developed a serverless real estate investment platform using Next.js and Supabase. Implemented secure investor dashboards for managing real estate contributions and co-ownership. Leveraged Next.js SSR for optimal performance and SEO best practices.",
    techStack: ["Next.js", "Supabase", "Serverless", "Investment"],
    demoLink: "https://landing-dev.tarh.com.sa/",
    category: "Frontend"
  },
  {
    id: 7,
    imgPath: getScreenshot("https://sanad360.com/login"),
    title: "Sanad360 – RegTech Platform",
    description: "Developed a compliance-focused digital platform using Vue.js to help companies meet regulatory requirements. Implemented workflows for CMA, AML, and Counter-Terrorism Financing (CTF) compliance.",
    techStack: ["Vue.js", "PHP", "Laravel", "RegTech"],
    technologies: { frontend: ["Vue.js"], backend: ["PHP", "Laravel"] },
    demoLink: "https://sanad360.com/login",
    category: "Full Stack"
  },
  {
    id: 8,
    imgPath: getScreenshot("https://diracast-dev.nuwas.store/"),
    title: "Diracast – Event Management System",
    description: "Designed event scheduling, ticketing, and attendee management UIs. Implemented real-time updates and interactive event dashboards with Vue.js.",
    techStack: ["Vue.js", "Real-time", "Event Management", "Ticketing"],
    demoLink: "https://diracast-dev.nuwas.store/",
    category: "Frontend"
  },
  {
    id: 9,
    imgPath: foodbank,
    title: "Kuwait Food Bank",
    description: "Designed and developed a scalable, user-friendly frontend using Vue.js. Implemented secure payment gateway integrations, including Apple Pay, ensuring smooth and reliable donation transactions.",
    techStack: ["Vue.js", "PHP", "Laravel", "Payment Gateway"],
    technologies: { frontend: ["Vue.js"], backend: ["PHP", "Laravel", "Payment Gateway"] },
    demoLink: "https://www.kuwaitfoodbank.org/",
    category: "Full Stack"
  },
  {
    id: 10,
    imgPath: jawwal,
    title: "Jawwal – Multi-Category E-Commerce",
    description: "Developed responsive storefront and checkout experience for electronics. Optimized product listing and filtering UI for performance and usability using Vue.js.",
    techStack: ["Vue.js", "PHP", "Laravel", "E-commerce"],
    technologies: { frontend: ["Vue.js"], backend: ["PHP", "Laravel"] },
    demoLink: "https://bagisto.jawwal.io/",
    category: "Full Stack"
  },
  {
    id: 11,
    imgPath: getMobileScreenshot("https://water-valley.net/"),
    title: "Water Valley – Mobile Lab App",
    description: "Built a React Native mobile app for lab test scheduling and result tracking. Designed a clean and simple mobile-first interface for patient use.",
    techStack: ["React Native", "Mobile", "iOS/Android"],
    demoLink: "https://water-valley.net/",
    category: "Frontend"
  },
  {
    id: 12,
    imgPath: getScreenshot("https://oasisclinics.com/"),
    title: "Oasis Clinics: Revolutionizing Functional Health",
    description: "Developed a comprehensive platform for Oasis Clinics, focusing on functional health and lifestyle medicine. The website integrates services from various medical practitioners, showcasing our unique approach to holistic healthcare.",
    techStack: ["WordPress", "PHP", "Healthcare", "Responsive"],
    demoLink: "https://oasisclinics.com/",
    category: "WordPress"
  },
  {
    id: 13,
    imgPath: getScreenshot("https://luxeaestheticss.com/"),
    title: "Luxe Clinic: Unveiling Luxurious Beauty",
    description: "Discover Timeless Beauty at Luxe Clinic – Where Excellence Meets Elegance",
    techStack: ["WordPress", "PHP", "Healthcare", "Responsive"],
    demoLink: "https://luxeaestheticss.com/",
    category: "WordPress"
  },
  {
    id: 14,
    imgPath: getScreenshot("https://www.fusion-innovations.co/"),
    title: "Fusion Architecture",
    description: "Fusion Architecture is a design practice specializing in modern architecture, interior design, and landscaping. We create exceptional public and private spaces that are not only inspiring to inhabit but also harmoniously integrated with their surroundings.",
    techStack: ["WordPress", "PHP", "Architecture", "Responsive"],
    demoLink: "https://www.fusion-innovations.co/",
    category: "WordPress"
  },
  {
    id: 15,
    imgPath: sport,
    title: "Sports Society: Community Engagement Platform",
    description: "Created a dynamic online platform for a North Coast village project, incorporating interactive property listings, real-time community updates, and an intuitive event management system.",
    techStack: ["PHP", "Laravel", "Blade", "JavaScript"],
    technologies: { frontend: ["Blade", "JavaScript"], backend: ["PHP", "Laravel"] },
    demoLink: "https://www.sportssocietyegypt.com/",
    category: "Full Stack"
  },
  {
    id: 16,
    imgPath: getScreenshot("https://thelegalclinics.com/"),
    title: "Legal Clinic: Empowering MENA Startups",
    description: "Designed a specialized platform for the first law firm dedicated to supporting startups in the MENA region. This project highlights my expertise in creating industry-specific digital solutions that bridge legal services and entrepreneurship.",
    techStack: ["JavaScript", "Legal Tech", "MENA", "Startups"],
    demoLink: "https://thelegalclinics.com/",
    category: "Frontend"
  },
  {
    id: 17,
    imgPath: haat,
    title: "Haat Global CO., LTD for Communications and IT",
    description: "Everything new in the world of advanced technology in the field of special software for applications as well as virtual reality, augmented reality and electronic platforms.",
    techStack: ["WordPress", "PHP", "AR/VR", "Innovation"],
    demoLink: "https://shiprexnow.com/en/",
    category: "WordPress"
  },
  {
    id: 18,
    imgPath: getScreenshot("https://arabcomputer.net/"),
    title: "ArabComputer: Comprehensive E-commerce Solution",
    description: "Designed and developed a feature-rich e-commerce platform using WordPress, tailored for computer hardware and accessories. This project demonstrates my ability to create user-friendly, scalable online stores with advanced product management and customer engagement features.",
    techStack: ["WordPress", "WooCommerce", "PHP", "E-commerce"],
    demoLink: "https://arabcomputer.net/",
    category: "WordPress"
  },
  {
    id: 19,
    imgPath: getScreenshot("https://deebotrade.com/en/"),
    title: "Deebo Trade: Specialized Medical Products Marketplace",
    description: "Crafted a bespoke e-commerce platform for medical products, showcasing my expertise in creating industry-specific digital solutions. This project highlights my ability to integrate complex product catalogs with user-friendly interfaces.",
    techStack: ["WordPress", "WooCommerce", "E-commerce", "Medical"],
    demoLink: "https://deebotrade.com/en/",
    category: "WordPress"
  },
  {
    id: 21,
    imgPath: getScreenshot("https://railwaycoffee.co/"),
    title: "Railway Coffee: Premium Coffee Experience",
    description: "Developed a modern WordPress-based e-commerce platform for a premium coffee brand. Implemented custom theme design, integrated WooCommerce for seamless online ordering, and optimized for mobile-first user experience.",
    techStack: ["WordPress", "WooCommerce", "PHP", "E-commerce"],
    demoLink: "https://railwaycoffee.co/",
    category: "WordPress"
  },
  {
    id: 22,
    imgPath: goldendeal,
    title: "Golden Deal: Full-Stack E-commerce Platform",
    description: "Built a comprehensive e-commerce solution using Angular for dynamic frontend interactions and PHP backend. Implemented advanced product filtering, shopping cart functionality, and secure payment integration for optimal user experience.",
    techStack: ["Angular", "E-commerce", "TypeScript", "Responsive"],
    demoLink: "https://gooldendeal.com",
    category: "Frontend"
  },
  {
    id: 23,
    imgPath: getScreenshot("https://aynulyaqeen-academy.com/"),
    title: "Aynulyaqeen Academy: Educational Platform",
    description: "Developed a comprehensive WordPress-based educational platform for an academy. Implemented course management system, student enrollment features, and responsive design optimized for both desktop and mobile learning experiences.",
    techStack: ["WordPress", "PHP", "MySQL", "Education"],
    demoLink: "https://aynulyaqeen-academy.com/",
    category: "WordPress"
  },
  {
    id: 24,
    imgPath: getScreenshot("https://princederma.com/"),
    title: "Prince Derma: Premium Dermatology Clinic",
    description: "Developed a professional WordPress website for a premium dermatology clinic. Implemented appointment booking system, service showcase, and responsive design optimized for healthcare industry standards.",
    techStack: ["WordPress", "PHP", "Healthcare", "Responsive"],
    demoLink: "https://princederma.com/",
    category: "WordPress"
  },
  {
    id: 25,
    imgPath: rinku,
    title: "Rinku System",
    description: "A leading event management organization that utilizes a sophisticated Marketing Social Media Integration Platform to enhance attendee engagement and event promotion. This platform is designed to empower event attendees to become advocates, creating more social and valuable events through a set of customizable widgets.",
    techStack: ["JavaScript", "Event Management", "Social Media", "Marketing"],
    category: "Frontend"
  },
  {
    id: 26,
    imgPath: getScreenshot("https://www.macber.co/"),
    title: "Macber Company Website",
    description: "Developed a modern, responsive corporate website for Macber using React.js. Implemented dynamic components, optimized performance, and created an engaging user experience with smooth animations and intuitive navigation.",
    techStack: ["React.js", "JavaScript", "Corporate", "Responsive"],
    demoLink: "https://www.macber.co/",
    category: "Frontend"
  }
];
