import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(req: NextRequest) {
  try {
    // grab the session id and updated field(s)
    // update the session data in vercel kv database
    // do NOT overwrite session data, simply update the requested fields
    
    //return "success" message
  } catch (error) {
    //return "error" message
    
  }
}
