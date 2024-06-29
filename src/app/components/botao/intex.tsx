import React from 'react'

interface BotaoProps {
  urlBtn?: string
  nome: string
}

const Botao: React.FC<BotaoProps> = ({ nome, urlBtn }) => {
  return (
    <a href={urlBtn} className="flex justify-center sm:w-full mb-1 sm:mb-0 md:my-1 py-1 px-2 rounded-lg bg-lime-400 transition ease-in-out delay-75 hover:bg-lime-600 text-sm sm:text-lg text-black">
      {nome}
    </a>
  )
}

export default Botao
