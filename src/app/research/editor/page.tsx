import ArticleEditor from '@/components/ArticleEditor'

export const metadata = {
  title: 'Off the Battlefield Foundation - Article Editor',
  description: 'Edit articles for the Off the Battlefield Foundation',
}

export default function page() {
  return (
    <div className="p-8">
      <ArticleEditor />
    </div>
  )
}
