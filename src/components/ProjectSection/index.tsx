import ProjectCard from "../ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      title: "Kenzie Hub",
      description: "A Kenzie Hub é uma aplicação do tipo CRUD onde, além de incluir um sistema de cadastro e login, é possível listar as tecnologias que os alunos mais utilizam e o nível de conhecimento em cada uma delas.",
      techs: ["Javascript", "React", "Styled-Components"],
      repository: "https://github.com/vinicioscst/kenzie-kenziehub",
      deploy: "https://kenziehub-vinicioscst.vercel.app",
    },
    {
      title: "Weather App",
      description: "Projeto pessoal de previsão do tempo. A aplicação possui um autocomplete ao digitar o nome da cidade e, além de trazer as informações do local escolhido, é possível escolher a exibição da temperatura entre Celsius e Fahrenheit.",
      techs: ["Javascript", "React", "Tailwind", "Next.js"],
      repository: "https://github.com/vinicioscst/hackathon_weather-app",
      deploy: "https://hackathon-weather-app.vercel.app",
    },
    {
      title: "Nu Kenzie",
      description: "A Nu Kenzie é uma aplicação para controle financeiro, possibilitando inserir entradas e despesas, com seus respectivos valores e descrições.",
      techs: ["Javascript", "React", "Styled-Components"],
      repository: "https://github.com/vinicioscst/kenzie-nukenzie",
      deploy: "https://nukenzie-vinicioscst.vercel.app/",
    },
    {
      title: "Git Search",
      description: "Uma simples aplicação para consultar perfis do Github, listando o nome do usuário, foto e seus repositórios disponibilizados publicamente.",
      techs: ["HTML", "CSS", "Javascript"],
      repository: "https://github.com/vinicioscst/kenzie-gitsearch",
      deploy: "https://vinicioscst.github.io/kenzie-gitsearch/",
    },
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
