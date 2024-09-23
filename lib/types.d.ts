export interface Project {
  text?: string
  image?: string
  url?: string
  description: string
  technologies: Technology[]
}

export interface Technology {
  name: string
  url: string
}

export interface WorkExperience {
  title: string
  startDate: string
  endDate: string
  location: string
  description: string,
  details?: string[],
  website?: string
}