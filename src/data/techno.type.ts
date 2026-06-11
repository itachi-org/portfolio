import type { ComponentType, SVGProps } from 'react'

export interface StackType {
  title: string
  technos: {
    name: string
    IconComponent: ComponentType<SVGProps<SVGSVGElement>>
  }[]
}

export type StackArray = StackType[]

export interface ProjectURL {
  icon: string
  github: string
  server: string | null
}

export interface ProjectsType {
  name: string
  summary: string
  technos: string[]
  url: ProjectURL
}

export type ProjectsArray = ProjectsType[]

