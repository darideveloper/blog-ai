import { metadata } from "@/lib/metadata"

import { titleFont } from "@/lib/fonts"

export default function Hero() {
  return (
    <section className='hero container mx-auto my-10' >
      <h1
        className={`
          text-2xl text-center text-white px-2
          ${titleFont.className}
        `}
      >
        {metadata.description}
      </h1>
    </section>
  )
}