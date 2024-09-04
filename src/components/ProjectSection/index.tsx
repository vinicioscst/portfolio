import ProjectCard from '../ProjectCard'

const ProjectSection = () => {
  const projects = [
    {
      title: 'Newsletter - Front End',
      description:
        'A aplicação Newsletter foi elaborada em conjunto com sua API, com o intuito de fortalecer os conhecimentos de Javascript/ Typescript e aprender novas tecnologias, como Vue e o Gemini, inteligência artificial da Google e, além disso, dar início a outros conhecimentos como POO e Design Patterns, especificamente o design Singleton, utilizado nas instâncias do ORM e da ferramenta Cron (ambos da API).',
      techs: ['Javascript', 'Vue', 'Nuxt', 'Vuetify'],
      repository: 'https://github.com/vinicioscst/newsletter-vue',
      deploy: 'https://newsletter-vue.vercel.app',
    },
    {
      title: 'Newsletter - Back End',
      description:
        'A API Newsletter foi elaborada para o projeto Newsletter, com o intuito de fortalecer os conhecimentos de Javascript/ Typescript e aprender novas tecnologias, como Vue e o Gemini, inteligência artificial da Google e, além disso, dar início a outros conhecimentos como POO e Design Patterns, especificamente o design Singleton, utilizado nas instâncias do ORM e da ferramenta Cron.',
      techs: ['Typescript', 'Express', 'Prisma', 'PostgreSQL'],
      repository: 'https://github.com/vinicioscst/newsletter-api',
    },
    {
      title: 'Orange Portfólio - Front End',
      description:
        'O Orange Portifólio é uma plataforma única que reúne os melhores talentos de desenvolvimento e design em um só lugar. O  projeto foi desenvolvido durante a participação no hackathon da Orange Juice!',
      techs: ['Javascript', 'React', 'Vite', 'Material UI'],
      repository:
        'https://github.com/vinicioscst/orange-portfolio-frontend-squad24',
      deploy: 'https://orange-portfolio-frontend-squad24.vercel.app',
    },
    {
      title: 'Orange Portfólio - Back End',
      description:
        'A API do Orange Portfólio, com CRUD para os usuários e projetos, além de rota para upload de arquivos. O  projeto foi desenvolvido durante a participação no hackathon da Orange Juice! ',
      techs: ['Javascript', 'Node', 'Express'],
      repository:
        'https://github.com/vinicioscst/orange-portfolio-backend-squad24',
    },
  ]

  return (
    <section id="projects" className="flex flex-col gap-5">
      <h2 className="font-black text-xl xs:text-3xl text-center md:text-left">
        Projetos
      </h2>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection
