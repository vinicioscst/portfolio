const AboutMe = () => {
  return (
    <section id="about-me" className="flex flex-col gap-5">
      <h2 className="font-black text-xl xs:text-3xl text-center md:text-left">
        Sobre mim
      </h2>
      <p className="text-sm xs:text-lg text-center md:text-left tracking-wide">
        Estou atualmente{' '}
        <span className="underline underline-offset-4">
          trabalhando como desenvolvedor trainee full stack em uma multinacional
        </span>
        , onde lidero um projeto na área educacional usando tecnologias da stack{' '}
        <span className="font-bold">Javascript</span>. Além disso, estou
        estudando <span className="font-bold">C#</span> e{' '}
        <span className="font-bold">.NET</span>.
      </p>
    </section>
  )
}

export default AboutMe
