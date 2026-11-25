'use client'
import { useState } from 'react'

export const CONTACT_EMAIL = 'info@offthebattlefieldfoundation.org'

// Email links can fail in some email apps when they get very long, so the
// message is capped.
const MAX_MESSAGE_LENGTH = 1500

// A contact form that writes an email for the visitor: submitting it opens
// their own email app with a new message to CONTACT_EMAIL, with the subject
// and message filled in, ready for them to send. No server or email service
// is involved, so nothing is sent until the visitor presses send there.
export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [opened, setOpened] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = [
      // Email links expect CRLF line breaks.
      message.trim().replace(/\r?\n/g, '\r\n'),
      '',
      `From: ${name.trim()}`,
      email.trim(),
    ].join('\r\n')
    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject.trim() || 'Message from the website')}` +
      `&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setOpened(true)
  }

  const inputClass =
    'mt-1 w-full rounded-xl border border-lime-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/20'

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-lime-200 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="font-semibold text-lime-950">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="font-semibold text-lime-950">Your email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="font-semibold text-lime-950">Subject</span>
        <input
          type="text"
          name="subject"
          required
          maxLength={150}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="font-semibold text-lime-950">Message</span>
        <textarea
          name="message"
          required
          rows={7}
          maxLength={MAX_MESSAGE_LENGTH}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
        />
        <span className="mt-1 block text-right text-sm text-gray-500">
          {message.length}/{MAX_MESSAGE_LENGTH}
        </span>
      </label>

      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          className="rounded-full bg-[#007a1d] px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#006317] hover:shadow-xl"
        >
          Send message
        </button>
        <p className="text-center text-sm text-gray-600">
          This opens your email app with your message ready to send to{' '}
          {CONTACT_EMAIL}.
        </p>
        {opened && (
          <p
            role="status"
            className="rounded-xl bg-lime-50 px-4 py-3 text-center text-sm text-lime-950"
          >
            Your email app should now be open with your message. If nothing
            opened, please email us directly at the address below.
          </p>
        )}
      </div>
    </form>
  )
}
