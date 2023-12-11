import Image from "next/image";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";

const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col gap-5">
      <h2 className="font-black text-xl xs:text-3xl text-center md:text-left">
        Contato
      </h2>
      <p className="text-sm xs:text-lg text-center md:text-left tracking-wide">
        Caso deseje discutir projetos, oportunidades ou compartilhar ideias,
        você pode me encontrar em:
      </p>
      <div className="flex gap-2 justify-center md:justify-start">
        <a href="https://www.linkedin.com/in/vinicioscst/" target="_blank">
          <button className="self-start flex items-center gap-2 font-bold text-sm py-2 px-4 border border-primary-color/90 bg-primary-color/90 text-background-color rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
            <Image
              src={LinkedinIcon}
              alt="Ícone do Linkedin"
              title="Linkedin"
              height={16}
              width={16}
            />
            Linkedin
          </button>
        </a>
        <a href="mailto:dev.vinicios@gmail.com" target="_blank">
          <button className="self-start flex items-center gap-2 font-bold text-sm py-2 px-4 border border-primary-color/90 bg-primary-color/90 text-background-color rounded-lg hover:opacity-75 hover:-translate-y-1 cursor-pointer transition-all">
            <Image
              src={EmailIcon}
              alt="Ícone de email"
              title="Email"
              height={21}
              width={21}
            />
            Email
          </button>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
