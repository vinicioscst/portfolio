import Container from '../Container'

const Header = () => {
  return (
    <Container>
      <header className="flex flex-col flex-wrap xs:flex-row sm:justify-between justify-center items-center gap-4 py-16">
        <span className="font-black text-2xl text-accent-color select-none">
          &lt;vinícios /&gt;
        </span>
        <nav className="flex flex-wrap items-center gap-4 font-bold text-sm">
          <a href="#about-me">
            <li className="w-full xs:w-auto py-2 px-4 border border-primary-color/90 rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
              Sobre mim
            </li>
          </a>
          <a href="#projects">
            <li className="w-full xs:w-auto py-2 px-4 border border-primary-color/90 rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
              Projetos
            </li>
          </a>
          <a href="#contact">
            <li className="w-full xs:w-auto py-2 px-4 border border-primary-color/90 rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
              Contato
            </li>
          </a>
        </nav>
      </header>
    </Container>
  )
}

export default Header
