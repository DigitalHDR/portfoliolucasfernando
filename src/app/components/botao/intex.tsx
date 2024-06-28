import React from 'react'

interface BotaoProps {
  urlBtn?: string
  nome: string
}

const Botao: React.FC<BotaoProps> = ({ nome, urlBtn }) => {
  return (
    <a href={urlBtn} className="flex justify-center w-full mt-2 py-2 px-2 rounded-lg bg-lime-400 transition ease-in-out delay-75 hover:bg-lime-600 font-semibold text-black">
      {nome}
    </a>
  )
}

export default Botao
