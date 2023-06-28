import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { getPostsCategory } from '@/lib/categories'
import { getCleanId } from '@/lib/text'

export const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get posts data and sort bu date

  const fileNames = fs.readdirSync(postsDirectory)
  let allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })

  allPostsData = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  
  // Sort posts by date
  return allPostsData

}

export function getAllPostIds() {
  // Return list of file names (id) in posts directory

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id) {
  // Get full data from specific post

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

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
  }
}

export async function getRelatedPosts(id) {
  // Get related posts from specific post

  // Get posts categories
  const postData = await getPostData(id)
  const postCategories = postData.categories

  // get category posts
  let relatedPosts = []
  for (const category of postCategories) {
    const categoryId = await getCleanId(category)
  
    const categoryPosts = await getPostsCategory(categoryId)
  
    // Save new posts, without duplicates
    for (const post of categoryPosts) {
      if (!relatedPosts.includes(post) & post.id !== id) {
        relatedPosts.push(post)
      }
    }
  }

  // Get random 2 posts
  relatedPosts = relatedPosts.sort(() => Math.random() - Math.random()).slice(0, 2)

  return relatedPosts
}