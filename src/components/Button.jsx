import { useState, useEffect } from 'react'

export default function Button({ extra_classes, active_style, on_click, children }) {

  const [active, setActive] = useState(false)

  let classes = 'title inline-block text-slate-100 focus:outline-none rounded-full text-center shadow-lg shadow-indigo-200 bg-indigo-500 hover:bg-indigo-700 transition duration-200 ease-in-out transform'
  classes += `${classes} ${extra_classes}`

  return (
    <button className={classes} onClick={() => { setActive(!active); on_click() }} style={active ? active_style : {}}>
      {children}
    </button>
  )
}