import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { postsDirectory } from './posts'

export async function getCategories () {
  let categories = {}
  const fileNames = fs.readdirSync(postsDirectory)
  fileNames.map((fileName) => {

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Get categories from markdown file
    const postCategories = matter(fileContents).data.categories
    
    // Register new categories and increment count
    postCategories.map((category) => {
      if (categories[category]) {
        categories[category] += 1
      } else {
        categories[category] = 1
      }
    })
  })

  // Format as a list of objects
  categories = Object.keys(categories).map((key) => {
    return {
      name: key,
      counter: categories[key],
    }
  })

  return categories
}