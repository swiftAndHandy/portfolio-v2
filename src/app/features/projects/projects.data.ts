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
      alt: "HydroProof.app"
    },
    thumbnail: {
      url: "/assets/img/hydroproof_thumbnail.webp",
      alt: ""
    },
    screenshot:
      {
        url: "/assets/img/hydroproof_screenshot.webp",
        alt: "HydroProof",
      }
    ,
    liveUrl: "",
    githubUrl: "",
    slug: "hydroproof",
  }
]
