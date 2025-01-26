import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const articlesDir = path.join(process.cwd(), 'articles')

export interface ArticleMetaData {
  id: string
  title: string
  date: string
}

interface ArticleData extends ArticleMetaData {
  contentHtml: string
}

export function getSortedArticlesMetaData(): ArticleMetaData[] {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDir)
  const allArticlesMetaData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(articlesDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the article metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as ArticleMetaData
  })
  // Sort articles by date
  return allArticlesMetaData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDir)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getArticleData(id: string): Promise<ArticleData> {
  const matterResult = getMatterResult(`${id}.md`)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as ArticleData
}

export async function getArticleMetaData(id: string): Promise<ArticleMetaData> {
  const matterResult = getMatterResult(`${id}.md`)

  // Combine the data with the id and contentHtml
  return {
    id,
    ...matterResult.data,
  } as ArticleMetaData
}

export function getMatterResult(filename: string) {
  const fullPath = path.join(articlesDir, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the article metadata section
  return matter(fileContents)
}
