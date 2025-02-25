import { detectBot, slidingWindow, shield } from '@arcjet/next'

// https://docs.arcjet.com/integrations/nextauth
// https://docs.arcjet.com/get-started?f=next-js
export const ajconfig = {
  key: process.env.ARCJET_KEY!,
  characteristics: ['ip.src'], // Track requests by IP
  rules: [
    slidingWindow({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
      interval: 60, // tracks requests across a 60 second sliding window
      max: 10, // allow a maximum of 10 requests
    }),
    detectBot({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
      allow: [],
    }),
    shield({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
    }),
  ],
}

export const ajconfigSubmitArticle = {
  key: process.env.ARCJET_KEY!,
  characteristics: ['ip.src'],
  rules: [
    slidingWindow({
      mode: 'LIVE',
      interval: 60,
      max: 3,
    }),
    detectBot({
      mode: 'LIVE',
      allow: [],
    }),
    shield({
      mode: 'LIVE',
    }),
  ],
}
