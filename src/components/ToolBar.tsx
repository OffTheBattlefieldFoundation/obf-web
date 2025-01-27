'use client'
import { useCallback } from 'react'

import { type Editor } from '@tiptap/react'
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
} from 'lucide-react'

type Props = {
  editor: Editor | null
}

function ToolButton({
  children,
  onClick,
  isActive = false,
  disabled = false,
}: {
  children: React.ReactNode
  onClick: () => void
  isActive?: boolean
  disabled?: boolean
}) {
  return (
    <>
      <button
        className={
          'rounded-md p-2 transition duration-500 ' +
          (isActive ? 'bg-lime-400' : '')
        }
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}

export function Toolbar({ editor }: Props) {
  // TODO: Create a better UI for setting links
  const setLink = useCallback(() => {
    if (!editor) {
      return
    }

    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    try {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    } catch (e: any) {
      alert(e.message)
    }
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className="p-2 flex space-x-2 border border-input bg-transparent rounded-md">
      <ToolButton
        isActive={editor.isActive('heading', { level: 1 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1 className="h-4 w-4" />
      </ToolButton>

      <ToolButton
        isActive={editor.isActive('heading', { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 className="h-4 w-4" />
      </ToolButton>

      <ToolButton
        isActive={editor.isActive('heading', { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading3 className="h-4 w-4" />
      </ToolButton>

      <ToolButton
        isActive={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </ToolButton>

      <ToolButton
        isActive={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </ToolButton>

      <ToolButton
        isActive={editor.isActive('strike')}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </ToolButton>

      <ToolButton
        isActive={editor.isActive('bulletList')}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </ToolButton>

      <ToolButton
        isActive={editor.isActive('orderedList')}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </ToolButton>

      <ToolButton isActive={editor.isActive('link')} onClick={setLink}>
        Set Link
      </ToolButton>

      <ToolButton
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
      >
        Unset Link
      </ToolButton>
    </div>
  )
}
