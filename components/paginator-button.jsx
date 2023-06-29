import PropTYpes from 'prop-types'

import ButtonIcon from '@/components/button-icon'

export default function PaginatorButton({rotate=false, onClick, enable=true}) {
  return (
    <ButtonIcon
      onClick={onClick}
      extraClasses={`
        ${rotate ? 'rotate-90' : '-rotate-90'}
        fill-white flex items-center justify-center
      `}
      enable={enable}
    >
      <svg viewBox="0 0 24 24" className='w-6 h-6'>
        <path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z" />
      </svg>
    </ButtonIcon>
  )
}

PaginatorButton.propTypes = {
  rotate: PropTYpes.bool,
  onClick: PropTYpes.func.isRequired,
  enable: PropTYpes.bool
}
