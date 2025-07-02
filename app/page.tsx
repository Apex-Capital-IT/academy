"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"

interface Experience {
  _id?: string
  company: string
  position: string
  duration: string
  location: string
}

interface Project {
  _id?: string
  title: string
  description: string
  image: string
  category: string
  link?: string
}

interface Service {
  _id?: string
  title: string
  description: string
  icon: string
}

interface Stats {
  _id?: string
  label: string
  value: string
}

export default function Portfolio() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [stats, setStats] = useState<Stats[]>([])
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [expRes, projRes, servRes, statsRes] = await Promise.all([
        fetch("/api/experience"),
        fetch("/api/projects"),
        fetch("/api/services"),
        fetch("/api/stats"),
      ])

      const [expData, projData, servData, statsData] = await Promise.all([
        expRes.json(),
        projRes.json(),
        servRes.json(),
        statsRes.json(),
      ])

      setExperiences(expData)
      setProjects(projData)
      setServices(servData)
      setStats(statsData)
    } catch (error) {
      console.error("Failed to fetch data:", error)
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        setContactForm({ name: "", email: "", message: "" })
        alert("Message sent successfully!")
      } else {
        alert("Failed to send message")
      }
    } catch (error) {
      alert("Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-black">
                It's me
              </a>
              <a href="#about" className="text-gray-700 hover:text-black">
                About me
              </a>
              <a href="#services" className="text-gray-700 hover:text-black">
                Services
              </a>
              <a href="#experience" className="text-gray-700 hover:text-black">
                Experience
              </a>
              <a href="#projects" className="text-gray-700 hover:text-black">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black">
                Contact
              </a>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  👋 Hello!
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  I'm <span className="text-blue-600">Madhu</span>
                </h1>
                <p className="text-xl text-gray-600">Product Designer</p>
                <p className="text-gray-600 max-w-md">
                  I'm a passionate product designer with expertise in creating user-centered digital experiences that
                  drive business growth and user satisfaction.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Hire me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline">
                  Download CV
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Madhu - Product Designer"
                  width={400}
                  height={500}
                  className="relative z-10 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Offering Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">WHAT I'M</h2>
              <h2 className="text-3xl font-bold">OFFERING</h2>
            </div>
            <Button variant="outline">
              See all services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-300 text-sm">
                  Creating intuitive and engaging user interfaces that provide exceptional user experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">BRAND IDENTITY</h3>
                <p className="text-gray-600 text-sm">
                  Developing comprehensive brand identities that resonate with target audiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">DIGITAL MARKETING</h3>
                <p className="text-gray-600 text-sm">
                  Strategic digital marketing solutions to grow your online presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">EXPERIENCE</h2>
            <div className="w-12 h-1 bg-black mx-auto"></div>
          </div>

          <div className="space-y-4">
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <Card key={exp._id || index} className="border-l-4 border-l-black">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.position}</h3>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>{exp.duration}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              // Default experience data
              <>
                <Card className="border-l-4 border-l-black">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Senior UI/UX Designer</h3>
                        <p className="text-gray-600">Micro-Interactions Research Team</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>JAN 2022 - CURRENT</p>
                        <p>CANADA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gray-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Senior UI Designer</h3>
                        <p className="text-gray-600">Micro-Interactions Research Team</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>JAN 2020 - DEC 2021</p>
                        <p>CANADA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gray-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Product Designer</h3>
                        <p className="text-gray-600">Micro-Interactions Research Team</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>JAN 2018 - DEC 2019</p>
                        <p>CANADA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gray-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Multidisciplinary Team Manager</h3>
                        <p className="text-gray-600">Micro-Interactions Research Team</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <p>JAN 2016 - DEC 2017</p>
                        <p>CANADA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">CASE STUDY</h2>
            <div className="w-12 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Innovative Designer for a Fintech"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Innovative Designer for a Fintech</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive design system for a fintech payment solutions platform.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Web Design for fintech payment solutions"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Web Design for fintech payment solutions</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Modern web design for innovative payment processing platform.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Minimal Agency website for startups business"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Minimal Agency website for startups business</h3>
                  <p className="text-gray-600 text-sm mb-4">Clean and minimal website design for startup agencies.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="SaaS web and app design project"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">SaaS web and app design project</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete SaaS platform design with web and mobile applications.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-4">CLIENT FEEDBACK</p>
            <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed">
              "I just wanted to share a quick note and let you know that you guys do a really good job."
            </blockquote>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Robert Elias"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold">Robert Elias</p>
              <p className="text-gray-600 text-sm">CEO, Company Name</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2450</div>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1085</div>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">07</div>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2700</div>
              <p className="text-gray-600 text-sm">Working Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Say Hi! <span className="underline decoration-wavy">and tell me about</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">your idea</h2>
            <p className="text-gray-600 mt-4">Have a cool project idea? Let's discuss and bring it to life together.</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name*</label>
                    <Input
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email*</label>
                    <Input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What's on your mind?*</label>
                  <Textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={6}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>Website Development</span>
                    <span>•</span>
                    <span>Branding</span>
                    <span>•</span>
                    <span>Product Development</span>
                    <span>•</span>
                    <span>App Design</span>
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="bg-black text-white hover:bg-gray-800">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Portfolio</h3>
              <p className="text-gray-400 text-sm">
                Creating exceptional digital experiences through thoughtful design and innovation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#home" className="block text-gray-400 hover:text-white">
                  Home
                </a>
                <a href="#about" className="block text-gray-400 hover:text-white">
                  About
                </a>
                <a href="#services" className="block text-gray-400 hover:text-white">
                  Services
                </a>
                <a href="#projects" className="block text-gray-400 hover:text-white">
                  Projects
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">UI/UX Design</p>
                <p className="text-gray-400">Brand Identity</p>
                <p className="text-gray-400">Digital Marketing</p>
                <p className="text-gray-400">Web Development</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@madhu.design
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Toronto, Canada
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Portfolio. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
