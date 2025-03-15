'use client'

import Head from 'next/head'
import MessageBox from '@/components/MessageBox' // Import the MessageBox component

export default function ContactUsPage() {
  return (
    <div>
      <Head>
        <title>Off the Battlefield - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Off the Battlefield to ask questions or leave feedback."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Page background */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
            backgroundColor: '#EFFBD0', // lime green background
          }}
        >
          {/* Apply white background directly to the MessageBox */}
          <MessageBox
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
            }}
          />
        </div>
      </main>
    </div>
  )
}
