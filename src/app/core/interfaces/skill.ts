export interface Skill {
  id: string;
  name: string;
  logoUrl: string;
  platform: 'web' | 'stand-alone' | 'all' | 'personal';
  category: 'frontend' | 'backend' | 'both' | 'other';
}
