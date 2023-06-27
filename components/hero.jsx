import { metadata } from "@/lib/metadata"

export default function Hero() {
  return (
    <section className='hero' >
      <h1>Dari Dev Blog</h1>
      <p>
        {metadata.description}
      </p>
    </section>
  )
}