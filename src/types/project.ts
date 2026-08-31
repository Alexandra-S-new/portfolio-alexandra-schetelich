export interface Project {
  id: string
  title: string
  category: string
  status: string
  shortDescription: string
  description: string
  technologies: string[]
  features: string[]
  focus: string[]
  role: string
  highlights: string[]
  keyLearnings: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}
