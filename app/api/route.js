import { NextResponse } from "next/server"
import Ticket from "../../lib/models/Ticket"

export async function POST(req) {
  try {
    const body = await req.json()
    const ticketDate = body.formData
    await Ticket.create(ticketData)

    return NextResponse.json({message: "Ticket created"}, { status: 201})
  } catch (error) {
    return NextResponse.json({message: "error", error}, { status: 500})
  }
}