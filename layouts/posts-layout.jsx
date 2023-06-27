import PropTypes from "prop-types"

import RootLayout from "@/layouts/root-layout"

import Hero from "@/components/hero"
import CategoriesButtons from "@/components/categories-buttons"
import PostsList from "@/components/posts-list"

export default function PostsLayout({ extraTitle = "", categories, postsData }) {
  
  return (
    <RootLayout
      extraTitle={extraTitle}
    >
      <Hero />

      <CategoriesButtons
        categories={categories}
      />

      <PostsList
        postsData={postsData}
      />
    </RootLayout>
  )
}

PostsLayout.propTypes = {
  extraTitle: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
}
