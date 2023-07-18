// These styles apply to every route in the application
import '@/styles/globals.sass'
import { ContactsContextProvider } from '@/contexts/contacts-context'
import { LoadingContextProvider } from '@/contexts/loading'

import { titleFont } from '@/lib/fonts'

import AOS from "aos"
import 'aos/dist/aos.css'

import { useEffect } from 'react'

export default function App({ Component, pageProps, repo }) {

  // Start aos 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <LoadingContextProvider>
      <ContactsContextProvider>
        <style jsx global>{`
          h1, h2, h3 {
            font-family: ${titleFont.style.fontFamily};
          }
        `}
        </style>
        <Component {...pageProps} />
      </ContactsContextProvider>
    </LoadingContextProvider>
  )
}