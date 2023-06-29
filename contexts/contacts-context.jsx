import { createContext, useState, useEffect } from "react"

export const ContactsContext = createContext()

export function ContactsContextProvider (props) {

  const [contacts, setContacts] = useState([])

  return (
    <ContactsContext.Provider 
      value={{
        contacts,
        setContacts
      }}>
      {props.children}
    </ContactsContext.Provider>
  )
}