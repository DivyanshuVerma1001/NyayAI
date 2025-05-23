import { NextResponse } from "next/server";
import { removeAuthCookie } from "@/lib/auth/cookies";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );

  response.cookies.set(removeAuthCookie());

  return response;
}
