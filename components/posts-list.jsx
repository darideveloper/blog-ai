import PropTypes from 'prop-types'

import Link from 'next/link'
import Date from './date'

export default function PostsList({postsData, title="blog"}) {
  return (
    <section className='Posts' >
      <h2>{title}</h2>
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
  title: PropTypes.string,
}