export default {
  meta: {
    title: "Matheus Edivaldo | Full Stack Developer & Designer",
    description: "Matheus Edivaldo's portfolio: web development, ERP systems and graphic design.",
  },
  nav: { about: "About", experience: "Experience", projects: "Projects", services: "Services", contact: "Contact", menu: "Open menu", theme: "Toggle theme", lang: "Change language" },
  hero: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer & Designer",
    description: (years) =>
      `Junior developer with ${years} ${years === 1 ? "year" : "years"} of experience in ERP systems. I work across front-end and back-end, always learning and aiming to deliver effective solutions.`,
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    imageAlt: "Photo of Matheus Edivaldo",
  },
  about: {
    title: "About me",
    subtitle: "Code, systems and design: three areas that complement each other.",
    imageAlt: "Presentation of the Core project at Campus Party.",
    items: [
      { icon: "about/cursorIcon.png", title: "Front-end", text: "Modern, responsive and optimized websites built for a great experience on any device." },
      { icon: "about/serverIcon.png", title: "ERP systems", text: "ERP development with PHP, jQuery, Oracle and PL/SQL, among other technologies." },
      { icon: "about/designerIcon.png", title: "Graphic design", text: "Visual identities, vectorization, rebranding and full graphic design services." },
    ],
  },
  skills: { title: "Skills", subtitle: "Technologies and tools I use day to day." },
  experience: {
    title: "Experience",
    subtitle: "My professional path.",
    present: "Present",
    items: [
      {
        role: "PHP Intern",
        organisation: "TML Auto Peças",
        start: "Apr 2023",
        end: null,
        imageSrc: "history/tml.png",
        points: ["ERP module development.", "Database optimization."],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Some of the work I've done.",
    visit: "Visit",
    code: "Code",
    details: "View details",
    back: "Back to projects",
    stack: "Tech stack",
    links: "Links",
    next: "Next project",
    notFound: "Project not found.",
    imageAlt: (title) => `Screenshot of the ${title} project`,
    list: {
      core: { title: "Core", description: "Platform for managing and organizing educational resources." },
      boletools: { title: "Boletools", description: "Web app for validating and extracting data from Brazilian bank slips (boletos)." },
      kobix: { title: "Kobix", description: "Institutional landing page presenting digital solutions." },
    },
  },
  services: {
    title: "Services",
    subtitle: "How I can help your business.",
    categories: [
      {
        name: "Development",
        items: [
          { title: "UX/UI Design", description: "Intuitive interfaces centered on the user experience." },
          { title: "Professional portfolio", description: "Custom websites to showcase your work." },
          { title: "Landing pages", description: "Conversion-focused pages for marketing campaigns." },
          { title: "Corporate websites", description: "Institutional websites for companies and professionals." },
        ],
      },
      {
        name: "Design",
        items: [
          { title: "Visual identity", description: "Logos and visual elements for strong brands." },
          { title: "Brand guidelines", description: "Complete guide to using and applying the visual identity." },
          { title: "Social media", description: "Posts and visuals optimized for social networks." },
          { title: "Ad banners", description: "Banners for web, events and campaigns." },
        ],
      },
    ],
  },
  contact: {
    title: "Let's talk?",
    subtitle: "Tell me about your project. I'll get back to you as soon as possible.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    hint: "On send, your email app opens with the message ready to go.",
    subjectPrefix: "Portfolio contact",
    whatsapp: "Chat on WhatsApp",
    whatsappMessage: "Hi, I'd like more information!",
    whatsappLabel: "Chat on WhatsApp",
  },
  footer: { rights: "All rights reserved", by: "Built by Matheus Edivaldo", top: "Back to top" },
};
