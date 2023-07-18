import PropTypes from 'prop-types'

import PaginatorButton from '@/components/paginator-button'

export default function Paginator({currentPage, maxPages, incrementPage, decrementPage}) {
  
  return (
    <div
      className={`
          paginator-wrapper 
          container 
          mx-auto
          mt-10
        `}>
      <div className={`
          paginator
          ${maxPages == 1 ? 'opacity-0' : 'opacity-100'}
          flex items-center justify-center gap-4
          md:justify-start
          w-auto
          mb-5
          duration-300
        `}>
        
        <PaginatorButton
          enable={currentPage > 1}
          onClick={decrementPage}

        />

        <p>
          {currentPage} / {maxPages}
        </p>

        <PaginatorButton
          rotate={true}  
          enable={currentPage < maxPages}
          onClick={incrementPage}  
        />

      </div>
    </div>
  )
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
}