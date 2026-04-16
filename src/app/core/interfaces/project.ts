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
  };
  thumbnail: {
    url: string
    alt: string
  };
  screenshot: {
    url: string
    alt: string
  };
  liveUrl?: string;
  githubUrl?: string;
  slug?: string;
}
