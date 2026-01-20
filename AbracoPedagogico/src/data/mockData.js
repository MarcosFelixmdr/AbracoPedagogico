export const MOCK_POSTS = [
  {
    id: 1,
    author: "Ana Silva",
    role: "Prof. de Matemática",
    avatar: "https://ui-avatars.com/api/?name=Ana+Silva&background=2196f3&color=fff",
    time: "2 horas atrás",
    content: "Alguém tem dicas de projetos interdisciplinares para unir Matemática e Geografia no Ensino Fundamental II? Estou pensando em algo sobre estatística populacional.",
    likes: 24,
    comments: [
      {
        id: 101,
        author: "Carlos Souza",
        avatar: "https://ui-avatars.com/api/?name=Carlos+Souza&background=4caf50&color=fff",
        text: "Oi Ana! Já fiz um projeto assim usando dados do IBGE. Os alunos adoraram construir pirâmides etárias."
      }
    ],
    tags: {
      discipline: "Matemática",
      level: "Fundamental II",
      region: "Sudeste"
    }
  },
  {
    id: 2,
    author: "João Pereira",
    role: "Prof. de História",
    avatar: "https://ui-avatars.com/api/?name=Joao+Pereira&background=ff9800&color=fff",
    time: "4 horas atrás",
    content: "Compartilhando um plano de aula sobre a Era Vargas focado em fontes primárias. Usei jornais da época digitalizados pela Biblioteca Nacional. O link está nos comentários!",
    likes: 45,
    comments: [],
    tags: {
      discipline: "História",
      level: "Ensino Médio",
      region: "Sul"
    }
  },
  {
    id: 3,
    author: "Maria Oliveira",
    role: "Pedagoga",
    avatar: "https://ui-avatars.com/api/?name=Maria+Oliveira&background=e91e63&color=fff",
    time: "1 dia atrás",
    content: "Como vocês estão lidando com a ansiedade dos alunos em época de provas? Sinto que precisamos de mais momentos de acolhimento antes das avaliações.",
    likes: 89,
    comments: [
      {
        id: 102,
        author: "Fernanda Costa",
        avatar: "https://ui-avatars.com/api/?name=Fernanda+Costa&background=9c27b0&color=fff",
        text: "Faço exercícios de respiração guiada por 5 minutos antes da prova. Ajuda muito a baixar a adrenalina."
      },
      {
        id: 103,
        author: "Roberto Lima",
        avatar: "https://ui-avatars.com/api/?name=Roberto+Lima&background=607d8b&color=fff",
        text: "Ótima questão, Maria. Aqui na escola criamos a 'sala do sossego' para quem precisa de um tempo."
      }
    ],
    tags: {
      discipline: "Pedagogia",
      level: "Todos",
      region: "Nordeste"
    }
  },
  {
    id: 4,
    author: "Lucas Mendes",
    role: "Prof. de Ciências",
    avatar: "https://ui-avatars.com/api/?name=Lucas+Mendes&background=00bcd4&color=fff",
    time: "2 dias atrás",
    content: "Preciso de indicação de locais para aula de campo sobre ecossistemas de manguezal perto de Recife. Alguém conhece?",
    likes: 12,
    comments: [],
    tags: {
      discipline: "Ciências",
      level: "Fundamental I",
      region: "Nordeste"
    }
  },
  {
    id: 5,
    author: "Juliana Santos",
    role: "Prof. de Artes",
    avatar: "https://ui-avatars.com/api/?name=Juliana+Santos&background=ffeb3b&color=000",
    time: "3 dias atrás",
    content: "Exposição virtual dos trabalhos dos alunos sobre releituras de Tarsila do Amaral. Ficou incrível ver como eles adaptaram para a realidade local!",
    likes: 56,
    comments: [
      {
        id: 104,
        author: "Gustavo Rocha",
        avatar: "https://ui-avatars.com/api/?name=Gustavo+Rocha&background=795548&color=fff",
        text: "Parabéns, Juliana! A arte é fundamental para a expressão deles."
      }
    ],
    tags: {
      discipline: "Artes",
      level: "Ensino Médio",
      region: "Norte"
    }
  }
];

export const DISCIPLINES = ["Matemática", "Português", "História", "Geografia", "Ciências", "Artes", "Pedagogia", "Inglês", "Educação Física"];
export const LEVELS = ["Educação Infantil", "Fundamental I", "Fundamental II", "Ensino Médio", "EJA", "Superior"];
export const REGIONS = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];

export const MOCK_RESOURCES = [
  {
    id: 1,
    title: "Como criar projetos inclusivos para autistas",
    type: "video",
    duration: "15 min",
    difficulty: "Iniciante",
    theme: "Inclusão",
    thumbnail: "https://placehold.co/600x400/2196f3/white?text=Inclusão+Video",
    url: "#"
  },
  {
    id: 2,
    title: "Guia prático de Alfabetização e Letramento",
    type: "text",
    duration: "Leitura de 10 min",
    difficulty: "Intermediário",
    theme: "Alfabetização",
    thumbnail: "https://placehold.co/600x400/4caf50/white?text=Guia+Alfabetização",
    url: "#"
  },
  {
    id: 3,
    title: "Podcast: Saúde mental do educador",
    type: "podcast",
    duration: "45 min",
    difficulty: "Livre",
    theme: "Saúde Emocional",
    thumbnail: "https://placehold.co/600x400/e91e63/white?text=Podcast+Saúde",
    url: "#"
  },
  {
    id: 4,
    title: "Metodologias Ativas na Prática",
    type: "video",
    duration: "20 min",
    difficulty: "Avançado",
    theme: "Metodologias",
    thumbnail: "https://placehold.co/600x400/ff9800/white?text=Metodologias",
    url: "#"
  },
  {
    id: 5,
    title: "Gestão de conflitos em sala de aula",
    type: "text",
    duration: "Leitura de 8 min",
    difficulty: "Intermediário",
    theme: "Gestão",
    thumbnail: "https://placehold.co/600x400/9c27b0/white?text=Gestão+Conflitos",
    url: "#"
  },
  {
    id: 6,
    title: "O uso de IA na preparação de aulas",
    type: "video",
    duration: "12 min",
    difficulty: "Iniciante",
    theme: "Tecnologia",
    thumbnail: "https://placehold.co/600x400/607d8b/white?text=IA+na+Educação",
    url: "#"
  }
];

export const LIBRARY_THEMES = ["Inclusão", "Alfabetização", "Saúde Emocional", "Metodologias", "Gestão", "Tecnologia"];
export const DIFFICULTIES = ["Iniciante", "Intermediário", "Avançado", "Livre"];

export const MOTIVATIONAL_QUOTES = [
  "Educar é semear com sabedoria e colher com paciência. — Augusto Cury",
  "O professor não ensina o que sabe, professor inspira com o que é.",
  "Cuide de você para poder cuidar do outro. Sua saúde mental importa.",
  "Não se cobre tanto. Você está fazendo o melhor que pode, e isso é suficiente.",
  "A educação é a arma mais poderosa que você pode usar para mudar o mundo. — Nelson Mandela",
  "Respire fundo. Esse momento difícil vai passar.",
  "Você não está sozinho nessa jornada. Estamos aqui com você."
];
