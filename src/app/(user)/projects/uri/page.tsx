import VideoPlayer from '@/components/VideoPlayer'
import Dropdown from '@/components/Dropdown'
import PhotoBackdrop from '@/components/PhotoBackdrop'
import PhotoMarquee from '@/components/PhotoMarquee'

export const metadata = {
  title: 'Off the Battlefield Foundation - Ukraine Rebuilding Initiative',
  description:
    'The Ukraine Rebuilding Initiative and the Gainesville–Nizhyn Sister City Alliance.',
}

const STUDENT_INTEREST_FORM = 'https://forms.gle/BLYtA3yiVw9nvkoR6'
const PARTNER_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLScoCK2K-MIGtrE5WIQFmYvbigMwgzp9QXY9jesKmSLGnVB1MQ/viewform'

// News coverage of URI, newest first.
const NEWS = [
  {
    outlet: 'The Independent Florida Alligator',
    date: 'January 2026',
    title:
      'UF Ukraine Rebuilding Initiative implements new wastewater pump station in Nizhyn',
    url: 'https://www.alligator.org/article/2026/01/ukraine-wastewater-pump',
  },
  {
    outlet: 'UF Department of Languages, Literatures and Cultures',
    date: 'May 2025',
    title:
      'Mikhaylov and Wright create multipronged student-run non-profit to help Ukraine',
    url: 'https://languages.ufl.edu/mikhaylov-and-wright-create-multipronged-student-run-non-profit-to-help-ukraine/',
  },
  {
    outlet: 'The Independent Florida Alligator',
    date: 'January 2025',
    title:
      'Sister cities and stronger futures: a partnership to help rebuild Ukraine',
    url: 'https://www.alligator.org/article/2025/01/gainesville-ukraine-sister-cities',
  },
  {
    outlet: 'The Independent Florida Alligator',
    date: 'November 2024',
    title: "Gainesville forges sister-city partnership with Ukraine's Nizhyn",
    url: 'https://www.alligator.org/article/2024/11/gainesville-forges-sister-city-partnership-with-ukraines-nizhyn',
  },
  {
    outlet: 'CBS4',
    date: 'December 2022',
    title:
      'UF student with roots from both sides talks the impact of Russia and Ukraine War on family',
    url: 'https://mycbs4.com/news/local/a-uf-student-with-roots-from-both-sides-discusss-the-russia-and-ukraine',
  },
  {
    outlet: 'UF International Center',
    title: 'Ukraine Rebuilding Initiative (URI) virtual exchange',
    url: 'https://internationalcenter.ufl.edu/ogl/virtual-exchangecoil/virtual-exchangecoil-project-catalog/ukraine-rebuilding-initiative-uri/',
  },
]

const video = {
  src: '/Off the Battlefield Foundation - Ukraine Rebuilding Initiative (URI) Launch Video.mp4?v=1',
  type: 'video/mp4',
  autoPlay: true,
  loop: true,
  muted: false,
  width: '100%',
  height: 'auto',
  borderRadius: '15px',
  borderColor: '#f9fcf0',
  borderWidth: '4px',
  poster: '/preview_uf_chapter.png',
}

const overlay = {
  backgroundColor: '#f9fcf0',
  borderColor: 'green',
  borderRadius: '15px',
  borderWidth: '4px',
  padding: '10px 20px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  text: 'Ukraine Rebuilding Initiative',
  textColor: '#333',
  fontSize: '14px',
  fontWeight: 'bold',
}

const logo = {
  src: '/URI-Logo.png',
  alt: 'Ukraine Rebuilding Initiative Logo',
  height: '40px',
  marginRight: '10px',
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-lime-950 md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function ButtonLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-800"
    >
      {children}
    </a>
  )
}

function TextCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
      <h3 className="mb-3 text-2xl font-bold text-lime-950">{title}</h3>
      <div className="space-y-3 text-gray-700">{children}</div>
    </div>
  )
}

