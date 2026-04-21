import {Project} from '../../core/interfaces/project';

export const projects: Project[] =  [
  {
    id: "1",
    title: "HydroProof",
    category: 'frontend',
    overviewTags: ["SwiftUI"],
    detailTags: ["SwiftUI", "SwiftData", "HealthKit", "CloudKit"],
    description: {
      de: "iOS-App zur Flüssigkeitsverfolgung über Gefäß-Füllstände – mit Apple Watch, HealthKit-Integration und iCloud-Sync.",
      en: "iOS hydration tracking app based on vessel fill levels – with Apple Watch, HealthKit integration, and iCloud sync."
    },
    longDescription: {
      de: "HydroProof verfolgt die Trinkmenge nicht durch manuelle Eingabe, sondern durch das Aktualisieren von Füllständen realer Gefäße. Der Ansatz orientiert sich daran, wie Menschen tatsächlich trinken – aus Flaschen, Tassen und Shakern – und berechnet die konsumierte Menge automatisch aus der Differenz.\n\nTechnisch basiert die App auf SwiftUI und SwiftData mit CloudKit-Sync, einer nativen watchOS-App mit Digital Crown-Steuerung sowie HealthKit-Integration zur automatischen Protokollierung jedes Trinkeintrags. Eine Widget-Complication ermöglicht schnellen Zugriff vom Zifferblatt. Die App ist auf Deutsch, Englisch, Spanisch und Französisch lokalisiert.",
      en: "HydroProof tracks fluid intake not through manual entry, but by updating the fill levels of real-world vessels. The concept is grounded in how people actually drink – from bottles, cups, and shakers – and automatically calculates consumption from the difference in fill level.\n\nBuilt with SwiftUI and SwiftData with CloudKit sync, the app includes a native watchOS companion app with Digital Crown support, HealthKit integration for automatic logging, and a Watch complication for quick wrist access. Localized in English, German, Spanish, and French."
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
    detailTags: ["Angular", "TypeScript", "WCAG AA"],
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
    slug: "portfolio",
  },
  {
    id: "3",
    title: "Kanmind",
    category: "backend",
    overviewTags: ["Python", "Django", "DRF"],
    detailTags: ["Python", "Django", "DRF"],
    description: {
      de: "Kanban-Backend – mit Token-Authentifizierung, rollenbasierte Aufgabenvergabe und einer sauberen Multi-App-Architektur.",
      en: "Kanban backend – featuring token authentication, role-based task assignment, and a clean multi-app architecture."
    },
    longDescription: {
      de: "KanMind ist ein Projektmanagement-Backend auf Basis von Django REST Framework. Es stellt eine REST-API für Board- und Aufgabenverwaltung bereit – inklusive Benutzerregistrierung und Login via Token-Authentifizierung. Aufgaben können Board-Mitgliedern zugewiesen, kommentiert sowie nach Priorität, Status und Deadline gefiltert werden. Das Backend ist in drei dedizierte Django-Apps gegliedert – auth_app, board_app und task_app – mit einem eigenen UserProfile-Model als Erweiterung des Django-Auth-Systems.",
      en: "KanMind is a project management backend developed with Django REST Framework. It provides a REST API for board and task management, including user registration and login via token authentication. Tasks can be assigned to board members, commented on, and filtered by priority, status, and deadline. The backend is structured into three dedicated Django apps – auth_app, board_app, and task_app – with a custom UserProfile model extending Django's auth system. CORS is configured for seamless frontend integration."
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
    githubUrl: "https://github.com/swiftAndHandy/kanmind_backend",
    slug: "kanmind-backend",
  },
  {
    id: "4",
    title: "Join",
    category: 'frontend',
    overviewTags: ["JavaScript"],
    detailTags: ["JavaScript", "Firebase"],
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
    detailTags: ["JavaScript", "Firebase"],
    description: {
      de: "Objekt orientiertes Jump 'n' Run Spiel mit Highscore-Liste. Rumble-Feature für Gamepads.",
      en: "Object-oriented Jump 'n' Run Game with Highscore-List. Rumble-Feature for Gamepads."
    },
    longDescription: {
      de: "Springe, renne und wirf Tabasco-Soße. Das Spiel basiert auf Objekt-Orientierter-Programmierung (OOP). " +
        "Hilf Pepe Münzen and Tabasco-Soße zu finden um den Endboss – ein verrückt gewordenes Huhn – zu besiegen." +
        "Das Spiel verfügt neben einer Highscoreliste (Firebase basiert) über Controller Support und nutzt das Rumble-Feature von Controllern.",
      en: "Jump, run and throw game based on object-oriented approach. " +
        "Help Pepe to find coins and tabasco salsa to triumph against the boss: a crazy hen." +
        "In addition to a high score list (based on Firebase), the game supports controllers and utilizes their rumble feature.."
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
    liveUrl: "https://el-pollo-loco.veltens.info",
    githubUrl: "https://github.com/swiftAndHandy/el-pollo-loco",
    slug: "el-pollo-loco",
  },

]
