import { NextResponse } from "next/server";
import dbConnect from "@/database/dbConnect";
import Reaction from "@/database/schema/reaction";

export async function POST(req) {
  try {
    const { score, fingerPrint } = await req.json();
    await dbConnect();
    const reaction = await Reaction.create({
      score,
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
