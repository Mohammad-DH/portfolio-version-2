import { NextResponse } from "next/server";
import dbConnect from "@/database/dbConnect";

import Hi from "@/database/schema/hi";

export async function POST(req) {
  try {
    const { fingerPrint } = await req.json();
    await dbConnect();
    const hi = await Hi.create({
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
