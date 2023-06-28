import PropTypes from 'prop-types'

import PostsLayout from '@/layouts/posts-layout'

import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/categories'

export default function Home({ postsData, categories }) {

  return (
    <PostsLayout
      postsData={postsData}
      categories={categories}
    />      
  )
}

// Get props to gerneate static HTML
export async function getStaticProps() {
  const postsData = getSortedPostsData()
  const categories = await getCategories()
  return {
    props: {
      postsData,
      categories,
    },
  }
}

Home.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}