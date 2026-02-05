import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from API route",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    received: body,
    processed: true,
  });
}
