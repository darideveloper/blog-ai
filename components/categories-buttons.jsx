import PropTypes from 'prop-types'
import Link from 'next/link'

export default function CategoriesButtons({postsCategories}) {

  console.log (postsCategories)

  return (
    <section className="categories">
      <h2>Categories</h2>
      <ul>
        {postsCategories.map(({ name, counter }) => (
          <li
            key={name}
          >
            <Link href={`/categories/${name}`}>
              <span>
                {name}
              </span>
              <span>
                {counter}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

CategoriesButtons.propTypes = {
  postsCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
}