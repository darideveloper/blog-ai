import PropTypes from 'prop-types'

import PostsListLayout from '@/layouts/posts-list-layout'

import { getCategories, getPostsCategory } from '@/lib/categories'
import { useContext, useEffect } from 'react'
import { getContacts } from '@/lib/portfolio'
import { ContactsContext } from '@/contexts/contacts-context'

export default function Category({ postsData, categories, currentCategory, contacts }) {

  const { setContacts } = useContext(ContactsContext)

  // Save contacts in context when component load
  useEffect (() => {
    setContacts(contacts)
  }, [])

  return (
    <PostsListLayout
      postsData={postsData}
      categories={categories}
      currentCategory={currentCategory}
    />      
  )
}

// Generate paths for posts
export async function getStaticPaths() {
  const categories = await getCategories()
  const paths = categories.map((category) => {
    return {
      params: {
        id: category.id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

// get data of the current post
export async function getStaticProps({ params }) {

  
  const postsData = await getPostsCategory(params.id)
  const categories = await getCategories()

  // Get portfolio data 
  const contacts = await getContacts()

  return {
    props: {
      postsData,
      categories,
      currentCategory: params.id,
      contacts,
    },
  }
}

Category.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCategory: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}