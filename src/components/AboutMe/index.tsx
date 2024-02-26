const AboutMe = () => {
  return (
    <section id="about-me" className="flex flex-col gap-5">
      <h2 className="font-black text-xl xs:text-3xl text-center md:text-left">
        Sobre mim
      </h2>
      <p className="text-sm xs:text-lg text-center md:text-left tracking-wide">
        Designer gráfico em{' '}
        <span className="underline underline-offset-4">
          transição de carreira
        </span>
        , estou buscando minha{' '}
        <span className="underline underline-offset-4">
          primeira oportunidade no mercado de trabalho
        </span>{' '}
        como desenvolvedor web, combinando minha experiência em design para
        criar experiências digitais envolventes.
      </p>
    </section>
  )
}

export default AboutMe
