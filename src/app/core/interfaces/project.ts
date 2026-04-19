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
    alt: Record<Language, string>;
  };
  thumbnail: {
    url: string
    alt: Record<Language, string>;
  };
  screenshot: {
    url: string
    alt: Record<Language, string>;
  };
  liveUrl?: string;
  appstoreUrl?: string;
  githubUrl?: string;
  slug?: string;
}
