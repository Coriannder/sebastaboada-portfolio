export type Language = 'es' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  image: string;
  demoUrl?: string | null;
  codeUrl?: string | null;
  isPrivate?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Dictionary {
  nav: {
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    resume: string;
  };
  a11y: {
    skipToContent: string;
    toggleLanguage: string;
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    availableBadge: string;
    greeting: string;
    name: string;
    title: string;
    roles: string[];
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    ctaResume: string;
    differentiatorLabel: string;
    differentiatorText: string;
    productionStack: string;
    viewAllStack: string;
    stackFooterLabel: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewDemo: string;
    viewCode: string;
    privateRepo: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    stackLabel: string;
    caseStudy: string;
    ndaBadge: string;
    showDetails: string;
    hideDetails: string;
    imageAltPrefix: string;
    items: ProjectItem[];
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
    educationTitle: string;
    education: EducationItem[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
    directSocials: string;
    emailTitle: string;
    emailDescription: string;
    openMailClient: string;
    resumeTitle: string;
    resumeDescription: string;
    downloadEs: string;
    downloadEn: string;
    locationLabel: string;
    locationValue: string;
    availabilityLabel: string;
    availabilityValue: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
}
