interface DropdownProps {
  title: string
  summary: string
  children: React.ReactNode
}

// A section that shows a title and one-line summary, and reveals more
// information when clicked.
export default function Dropdown({ title, summary, children }: DropdownProps) {
  return (
    <details className="group rounded-2xl border border-lime-200 bg-white shadow-sm transition-colors open:border-lime-400 hover:border-lime-400">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="block text-xl font-bold text-lime-950">{title}</span>
          <span className="mt-1 block text-sm text-gray-600">{summary}</span>
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-2xl text-green-700 transition-transform group-open:rotate-180"
        >
          ⌄
        </span>
      </summary>
      <div className="space-y-3 border-t border-lime-100 px-6 pb-6 pt-4 text-gray-700">
        {children}
      </div>
    </details>
  )
}
