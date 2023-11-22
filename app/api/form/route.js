import { NextResponse } from "next/server";
import dbConnect from "@/database/dbConnect";
import Contact from "@/database/schema/contact";

export async function POST(req) {
  try {
    const { name, email, message, fingerPrint } = await req.json();
    await dbConnect();
    const contact = await Contact.create({
      name,
      email,
      message,
      fingerPrint,
      date: new Date(),
    });

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
