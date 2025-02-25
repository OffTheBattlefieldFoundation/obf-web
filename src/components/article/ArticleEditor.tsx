'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import Tiptap from '@/components/article/Tiptap'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters' }),
  content: z.string().trim(),
})

async function onSubmit({ title, content }: z.infer<typeof formSchema>) {
  await fetch('/api/submit_article', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
  })
}

export default function ArticleEditor() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      content: '',
    },
  })

  const watchTitle = form.watch('title')
  const watchContent = form.watch('content')

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-end">
            <Button
              className="my-4"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
          </div>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Main title for your ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Tiptap
                    title={watchTitle}
                    isEmpty={watchContent === '' || watchContent === '<p></p>'}
                    description={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
