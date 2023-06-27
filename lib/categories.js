import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { postsDirectory, getSortedPostsData } from '@/lib/posts'

export async function getCategories() {
  // Get all categories from posts

  let categories = []
  const fileNames = fs.readdirSync(postsDirectory)
  fileNames.map((fileName) => {

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Get categories from markdown file
    const postCategories = matter(fileContents).data.categories

    // Register new categories and increment count
    postCategories.map((category) => {
      const currentCategory = categories.find((cat) => cat.name === category)
      if (currentCategory) {
        currentCategory.counter++
      } else {
        categories.push({
          name: category,
          counter: 1,
          id: getCategoryId(category),
        })
      }
    })
  })

  return categories
}

export function getCategoryId(categoryName) {
  // Clean extra characters from category name

  const chars = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/']
  let id = categoryName.toLowerCase()
  for (const char of chars) {
    id = id.replace(char, '-')
  }

  return id
}

export async function getPostsCategory(categoryId) {
  // Get posts from specific category

  const allPosts = getSortedPostsData()
  const categoryPosts = allPosts.filter((post) => {

    let categoryFound = false
    post.categories.map((category) => {
      const postCategoryId = getCategoryId (category)
      if (postCategoryId === categoryId) {
        categoryFound = true
      }
    })
    
    return categoryFound
  
  })

  return categoryPosts
}