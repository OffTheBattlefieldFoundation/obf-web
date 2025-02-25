import arcjet from '@arcjet/next'
import { NextResponse, NextRequest } from 'next/server'

import { ajconfigSubmitArticle } from '@/config/arcjet'
import { addSubmission } from '@/lib/firebase'

const aj = arcjet(ajconfigSubmitArticle)

export async function POST(req: NextRequest) {
  const decision = await aj.protect(req)

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 })
    } else {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  const data = await req.json()

  // TODO: Add zod validation
  await addSubmission(data)

  return NextResponse.json({ status: 'open' })
}
