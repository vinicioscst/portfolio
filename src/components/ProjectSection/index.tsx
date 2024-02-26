import ProjectCard from "../ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      title: "Orange Portfólio - Front End",
      description: "O Orange Portifólio é uma plataforma única que reúne os melhores talentos de desenvolvimento e design em um só lugar. O  projeto foi desenvolvido durante a participação no hackathon da Orange Juice!",
      techs: ["Javascript", "React", "Vite", "Material UI"],
      repository: "https://github.com/vinicioscst/orange-portfolio-frontend-squad24",
      deploy: "https://orange-portfolio-frontend-squad24.vercel.app/",
    },
    {
      title: "Orange Portfólio - Back End",
      description: "A API do Orange Portfólio, com CRUD para os usuários e projetos, além de rota para upload de arquivos. O  projeto foi desenvolvido durante a participação no hackathon da Orange Juice! ",
      techs: ["Javascript", "Node", "Express"],
      repository: "https://github.com/vinicioscst/orange-portfolio-backend-squad24"
    },
    {
      title: "Weather App",
      description: "Projeto pessoal de previsão do tempo. A aplicação possui um autocomplete ao digitar o nome da cidade e, além de trazer as informações do local escolhido, é possível escolher a exibição da temperatura entre Celsius e Fahrenheit.",
      techs: ["Javascript", "React", "Next.js", "Tailwind"],
      repository: "https://github.com/vinicioscst/hackathon_weather-app",
      deploy: "https://hackathon-weather-app.vercel.app",
    },
    {
      title: "Kenzie Hub",
      description: "A Kenzie Hub é uma aplicação do tipo CRUD onde, além de incluir um sistema de cadastro e login, é possível listar as tecnologias que os alunos mais utilizam e o nível de conhecimento em cada uma delas.",
      techs: ["Javascript", "React", "Vite", "Styled-Components"],
      repository: "https://github.com/vinicioscst/kenzie-kenziehub",
      deploy: "https://kenziehub-vinicioscst.vercel.app",
    }
  ];

  return (
    <section id="projects" className="flex flex-col gap-5">
      <h2 className="font-black text-xl xs:text-3xl text-center md:text-left">
        Projetos
      </h2>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => <ProjectCard key={project.title} project={project}/>)}
      </ul>
    </section>
  );
};

export default ProjectSection;
