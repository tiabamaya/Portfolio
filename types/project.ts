export type ProjectTheme =
  | "ai"
  | "events"
  | "workflow"
  | "finance";

export type ProjectFlowStep = {
  title: string;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;

  description: string;
  longDescription: string;

  image?: string;

  technologies: string[];

  problem?: string;
  solution?: string;
  role?: string;

  highlights: string[];

  recognition?: string[];

  github?: string;
  liveDemo?: string;

  featured: boolean;

  theme: ProjectTheme;

  flowTitle?: string;
  flowDescription?: string;
  flow?: ProjectFlowStep[];
};