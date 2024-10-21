import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Off the Battlefield - Home</title>
        <meta name="description" content="Helping veterans connect with compassionate companions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Welcome to Off the Battlefield</h1>
        <p>Connecting veterans with the support of their communities.</p>
      </header>

      <main >
        <p>
          At Off the Battlefield, our mission is to bridge the gap between veterans and compassionate companions who can offer support and friendship. Explore our site to learn more about our initiatives and how you can get involved.
        </p>
      </main>

      <footer >
        <p>Off the Battlefield © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
