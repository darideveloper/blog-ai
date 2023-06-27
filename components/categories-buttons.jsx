import PropTypes from 'prop-types'
import Link from 'next/link'

export default function CategoriesButtons({categories, showCounter=true}) {

  console.log (categories)

  return (
    <section className="categories">
      <h2>Categories</h2>
      <ul>
        {categories.map(({ name, counter }) => (
          <li
            key={name}
          >
            <Link href={`/categories/${name}`}>
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
}