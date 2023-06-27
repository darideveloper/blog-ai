import PropTypes from 'prop-types'

import Link from 'next/link'
import Head from 'next/head'
import Date from '@/components/date'
import CategoriesButtons from '@/components/categories-buttons'
import Layout, { siteTitle } from '@/components/layout'

import { getSortedPostsData } from '@/lib/posts'
import { getCategories } from '@/lib/categories'

export default function Home({ allPostsData, categories }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='about' >
        <p>[Your Self Introduction] !!!!!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Render categories buttons */}
      <CategoriesButtons 
        categories={categories} 
      />

      {/* Render posts */}
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Get props to gerneate static HTML
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const categories = await getCategories()
  return {
    props: {
      allPostsData,
      categories,
    },
  }
}

Home.propTypes = {
  allPostsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}