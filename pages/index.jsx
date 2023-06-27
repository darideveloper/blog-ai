import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import CategoriesButtons from '../components/categories-buttons'
import { getSortedPostsData, getPostsCategories } from '../lib/posts'

export default function Home({ allPostsData, postsCategories }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        <p>[Your Self Introduction] !!!!!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Render categories buttons */}
      <CategoriesButtons 
        postsCategories={postsCategories} 
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
  const postsCategories = await getPostsCategories()
  return {
    props: {
      allPostsData,
      postsCategories,
    },
  }
}