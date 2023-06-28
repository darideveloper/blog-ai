import { metadata } from "@/lib/metadata"

import { titleFont } from "@/lib/fonts"

export default function Hero() {
  return (
    <section className='hero container mx-auto my-10' >
      <p 
        className={`
          text-2xl text-center text-white
          ${titleFont.className}
        `}
      >
        {metadata.description}
      </p>
    </section>
  )
}