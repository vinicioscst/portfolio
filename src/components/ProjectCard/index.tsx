import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkIcon from "../../../public/link-icon.svg";

interface IProject {
  title: string;
  description: string;
  techs: string[];
  repository?: string;
  deploy?: string;
}

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <div className="flex-grow basis-60 flex flex-col gap-4 p-9 justify-center border border-accent-color/75 rounded-3xl">
      <h3 className="font-bold text-base xs:text-xl text-center md:text-left">
        {project.title}
      </h3>
      <div className="flex flex-col items-center md:items-start gap-2">
        <p className="underline underline-offset-4">Tecnologias:</p>
        <div className="flex flex-wrap gap-3">
          {project.techs.map((tech) => (
            <span key={tech} className="bg-[#101318] text-accent-color py-1 px-2 rounded-lg select-none cursor-pointer">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p className="text-center md:text-left">{project.description}</p>
      <div className="flex gap-2 justify-center md:justify-start">
        {project.repository !== undefined && (
          <a href={project.repository} target="_blank">
            <button className="py-2 px-4 border border-primary-color/90 bg-primary-color/90 rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
              <Image
                src={GithubIcon}
                alt="Ícone do Github"
                title="Repositório do Github"
                width={21}
              />
            </button>
          </a>
        )}
        {project.deploy !== undefined && (
          <a href={project.deploy} target="_blank">
            <button className="py-2 px-4 border border-primary-color/90 bg-primary-color/90 rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
              <Image
                src={LinkIcon}
                alt="Ícone de um símbolo de link"
                title="Deploy"
                width={21}
              />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
