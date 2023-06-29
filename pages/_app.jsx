// These styles apply to every route in the application
import '@/styles/globals.sass'
import { ContactsContextProvider } from '@/contexts/contacts-context'

import { titleFont } from '@/lib/fonts'

export default function App({ Component, pageProps, repo }) {
  return (


    <ContactsContextProvider>
      <style jsx global>{`
          h1, h2, h3 {
            font-family: ${titleFont.style.fontFamily};
          }
        `}
        </style>
      <Component {...pageProps} />
    </ContactsContextProvider>
  )
}