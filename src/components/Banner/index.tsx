import Image from "next/image";
import CodingFigure from "../../../public/coding-figure.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Banner = () => {
  return (
    <section className="w-full flex items-center justify-center md:justify-between flex-wrap-reverse gap-12">
      <div className="flex-grow basis-80 flex flex-col gap-5">
        <h1 className="font-black text-3xl xs:text-5xl text-center md:text-left bg-gradient-to-r from-primary-color to-accent-color text-transparent bg-clip-text">Desenvolvedor Front-End</h1>
        <p className="text-base xs:text-xl text-center md:text-left tracking-wide">
          Olá! Me chamo <span className="font-black">Vinícios Costa</span> e sou um <span className="underline underline-offset-4">solucionador de problemas</span> apaixonado por <span className="underline underline-offset-4">tecnologia</span>.
        </p>
        <a href="https://www.linkedin.com/in/vinicioscst/" target="_blank"><button className="self-start flex items-center gap-2 font-bold text-sm py-2 px-4 border border-primary-color/90 bg-primary-color/90 text-background-color rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
          <Image src={LinkedinIcon} alt="Ícone do Linkedin" title="Conecte-se comigo" width={16}/>
          Conecte-se comigo
        </button></a>
      </div>
      <Image
        src={CodingFigure}
        alt="Ilustração de um notebook com luzes em tons roxo e rosa em cima dela. Na sua tela, barras de cores branca, rosa choque e laranja para simular códigos de programação."
        width={100}
        className="flex-grow basis-80 max-w-md animate-soft-bounce"
        draggable={false}
      />
    </section>
  );
};


export default Banner;
