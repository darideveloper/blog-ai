import PropTypes from 'prop-types'

import { titleFont } from '@/lib/fonts'

import Link from 'next/link'
import Date from './date'
import Image from 'next/image'
import Paginator from './paginator'
import Loading from "@/components/loading"

import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { LoadingContext } from '@/contexts/loading'

export default function PostsList({ postsData, title = "Posts", isHome = true }) {

  // Get set state from context
  const { setIsLoading } = useContext(LoadingContext)

  const postPerPage = 10
  const maxPages = Math.ceil(postsData.length / postPerPage)

  // Split post in groups of postPerPage
  let postGroups = [...Array(maxPages)].map(() => [])
  let currentGroupId = 0
  for (const post of postsData) {
    if (postGroups[currentGroupId].length == postPerPage) {
      currentGroupId++
    }
    postGroups[currentGroupId].push(post)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [currentPosts, setCurrentPosts] = useState([])

  // Update currentPosts when currentPage changes
  useEffect(() => {

    // Update data
    setCurrentPosts(postGroups[currentPage - 1])

    // Hide loading
    if (isHome) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

  }, [currentPage, postsData])

  function incrementPage() {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }

  }

  function decrementPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className={`posts w-full relative`}>

      {
        currentPosts
        &&

        <>
          <Loading />

          <section className={` 
              container 
              mx-auto mb-5 mt-10 px-2
              relative
              overflow-hidden
              min-h-screen
            `}
          >

            <h2
              className={`
                    ${title == "Posts" ? 'hidden' : ''}
                    text-3xl font-bold 
                  `}
            >{title}</h2>
            <Paginator
              currentPage={currentPage}
              maxPages={maxPages}
              incrementPage={incrementPage}
              decrementPage={decrementPage}
            />

            <ul
              className=''
            >
              {currentPosts.map(({ id, date, title, image, description }) => (

                <li
                  key={id}
                  className={`
                    group
                    mb-10 mx-auto
                    `}
                >

                  <Link
                    href={`/posts/${id}`}
                    className={`
                          w-full
                          flex flex-col items-start justify-start 
                          gap-4
                          md:flex-row-reverse md:w-full md:justify-between md:items-center
                          ${isHome && "group-first:md:flex-col"}
                          lg:items-start
                        `}
                    data-aos="fade-left"
                    onClick={() => {
                      // Show loading
                      setIsLoading(true)
                    }}
                  >
                    <div className={`
                            text 
                            w-full
                            `}
                    >
                      <small>
                        <Date dateString={date} />
                      </small>

                      <h3
                        className={`
                            py-2 text-white text-xl
                            group-hover:text-accent-light duration-200
                            ${titleFont.className}
                            `}
                      >
                        {title}
                      </h3>

                      <p
                        className={`
                            group-hover:translate-x-4 duration-200
                            `}
                      >
                        {description}
                      </p>
                    </div>

                    <Image
                      src={image}
                      alt={title}
                      width={1600}
                      height={900}
                      className={`
                          w-full 
                          md:opacity-60 md:blur-xs ${isHome && "md:group-first:blur-0"}
                          md:group-hover:opacity-80 md:group-hover:blur-0 duration-500 transition-opacity transition-blur
                          md:w-80
                          ${isHome && "group-first:md:w-full"}
                          `}
                    />
                  </Link>


                </li>
              ))}
            </ul>

            <Paginator
              currentPage={currentPage}
              maxPages={maxPages}
              incrementPage={incrementPage}
              decrementPage={decrementPage}
            />

          </section >
        </>
      }
    </div>

  )
}

PostsList.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  isHome: PropTypes.bool
}