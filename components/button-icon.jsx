import PropTypes from "prop-types"

export default function ButtonIcon ({children, extraClasses = "", onClick=() => {}, scale=true}) {
  return (
    <button
      onClick={onClick}
      className={`
        fill-white
        w-10
        opacity-60
        hover:opacity-80 ${scale && 'hover:scale-110'} duration-500
        relative
        ${extraClasses}
      `}
    >
      {children}
    </button>
  )
}

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  extraClasses: PropTypes.string,
  onClick: PropTypes.func,
  scale: PropTypes.bool,
}