import arcjet from '@arcjet/next'
import { NextResponse, NextRequest } from 'next/server'

import { ajconfig } from '@/config/arcjet'
import { addArticle } from '@/lib/firebase'
import { getServerSession } from 'next-auth'

const aj = arcjet(ajconfig)

export async function POST(req: NextRequest) {
  const decision = await aj.protect(req)

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 })
    } else {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  const session = await getServerSession()

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const data = await req.json()

  if (!data.title || !data.content) {
    return NextResponse.json(
      { error: 'Missing title or content' },
      { status: 400 },
    )
  }

  if (await addArticle(data.title, data.content)) {
    return NextResponse.json(null, { status: 200 })
  } else {
    return NextResponse.json(
      { error: 'Failed to submit article' },
      { status: 500 },
    )
  }
}
