import React from 'react'

const Sobre: React.FC = () => {
  return (
    <section
      className="mt-24 flex justify-center flex-col items-center mb-10 px-3"
      id="sobre"
    >
      <div data-aos="fade-up" data-aos-delay="200">
        <h2>Sobre</h2>
      </div>

      <div data-aos="zoom-in" data-aos-delay="400">
        <article className="w-full md:w-[70%] m-auto py-5 px-2 md:px-8 text-justify  rounded-lg border-double border-lime-400 border-[1px] shadow-lg shadow-slate-400">
          <p className="text-black dark:text-white/80 sm:text-lg xl:text-2xl font-medium">
            Sou um desenvolvedor <span className="span">web e mobile</span> com
            experiência em diversas tecnologias modernas. Trabalho
            principalmente com <span className="span">HTML</span>,{' '}
            <span className="span">CSS</span>, 
            <span className="span"> Tailwind</span> e
            <span className="span"> JavaScript</span> para criar interfaces web
            interativas e responsivas. Tenho proficiência em{' '}
            <span className="span"> frameworks</span> como{' '}
            <span className="span"> React.js</span> com{' '}
            <span className="span">Next.js</span> para o desenvolvimento
            <span className="span"> frontend</span> e{' '}
            <span className="span"> Node.js</span> para o{' '}
            <span className="span"> backend</span>, além de ser experiente em
            <span className="span"> TypeScript</span>. No desenvolvimento{' '}
            <span className="span"> mobile</span>, utilizo o{' '}
            <span className="span"> React Native</span> para criar aplicativos
            nativos para <span className="span">iOS</span> e{' '}
            <span className="span">Android</span>. Minha experiência inclui o
            uso de <span className="span">bancos de dados NoSQL</span> como{' '}
            <span className="span">MongoDB</span> para armazenamento e
            gerenciamento de dados de aplicativos{' '}
            <span className="span">web e mobile</span>. Estou sempre buscando
            aprender e me atualizar com as últimas tecnologias e tendências no
            desenvolvimento de software.{' '}
          </p>
        </article>
      </div>
    </section>
  )
}

export default Sobre
