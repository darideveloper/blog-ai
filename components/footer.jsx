
import ContactForm from "@/components/contact-form"
import ContactIcons from "@/components/contact-icons"

export default function Footer () {
  return (
    <footer
      className="px-2 container mx-auto"
    >
      <div 
        className={`
          content
          mt-20
          flex flex-col justify-center items-center
          lg:flex-row
        `}>
        <ContactForm />
        <ContactIcons />
      </div>

      <small
        className={`
          mt-10 mb-1
          text-center text-white opacity-40 
          flex flex-col justify-center items-center
        `}
      >
        <span>
        Todos los derechos reservados &copy; {new Date().getFullYear()}
        </span>
        <span>
        Powered with &#9829; by <a href="www.darideveloper.com">darideveloper</a>
        </span>
      </small>
    </footer>
  )
}