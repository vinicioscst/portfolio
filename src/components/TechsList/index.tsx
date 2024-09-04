import Image from 'next/image'
import CSSIcon from '../../../public/css-icon.svg'
import HTMLIcon from '../../../public/html-icon.svg'
import JSIcon from '../../../public/javascript-icon.svg'
import TSIcon from '../../../public/typescript-icon.svg'
import NextJSIcon from '../../../public/nextjs-icon.svg'
import NodeJSIcon from '../../../public/nodejs-icon.svg'
import DotNetIcon from '../../../public/dotnet-icon.svg'
import ReactIcon from '../../../public/react-icon.svg'
import TailwindIcon from '../../../public/tailwind-icon.svg'

const TechList = () => {
  return (
    <section>
      <ul className="overflow-x-auto flex justify-between gap-16 bg-[#101318] rounded-3xl py-5 px-8">
        <Image
          src={HTMLIcon}
          alt="Ícone do HTML"
          title="HTML"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={CSSIcon}
          alt="Ícone do CSS"
          title="CSS"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={JSIcon}
          alt="Ícone do Javascript"
          title="Javascript"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={TSIcon}
          alt="Ícone do Typescript"
          title="Typescript"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={ReactIcon}
          alt="Ícone do React"
          title="React"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={NextJSIcon}
          alt="Ícone do NextJS"
          title="NextJS"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={TailwindIcon}
          alt="Ícone do Tailwind"
          title="Tailwind"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={NodeJSIcon}
          alt="Ícone do NodeJS"
          title="NodeJS"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
        <Image
          src={DotNetIcon}
          alt="Ícone do .NET"
          title=".NET"
          width={35}
          height={35}
          className="opacity-75 hover:opacity-100 transition-opacity"
        />
      </ul>
    </section>
  )
}

export default TechList
