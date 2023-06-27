import PropTypes from 'prop-types'

import Link from 'next/link'
import Date from './date'

export default function PostsList({postsData}) {
  return (
    <section section >
      <h2>Blog</h2>
      <ul>
        {postsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section >
  )
}

PostsList.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired,
}