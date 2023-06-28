import PropTypes from "react"

export default function ButtonWrapper({children, extraClasses = "", active=false, hover=true}) {
  
  // Setup button styles
  let styles = ''
  if (active) {
    styles += 'active bg-accent text-white'

  } else {
    styles += 'bg-grey-light text-white-light'
  }
  if (hover) {
    styles += ' hover:bg-accent hover:opacity-60 hover:text-white duration-200'
  }
  
  return (
    <div 
      className={`
        btn-wrapper
        inline-block
        rounded-full
        ${styles}
        ${extraClasses}
      `}
    >
      {children}
    </div>
    
  )
}

ButtonWrapper.propTypes = {
  extraClasses: PropTypes.string,
  active: PropTypes.bool,
  hover: PropTypes.bool,
}