/** @type {import('next').NextConfig} */
const nextConfig = {
  // Chapters were renamed to projects. Keep the old links working.
  async redirects() {
    return [
      { source: '/chapters', destination: '/projects', permanent: true },
      { source: '/chapters/uf', destination: '/projects/uri', permanent: true },
      {
        source: '/chapters/ucf',
        destination: '/projects/ccai',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
