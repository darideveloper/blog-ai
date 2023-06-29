import { useContext } from "react"
import { ContactsContext } from "@/contexts/contacts-context"

import Image from "next/image"
import Link from "next/link"

export default function ContactIcons() {

  const { contacts } = useContext(ContactsContext)

  return (
    <div 
      className={`
        flex flex-row justify-center items-center flex-wrap
        w-full
        lg:w-80
      `}>
      {contacts.map(({ name, svg, redirect }, index) =>
        <Link
          key={index}
          target="_blank"
          href={redirect}
          className={`
            opacity-40
            inline-block
            m-2
            lg:m-5
            hover:opacity-80 hover:-translate-y-1 duration-200
          `}
        >
          <Image
            src={svg}
            alt={`icono de contacto de ${name}`}
            width={50}
            height={50}
            className={`
              w-8
              sm:w-12
            `}
          />
        </Link>
      )}
    </div>
  )
}