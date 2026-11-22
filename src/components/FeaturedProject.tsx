import Link from 'next/link'
import CountUp from '@/components/CountUp'
import PhotoMarquee from '@/components/PhotoMarquee'

const STATS = [
  {
    value: 43,
    suffix: '%',
    label: 'less energy used by the new wastewater pump in Nizhyn',
  },
  {
    value: 75,
    suffix: '+',
    label: 'virtual exchange partnerships between UF and Nizhyn students',
  },
  {
    value: 10000,
    prefix: '$',
    label: 'grant from Projects for Peace for humanitarian work',
  },
]

// The home page's showcase of the Ukraine Rebuilding Initiative: a photo
// banner, headline numbers that count up, a button to the project page,
// and a strip of scrolling photos from Gainesville and Nizhyn.
export default function FeaturedProject() {
  return (
    <section id="our-work" className="scroll-mt-24 bg-[#009b25]/10">
      {/* Photo banner */}
      <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-20">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-green-700">
          Our first project
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-lime-950 md:text-4xl">
          The Ukraine Rebuilding Initiative
        </h2>

        <div className="relative mt-8 overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/uri/uri-team.jpg"
            alt="The Ukraine Rebuilding Initiative team with Gainesville Mayor Harvey Ward at the memorandum of understanding signing"
            className="aspect-[4/3] w-full object-cover md:aspect-[21/9]"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="max-w-2xl text-2xl font-bold leading-snug text-white md:text-4xl">
              Students from Gainesville, helping rebuild a city in Ukraine.
            </p>
          </div>
        </div>

        {/* Headline numbers */}
        <dl className="mt-8 grid gap-4 md:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-lime-200"
            >
              <dd className="text-5xl font-bold text-green-700">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
              <dt className="mt-2 text-gray-700">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="py-10 text-center md:py-12">
          <Link
            href="/projects/uri"
            className="inline-block rounded-full bg-green-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-green-800"
          >
            See the Ukraine Rebuilding Initiative →
          </Link>
        </div>
      </div>

      {/* Scrolling photos from both cities */}
      <PhotoMarquee
        durationSeconds={70}
        rows={[
          [
            { src: '/uri/mou-02.jpg', width: 1600, height: 1067 },
            { src: '/uri/nizhyn-sign.jpg', width: 957, height: 1280 },
            { src: '/uri/team-century-tower.jpg', width: 1600, height: 1200 },
            { src: '/uri/prof-group.jpg', width: 1600, height: 1066 },
            { src: '/uri/pump-new.jpg', width: 1200, height: 1600 },
            { src: '/uri/mou-08.jpg', width: 1600, height: 1067 },
            { src: '/uri/nizhyn-council-call-2.jpg', width: 1500, height: 998 },
          ],
        ]}
      >
        <div className="flex min-h-[14rem] items-center justify-center px-4 py-12 md:min-h-[18rem]">
          <p className="rounded-2xl bg-white/90 px-6 py-4 text-center text-xl font-bold text-lime-950 shadow-md md:text-2xl">
            From Gainesville to Nizhyn
          </p>
        </div>
      </PhotoMarquee>
    </section>
  )
}
