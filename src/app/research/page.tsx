import ResearchItem from '@/components/ResearchItem'

export const metadata = {
  title: 'Off the Battlefield Foundation - Research',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function Home() {
  return (
    <main className="pt-8 container mx-auto flex flex-col items-center">
      {new Array(3).fill(0).map((_, i) => (
        <div className="mb-32" key={i}>
          <ResearchItem />
        </div>
      ))}
    </main>
  )
}
