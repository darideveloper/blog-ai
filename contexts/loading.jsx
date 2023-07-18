import { createContext, useState, useEffect } from "react"

export const LoadingContext = createContext()

export function LoadingContextProvider (props) {
  
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }, [])
  
    return (
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        {props.children}
      </LoadingContext.Provider>
    )
}