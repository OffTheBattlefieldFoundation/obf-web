import Link from 'next/link'

import { getSortedArticlesData } from '../../../lib/articles'

export const metadata = {
  title: 'Off the Battlefield Foundation - Research',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function ResearchPage() {
  const allArticlesData = getSortedArticlesData()

  return (
    <main className="pt-8 container mx-auto flex flex-col items-center">
      <ul>
        {allArticlesData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/research/${id}`}>{title}</Link>
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </main>
  )
}
