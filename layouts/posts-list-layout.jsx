import PropTypes from "prop-types"

import RootLayout from "@/layouts/root-layout"

import Hero from "@/components/hero"
import CategoriesButtons from "@/components/categories-buttons"
import PostsList from "@/components/posts-list"

export default function PostsListLayout({ extraTitle = "", categories, postsData, currentCategory }) {
  
  return (
    <RootLayout
      extraTitle={extraTitle}
    >
      <Hero />

      <CategoriesButtons
        categories={categories}
        currentCategory={currentCategory}
      />

      <PostsList
        postsData={postsData}
        isHome={true}
      />
    </RootLayout>
  )
}

PostsListLayout.propTypes = {
  extraTitle: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentCategory: PropTypes.string,
}
