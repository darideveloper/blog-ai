import Swal from 'sweetalert2'

import { titleFont } from '@/lib/fonts'

import Image from 'next/image'
import Input from './input'
import ButtonWrapper from "./button-wrapper"

import { useRouter } from 'next/router'

export default function ContactForm() {

  const router = useRouter()

  function showAlert() {
    Swal.fire({
      icon: 'Done',
      title: 'Mensaje enviado',
      text: 'Te contactaré lo más pronto posible',
    })
  }

  return (
    <div className={`
      contact-form
      w-full
      container mx-auto
      mb-5
      md:max-w-4xl
    `}
      id='contact'
    >
      {
        router.query.thanks && (
          showAlert()
        )
      }

      <div className={`
        content
        flex items-center justify-center flex-col
        md:flex-row
        `}>

        <Image
          src="/imgs/daridev.png"
          alt="Dari Developer"
          width={200}
          height={200}
          className={`
          opacity-60
          hidden
          md:block
          `}
        />

        <form
          action="https://darideveloper.pythonanywhere.com/contactforms-api/"
          method="POST"
          className={`
          w-full
          md:px-5
          `}
        >

          <h2
            className={`
              text-4xl
              ${titleFont.className}
            `}
          >
            Contáctame
          </h2>

          <div
            className={`
              row
              flex flex-col gap-0
              md:-mb-4 md:flex-row md:gap-6
            `}
          >

            <Input
              label="Nombre"
              placeholder="John Titor"
            />

            <Input
              label="Email"
              placeholder="elpsycongroo@gmail.com"
              type='email'
            />
          </div>

          <Input
            label="Mensaje"
            placeholder='Hello f**k World'
          />

          <ButtonWrapper
            extraClasses={`mt-2`}
          >
            <button
              type="submit"
              className={`
                w-full h-full px-10 py-2
              `}
            >
              Enviar
            </button>
          </ButtonWrapper>

          <input type="hidden" name="user" id="user" value="daridev" />
          <input type="hidden" name="api_key" id="api_key" value="77c341d0397b984f69ef82b49143a5cd" />
          <input type="hidden" name="redirect" id="redirect" value="https://blog.darideveloper.com/?thanks=true" />

        </form>
      </div>


    </div>

  )
}