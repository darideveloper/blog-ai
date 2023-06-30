import PropTypes from 'prop-types'

import { titleFont } from '@/lib/fonts'

import Link from 'next/link'
import Date from './date'
import Image from 'next/image'
import Paginator from './paginator'

import { useState, useEffect } from 'react'

export default function PostsList({ postsData, title = "Posts", isHome = false }) {

  const postPerPage = 6
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
  const [currentPosts, setCurrentPosts] = useState(postGroups[currentPage - 1])

  // Update currentPosts when currentPage changes
  useState(() => {
    setCurrentPosts(postGroups[currentPage - 1])
  }, [currentPage])

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

  // Update currentPosts when postsData changes
  useEffect (() => {
    setCurrentPosts (postGroups[currentPage - 1])
  }, [currentPage])

  return (
    <section className='Posts container mx-auto mb-5 px-2 mt-10' >
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
                group-first:md:flex-col
                lg:items-start
              `}
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
                  md:opacity-60 md:blur-xs
                  md:group-hover:opacity-80 md:group-hover:blur-0 duration-500 transition-opacity transition-blur
                  md:w-80
                  group-first:md:w-full
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
  )
}

PostsList.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  isHome: PropTypes.bool
}