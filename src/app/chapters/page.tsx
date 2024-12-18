import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Off the Battlefield - Chapters</title>
        <meta
          name="description"
          content="Helping veterans connect with compassionate companions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Centered Responsive Grid Layout */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
              maxWidth: '1000px',
              width: '100%',
            }}
          >
            {/* Image 1 */}
            <Link href="/chapters/uf" legacyBehavior>
              <a
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/uf_logo.png"
                    alt="University of Florida Logo"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>
                  University of Florida
                </p>
              </a>
            </Link>

            {/* Image 2 */}
            <Link href="/chapters/ucf" legacyBehavior>
              <a
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/ucf_logo.png"
                    alt="University of Central Florida Logo"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>
                  University of Central Florida
                </p>
              </a>
            </Link>

            {/* Image 3 */}
            <Link href="https://forms.gle/AYU1hvrr7vmy9fAB9" legacyBehavior>
              <a
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '200px',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="/add_logo.png"
                    alt="Create a New Chapter Logo"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>
                  Create a New Chapter
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <p>Off the Battlefield &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
