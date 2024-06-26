import type { Pricing } from "../app/(pages)/(landing)/_components/PricingCard";
import type { Team } from "../app/(pages)/(landing)/_components/TeamCard";
import type { Testimonial } from "../app/(pages)/(landing)/_components/TestimonialsCard";

export const MAX_FREE_COUNTS = 3;

export const pricingList: Pricing[] = [
  {
    title: "Gratuito",
    popular: 0,
    price: 0,
    description: "Para iniciantes com agendamentos básicos.",
    buttonText: "Comece Grátis",
    benefitList: [
      "3 tipos de eventos com reuniões ilimitadas.",
      "Conecte um calendário e integrações básicas.",
      "Personalize sua página de agendamento.",
    ],
  },
  {
    title: "Padrão",
    popular: 1,
    price: 10,
    description: "Para necessidades de agendamento mais sofisticadas.",
    buttonText: "Iniciar Teste Grátis",
    benefitList: [
      "Tipos de evento ilimitados com reuniões ilimitadas",
      "Múltiplos calendários para disponibilidade e agendamento",
      "Tipos de evento em grupo e coletivo",
      "Mais personalização de sua página de agendamento e e-mails",
      "Suporte por chat ao vivo 24/7",
    ],
  },
  {
    title: "Equipes",
    popular: 0,
    price: 16,
    description: "Para equipes que precisam de recursos avançados.",
    buttonText: "Experimente Gratuitamente",
    benefitList: [
      "Conecte-se ao Salesforce para transferir dados de reuniões",
      "Eventos de rodízio",
      "Encaminhe leads para o calendário certo",
      "Recursos administrativos para gerenciamento de eventos",
      "Autenticação Única (SSO) opcional para simplificar o acesso da equipe",
    ],
  },
];

export const teamList: Team[] = [
  {
    imageUrl: "/everton.jpeg",
    name: "Éverton Carvalho",
    position: "CEO / Full Stack Developer",
    description: "Fundador e Desenvolvedor Full Stack com experiência em construção de aplicativos web e móveis.",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com/in/everton-c-carvalho" },
      { name: "Github", url: "https://github.com/evertonccarvalho" },
    ],
  },
  {
    imageUrl: "/jonatas.png",
    name: "Jonatas Silva",
    position: "CTO / Full Stack Developer",
    description: "Co-fundador, Desenvolvedor Full Stack e Designer Gráfico e de Interfaces.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/jscodedevelopment/" },
      { name: "Github", url: "https://github.com/JsCodeDevlopment" },
      { name: "Instagram", url: "https://www.instagram.com/jonatasilva14" },
    ],
  },
  {
    imageUrl: "/douglas.png",
    name: "Douglas Trindade",
    position: "Frontend Developer",
    description: "Desenvolvedor Frontend apaixonado por criar interfaces de usuário intuitivas.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/douglastrindade1/" },
      { name: "Github", url: "https://github.com/DouglasTrindade" },
    ],
  },
  // {
  //   imageUrl: "https://i.pravatar.cc/150?img=17",
  //   name: "Bruce Rogers",
  //   position: "Backend Developer",
  //   description: "Desenvolvedor Backend com experiência em construção e manutenção de sistemas robustos.",
  //   socialNetworks: [
  //     { name: "Linkedin", url: "http://linkedin.com/in/everton-c-carvalho" },
  //     { name: "Github", url: "https://github.com/evertonccarvalho" },
  //   ],
  // },
];



export const testimonialsList: Testimonial[] = [
  {
    image: "/jonatas.png",
    name: "Jonatas Silva",
    userName: "@jonatas_silva",
    comment:
      "Nunca mais perdi uma reunião importante!",
  },
  {
    image: "/douglas.png",
    name: "Douglas Trindade",
    userName: "@douglas_trindade",
    comment:
      "Este sistema de agendamentos simplificou minha vida! Finalmente, consigo gerenciar meus compromissos de forma eficiente.",
  },
  {
    image: "/everton.jpeg",
    name: "Éverton Carvalho",
    userName: "@everton_carvalho",
    comment:
      "Estou muito impressionado com a facilidade de uso deste sistema de agendamentos. Agora posso organizar minha agenda com apenas alguns cliques!",
  },

  {
    image: "https://i.pravatar.cc/150?img=17",
    name: "José Oliveira",
    userName: "@José_oliveira",
    comment:
      "Este sistema de agendamentos superou minhas expectativas! Nunca foi tão simples marcar compromissos e nunca mais perdi uma reunião importante.",
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "Carlos Souza",
    userName: "@carlos_souza",
    comment:
      "Estou muito satisfeito com a eficiência deste sistema de agendamentos. Agora posso gerenciar meu tempo de forma mais produtiva e focar nas tarefas importantes.",
  },
  {
    image: "https://i.pravatar.cc/150?img=36",
    name: "Fernanda Lima",
    userName: "@fernanda_lima",
    comment:
      "Finalmente encontrei um sistema de agendamentos que se adapta às minhas necessidades. Estou muito feliz com a praticidade e funcionalidade que oferece!",
  },

];


