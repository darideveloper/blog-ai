import propTypes from "prop-types"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LoadingContext } from "@/contexts/loading"
import { useContext } from "react"

export default function Loading({ extraClasses = "" }) {

  // Get state from context
  const { isLoading } = useContext(LoadingContext)

  const [display, setDisplay] = useState("flex")
  const [opacity, setOpacity] = useState("opacity-100")

  // Hide and show loading
   useEffect(() => {
    if (isLoading) {
      setDisplay("flex")
      setOpacity("opacity-100")
    } else {
      setOpacity("opacity-0")
      setTimeout(() => {
        setDisplay("hidden")
      }, 500)
    }
  }, [isLoading])

  return (
    <div className={`
        loading
        pt-24
        absolute top-0 left-0 
        z-30
        w-full h-full
        ${display}
        ${opacity}
        ${extraClasses}
        bg-grey
        duration-300
        items-start justify-center 
      `}
    >
      <Image
        src="/imgs/spinner.gif"
        alt="Loading"
        width={100}
        height={100}
      />
    </div>
  )
}

Loading.propTypes = {
  extraClasses: propTypes.string,
}