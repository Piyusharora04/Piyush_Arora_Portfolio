export interface NavLink {
  id: string;
  title: string;
}

export interface ProfileLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  team?: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  tags: string[];
  codeLink: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface Achievement {
  id: number;
  title: string;
  detail: string;
}

export interface Leadership {
  role: string;
  organization: string;
  highlights: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  detail: string;
}
