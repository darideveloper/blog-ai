import PropTypes from 'prop-types'
import Link from 'next/link'

export default function CategoriesButtons({ categories, showCounter = true, currentCategory = 'all' }) {

  return (
    <section className="categories container mx-auto px-2">
      <h2 className='hidden'>Categorias</h2>
      <ul
        className={`
          flex flex-wrap justify-start gap-1
        `}
      >
        {categories.map(({ name, counter, id }) => (
          <li
            key={name}
          >

            <Link
              href={`/categories/${id}`}

              /* Detect if the category its active */
              className={`
                ${currentCategory === id
                  ?
                  'active bg-accent text-white'
                  :
                  `bg-grey-light text-white-light
                  hover:bg-accent hover:opacity-60 hover:text-white duration-200`
                }
                px-6 py-2
                inline-block
                rounded-full
                
              `}
            >
              <span>
                {name}
              </span>
              {
                showCounter &&
                <span>
                  &nbsp;({counter})
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