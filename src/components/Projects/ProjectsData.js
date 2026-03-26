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
    description: "Engineered and scaled a high-performance financial platform using React.js, handling complex, real-time market data and delivering responsive, data-intensive user experiences with advanced trading tools and AI integration.",
    fullDescription: "Kwealth Platform – Frontend Engineer (React.js)\n\nEngineered and scaled a high-performance financial platform using React.js, handling complex, real-time market data and delivering responsive, data-intensive user experiences.\n\nArchitected modular and reusable frontend systems to support advanced financial tools such as market analytics, stock screening, portfolio tracking, and trading simulation, ensuring maintainability and scalability across the platform.\n\nOptimized rendering performance for large datasets and real-time updates (charts, market feeds, signals) by applying techniques such as memoization, lazy loading, and efficient state management patterns.\n\nBuilt advanced data-driven features including:\n\nReal-time market dashboards (TASI, stocks, sectors) with high-frequency updates\nCustom stock screener & filters with complex query logic\nInteractive charting systems optimized for performance\nAlerting system & watchlists with reactive state handling\nStrategy builder & trading simulator for user-driven financial modeling\n\nImproved application performance and UX by reducing unnecessary re-renders, structuring state effectively, and ensuring smooth interaction even under heavy data load.\n\nCollaborated closely with backend teams to design efficient API contracts, minimize network overhead, and ensure accurate financial data representation.\n\nApplied best practices in component architecture, code splitting, and performance tuning, building a frontend capable of scaling with increasing users and data complexity.",
    techStack: ["React.js", "WebSocket", "Real-time Data", "Trading Platform", "AI Integration"],
    demoLink: "https://kwealth.sa/",
    category: "Frontend"
  },
  {
    id: 2,
    imgPath: getScreenshot("https://shiprexnow.com/en/"),
    title: "Shiprex – Shipping ERP System",
    description: "Designed and developed a scalable logistics ERP system using PHP (CakePHP), MySQL, and JavaScript, handling complex order lifecycles, financial workflows, and multi-role system operations with advanced dashboards.",
    fullDescription: "Shiprex – Shipping ERP System (Full-Stack Developer)\n\nDesigned and developed a scalable logistics ERP system using PHP (CakePHP), MySQL, and JavaScript, handling complex order lifecycles, financial workflows, and multi-role system operations.\n\nArchitected core system modules including Orders Management, Invoicing, User Roles & Permissions, Zones Configuration, and Driver Management, enabling end-to-end shipment processing from order creation to financial settlement.\n\nBuilt a robust Orders Management engine supporting multiple workflows (delivery, return, exchange, cash collection), with advanced capabilities such as bulk order import (Excel), barcode-based tracking, and dynamic status transitions across the shipping lifecycle.\n\nEngineered high-performance dashboards with real-time data tables, filtering engines, and reporting systems, allowing users to:\n\nProcess and track large volumes of orders efficiently\nPerform complex searches (barcode, phone, reference ID)\nExport data in multiple formats (CSV, Excel, PDF)\nMonitor operational KPIs (active orders, COD, delivery status)\n\nDeveloped a secure Invoices & Financial Module that automates:\n\nCOD (Cash on Delivery) calculations and courier fees\nInvoice generation and balance clearing workflows\nFinancial reporting and audit-safe transaction tracking\n\nImplemented event-driven system architecture, where key actions (order updates, invoice creation, user actions) trigger integrated services such as notifications (email/SMS) and system logs.\n\nBuilt a flexible RBAC (Role-Based Access Control) system supporting dynamic user roles, permissions, and dashboard configurations for admins, brands, and operational teams.\n\nOptimized database design and queries in MySQL to handle high-volume transactional data, ensuring consistency across orders, invoices, and user activities.\n\nFocused on system reliability, data integrity, and scalability, enabling the platform to manage complex logistics operations and financial flows with minimal manual intervention.",
    techStack: ["PHP", "CakePHP", "MySQL", "JavaScript", "ERP", "Logistics", "Dashboard"],
    technologies: { frontend: ["JavaScript"], backend: ["PHP", "CakePHP"] },
    demoLink: "https://shiprexnow.com/en/",
    category: "Full Stack"
  },
  {
    id: 3,
    imgPath: getScreenshot("http://www.aramhrm.net/"),
    title: "Aram – HR Management System",
    description: "Developed and scaled a comprehensive HR management platform using React.js, delivering a data-intensive system that handles the full employee lifecycle from recruitment to payroll and performance tracking with modular architecture.",
    fullDescription: "ARAM – HR & Employee Management System (Frontend Engineer – React.js)\n\nDeveloped and scaled a comprehensive HR management platform using React.js, delivering a data-intensive system that handles the full employee lifecycle from recruitment to payroll and performance tracking.\n\nBuilt modular, reusable frontend architecture to support complex HR workflows, ensuring maintainability and scalability across multiple business domains.\n\nEngineered advanced system modules including:\n\nEmployee Management System with full lifecycle tracking (hiring → onboarding → termination) and digital document management\nPayroll & Benefits Engine with dynamic calculations for salaries, allowances, deductions, and social insurance\nAttendance Tracking System integrated with biometric devices (fingerprint, facial recognition) and GPS-based validation\nRecruitment Platform for managing job postings, applicants, and interview pipelines\nEmployee Self-Service Portal enabling leave requests, profile updates, and real-time request tracking\nReports & Analytics Dashboards with interactive visualizations for operational and strategic insights\n\nOptimized frontend performance for handling large datasets and complex state flows, applying techniques such as memoization, lazy loading, and efficient state management.\n\nDesigned responsive and user-centric interfaces to simplify complex HR operations while maintaining high performance and usability.\n\nCollaborated with backend teams to integrate APIs, ensure data consistency, and streamline workflows across payroll, attendance, and employee records.\n\nFocused on building scalable frontend systems, enabling the platform to support growing organizational needs and high user concurrency.",
    techStack: ["React.js", "HR Management", "Payroll", "Attendance", "Biometric", "Analytics"],
    demoLink: "http://www.aramhrm.net/",
    category: "Frontend"
  },
  {
    id: 4,
    imgPath: getScreenshot("https://kera.sa"),
    title: "Kreaa – Real Estate Management (Saudi Market)",
    description: "Designed and developed a full-stack real estate management platform using React.js, PHP (Laravel), and Filament, delivering an end-to-end solution for managing properties, tenants, contracts, and financial operations with scalable architecture.",
    fullDescription: "Keraa – Real Estate Management Platform (Full-Stack Developer)\n\nDesigned and developed a full-stack real estate management platform using React.js, PHP (Laravel), and Filament, delivering an end-to-end solution for managing properties, tenants, contracts, and financial operations.\n\nArchitected a scalable system that streamlines the entire property lifecycle, from unit listing and tenant onboarding to contract management, payments, and maintenance tracking.\n\nBuilt and integrated core modules including:\n\nLease Contract Management with digital documentation and lifecycle tracking\nProperty & Unit Management System for handling residential and commercial assets\nListing & Marketing Module to manage and showcase available properties\nPayments & Collection System for tracking rent, dues, and financial transactions\nTenant Management & Rental Operations with automated workflows\nMaintenance Management for handling service requests and periodic operations\nNotifications & Alerts System for real-time updates on contracts, payments, and activities\nReports & Analytics داشبورد providing actionable insights on revenue, occupancy, and operations\n\nDeveloped a robust backend using Laravel, implementing clean architecture, RESTful APIs, and secure data handling, while leveraging Filament to build powerful and efficient admin panels.\n\nEngineered a responsive and dynamic frontend with React.js, focusing on usability, performance, and seamless interaction across complex datasets.\n\nOptimized database structure and queries to ensure consistency and performance across high-volume property and financial data.\n\nDelivered a system focused on automation, scalability, and operational efficiency, enabling property owners and managers to manage assets with minimal manual effort.",
    techStack: ["React.js", "PHP", "Laravel", "Filament", "Real Estate", "Property Management", "MySQL"],
    technologies: { frontend: ["React.js"], backend: ["PHP", "Laravel", "Filament"] },
    demoLink: "https://kera.sa/",
    category: "Full Stack"
  },
  {
    id: 5,
    imgPath: medicalsass, // No live URL provided yet
    title: "Medical SaaS Platform",
    description: "Built a scalable, responsive SaaS platform using React.js, focusing on healthcare workflows and patient management with reusable UI components and external API integrations for identity verification and medical data.",
    fullDescription: "Built a scalable, responsive SaaS platform using React.js, focusing on healthcare workflows and patient management. Developed reusable UI components, integrated external APIs for identity verification and medical data.",
    techStack: ["React.js", "Node.js", "SaaS", "Healthcare", "API Integration", "Patient Management"],
    technologies: { frontend: ["React.js"], backend: ["Node.js", "API Integration"] },
    category: "Full Stack"
  },
  {
    id: 6,
    imgPath: getScreenshot("https://landing-dev.tarh.com.sa/"),
    title: "Tarh Platform – Real Estate Investment",
    description: "Developed a serverless real estate investment platform using Next.js and Supabase, implementing secure investor dashboards for managing real estate contributions and co-ownership with optimal performance and SEO best practices.",
    fullDescription: "Developed a serverless real estate investment platform using Next.js and Supabase. Implemented secure investor dashboards for managing real estate contributions and co-ownership. Leveraged Next.js SSR for optimal performance and SEO best practices.",
    techStack: ["Next.js", "Supabase", "Serverless", "Real Estate", "Investment", "SSR"],
    demoLink: "https://landing-dev.tarh.com.sa/",
    category: "Frontend"
  },
  {
    id: 7,
    imgPath: getScreenshot("https://sanad360.com/login"),
    title: "Sanad360 – RegTech Platform",
    description: "Developed a compliance-focused digital platform using Vue.js to help companies meet regulatory requirements, implementing workflows for CMA, AML, and Counter-Terrorism Financing (CTF) compliance with secure data handling.",
    fullDescription: "Sanad360 – RegTech Compliance Platform (Vue.js / Laravel Developer)\n\nDeveloped a secure, compliance-focused RegTech platform using Vue.js and Laravel, designed to help organizations meet regulatory requirements for CMA, AML, and Counter-Terrorism Financing (CTF) frameworks.\n\nEngineered a modular system architecture to support complex compliance workflows, secure data processing, and structured regulatory reporting across enterprise users.\n\nBuilt core features including:\n\nCompliance workflow engine for CMA, AML, and CTF processes\nRisk and regulatory management modules to support structured decision-making\nSecure data handling layer ensuring integrity and protection of sensitive information\nInteractive Vue.js dashboards for monitoring compliance status and operational insights\nRole-based access control (RBAC) for managing enterprise user permissions and data visibility\nAudit-ready system design supporting traceability and compliance reporting\n\nImplemented backend services using Laravel, building secure APIs, workflow logic, and data validation layers aligned with enterprise compliance standards.\n\nFocused on delivering a high-security, enterprise-grade platform with strong emphasis on scalability, regulatory accuracy, and system integrity.",
    techStack: ["Vue.js", "PHP", "Laravel", "RegTech", "Compliance", "CMA", "AML"],
    technologies: { frontend: ["Vue.js"], backend: ["PHP", "Laravel"] },
    demoLink: "https://sanad360.com/login",
    category: "Full Stack"
  },
  {
    id: 8,
    imgPath: getScreenshot("https://diracast-dev.nuwas.store/"),
    title: "Diracast – Event Management System",
    description: "Designed event scheduling, ticketing, and attendee management UIs, implementing real-time updates and interactive event dashboards with Vue.js for seamless event management and user engagement.",
    fullDescription: "Diracast – Real-Time Event Management & Ticketing Platform (Vue.js Developer)\n\nDeveloped a dynamic event management system using Vue.js, focused on real-time scheduling, ticketing, and attendee management for high-traffic events.\n\nEngineered a component-driven frontend architecture to deliver a highly interactive and responsive dashboard experience, enabling seamless event operations and user engagement.\n\nBuilt core features including:\n\nEvent scheduling system for creating and managing events in real time\nTicketing module for handling event registrations and attendee tracking\nInteractive admin dashboard for monitoring events, users, and performance metrics\nReal-time UI updates to reflect live changes in events and attendance status\nResponsive interface design optimized for both desktop and mobile users\n\nFocused on delivering a fast, real-time user experience, ensuring smooth data flow and instant UI updates for event organizers and participants.\n\nApplied strong Vue.js architecture patterns, ensuring scalability, maintainability, and efficient state management across complex event workflows.",
    techStack: ["Vue.js", "Event Management", "Real-time", "Ticketing", "Dashboard"],
    demoLink: "https://diracast-dev.nuwas.store/",
    category: "Frontend"
  },
  {
    id: 9,
    imgPath: foodbank,
    title: "Kuwait Food Bank",
    description: "Developed a scalable donation platform using Vue.js and Laravel, enabling secure and seamless online contributions with Apple Pay integration and reliable payment processing for charitable giving.",
    fullDescription: "Kuwait Food Bank – Donation Platform (Full-Stack Developer)\n\nDeveloped a scalable donation platform using Vue.js and Laravel, enabling secure and seamless online contributions with a focus on reliability and user experience.\n\nEngineered a responsive and user-friendly frontend with Vue.js, optimizing performance and ensuring smooth user flows for donation processes across devices.\n\nBuilt and integrated secure payment gateway solutions, including Apple Pay, handling transaction workflows, validation, and error handling to ensure high reliability and trust.\n\nDesigned backend services using Laravel, implementing RESTful APIs, transaction management, and secure handling of payment data.\n\nFocused on performance, security, and fault tolerance, ensuring consistent transaction processing and minimizing failure rates during high-traffic donation periods.\n\nCollaborated on delivering a system that simplifies charitable giving through fast, intuitive UX and robust payment infrastructure.",
    techStack: ["Vue.js", "PHP", "Laravel", "Payment Gateway", "Apple Pay", "Donations"],
    technologies: { frontend: ["Vue.js"], backend: ["PHP", "Laravel", "Payment Gateway"] },
    demoLink: "https://www.kuwaitfoodbank.org/",
    category: "Full Stack"
  },
  {
    id: 10,
    imgPath: jawwal,
    title: "Jawwal – Multi-Category E-Commerce",
    description: "Developed a scalable e-commerce platform using Vue.js and Laravel, focused on delivering a fast, responsive, and conversion-optimized shopping experience for electronics and multi-category products with efficient catalog management.",
    fullDescription: "Jawwal – Multi-Category E-Commerce Platform (Full-Stack Developer)\n\nDeveloped a scalable e-commerce platform using Vue.js and Laravel, focused on delivering a fast, responsive, and conversion-optimized shopping experience for electronics and multi-category products.\n\nEngineered a high-performance storefront and checkout flow using Vue.js, ensuring smooth navigation, fast rendering, and seamless user interactions across devices.\n\nOptimized product listing and filtering systems to efficiently handle large product catalogs, improving searchability, usability, and overall user experience.\n\nBuilt backend services with Laravel, implementing APIs for product management, cart operations, and order processing, ensuring data consistency and reliability.\n\nEnhanced performance through efficient state handling, lazy loading, and optimized API consumption to reduce load times and improve responsiveness.\n\nFocused on UX and conversion optimization, streamlining the checkout process and minimizing friction in the user journey.",
    techStack: ["Vue.js", "PHP", "Laravel", "E-commerce", "Electronics", "Conversion"],
    technologies: { frontend: ["Vue.js"], backend: ["PHP", "Laravel"] },
    demoLink: "https://bagisto.jawwal.io/",
    category: "Full Stack"
  },
  {
    id: 11,
    imgPath: getMobileScreenshot("https://water-valley.net/"),
    title: "Water Valley – Mobile Lab App",
    description: "Developed a cross-platform mobile application using React Native for iOS and Android, enabling users to schedule lab tests and track medical results with a scalable architecture and mobile-first UX design.",
    fullDescription: "Water Valley – Mobile Lab Application (React Native Developer)\n\nDeveloped a cross-platform mobile application using React Native for iOS and Android, enabling users to schedule lab tests and track medical results بسهولة وموثوقية.\n\nBuilt a scalable and maintainable mobile architecture, focusing on performance, smooth navigation, and responsive UI across different devices.\n\nImplemented core features including:\n\nLab test booking system with intuitive scheduling flows\nResults tracking module with clear data presentation\nUser-friendly mobile interface optimized for patient experience\n\nOptimized app performance by managing state efficiently, reducing unnecessary re-renders, and ensuring fast screen transitions.\n\nFocused on delivering a mobile-first UX, simplifying complex healthcare interactions into a clean and accessible user journey.",
    techStack: ["React Native", "Mobile", "iOS", "Android", "Healthcare", "Lab Tests"],
    demoLink: "https://water-valley.net/",
    category: "Frontend"
  },
  {
    id: 12,
    imgPath: getScreenshot("https://oasisclinics.com/"),
    title: "Oasis Clinics: Revolutionizing Functional Health",
    description: "Developed a scalable and responsive healthcare platform using WordPress and PHP, delivering a comprehensive digital experience for a multi-specialty medical center focused on functional health and lifestyle medicine with complex workflows.",
    fullDescription: "Oasis Clinics – Healthcare Platform (WordPress / PHP Developer)\n\nDeveloped a scalable and responsive healthcare platform using WordPress and PHP, delivering a comprehensive digital experience for a multi-specialty medical center focused on functional health and lifestyle medicine.\n\nCustomized and extended WordPress to support complex healthcare workflows, integrating multiple services and practitioner offerings into a unified platform.\n\nEngineered key features including:\n\nMulti-specialty clinic structure supporting 30+ medical fields with organized patient service flows\nSpecialized services modules (surgery, endoscopy, ultrasound) accessible both internally and for external practitioners\nOnline consultation system enabling remote medical services and supporting medical tourism use cases\nService request flows for home visits, checkups, and portable medical diagnostics\n\nOptimized the platform for performance, responsiveness, and accessibility, ensuring a seamless experience across devices for patients and medical staff.\n\nFocused on content architecture and scalability, structuring the platform to handle diverse medical services while maintaining clarity and usability.\n\nCollaborated with stakeholders to translate complex healthcare requirements into a user-friendly digital platform, improving service accessibility and patient engagement.",
    techStack: ["WordPress", "PHP", "Healthcare", "Multi-specialty", "Medical Tourism", "Consultation"],
    demoLink: "https://oasisclinics.com/",
    category: "WordPress"
  },
  {
    id: 13,
    imgPath: getScreenshot("https://luxeaestheticss.com/"),
    title: "Luxe Clinic: Unveiling Luxurious Beauty",
    description: "Developed a high-end, responsive aesthetic clinic platform using WordPress and PHP, focused on delivering a premium digital experience aligned with luxury beauty branding and streamlined client engagement workflows.",
    fullDescription: "Luxe Clinic – Aesthetic & Beauty Platform (WordPress / PHP Developer)\n\nDeveloped a high-end, responsive aesthetic clinic platform using WordPress and PHP, focused on delivering a premium digital experience aligned with luxury beauty branding.\n\nCustomized WordPress to support structured presentation of cosmetic services, treatment categories, and clinic offerings, ensuring scalability and ease of content management.\n\nEngineered key features including:\n\nService catalog system for aesthetic and beauty treatments with clear categorization\nAppointment & inquiry flows to streamline client engagement and lead generation\nResponsive, mobile-first design ensuring a seamless experience across devices\nContent-driven architecture optimized for showcasing brand identity and services\n\nOptimized performance and UX to provide fast load times and smooth navigation, enhancing user engagement and conversion rates.\n\nFocused on delivering a clean, modern UI aligned with luxury standards, balancing visual design with usability and performance.",
    techStack: ["WordPress", "PHP", "Aesthetic Clinic", "Beauty", "Luxury Brand", "Appointment"],
    demoLink: "https://luxeaestheticss.com/",
    category: "WordPress"
  },
  {
    id: 14,
    imgPath: getScreenshot("https://www.fusion-innovations.co/"),
    title: "Fusion Architecture",
    description: "Developed a modern and responsive architecture and design platform using WordPress and PHP, built to showcase architectural projects, interior design works, and landscaping services in a structured and visually engaging way with portfolio-driven content.",
    fullDescription: "Fusion Architecture – Architecture & Design Platform (WordPress / PHP Developer)\n\nDeveloped a modern and responsive architecture and design platform using WordPress and PHP, built to showcase architectural projects, interior design works, and landscaping services in a structured and visually engaging way.\n\nCustomized and extended WordPress to support a portfolio-driven content system, enabling efficient presentation of projects across multiple categories including public spaces, private residences, and landscape designs.\n\nEngineered key features including:\n\nProject portfolio system for architecture, interior, and landscaping showcases\nStructured content architecture to present visual-heavy design work in an organized flow\nResponsive, mobile-first interface optimized for high-quality visual browsing\nService presentation modules highlighting design capabilities and company expertise\n\nFocused on delivering a visually immersive and performance-optimized experience, ensuring fast rendering of media-heavy pages while maintaining design integrity.\n\nWorked on aligning the platform with modern architectural branding standards, combining aesthetics, usability, and content clarity to reflect the studio's creative identity.",
    techStack: ["WordPress", "PHP", "Architecture", "Interior Design", "Portfolio", "Landscaping"],
    demoLink: "https://www.fusion-innovations.co/",
    category: "WordPress"
  },
  {
    id: 15,
    imgPath: sport,
    title: "Sports Society: Community Engagement Platform",
    description: "Developed a dynamic community engagement platform using PHP, Laravel, Blade, and JavaScript, designed for a North Coast village project to enhance resident interaction and digital services with real-time updates and property listings.",
    fullDescription: "Sports Society – Community Engagement Platform (Full-Stack Developer)\n\nDeveloped a dynamic community engagement platform using PHP, Laravel, Blade, and JavaScript, designed for a North Coast village project to enhance resident interaction and digital services.\n\nEngineered a scalable full-stack system supporting real-time community updates, property listings, and event management workflows, delivering a centralized platform for residents and administrators.\n\nBuilt core modules including:\n\nInteractive property listings system with dynamic filtering and structured data presentation\nCommunity updates module for real-time announcements and engagement\nEvent management system enabling creation, scheduling, and participation tracking\nAdmin dashboard (Laravel + Blade) for managing content, users, and system data\n\nDeveloped responsive frontend interfaces using Blade templates and JavaScript, ensuring smooth navigation and usability across devices.\n\nFocused on system structure, maintainability, and user engagement, enabling seamless communication between residents and administrators within a unified digital ecosystem.",
    techStack: ["PHP", "Laravel", "Blade", "JavaScript", "Community", "Property Listings", "Event Management"],
    technologies: { frontend: ["Blade", "JavaScript"], backend: ["PHP", "Laravel"] },
    demoLink: "https://www.sportssocietyegypt.com/",
    category: "Full Stack"
  },
  {
    id: 16,
    imgPath: getScreenshot("https://thelegalclinics.com/"),
    title: "Legal Clinic: Empowering MENA Startups",
    description: "Designed and developed a specialized LegalTech platform using JavaScript, focused on empowering startups across the MENA region with structured, accessible, and scalable legal services through a productized digital experience.",
    fullDescription: "Legal Clinic – LegalTech Platform for MENA Startups (Frontend Engineer)\n\nDesigned and developed a specialized LegalTech platform using JavaScript, focused on empowering startups across the MENA region with structured, accessible, and scalable legal services.\n\nBuilt a dynamic and content-rich interface for the \"365 Legal Program\", translating complex legal offerings into a clear, productized digital experience for startups.\n\nEngineered key platform capabilities including:\n\nLegal service package system (Kickoff, Professional, Advanced tiers) with structured pricing and feature comparison\nStartup-focused legal modules covering incorporation, contracts, trademarks, VAT registration, and compliance services\nSearchable legal knowledge and service catalog for fast discovery of legal offerings\nDynamic content rendering system for program updates, packages, and service descriptions\nResponsive UI optimized for accessibility and clarity across business and legal users\n\nFocused on transforming complex legal operations into a simple, product-driven digital experience, enabling startups to understand and access legal services without friction.\n\nApplied strong frontend architecture principles to ensure scalability, maintainability, and content flexibility, supporting continuous expansion of legal offerings and programs.",
    techStack: ["JavaScript", "Legal Tech", "MENA", "Startups", "365 Legal Program", "Compliance"],
    demoLink: "https://thelegalclinics.com/",
    category: "Frontend"
  },
  {
    id: 17,
    imgPath: haat,
    title: "Haat Global CO., LTD for Communications and IT",
    description: "Developed and contributed to a large-scale digital innovation platform for a technology company specializing in software systems, AR/VR solutions, cybersecurity, ERP systems, and enterprise infrastructure using WordPress and PHP with structured service presentation.",
    fullDescription: "HAT Global Technologies – Digital Innovation Platform (WordPress / PHP Developer)\n\nDeveloped and contributed to a large-scale digital innovation platform for a technology company specializing in software systems, AR/VR solutions, cybersecurity, ERP systems, and enterprise infrastructure, using WordPress and PHP.\n\nEngineered a structured and scalable web platform to present complex enterprise services in a clear, user-friendly, and business-oriented experience.\n\nBuilt and supported key system modules including:\n\nEnterprise ERP & E-Invoicing Solutions aligned with financial and regulatory requirements\nSoftware Development Services Presentation Layer for custom applications and digital products\nCloud & Infrastructure Services Section covering servers, hosting, and global hardware supply chain solutions\nCybersecurity Services Module showcasing system protection, vulnerability analysis, and security awareness solutions\nAR/VR Innovation Showcase presenting immersive technology solutions and next-generation digital experiences\nTechnical Support & Service System designed to communicate ongoing client support and maintenance services\n\nFocused on building a content-rich, enterprise-grade architecture capable of handling diverse technical domains while maintaining clarity, performance, and scalability.\n\nOptimized the platform for responsiveness, usability, and structured information delivery, ensuring accessibility across business clients, technical users, and enterprise stakeholders.",
    techStack: ["WordPress", "PHP", "AR/VR", "Cybersecurity", "ERP", "Cloud Infrastructure", "Enterprise"],
    demoLink: "https://haat.com.sa/",
    category: "WordPress"
  },
  {
    id: 18,
    imgPath: getScreenshot("https://arabcomputer.net/"),
    title: "ArabComputer: Comprehensive E-commerce Solution",
    description: "Developed a scalable e-commerce platform using WordPress, WooCommerce, and PHP, tailored for selling computer hardware and accessories with a focus on performance, usability, and conversion optimization for technical products.",
    fullDescription: "ArabComputer – E-Commerce Platform (WordPress / WooCommerce Developer)\n\nDeveloped a scalable e-commerce platform using WordPress, WooCommerce, and PHP, tailored for selling computer hardware and accessories, with a focus on performance, usability, and conversion optimization.\n\nEngineered a fully functional online store with a structured product system supporting categories, variations, and inventory management for complex hardware listings.\n\nBuilt and customized core e-commerce features including:\n\nProduct catalog system optimized for hardware components and accessories\nWooCommerce checkout flow with streamlined purchase experience\nCart and order management system ensuring smooth transaction handling\nResponsive storefront UI optimized for desktop and mobile shopping experiences\nProduct filtering and navigation system for improved discoverability\n\nEnhanced platform performance through theme optimization, query efficiency improvements, and lightweight frontend rendering.\n\nFocused on delivering a conversion-driven user experience, ensuring fast browsing, clear product presentation, and frictionless checkout flow.",
    techStack: ["WordPress", "WooCommerce", "PHP", "Computer Hardware", "Electronics", "Performance"],
    demoLink: "https://arabcomputer.net/",
    category: "WordPress"
  },
  {
    id: 19,
    imgPath: getScreenshot("https://deebotrade.com/en/"),
    title: "Deebo Trade: Specialized Medical Products Marketplace",
    description: "Developed a specialized medical e-commerce platform using WordPress, WooCommerce, and PHP, focused on delivering a secure and structured marketplace for medical products and supplies with healthcare-specific requirements.",
    fullDescription: "Deebo Trade – Medical E-Commerce Marketplace (WordPress / WooCommerce Developer)\n\nDeveloped a specialized medical e-commerce platform using WordPress, WooCommerce, and PHP, focused on delivering a secure and structured marketplace for medical products and supplies.\n\nEngineered a scalable product and catalog system tailored for healthcare requirements, ensuring accurate categorization, reliable browsing, and efficient inventory presentation for medical items.\n\nBuilt and customized core marketplace features including:\n\nMedical product catalog system with structured categories and detailed product data\nWooCommerce-powered e-commerce flow for secure browsing, cart, and checkout\nOrder management system optimized for reliability and traceability\nResponsive and accessible UI designed for professional medical users and institutions\nSearch and filtering system to quickly locate medical products and supplies\n\nFocused on delivering a trust-oriented user experience, ensuring clarity, accuracy, and usability in a sensitive healthcare-related domain.\n\nOptimized performance and platform stability to support consistent operations and scalable product listings.",
    techStack: ["WordPress", "WooCommerce", "PHP", "Medical E-commerce", "Healthcare", "Trust"],
    demoLink: "https://deebotrade.com/en/",
    category: "WordPress"
  },
  {
    id: 21,
    imgPath: getScreenshot("https://railwaycoffee.co/"),
    title: "Railway Coffee: Premium Coffee Experience",
    description: "Developed a modern, conversion-focused e-commerce platform using WordPress, WooCommerce, and PHP for a premium coffee brand, delivering a smooth and engaging online shopping experience with custom theme and payment integrations.",
    fullDescription: "Railway Coffee – Premium E-Commerce Platform (WordPress / WooCommerce Developer)\n\nDeveloped a modern, conversion-focused e-commerce platform using WordPress, WooCommerce, and PHP for a premium coffee brand, delivering a smooth and engaging online shopping experience.\n\nEngineered a custom WordPress theme with a strong focus on brand identity, performance, and user experience, ensuring a premium feel across all customer touchpoints.\n\nBuilt and integrated core commerce and operational features including:\n\nWooCommerce-based store system for product management, cart, and checkout flow\nCustom theme development optimized for speed, responsiveness, and UX consistency\nTappy Payment Gateway integration enabling secure and seamless online transactions\nsmsa express Shipping integration for automated shipping calculations and order fulfillment\nProduct catalog system tailored for coffee products with clean browsing experience\n\nOptimized the platform for performance and conversion, improving checkout flow efficiency and reducing friction in the user journey.\n\nFocused on delivering a premium digital brand experience, combining elegant UI, reliable backend integration, and scalable e-commerce architecture.",
    techStack: ["WordPress", "WooCommerce", "PHP", "Coffee Brand", "Premium", "Tappy Payment"],
    demoLink: "https://railwaycoffee.co/",
    category: "WordPress"
  },
  {
    id: 22,
    imgPath: goldendeal,
    title: "Golden Deal: Full-Stack E-commerce Platform",
    description: "Developed a responsive e-commerce marketplace platform using Angular and TypeScript, focused on enabling users to efficiently buy and sell goods and services within a scalable digital ecosystem with modular frontend architecture.",
    fullDescription: "The Golden Deal – E-Commerce Marketplace (Angular Developer)\n\nDeveloped a responsive e-commerce marketplace platform using Angular and TypeScript, focused on enabling users to efficiently buy and sell goods and services within a scalable digital ecosystem.\n\nEngineered a modular and maintainable frontend architecture, ensuring high performance, clean code structure, and smooth user experience across all devices.\n\nBuilt core marketplace features including:\n\nProduct listing and discovery system enabling sellers to showcase goods and services\nResponsive UI/UX design optimized for mobile and desktop users\nMarketplace flow for buyers and sellers ensuring seamless interaction between both sides\nDynamic state-driven interface for handling listings, updates, and user interactions\n\nFocused on delivering a fast, intuitive, and user-friendly marketplace experience, improving usability and accessibility for both sellers and buyers.\n\nApplied TypeScript best practices and component-based architecture to ensure scalability, maintainability, and long-term extensibility of the platform.",
    techStack: ["Angular", "TypeScript", "Marketplace", "E-commerce", "Buy & Sell", "Modular"],
    demoLink: "https://gooldendeal.com",
    category: "Frontend"
  },
  {
    id: 23,
    imgPath: getScreenshot("https://aynulyaqeen-academy.com/"),
    title: "Aynulyaqeen Academy: Educational Platform",
    description: "Developed a scalable educational platform using WordPress, PHP, and MySQL, designed to support academy operations including course management, student enrollment, and content delivery with structured academic workflows.",
    fullDescription: "Aynulyaqeen Academy – Educational Platform (WordPress / PHP Developer)\n\nDeveloped a scalable educational platform using WordPress, PHP, and MySQL, designed to support academy operations including course management, student enrollment, and content delivery.\n\nEngineered a structured system to manage academic content and streamline student interactions, ensuring a smooth and organized digital learning experience.\n\nBuilt core features including:\n\nCourse management system for creating and organizing educational programs\nStudent enrollment workflow enabling seamless registration and participation tracking\nResponsive learning interface optimized for accessibility across devices\nContent management system (CMS) customization for easy academy updates and course publishing\nDatabase-driven architecture (MySQL) ensuring reliable data storage and retrieval\n\nFocused on delivering a user-friendly educational experience, improving accessibility for students and simplifying administrative operations for academy staff.\n\nOptimized platform performance and usability to support a growing number of students and courses efficiently.",
    techStack: ["WordPress", "PHP", "MySQL", "Education", "Course Management", "Student Enrollment"],
    demoLink: "https://aynulyaqeen-academy.com/",
    category: "WordPress"
  },
  {
    id: 24,
    imgPath: getScreenshot("https://princederma.com/"),
    title: "Prince Derma: Premium Dermatology Clinic",
    description: "Developed a modern WordPress-based e-commerce and brand platform for Prince Derma, a premium skincare and anti-aging company focused on aesthetics, innovation, and global beauty solutions with structured digital experience.",
    fullDescription: "Prince Derma – Premium Skincare & E-Commerce Brand Platform (WordPress / PHP Developer)\n\nDeveloped a modern WordPress-based e-commerce and brand platform for Prince Derma, a premium skincare and anti-aging company focused on aesthetics, innovation, and global beauty solutions.\n\nEngineered a structured digital experience to present the brand's identity, story, and product philosophy while supporting scalable product showcasing and customer engagement.\n\nBuilt core features including:\n\nBrand storytelling architecture highlighting company mission, heritage, and global presence\nPremium product presentation system for skincare and anti-aging product lines\nE-commerce-ready structure (WordPress/PHP) for future online selling expansion\nResponsive, mobile-first design optimized for high-end user experience\nContent management system customization for easy updates of products and brand content\nSEO-friendly structure to improve visibility and brand reach globally\n\nFocused on delivering a luxury digital experience that reflects the brand's identity—combining elegance, performance, and clarity to enhance trust and customer engagement.",
    techStack: ["WordPress", "PHP", "Skincare", "Anti-aging", "E-commerce", "Luxury Brand"],
    demoLink: "https://princederma.com/",
    category: "WordPress"
  },
  {
    id: 25,
    imgPath: rinku,
    title: "Rinku System",
    description: "Developed a dynamic event management and marketing platform using JavaScript, focused on enhancing attendee engagement and social media-driven event promotion with integrated marketing automation tools.",
    fullDescription: "Rinku System – Event & Social Media Marketing Platform (Frontend Developer)\n\nDeveloped a dynamic event management and marketing platform using JavaScript, focused on enhancing attendee engagement and social media-driven event promotion.\n\nEngineered a web-based system that integrates event operations with marketing automation and social media engagement tools, enabling organizations to amplify reach and user participation.\n\nBuilt core features including:\n\nEvent management system for organizing and tracking events and attendees\nSocial media integration layer to support sharing, engagement, and promotion workflows\nMarketing engagement tools designed to turn attendees into active brand advocates\nResponsive and interactive UI components for smooth user interaction across devices\nReal-time event content updates improving communication between organizers and participants\n\nFocused on delivering a high-engagement digital experience, combining event operations with marketing functionality to maximize visibility, participation, and user interaction.\n\nApplied strong frontend architecture principles in JavaScript, ensuring scalability, maintainability, and smooth performance under high user activity.",
    techStack: ["JavaScript", "Event Management", "Social Media", "Marketing", "Automation", "Engagement"],
    category: "Frontend"
  },
  {
    id: 26,
    imgPath: getScreenshot("https://www.macber.co/"),
    title: "Macber Company Website",
    description: "Developed a modern, responsive corporate website for Macber using React.js and JavaScript, focused on delivering a fast, scalable, and engaging digital presence with component-based architecture and performance optimization.",
    fullDescription: "Macber Company Website – Corporate Platform (React.js Developer)\n\nDeveloped a modern, responsive corporate website for Macber using React.js and JavaScript, focused on delivering a fast, scalable, and engaging digital presence for the company.\n\nEngineered a component-based frontend architecture to ensure reusability, maintainability, and performance optimization across the entire platform.\n\nBuilt key features including:\n\nDynamic UI components for structured corporate content presentation\nResponsive design system optimized for all screen sizes and devices\nPerformance optimization techniques including efficient rendering and component structuring\nEngaging user experience design focused on clarity, smooth navigation, and modern UI patterns\nScalable React architecture supporting future feature expansion and content updates\n\nFocused on delivering a high-performance corporate experience, balancing clean design with technical efficiency to represent the brand professionally and effectively.",
    techStack: ["React.js", "JavaScript", "Corporate Website", "Component Architecture", "Performance", "UX"],
    demoLink: "https://www.macber.co/",
    category: "Frontend"
  }
];
