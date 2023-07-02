import PropTypes from "prop-types"

import { useEffect } from "react"

import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { regularFont } from "@/lib/fonts"
import { metadata } from "@/lib/metadata"

export default function RootLayout({ children, extraTitle = "", extraKeywords = [] }) {

  // Get metadata
  const title = metadata.title + (extraTitle && " | " + extraTitle)
  const keyword = metadata.keywords.concat(extraKeywords).join(", ")

  // Components data
  const data = {
    Header: {
      links: [
        { href: "https://www.darideveloper.com/", text: "Portafolio" },
        { href: "/#contact", text: "Contacto" },
      ]
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/imgs/favicon.ico" type="image/x-icon" />nk
      </Head>
      <div className={`${regularFont.className} text-white-light`}>
        <Header
          {...data.Header}
        />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  extraTitle: PropTypes.string,
  extraKeywords: PropTypes.arrayOf(PropTypes.string),
}
