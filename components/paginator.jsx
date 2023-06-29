import PropTypes from 'prop-types'

import PaginatorButton from '@/components/paginator-button'

export default function Paginator({currentPage, maxPages, incrementPage, decrementPage}) {
  
  return (
    <div
      className={`
          paginator-wrapper 
          inline-block
          w-full
          md:w-auto
        `}>
      <div className={`
          paginator
          ${maxPages == 1 ? 'hidden' : ''}
          flex items-center justify-center gap-4
          w-auto
          mb-5
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