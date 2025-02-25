import { stripe } from '@/lib/stripe'
import arcjet from '@arcjet/next'

import { NextResponse } from 'next/server'
import { ajconfig } from '@/config/arcjet'

// https://docs.arcjet.com/integrations/nextauth
// https://docs.arcjet.com/get-started?f=next-js
const aj = arcjet(ajconfig)

// Retrieve Checkout Session Information
export async function GET(req: Request) {
  const decision = await aj.protect(req)

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 })
    } else {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  try {
    const search = new URL(req.url ?? '').search
    const urlParams = new URLSearchParams(search)

    const session = await stripe.checkout.sessions.retrieve(
      urlParams.get('session_id') ?? '',
    )

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details?.email,
    })
  } catch (err: any) {
    if (err.statusCode && err.message) {
      return NextResponse.json(err.message, { status: err.statusCode || 500 })
    }
  }
  return NextResponse.json({ status: 'open' })
}

// Create Checkout Sessions from body params.
export async function POST(req: Request) {
  const decision = await aj.protect(req)

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 })
    } else {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  try {
    // https://docs.stripe.com/api/checkout/sessions/create
    // https://docs.stripe.com/payments/checkout/pay-what-you-want?ui=embedded-form&dashboard-or-api=dashboard
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of
          // the product you want to sell
          price: process.env.STRIPE_PRICE_ID ?? '',
          quantity: 1,
        },
      ],
      custom_fields: [
        {
          key: 'project',
          type: 'dropdown',
          optional: true,
          label: {
            type: 'custom',
            custom: 'Which project should your donation support?',
          },
          dropdown: {
            options: [
              {
                label: 'Engineering - Bomb Shelter at Bus Stop',
                value: 'engineering',
              },
              {
                label: 'Public Health - Medical and Food Packages',
                value: 'publicHealth',
              },
              {
                label: 'Prosthetics - Prosthesis for Veterans',
                value: 'prosthetics',
              },
              {
                label: 'Agriculture - Water Quality Research',
                value: 'agriculture',
              },
              {
                label: 'Cultural Affairs - Student Cultural Exchanges',
                value: 'culturalAffairs',
              },
            ],
          },
        },
        {
          key: 'message',
          type: 'text',
          optional: true,
          label: {
            type: 'custom',
            custom: 'Would you like to include a message?',
          },
        },
      ],
      mode: 'payment',
      return_url: getPath() + '/return?session_id={CHECKOUT_SESSION_ID}',
    })

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (err: any) {
    if (err.message && err.statusCode) {
      return NextResponse.json(err.message, { status: err.statusCode || 500 })
    }
  }
}

function getPath() {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://offthebattlefieldfoundation.netlify.app'
}
