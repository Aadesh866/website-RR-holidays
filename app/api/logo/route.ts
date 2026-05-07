import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the logo in the parent directory
    const logoPath = path.resolve(process.cwd(), "..", "logo.png")
    const imageBuffer = readFileSync(logoPath)
    
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error loading logo:", error)
    return new NextResponse("Logo not found", { status: 404 })
  }
}
