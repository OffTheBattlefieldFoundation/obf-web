import { stripe } from '@/lib/stripe'

import { NextResponse } from 'next/server'

// Retrieve Checkout Session Information
export async function GET(req: Request) {
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
export async function POST() {
  try {
    // https://docs.stripe.com/api/checkout/sessions/create
    // https://docs.stripe.com/payments/checkout/pay-what-you-want?ui=embedded-form&dashboard-or-api=dashboard
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of
          // the product you want to sell
          price: 'price_1Q83qRDZOH5WrnPPVgqAoFcq',
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url:
        'http://localhost:3000/return?session_id={CHECKOUT_SESSION_ID}',
    })

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (err: any) {
    if (err.message && err.statusCode) {
      return NextResponse.json(err.message, { status: err.statusCode || 500 })
    }
  }
}
