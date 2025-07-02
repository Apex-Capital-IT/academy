export interface Experience {
  _id?: string
  company: string
  position: string
  duration: string
  location: string
}

export interface Project {
  _id?: string
  title: string
  description: string
  image: string
  category: string
  link?: string
}

export interface Service {
  _id?: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  _id?: string
  name: string
  message: string
  image: string
  company?: string
}

export interface Contact {
  _id?: string
  name: string
  email: string
  message: string
  createdAt: Date
}

export interface Stats {
  _id?: string
  label: string
  value: string
}

export interface User {
  _id?: string
  name: string
  email: string
  password: string // hashed
}
