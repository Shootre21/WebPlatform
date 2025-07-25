import { ReactNode } from 'react';

export interface Project {
  title: string;
  period: string;
  description: string;
  details: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
    name: string;
    url: string;
    icon: ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  icon: ReactNode;
}