function Photo({
  src,
  alt,
  label,
  caption,
  position = 'center',
  aspectClassName = 'aspect-[4/3]',
}: {
  src: string
  alt: string
  label?: string
  caption?: string
  // CSS object-position: which part of the photo stays visible when cropped.
  position?: string
  // Tailwind aspect-ratio class for the photo frame.
  aspectClassName?: string
}) {
  return (
    <figure>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`${aspectClassName} w-full rounded-xl object-cover shadow-sm`}
          style={{ objectPosition: position }}
        />
        {label && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-lime-950 shadow">
            {label}
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-lime-50 px-5 py-4">
      <span className="shrink-0 text-4xl font-bold text-green-700">
        {value}
      </span>
      <span className="text-gray-700">{label}</span>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      {/* Video, on the same light OBF green as the section below it */}
      <section className="bg-[#009b25]/10">
        <div className="mx-auto max-w-6xl px-4 pt-32 md:px-8">
          <VideoPlayer
            videoSettings={video}
            overlaySettings={overlay}
            logoSettings={logo}
          />
        </div>
      </section>

      {/* About URI, on a light wash of the OBF logo green */}
      <section className="bg-[#009b25]/10">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Our project"
            title="The Ukraine Rebuilding Initiative"
          />
          <p className="text-center text-lg text-gray-700">
            The Ukraine Rebuilding Initiative (URI) is the first project of the
            Off the Battlefield Foundation. Started by students at the
            University of Florida, URI brings students, universities and city
            partners together to help rebuild communities in Ukraine affected by
            the war, beginning with Gainesville&apos;s sister city, Nizhyn.
          </p>

          <div className="mt-10 space-y-4">
            <Dropdown
              title="Cultural Affairs"
              summary="Virtual exchanges connecting students and professors in Gainesville and Nizhyn."
            >
              <h4 className="text-lg font-semibold text-lime-950">
                A partnership with Nizhyn Gogol State University
              </h4>
              <p>
                URI created a partnership between Nizhyn Gogol State University
                (NGSU) and the UF International Center (UFIC), connecting
                students and faculty across both cities.
              </p>

              <Stat
                value="75+"
                label="virtual cultural exchange partnerships between UF and Nizhyn students"
              />

              <div className="pt-2">
                <h4 className="mb-2 font-semibold text-lime-950">
                  Student language exchange
                </h4>
                <p>
                  Through these partnerships, UF students help Nizhyn students
                  learn English, and Nizhyn students teach Ukrainian to their UF
                  partners.
                </p>
              </div>
              <Photo
                src="/uri/cultural-zoom.jpg"
                alt="UF and Nizhyn students together on a Zoom call"
                caption="A virtual exchange session with students from UF and Nizhyn"
                aspectClassName="aspect-[20/9]"
              />

              <div className="pt-4">
                <h4 className="mb-2 font-semibold text-lime-950">
                  Professor Exchange
                </h4>
                <p>
                  Through our Professor Exchange program, we invited UF
                  professors to speak about Florida&apos;s history, and Nizhyn
                  professors to speak about Ukrainian history.
                </p>
              </div>
              <Photo
                src="/uri/prof-group.jpg"
                alt="Professor Exchange attendees in Gainesville, with Nizhyn participants joining on screen"
                caption="Attendees in Gainesville, with participants from Nizhyn joining by video"
                aspectClassName="aspect-[3/2]"
              />
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <Photo
                  src="/uri/prof-title-slide-2.jpg"
                  alt="URI students in front of the title slide: University of Florida and Nizhyn Gogol State University Professor Exchange, The History of Ukraine and Florida"
                />
                <Photo
                  src="/uri/prof-live-exchange.jpg"
                  alt="A UF professor in Gainesville in conversation with a Nizhyn professor on video"
                />
                <Photo
                  src="/uri/prof-noll-gifts.jpg"
                  alt="A UF professor holding a Ukraine candle and a manatee keychain"
                />
                <Photo
                  src="/uri/prof-faculty-table.jpg"
                  alt="Faculty attending the Professor Exchange"
                />
                <Photo
                  src="/uri/prof-zoom-lecture.jpg"
                  alt="A Nizhyn professor presenting on Ukrainian history by video"
                  position="center 35%"
                />
                <Photo
                  src="/uri/prof-florida-lecture.jpg"
                  alt="Students listening to a lecture on Florida's political history"
                />
              </div>
            </Dropdown>

            <Dropdown
              title="Engineering"
              summary="Replacing aging wastewater infrastructure in Nizhyn."
            >
              <h4 className="text-lg font-semibold text-lime-950">
                Wastewater pump station · Nizhyn, Ukraine
              </h4>
              <p>
                Working alongside an engineering firm in Ukraine and the Nizhyn
                City Council, URI&apos;s engineering team helped replace an
                aging pump at one of Nizhyn&apos;s wastewater pump stations,
                operated by Nizhynvodokanal, the city&apos;s water utility. The
                old pumps wore out quickly and used excessive amounts of
                electricity. The new pump is more energy-efficient, safer to
                operate and needs less maintenance, helping ensure the city does
                not face a wastewater crisis in the coming years due to aging
                infrastructure.
              </p>

              <Stat
                value="43%"
                label="less energy used by the new pump than the old system"
              />

              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                <Photo
                  src="/uri/pump-old.jpg"
                  alt="The old wastewater pump in the Nizhyn pump station"
                  label="Before"
                  caption="The aging pump that was replaced"
                />
                <Photo
                  src="/uri/pump-new.jpg"
                  alt="The new HOMA submersible sewage pump"
                  label="After"
                  position="center 25%"
                  caption="The new HOMA pump, delivered to the station"
                />
              </div>

              <div className="grid items-start gap-6 pt-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-lime-950">
                    What our team did
                  </h4>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Performed the pump calculations</li>
                    <li>Selected the pump manufacturer and model</li>
                    <li>Secured funding for the purchase</li>
                    <li>Coordinated delivery to Nizhyn</li>
                  </ul>
                </div>
                <Photo
                  src="/uri/engineering-planning.jpg"
                  alt="URI students in a planning session"
                  caption="A URI engineering planning session"
                />
              </div>

              <div className="grid items-start gap-6 pt-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-lime-950">The pump</h4>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>HOMA submersible sewage pump, made in Germany</li>
                    <li>Installed horizontally in a dry well</li>
                    <li>Flow rate of 145 cubic meters per hour</li>
                    <li>Cost: $5,300 (225,000 UAH / €4,600)</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Photo
                    src="/uri/pump-new-side.jpg"
                    alt="The new pump laid out before installation"
                  />
                  <Photo
                    src="/uri/pump-new-nameplate.jpg"
                    alt="The new pump's nameplate"
                  />
                </div>
              </div>

              <blockquote className="mt-4 border-l-4 border-green-700 pl-4 italic">
                &ldquo;Thanks to Ukraine Rebuilding Initiative for the repeated
                support of the Nizhyn community and help in strengthening
                critical infrastructure.&rdquo;
                <footer className="mt-1 text-sm not-italic text-gray-600">
                  Nizhyn City Council (translated)
                </footer>
              </blockquote>
            </Dropdown>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-gray-700">
              Want to get hands-on experience with a dedicated team?
            </p>
            <ButtonLink href={STUDENT_INTEREST_FORM}>Join our team</ButtonLink>
          </div>
        </div>
      </section>

      {/* Sister City Alliance */}
      <section className="border-t border-lime-200">
        <div className="mx-auto max-w-5xl px-4 pt-16 md:pt-20">
          <SectionHeading
            eyebrow="Sister City Alliance"
            title="Gainesville & Nizhyn"
          />
          <figure>
            <img
              src="/uri/uri-team.jpg"
              alt="The Ukraine Rebuilding Initiative team with Gainesville Mayor Harvey Ward and the Nizhyn delegation, holding the signed memorandum of understanding"
              className="w-full rounded-2xl object-cover shadow-md"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-600">
              The Ukraine Rebuilding Initiative team with Gainesville Mayor
              Harvey Ward at the Memorandum of Understanding signing
            </figcaption>
          </figure>
        </div>

        <PhotoMarquee
          className="mt-12"
          rows={[
            [
              { src: '/uri/mou-02.jpg', width: 1600, height: 1067 },
              { src: '/uri/kodola-mou.jpg', width: 1600, height: 1294 },
              { src: '/uri/mou-03.jpg', width: 1600, height: 1067 },
              { src: '/uri/nizhyn-sign.jpg', width: 957, height: 1280 },
              { src: '/uri/mou-04.jpg', width: 1600, height: 1067 },
              { src: '/uri/mou-07.jpg', width: 1600, height: 1067 },
            ],
            [
              { src: '/uri/mou-08.jpg', width: 1600, height: 1067 },
              { src: '/uri/team-century-tower.jpg', width: 1600, height: 1200 },
              { src: '/uri/mou-10.jpg', width: 1600, height: 1200 },
              { src: '/uri/mou-09.jpg', width: 1200, height: 1600 },
              {
                src: '/uri/nizhyn-council-call.jpg',
                width: 1600,
                height: 1050,
              },
              { src: '/uri/mou-06.jpg', width: 1600, height: 1067 },
            ],
          ]}
        >
          <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 md:py-24">
            <TextCard title="What is a sister city alliance?">
              <p>
                A sister city alliance is a long-term partnership between two
                cities in different countries. The cities connect their
                residents, schools, businesses and governments to build
                understanding and work on shared projects together.
              </p>
              <p>
                On October 31, 2024, Gainesville Mayor Harvey Ward signed a
                memorandum of understanding that made Nizhyn, Ukraine, one of
                Gainesville&apos;s sister cities.
              </p>
            </TextCard>
            <TextCard title="How it came about">
              <p>
                The idea started with URI co-founder Mikhail Mikhaylov, who met
                Nizhyn Mayor Oleksandr Kodola during an internship in
                Washington, D.C.
              </p>
              <p>
                URI students then spent about a year building support in
                Gainesville. They worked with former Gainesville mayor Lauren
                Poe, now director of the Greater Gainesville International
                Center, to win Mayor Ward&apos;s endorsement, leading to the
                signing of the memorandum.
              </p>
            </TextCard>
          </div>
        </PhotoMarquee>

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
          <PhotoBackdrop
            className="rounded-2xl"
            photos={[
              { src: '/uri/mikhail-nizhyn-mayor.jpg', position: 'center top' },
              { color: '#009b25' },
            ]}
            gridClassName="grid-cols-1 grid-rows-2"
          >
            <div className="flex min-h-[36rem] items-end p-4 md:p-6">
              <TextCard title="Nizhyn, Ukraine">
                <p>
                  Nizhyn is a historic city of about 65,000 people on the Oster
                  River in northern Ukraine&apos;s Chernihiv region, roughly 116
                  km (72 miles) northeast of Kyiv. First mentioned in 1147, it
                  is home to Nizhyn Gogol State University, which began in 1805
                  as the lyceum where writer Nikolai Gogol studied.
                </p>
                <p>
                  The Chernihiv region was among the first areas attacked in
                  Russia&apos;s full-scale invasion in February 2022.
                </p>
              </TextCard>
            </div>
          </PhotoBackdrop>

          <PhotoBackdrop
            className="rounded-2xl"
            photos={[
              {
                src: '/uri/mikhail-gainesville-mayor.jpg',
                position: 'center 85%',
              },
              { color: '#009b25' },
            ]}
            gridClassName="grid-cols-1 grid-rows-2"
          >
            <div className="flex min-h-[36rem] items-end p-4 md:p-6">
              <TextCard title="Gainesville, Florida">
                <p>
                  Gainesville is a city of about 140,000 people in north-central
                  Florida and the home of the University of Florida, where URI
                  began.
                </p>
                <p>
                  Through the alliance, Gainesville residents, students and
                  organizations can connect directly with Nizhyn and support its
                  recovery.
                </p>
              </TextCard>
            </div>
          </PhotoBackdrop>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-20 text-center">
          <p className="mb-6 text-gray-700">
            We hope to build a local coalition of private and public sector
            partners to grow this relationship, from simple donations to
            innovative projects that make our cities models for progress.{' '}
            <strong>
              If you are a business, nonprofit or organization in Gainesville
              interested in partnering with the Gainesville–Nizhyn Sister City
              Alliance, please fill out this form.
            </strong>
          </p>
          <ButtonLink href={PARTNER_FORM}>Become a partner</ButtonLink>
        </div>
      </section>

      {/* Special thanks: Projects for Peace */}
      <section className="border-t border-lime-200 bg-gradient-to-br from-sky-50 via-white to-yellow-50">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr]">
            <a
              href="https://www.instagram.com/p/DdygYhqjUu2/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-white p-8 shadow-md ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-sky-300"
            >
              <img
                src="/uri/projects-for-peace-logo.png"
                alt="Projects for Peace: the vision of Kathryn W. Davis (opens their Instagram post in a new tab)"
                className="w-full"
              />
            </a>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1f5596]">
                Special thanks
              </p>
              <h2 className="mt-2 text-3xl font-bold text-lime-950 md:text-4xl">
                Thank you, Projects for Peace
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                In summer 2025, Projects for Peace awarded URI a{' '}
                <strong className="text-lime-950">$10,000 grant</strong>, which
                funded the majority of this initiative&apos;s humanitarian work
                in Nizhyn, including the new wastewater pump.
              </p>
              <p className="mt-3 text-gray-700">
                We are deeply grateful to the Projects for Peace team for
                believing in our students and in the people of Nizhyn.
              </p>
              <div className="mt-6 inline-flex items-baseline gap-3 rounded-2xl bg-white/80 px-6 py-4 shadow-sm ring-1 ring-sky-100">
                <span className="text-4xl font-bold text-[#1f5596]">
                  $10,000
                </span>
                <span className="text-gray-700">
                  for humanitarian work in Nizhyn
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In the news, on the same light OBF green as the top of the page */}
      <section className="bg-[#009b25]/10">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <SectionHeading eyebrow="Press" title="URI in the news" />
          <ul className="grid gap-4 md:grid-cols-2">
            {NEWS.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-lime-200 bg-white p-6 shadow-sm transition-colors hover:border-lime-400"
                >
                  <span className="text-sm font-semibold text-green-700">
                    {item.outlet}
                    {item.date && (
                      <span className="font-normal text-gray-500">
                        {' '}
                        · {item.date}
                      </span>
                    )}
                  </span>
                  <span className="mt-2 flex-1 text-lg font-semibold text-lime-950 group-hover:underline">
                    {item.title}
                  </span>
                  <span className="mt-4 text-sm font-semibold text-green-700">
                    Read the story ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
