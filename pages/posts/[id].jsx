
import PropTypes from 'prop-types'

import Head from 'next/head'
import Image from 'next/image'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as codeTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Date from '@/components/date'
import RootLayout from '@/layouts/root-layout'
import CategoriesButtons from '@/components/categories-buttons'
import PostsList from '@/components/posts-list'

import { getAllPostIds, getPostData, getRelatedPosts } from '@/lib/posts'
import { getCleanId } from '@/lib/text'
import { useContext, useEffect } from 'react'
import { getContacts } from '@/lib/portfolio'
import { ContactsContext } from '@/contexts/contacts-context'

// Render current post
export default function Post({ title, date, description, image, categories, contentHtml, relatedPosts, contacts }) {

  const { setContacts } = useContext(ContactsContext)

  useEffect(() => {
    // Save contacts in context when component load
    setContacts(contacts)

    // Add classes to table content
    const firstTexts = document.querySelectorAll('p:first-child')
    const contentFirstText = Array.from(firstTexts).find((text) => text.innerText === 'Contenido')
    if (contentFirstText) {
      const content = contentFirstText.nextElementSibling
      content.classList.add('table-content')
    }

    // Add id to h tags
    const hTags = document.querySelectorAll('h2, h3, h4, h5, h6')
    for (const hTag of hTags) {
      const content = hTag.innerText
      const id = getCleanId(content)
      hTag.id = id
    }

    // Add classes to video miniatures
    const miniatures = document.querySelectorAll("img[alt='Video en youtube']")
    for (const miniature of miniatures) {
      const miniatureWrapper = miniature.parentNode
      miniatureWrapper.classList.add('video-miniature')
    }

    // Add target blank to links
    const links = document.querySelectorAll('a')
    for (const link of links) {
      link.target = '_blank'
    }

  }, [])

  // Format categories
  const categoriesFormatted = categories.map((category) => {
    return {
      name: category,
      counter: 0,
      id: getCleanId(category),
    }
  })

  return (
    <RootLayout
      extraTitle={title}
      extraKeywords={categories}
    >
      <Head>
        <meta name="description" content={description} />
      </Head>
      <article
        className={`
          post 
          container 
          mx-auto
          px-5
          `}
      >

        <div className={`
          relative
          header-wrapper
        `}>

          <Image
            src={image}
            alt={`${title} imagen`}
            width={1600}
            height={900}
            className={`
                opacity-20
                -z-10
                blur-sm
              `}
          />

          <header
            className={`
            bottom-0 left-0
            sm:absolute sm:px-10
            `}
          >

            <div className="date my-2 ml-3">
              <Date dateString={date} />
            </div>

            <div className="categories">
              <CategoriesButtons
                categories={categoriesFormatted}
                showCounter={false}
              />
            </div>

            <h1
              className={`
                text-3xl
                font-bold
                text-white
                mb-10 mt-5
              `}
            >
              {title}
            </h1>

          </header>
        </div>

        <div className="content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <div className='code-wrapper mb-5'>
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, '')}
                      style={codeTheme}
                      language={match[1]}
                      PreTag="div"
                    />
                  </div>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              }
            }}>

            {contentHtml}
          </ReactMarkdown>
        </div>

      </article>

      <aside>
        <PostsList
          postsData={relatedPosts}
          title="Posts relacionados"
          isHome={false}
        />
      </aside>

    </RootLayout>
  )
}

// Generate paths for posts
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// get data of the current post
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const relatedPosts = await getRelatedPosts(params.id)

  // Get portfolio data 
  const contacts = await getContacts()

  return {
    props: {
      ...postData,
      relatedPosts,
      contacts
    },
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  contentHtml: PropTypes.string.isRequired,
  relatedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}