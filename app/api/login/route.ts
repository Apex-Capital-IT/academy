import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { User } from "@/lib/models"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("portfolio")
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const user = await db.collection("users").findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // For demo: just return user info (never return password)
    return NextResponse.json({ success: true, user: { _id: user._id, name: user.name, email: user.email } })
  } catch (error) {
    return NextResponse.json({ error: "Failed to login" }, { status: 500 })
  }
} 