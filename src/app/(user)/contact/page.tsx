import ContactForm, { CONTACT_EMAIL } from '@/components/ContactForm'

export const metadata = {
  title: 'Off the Battlefield Foundation - Contact Us',
  description: 'Get in touch with the Off the Battlefield Foundation.',
}

export default function ContactPage() {
  return (
    <main className="bg-[#009b25]/10">
      <div className="mx-auto max-w-2xl px-4 pb-20 pt-32 md:pt-36">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Get in touch
          </p>
          <h1 className="mt-2 text-3xl font-bold text-lime-950 md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Have a question, want to partner with us, or want to get involved?
            Send us a message and we&apos;ll get back to you.
          </p>
        </div>

        <ContactForm />

        <p className="mt-6 text-center text-gray-700">
          Prefer to write directly? Email us at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-green-700 underline underline-offset-2 hover:text-green-800"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </main>
  )
}
