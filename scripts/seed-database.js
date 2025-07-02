import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)

async function seedDatabase() {
  try {
    await client.connect()
    const db = client.db("portfolio")

    // Seed experiences
    const experiences = [
      {
        company: "Micro-Interactions Research Team",
        position: "Senior UI/UX Designer",
        duration: "JAN 2022 - CURRENT",
        location: "CANADA",
      },
      {
        company: "Micro-Interactions Research Team",
        position: "Senior UI Designer",
        duration: "JAN 2020 - DEC 2021",
        location: "CANADA",
      },
      {
        company: "Micro-Interactions Research Team",
        position: "Product Designer",
        duration: "JAN 2018 - DEC 2019",
        location: "CANADA",
      },
      {
        company: "Micro-Interactions Research Team",
        position: "Multidisciplinary Team Manager",
        duration: "JAN 2016 - DEC 2017",
        location: "CANADA",
      },
    ]

    await db.collection("experiences").deleteMany({})
    await db.collection("experiences").insertMany(experiences)

    // Seed projects
    const projects = [
      {
        title: "Innovative Designer for a Fintech",
        description: "Comprehensive design system for a fintech payment solutions platform.",
        image: "/placeholder.svg?height=300&width=500",
        category: "Fintech",
        link: "#",
      },
      {
        title: "Web Design for fintech payment solutions",
        description: "Modern web design for innovative payment processing platform.",
        image: "/placeholder.svg?height=300&width=500",
        category: "Web Design",
        link: "#",
      },
      {
        title: "Minimal Agency website for startups business",
        description: "Clean and minimal website design for startup agencies.",
        image: "/placeholder.svg?height=300&width=500",
        category: "Agency",
        link: "#",
      },
      {
        title: "SaaS web and app design project",
        description: "Complete SaaS platform design with web and mobile applications.",
        image: "/placeholder.svg?height=300&width=500",
        category: "SaaS",
        link: "#",
      },
    ]

    await db.collection("projects").deleteMany({})
    await db.collection("projects").insertMany(projects)

    // Seed services
    const services = [
      {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user interfaces that provide exceptional user experiences.",
        icon: "design",
      },
      {
        title: "Brand Identity",
        description: "Developing comprehensive brand identities that resonate with target audiences.",
        icon: "brand",
      },
      {
        title: "Digital Marketing",
        description: "Strategic digital marketing solutions to grow your online presence.",
        icon: "marketing",
      },
    ]

    await db.collection("services").deleteMany({})
    await db.collection("services").insertMany(services)

    // Seed stats
    const stats = [
      { label: "Projects Completed", value: "2450" },
      { label: "Happy Clients", value: "1085" },
      { label: "Years Experience", value: "07" },
      { label: "Working Hours", value: "2700" },
    ]

    await db.collection("stats").deleteMany({})
    await db.collection("stats").insertMany(stats)

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await client.close()
  }
}

seedDatabase()
