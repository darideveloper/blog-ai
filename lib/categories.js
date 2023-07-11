import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { postsDirectory, getSortedPostsData } from '@/lib/posts'
import { getCleanId } from './text'

export async function getCategories() {
  // Get all categories from posts

  let categories = []
  let postCounter = 0
  const fileNames = fs.readdirSync(postsDirectory)
  fileNames.map((fileName) => {

    if (!fileName.endsWith(".md")) {
      return null
    }

    // Increase conter
    postCounter++

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
          id: getCleanId(category),
        })
      }
    })
  })

  // Short caregories by counter
  categories.sort((a, b) => b.counter - a.counter)

  // Add "All" category at first position
  categories.unshift({
    name: 'Todos',
    counter: postCounter,
    id: 'all'
  })

  return categories
}

export async function getPostsCategory(categoryId) {
  // Get posts from specific category

  const allPosts = getSortedPostsData()
  const categoryPosts = allPosts.filter((post) => {

    let categoryFound = false
    post.categories.map((category) => {
      const postCategoryId = getCleanId (category)
      if (postCategoryId === categoryId) {
        categoryFound = true
      }
    })

    // If category is "all" return all posts
    if (categoryId === 'all') {
      categoryFound = true
    }
    
    return categoryFound
  
  })

  return categoryPosts
}