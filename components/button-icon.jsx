import PropTypes from "prop-types"

export default function ButtonIcon ({children, extraClasses = "", onClick=() => {}, scale=true, enable=true}) {
  return (
    <button
      onClick={onClick}
      className={`
        fill-white
        w-10
        ${enable ? "opacity-60 group-hover:opacity-80": "opacity-20 cursor-default"}
        ${enable && scale && 'lg:group-hover:scale-110'} duration-500
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
  enable: PropTypes.bool
}