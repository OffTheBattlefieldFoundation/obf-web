import ArticleEditor from '@/components/ArticleEditor'

export const metadata = {
  title: 'Off the Battlefield Foundation - Publish',
  description: 'Publish articles for the Off the Battlefield Foundation',
}

export default function page() {
  return (
    <div className="p-8">
      <ArticleEditor />
    </div>
  )
}
