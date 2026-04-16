import {Language} from '../i18n/languages';

export interface Project {
  id: string;
  title: string;
  overviewTags: string[];
  detailTags: string[];
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
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
