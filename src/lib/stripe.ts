import 'server-only'

import Stripe from 'stripe'

// https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/lib/stripe.ts
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
