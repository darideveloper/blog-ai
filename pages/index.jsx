import PropTypes from 'prop-types'

import PostsLayout from '@/layouts/posts-layout'

import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/categories'
import { getContacts } from '@/lib/portfolio'
import { useContext, useEffect } from 'react'
import { ContactsContext } from '@/contexts/contacts-context'

export default function Home({ postsData, categories, contacts }) {
  
  const { setContacts } = useContext(ContactsContext)

  // Save contacts in context when component load
  useEffect (() => {
    setContacts(contacts)
  }, [])

  return (
    <PostsLayout
      postsData={postsData}
      categories={categories}
    />
  )
}

// Get props to gerneate static HTML
export async function getStaticProps() {

  // Get posts data
  const postsData = getSortedPostsData()
  const categories = await getCategories()
  
  // Get portfolio data 
  const contacts = await getContacts()
  
  return {
    props: {
      postsData,
      categories,
      contacts
    },
  }
}

Home.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}