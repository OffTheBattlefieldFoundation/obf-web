'use client'

import Head from 'next/head'
import MessageBox from '@/components/MessageBox'

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90vh',
            padding: '40px 20px 20px',
            backgroundColor: '#EFFBD0',
          }}
        >
          <p style={{ marginBottom: '20px', color: '#333', fontSize: '16px' }}>
            Alternative contact:
            <a
              href="mailto:offthebattlefieldfoundation@gmail.com"
              style={{
                color: 'green',
                textDecoration: 'none',
                marginLeft: '5px',
              }}
            >
              offthebattlefieldfoundation@gmail.com
            </a>
          </p>

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
