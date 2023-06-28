import { titleFont } from '@/lib/fonts'

import Image from 'next/image'
import Input from './input'
import ButtonWrapper from "./button-wrapper"

export default function ContactForm() {
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
          action=""
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

        </form>
      </div>


    </div>

  )
}