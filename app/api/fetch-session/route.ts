import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

// takes in a sessionID and returns the session data

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json(
        { error: "Invalid or missing sessionId" },
        { status: 400 },
      );
    }

    const sessionData = await kv.get(`session:${sessionId}`);

    if (!sessionData) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    console.log("Session fetched:", sessionId);
    return NextResponse.json(sessionData);
  } catch (error) {
    console.error("Error fetching session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
