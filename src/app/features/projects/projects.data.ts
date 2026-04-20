import {Project} from '../../core/interfaces/project';

export const projects: Project[] =  [
  {
    id: "1",
    title: "HydroProof",
    category: 'frontend',
    overviewTags: ["Swift"],
    detailTags: ["SwiftUI", "SwiftData", "HealthKit", "CloudKit"],
    description: {
      de: "Track deine Flaschen, nicht deine Schlücke.",
      en: "Track your bottles, not just sips!"
    },
    longDescription: {
      de: "Lorem Ipsum.",
      en: "Lorem Ipsum.",
    },
    logo: {
      url: "/assets/img/hydroproof_logo.webp",
    },
    thumbnail: {
      url: "/assets/img/hydroproof_thumbnail.webp",
      alt: {
        de: "",
        en: ""
      }
    },
    screenshot:
      {
        url: "/assets/img/hydroproof_screenshot.webp",
        alt: {
          de: "",
          en: ""
        }
      }
    ,
    liveUrl: "",
    appstoreUrl: "https://apps.apple.com/de/app/hydroproof/id6761188208",
    githubUrl: "",
    slug: "hydroproof",
  },
  {
    id: "2",
    title: "Portfolio",
    category: 'frontend',
    overviewTags: ["Angular"],
    detailTags: ["Angular", "Typescript"],
    description: {
      de: "Dieses Portfolio – gebaut mit Angular 21, i18n, Dark Mode und voller Barrierefreiheit.",
      en: "My portfolio – built with Angular 21, i18n, dark mode and full accessibility."
    },
    longDescription: {
      de: "Dieses Portfolio wurde von Grund auf mit Angular 21 entwickelt. " +
        "Es unterstützt Deutsch und Englisch über URL-basiertes Routing, bietet einen Dark- und Light-Mode " +
        "sowie eine konsequente Umsetzung von Barrierefreiheit nach WCAG-Standards. ",
      en: "This portfolio was built from scratch with Angular 21. It supports German and English via URL-based " +
        "routing, offers dark and light mode, and implements accessibility consistently following WCAG standards.",
    },
    logo: {
      url: "/assets/img/portfolio_logo.webp",
    },
    thumbnail: {
      url: "/assets/img/portfolio_thumbnail.webp",
      alt: {
        de: "",
        en: ""
      }
    },
    screenshot:
      {
        url: "/assets/img/portfolio_screenshot.webp",
        alt: {
          de: "",
          en: ""
        }
      }
    ,
    liveUrl: "",
    appstoreUrl: "",
    githubUrl: "https://github.com/swiftAndHandy/portfolio-v2",
    slug: "hydroproof",
  },
  {
    id: "3",
    title: "Kanmind",
    category: "backend",
    overviewTags: ["Django DRF"],
    detailTags: ["JavaScript", "Firebase", "HTML", "CSS"],
    description: {
      de: "Ein Task Manager, basierend auf dem Kanban System.",
      en: "Task manager inspired by the Kanban System."
    },
    longDescription: {
      de: "Ein Task Manager basierend auf dem Kanban System. Erstellen und organisieren Sie " +
        "Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
      en: "Task manager inspired by the Kanban System. Create " +
        "and organize tasks using drag and drop functions, assign users and categories.",
    },
    logo: {
      url: "/assets/img/kanmind_logo.webp",
    },
    thumbnail: {
      url: "/assets/img/kanmind_thumbnail.webp",
      alt: {
        de: "",
        en: "",
      }
    },
    screenshot:
      {
        url: "/assets/img/kanmind_screenshot.webp",
        alt: {
          de: "",
          en: "",
        }
      }
    ,
    liveUrl: "",
    githubUrl: "https://github.com/swiftAndHandy/kanmind-backend",
    slug: "kanmind-backend",
  },
  {
    id: "4",
    title: "Join",
    category: 'frontend',
    overviewTags: ["JavaScript"],
    detailTags: ["JavaScript", "Firebase", "HTML", "CSS"],
    description: {
      de: "Ein Task Manager, basierend auf dem Kanban System.",
      en: "Task manager inspired by the Kanban System."
    },
    longDescription: {
      de: "Ein Task Manager basierend auf dem Kanban System. Erstellen und organisieren Sie " +
        "Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
      en: "Task manager inspired by the Kanban System. Create " +
        "and organize tasks using drag and drop functions, assign users and categories.",
    },
    logo: {
      url: "/assets/img/join_logo.webp",
    },
    thumbnail: {
      url: "/assets/img/join_thumbnail.webp",
      alt: {
        de: "",
        en: "",
      }
    },
    screenshot:
      {
        url: "/assets/img/join_screenshot.webp",
        alt: {
          de: "",
          en: "",
        }
      }
    ,
    liveUrl: "https://join.veltens.info",
    githubUrl: "https://github.com/swiftAndHandy/join",
    slug: "join",
  },
  {
    id: "5",
    title: "El Pollo Loco",
    category: 'frontend',
    overviewTags: ["JavaScript"],
    detailTags: ["JavaScript", "Firebase", "HTML", "CSS"],
    description: {
      de: "Objekt orientiertes Jump 'n' Run Spiel mit Highscore-Liste. Rumble-Feature für Gamepads.",
      en: "Object-oriented Jump 'n' Run Game with Highscore-List. Rumble-Feature for Gamepads."
    },
    longDescription: {
      de: "Springe, renne und wirf Tabasco-Soße. Das Spiel basiert auf Objekt-Orientierter-Programmierung (OOP). " +
        "Hilf Pepe Münzen and Tabasco-Soße zu finden um das verrückte Huhn zu besiegen.",
      en: "Jump, run and throw game based on object-oriented approach. " +
        "Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
    },
    logo: {
      url: "/assets/img/epl_logo.webp",
    },
    thumbnail: {
      url: "/assets/img/epl_thumbnail.webp",
      alt: {
        de: "",
        en: "",
      }
    },
    screenshot:
      {
        url: "/assets/img/epl_screenshot.webp",
        alt: {
          de: "",
          en: "",
        }
      }
    ,
    liveUrl: "",
    githubUrl: "",
    slug: "el-pollo-loco",
  },

]
