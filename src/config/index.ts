import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Nurzhan M — Web Developer",
  author: "Nurzhan",
  description:
    "Software Engineer based in Almaty, Kazakhstan. I specialize in web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/me-sm1.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/nurzhan-132/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/momynkul-n/" },
    { text: "Github", href: "https://github.com/nurzhan-132/" },
    { text: "Youtube", href: "https://github.com/nurzhan-132/" },
    { text: "Instagram", href: "https://instagram.com/nurzhan.1s" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};


export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nurzhan M.",
    specialty: "Software Engineer",
    summary:
      "Developer based in Almaty, Kazakhstan. I specialize in web and mobile application development and maintenance.",
    email: "nurzhanmomynov01@email.com",
  },
  experience: [
    {
      company: "Halyk Bank",
      position: "Full Stack Engineer (Go, TS)",
      startDate: "October 2024",
      endDate: "Present",
      summary: [
        "Played a key role in modernizing a legacy Delphi application by rewriting it in Golang and React, resulting in a 30% reduction in requests to support  engineers and a significant decrease in manual labor, thereby improving overall efficiency and productivity.",
        "At DamuCRM, designed and optimized business processes, developed and maintained web application using Lua, Golang, AngularJS and PostgreSQL. My work involved automating workflows, enhancing application performance.",
        "Integrated industrial printers within DamuCRM, replacing a paid external service and resulting in significant cost savings.",
        "Contributed to architecture design, optimized complex database queries, and ensured smooth integration with Oracle and PostgreSQL."
      ],
    },
    {
      company: "Kazakh-British Technical University",
      position: "Teaching Assistant",
      startDate: "Oct 2023",
      endDate: "Jun 2024",
      summary: [
        "Contributed to the preparation of educational materials and resources for the \"Web Development\" course.",
        "Actively collaborated with the senior lecturer in creating and reviewing weekly assignments for students.",
        "Participated in the defense of laboratory works of undergraduate students in the course \"Web Development\".",
      ],
    },
    {
      company: "Arcana Inc.",
      position: "FrontEnd Engineer & React",
      startDate: "Feb 2023",
      endDate: "Sep 2024",
      summary: [
        "Built and published a PWA using NextJS from scratch for tracking utility meter readings and creating service requests, with support for both mobile and desktop versions. Created a reusable JavaScript library for a bottom sheet component",
        "Optimized application load speed by 19% through the use of memoization, list virtualization, lazy loading of React components, and asynchronous Redux reducers. Improved code utilization from 45% to 65%.",
        "Built an admin panel for managing orders and clients, significantly improving data handling efficiency.",
        "Integrated Chart.js for data visualization, enhancing user interaction with the information."
      ],
    },
    {
      company: "NLS Kazakhstan",
      position: "Frontend Engineer & Vue",
      startDate: "Feb 2022",
      endDate: "Feb 2023",
      summary: [
        "Developed and maintained a CRM system using Vue.js and Nuxt.js for efficient client data management.",
        "Utilized Vuetify and Tailwind CSS to create responsive interfaces, enhancing the user experience and reducing UI-related issues by 30%.",
        "Handled and resolved numerous bugs, refactored existing code, leading to a 25% increase in system efficiency and user satisfaction.",
        "Successfully migrated the project from Vue 2 to Vue 3, implementing the Composition API while adhering to best practices, resulting in improved code maintainability."


      ],
    },
  ],
  projects: [
    {
      name: "ATHENA",
      summary: "Work-Hour Tracking mobile application written on Flutter",
      linkPreview: "/",
      linkSource: "https://github.com/nurzhan-132/athena_hour_tracker_app",
      image: "/athena.png",
    },
    {
      name: "Our-Kahoot",
      summary: "Our-Kahoot is developed to improve learning performance and classroom dynamics.",
      linkPreview: "/",
      linkSource: "https://github.com/nurzhan-132/our-kahoot",
      image: "/kahoot.png",
    },
    {
      name: "HH.KZ Clone",
      summary: "A modern Job seacrh and posting platform with resumes and vacancies.",
      linkPreview: "/",
      linkSource: "https://github.com/nurzhan-132/hh.kz-fullstack",
      image: "/hh.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Nurzhan M., Full Stack Engineer with 3+ years of commercial experience. Primary focus on JavaScript/TypeScript with Vue/Nuxt and React/Next, combined with hands-on experience as a Golang backend developer. Worked with Kubernetes, Kafka, PostgreSQL, and Oracle on production systems, contributing to architecture, refactoring, and cross-team integration.


      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/me.png",
  },
};


// #5755ff