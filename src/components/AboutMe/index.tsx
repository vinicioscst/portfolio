const AboutMe = () => {
  return (
    <section id="about-me" className="flex flex-col gap-5">
      <h2 className="font-black text-xl xs:text-3xl text-center md:text-left">
        Sobre mim
      </h2>
      <p className="text-sm xs:text-lg text-center md:text-left tracking-wide">
        Estou atualmente <span className="underline underline-offset-4">trabalhando como desenvolvedor trainee em uma multinacional</span>, onde continuo a aprimorar minhas habilidades como full stack. No momento, estou estudando <span className="font-bold">C#</span> e <span className="font-bold">.NET</span>.
      </p>
    </section>
  )
}

export default AboutMe
