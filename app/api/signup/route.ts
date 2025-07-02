import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { User } from "@/lib/models";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("academy");
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existing = await db.collection("users").findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = { name, email, password: hashedPassword };
    const result = await db.collection("users").insertOne(user);
    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: "Failed to signup" }, { status: 500 });
  }
}
