import NavMenu from '@/components/AdminNavMenu'
import Submissions from '@/components/admin/Submissions'

export default async function Page() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-medium ">Admin Page</h1>

      <NavMenu />
      <Submissions />
    </main>
  )
}
