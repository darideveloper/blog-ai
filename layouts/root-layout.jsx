import PropTypes from "prop-types"

import Head from "next/head"
import { regular_font } from "@/lib/fonts"

export const metadata = {
  title: 'Dari Dev Blog',
  description: 'Tu blog sin publicidad de Anime, Programación, Tecnología y más',
  keywords: ["anime", "tech", "code"],
  author: "Dari Developer",
}

export default function RootLayout({ children, extraTitle="", extraKeywords=[] }) {

  const title = metadata.title + (extraTitle && " | " +  extraTitle)
  const keyword = metadata.keywords.concat(extraKeywords).join(", ")

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={regular_font.className}>{children}</div>
    </>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  extraTitle: PropTypes.string,
  extraKeywords: PropTypes.arrayOf(PropTypes.string),
}
