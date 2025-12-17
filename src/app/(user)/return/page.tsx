'use client'
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'

export default function Return() {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState('')

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const sessionId = urlParams.get('session_id')

    fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        setCustomerEmail(data.customer_email)
      })
  }, [])

  if (status === 'open') {
    return redirect('/')
  }

  const obfEmail = 'offthebattlefieldfoundation@gmail.com'

  if (status === 'complete') {
    return (
      <div className="flex justify-center">
        <section className="pt-24">
          <p>
            Your donation is greatly appreciated! A confirmation email will be
            sent to {customerEmail}. If you have any questions, please email{' '}
            <a href={'mailto:' + obfEmail}>{obfEmail}</a>.
          </p>
        </section>
      </div>
    )
  }

  return null
}
