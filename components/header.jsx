import PropTypes from "prop-types"
import { useState } from "react"

import { titleFont } from '@/lib/fonts'

import Image from 'next/image'
import Link from 'next/link'
import ButtonIcon from "./button-icon"

export default function Header({ links }) {

  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const navClass = isMenuOpen ? "h-32" : "h-0"

  return (
    <header
      className={`
        mx-auto
        text-white
        items-center justify-between py-3 mb-5
        md:container md:flex border-b-2 border-grey-light border-opacity-20
      `}
    >
      <div className={`
        container mx-auto
        w-full
        flex items-center justify-between
        md:w-36 md:mx-0 md:justify-start
        lg:w-52
      `}>

        <ButtonIcon >
          <Link
            href="/"
          >
            <Image
              src="/imgs/logo.png"
              alt="logo"
              width={100}
              height={100}
              className={`w-full`}
            />
          </Link>
        </ButtonIcon>

        <h1
          className={`
            ${titleFont.className}
            font-bold
            text-2xl
            md:text-lg md:ml-2
            lg:text-2xl
          `}
        >
          Dari Dev
          <br className="hidden md:block lg:hidden" />
          Blog
        </h1>

        <ButtonIcon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          extraClasses={`md:hidden`}
          scale={false}
        >
          <svg viewBox="0 0 24 24">
            {
              isMenuOpen
                ?
                <path d="m2.394 15.759s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm0-3.113s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm10.271-9.455c-.246-.128-.471-.191-.692-.191-.223 0-.443.065-.675.191l-8.884 5.005c-.276.183-.414.444-.414.698 0 .256.139.505.414.664l8.884 5.006c.221.133.447.203.678.203.223 0 .452-.065.689-.203l8.884-5.006c.295-.166.451-.421.451-.68 0-.25-.145-.503-.451-.682zm-8.404 5.686 7.721-4.349 7.72 4.349-7.72 4.35z" />
                :
                <path d="m2.394 15.759s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm0-3.113s7.554 4.246 9.09 5.109c.165.093.333.132.492.132.178 0 .344-.049.484-.127 1.546-.863 9.155-5.113 9.155-5.113.246-.138.385-.393.385-.656 0-.566-.614-.934-1.116-.654 0 0-7.052 3.958-8.539 4.77-.211.115-.444.161-.722.006-1.649-.928-8.494-4.775-8.494-4.775-.502-.282-1.117.085-1.117.653 0 .262.137.517.382.655zm10.271-9.455c-.246-.128-.471-.191-.692-.191-.223 0-.443.065-.675.191l-8.884 5.005c-.276.183-.414.444-.414.698 0 .256.139.505.414.664l8.884 5.006c.221.133.447.203.678.203.223 0 .452-.065.689-.203l8.884-5.006c.295-.166.451-.421.451-.68 0-.25-.145-.503-.451-.682z"/>
            }
          </svg>
        </ButtonIcon>
      </div>

      <nav
        className={`
          ${navClass}
          fixed top-14 left-0 z-10
          bg-grey-light
          w-full mt-2
          text-center
          duration-200
          overflow-hidden
          md:h-auto md:bg-transparent md:w-auto md:text-left md:mt-0 md:static

        `}
      >
        <ul
          className={`
            flex items-center justify-center flex-col
            p-2
            md:flex-row md:p-0
          `}>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`
                  p-1 m-2 w-28
                  inline-block
                  border-b-4 border-transparent
                  hover:border-accent duration-500 hover:-translate-y-1
                  md:w-auto
                `}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
}