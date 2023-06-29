// These styles apply to every route in the application
import '@/styles/globals.sass'
import { ContactsContextProvider } from '@/contexts/contacts-context'

export default function App({ Component, pageProps, repo }) {
  return (
    <ContactsContextProvider>
      <Component {...pageProps} />
    </ContactsContextProvider>
  ) 
}