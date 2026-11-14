export default {
  meta: {
    title: "Matheus Edivaldo | Desenvolvedor Full Stack e Designer",
    description: "Portfólio de Matheus Edivaldo: desenvolvimento web, sistemas ERP e design gráfico.",
  },
  nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", services: "Serviços", contact: "Contato", menu: "Abrir menu", theme: "Alternar tema", lang: "Mudar idioma" },
  hero: {
    greeting: "Olá, eu sou",
    role: "Desenvolvedor Full Stack & Designer",
    description: (years) =>
      `Desenvolvedor júnior com ${years} ${years === 1 ? "ano" : "anos"} de experiência em sistemas ERP. Trabalho com front-end e back-end, e busco sempre evoluir e entregar soluções eficazes.`,
    ctaProjects: "Ver projetos",
    ctaContact: "Fale comigo",
    imageAlt: "Foto de Matheus Edivaldo",
  },
  about: {
    title: "Sobre mim",
    subtitle: "Código, sistemas e design: três frentes que se complementam.",
    imageAlt: "Apresentação do projeto Core na Campus Party.",
    items: [
      { icon: "about/cursorIcon.png", title: "Front-end", text: "Sites modernos, responsivos e otimizados, pensados para uma boa experiência em qualquer dispositivo." },
      { icon: "about/serverIcon.png", title: "Sistemas ERP", text: "Desenvolvimento de sistemas ERP com PHP, jQuery, Oracle e PL/SQL, entre outras tecnologias." },
      { icon: "about/designerIcon.png", title: "Design gráfico", text: "Identidades visuais, vetorização, rebranding de marcas e serviços completos de design." },
    ],
  },
  skills: { title: "Habilidades", subtitle: "Tecnologias e ferramentas que uso no dia a dia." },
  experience: {
    title: "Experiência",
    subtitle: "Minha trajetória profissional.",
    present: "Atual",
    items: [
      {
        role: "Estagiário PHP",
        organisation: "TML Auto Peças",
        start: "Abr 2023",
        end: null,
        imageSrc: "history/tml.png",
        points: ["Desenvolvimento de módulos ERP.", "Otimização de bancos de dados."],
      },
    ],
  },
  projects: {
    title: "Projetos",
    subtitle: "Alguns trabalhos que realizei.",
    visit: "Visitar",
    code: "Código",
    details: "Ver detalhes",
    back: "Voltar aos projetos",
    stack: "Tecnologias",
    links: "Links",
    next: "Próximo projeto",
    notFound: "Projeto não encontrado.",
    imageAlt: (title) => `Captura de tela do projeto ${title}`,
    list: {
      core: { title: "Core", description: "Plataforma para gestão e organização de recursos educacionais." },
      boletools: { title: "Boletools", description: "Aplicação web para validação e extração de dados de boletos." },
      kobix: { title: "Kobix", description: "Landing page institucional para apresentação de soluções digitais." },
    },
  },
  services: {
    title: "Serviços",
    subtitle: "Como posso ajudar o seu negócio.",
    categories: [
      {
        name: "Desenvolvimento",
        items: [
          { title: "UX/UI Design", description: "Interfaces intuitivas e centradas na experiência do usuário." },
          { title: "Portfólio profissional", description: "Sites personalizados para destacar seus projetos." },
          { title: "Landing pages", description: "Páginas focadas em conversão para campanhas de marketing." },
          { title: "Sites corporativos", description: "Sites institucionais para empresas e profissionais." },
        ],
      },
      {
        name: "Design",
        items: [
          { title: "Identidade visual", description: "Logos e elementos visuais para marcas fortes." },
          { title: "Manual de identidade", description: "Guia completo para uso e aplicação da identidade visual." },
          { title: "Social media", description: "Posts e visuais otimizados para redes sociais." },
          { title: "Banners publicitários", description: "Banners para web, eventos e campanhas." },
        ],
      },
    ],
  },
  contact: {
    title: "Vamos conversar?",
    subtitle: "Conte sobre o seu projeto. Respondo o mais rápido possível.",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    send: "Enviar mensagem",
    hint: "Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta.",
    subjectPrefix: "Contato pelo portfólio",
    whatsapp: "Chamar no WhatsApp",
    whatsappMessage: "Olá, gostaria de mais informações!",
    whatsappLabel: "Conversar pelo WhatsApp",
  },
  footer: { rights: "Todos os direitos reservados", by: "Desenvolvido por Matheus Edivaldo", top: "Voltar ao topo" },
};
