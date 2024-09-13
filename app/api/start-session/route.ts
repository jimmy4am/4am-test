import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { v4 as uuidv4 } from "uuid";

// accepts a url string and returns a session id

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing URL" },
        { status: 400 },
      );
    }

    const sessionId = uuidv4();
    const expirationTime = 24 * 60 * 60; // 24 hours

    await kv.set(`session:${sessionId}`, { url }, { ex: expirationTime });

    console.log("Session created:", sessionId);
    return NextResponse.json({ sessionId });
  } catch (error) {
    console.error("Error creating session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
