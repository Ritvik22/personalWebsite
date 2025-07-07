// Project type definition
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  hoverBorderColor: string;
  buttonBg: string;
  link: string;
}

// Skill category type definition
export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
  borderColor: string;
  hoverBorderColor: string;
}

// Web3 feature type definition
export interface Web3Feature {
  title: string;
  description: string;
  icon: string;
}

// Social media platform type definition
export interface SocialPlatform {
  name: string;
  icon: string;
  link: string;
}

// Form data type definition
export interface FormData {
  name: string;
  email: string;
  message: string;
} 