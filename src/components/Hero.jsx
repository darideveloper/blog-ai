export default function Hero({ title, image, subtitle="", paralax=true }) {

  return (
    <section
      className={`hero w-100 md:h-96 mt-5 relative flex items-center justify-center h-64`}
      style={{
        flexDirection: paralax ? "row" : "column",
      }}
    >
      {
      paralax ? 
      <div 
        className={`parallax bg bg-cover opacity-80 top-0 left-0 absolute w-full h-full -z-10`}
        style={{backgroundImage: `url('${image}')`}}
      />
      :
      <img src={image} alt={`imagen de ${title}`} className="w-48 mt-20"/>
      }
      <h1
        className='text-5xl title font-bold text-center block bg-slate-100 w-full py-5'
      >
        <span>{title}</span>
        <span className='text-2xl block italic mt-2'>{subtitle}</span>
      </h1>
    </section>
  )
}