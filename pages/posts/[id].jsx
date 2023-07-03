import PropTypes from 'prop-types'

import Head from 'next/head'
import Image from 'next/image'

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

    // Add click event to code tags
    const codeTags = document.querySelectorAll('code')
    codeTags.forEach((codeTag) => {

      const text = codeTag.innerText

      // add message
      const message = document.createElement('div')
      message.classList.add('message')
      message.innerText = 'Copiado'
      codeTag.appendChild(message)

      codeTag.addEventListener('click', () => {

        // Copy code to clipboard
        navigator.clipboard.writeText(text)

        // Get message element
        const message = codeTag.querySelector('.message')

        // Show message
        message.classList.add('show')

        // Hide message after 0.5 second
        setTimeout(() => {
          message.classList.remove('show')
        }, 500)
      })
    })

    // Add classes to table content
    const titles = document.querySelectorAll('h2')
    const contentTitle =  Array.from(titles).find ((title) => title.innerText === 'Contenido')
    if (contentTitle) {
      const content = contentTitle.nextElementSibling
      const wrapper = contentTitle.parentNode
      content.classList.add('table-content')
    }

    // Add id to h tags
    const hTags = document.querySelectorAll('h2, h3, h4, h5, h6')
    for (const hTag of hTags) {
      const content = hTag.innerText
      const id = getCleanId(content)
      hTag.id = id
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
          post container 
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


        <div className="content max-w-5xl mx-auto text-lg mt-20">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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