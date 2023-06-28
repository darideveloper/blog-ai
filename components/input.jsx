import propTypes from 'prop-types'

import { titleFont } from '@/lib/fonts'

export default function Input ({label, placeholder="", type="text"}) {

  const id = label.toLowerCase().replace(" ", "-")

  return (
    <label
      className={`
        text-sm
        my-6
        block
        w-full
        ${titleFont.className}
      `}
    >
      {label}
      <input 
        type={type} 
        name={id} 
        id={id} 
        placeholder={placeholder} 
        autoComplete='off'
        className={`
          text-md
          block
          bg-transparent
          border-b-2 border-accent-light opacity-50
          w-full my-3 py-1 px-3
          outline-none 
          focus:opacity-100 duration-200
        `}
      />
    </label>
  )
}

Input.propTypes = {
  label: propTypes.string.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string,
}