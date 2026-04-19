import {Project} from '../../core/interfaces/project';

export const projects: Project[] =  [
  {
    id: "1",
    title: "HydroProof",
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
      alt: {
        de: "HydroProof.app Infokarte anzeigen",
        en: "Display HydroProof.app info card"
      }
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
    title: "Join",
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
      alt: {
        de: "Join Infokarte anzeigen",
        en: "Display Join info card.",
      }
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
    liveUrl: "",
    githubUrl: "",
    slug: "hydroproof",
  },
  {
    id: "3",
    title: "El Pollo Loco",
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
      alt: {
        de: "El Pollo Loco Infokarte anzeigen",
        en: "Display El Pollo Loco info card.",
      }
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
    slug: "hydroproof",
  },
]
