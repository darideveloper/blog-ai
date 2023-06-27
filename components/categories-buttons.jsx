import PropTypes from 'prop-types'
import Link from 'next/link'

export default function CategoriesButtons({ categories, showCounter = true, currentCategory='all' }) {

  return (
    <section className="categories">
      <h2>Categories</h2>
      <ul>
        {categories.map(({ name, counter, id }) => (
          <li
            key={name}
          >

            <Link
              href={`/categories/${id}`}

              /* Detect if the category its active */
              className={currentCategory === id ? 'active' : ''}
            >
              <span>
                {name}
              </span>
              {
                showCounter &&
                <span>
                  {counter}
                </span>
              }
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

CategoriesButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  showCounter: PropTypes.bool,
  currentCategory: PropTypes.string,
}