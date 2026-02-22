export const metadata = {
  title: 'Cats of the week',
  description: '10 random cats from The Cat API.',
}

type CatApiImage = {
  id: string
  url: string
}

const NAME_PREFIXES = [
  'Captain',
  'Mochi',
  'Whiskers',
  'Noodle',
  'Pebble',
  'Sunny',
  'Clover',
  'Miso',
  'Comet',
  'Poppy',
  'Olivia',
  'Emma',
  'Ava',
  'Sophia',
  'Isabella',
  'Charlotte',
  'Amelia',
  'Mia',
  'Harper',
  'Evelyn',
  'Abigail',
  'Emily',
  'Ella',
  'Elizabeth',
  'Camila',
  'Luna',
  'Sofia',
  'Avery',
  'Mila',
  'Aria',
  'Liam',
  'Noah',
  'William',
  'James',
  'Oliver',
  'Benjamin',
  'Elijah',
  'Lucas',
  'Mason',
  'Logan',
  'Alexander',
  'Ethan',
  'Jacob',
  'Michael',
  'Daniel',
  'Henry',
  'Jackson',
  'Sebastian',
  'Aiden',
  'Matthew',
]

const NAME_SUFFIXES = [
  'Paws',
  'Bean',
  'Fluff',
  'Tail',
  'Biscuit',
  'Mittens',
  'Sprout',
  'Snout',
  'Moon',
  'Dash',
]

function randomCatName() {
  const prefix = NAME_PREFIXES[Math.floor(Math.random() * NAME_PREFIXES.length)]
  const suffix = NAME_SUFFIXES[Math.floor(Math.random() * NAME_SUFFIXES.length)]

  return `${prefix} ${suffix}`
}

async function fetchCatImages(): Promise<CatApiImage[]> {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
      cache: 'no-store',
    })

    if (!response.ok) {
      return []
    }

    const cats = (await response.json()) as CatApiImage[]

    return cats.slice(0, 10)
  } catch {
    return []
  }
}

export default async function CatsOfTheWeekPage() {
  const cats = await fetchCatImages()

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Cats of the week</h1>

      {cats.length === 0 ? (
        <p className="text-center">Could not load cat pictures right now. Please try again.</p>
      ) : (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {cats.map((cat, index) => (
            <article
              key={cat.id}
              className="rounded-lg border bg-white p-3 shadow-sm"
            >
              <img
                src={cat.url}
                alt={`Random cat ${index + 1}`}
                className="h-44 w-full rounded-md object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-center font-medium">{randomCatName()}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
