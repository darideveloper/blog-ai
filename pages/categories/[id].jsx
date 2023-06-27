import PropTypes from 'prop-types'

import PostsLayout from '@/layouts/posts-layout'

import { getCategories, getPostsCategory } from '@/lib/categories'

export default function Category({ postsData, categories }) {

  return (
    <PostsLayout
      postsData={postsData}
      categories={categories}
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
  return {
    props: {
      postsData,
      categories,
    },
  }
}

Category.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}