export interface Project {
  id: string;
  title: string;
  overviewTags: string[];
  detailTags: string[];
  description: {
    de: string;
    en: string;
  };
  longDescription: {
    de: string;
    en: string;
  };
  logo: {
    url: string,
    alt: string
  }
  screenshots: {
    url: string
    alt: string
  }[];
  liveUrl?: string;
  githubUrl?: string;
  slug?: string;
}
