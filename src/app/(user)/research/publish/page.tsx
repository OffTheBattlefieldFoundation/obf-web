import ArticleEditor from '@/components/article/ArticleEditor'

export const metadata = {
  title: 'Off the Battlefield Foundation - Publish',
  description: 'Publish articles for the Off the Battlefield Foundation',
}

export default function page() {
  return (
    <div className="pt-8 container mx-auto">
      <ArticleEditor />
    </div>
  )
}
