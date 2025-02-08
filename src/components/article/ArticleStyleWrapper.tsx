import './articleStyle.css'

export default function ArticleStyleWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
