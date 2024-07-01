/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Botao from '../botao/intex'
import { MdOutlineStarPurple500 } from 'react-icons/md'

interface DataProps {
  id: number
  type: string
  img: string
  title: string
  desc: string
  url: string
  star: number
}

interface CardProjetosProps {
  data: DataProps
}

interface subStringDigitosProps {
  digitos: number
}

const CardProjetos: React.FC<CardProjetosProps> = ({ data }) => {
  const stars = []
  for (let i = 0; i < data.star; i++) {
    stars.push(<MdOutlineStarPurple500 key={i} color="yellow" />)
  }

  // Função para mostrar "..." somente nas texto que tiver + de 70 caracteres
  const renderizarDescricao = (descricao: string) => {
    const quantidadeDeCaracteres = 70
    if (descricao.length > quantidadeDeCaracteres) {
      return descricao.substring(0, 70) + '...'
    } else {
      return descricao.substring(0, 70)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-60 bg-neutral-700 sm:px-3 sm:py-3 hover:border-[1px] my-5 rounded-lg  border-lime-400 hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-lime-400">
      <div className="relative h-auto border-solid boder-[2px] border-lime-400">
        <img
          className="w-[218px] h-[80px] sm:h-[127px] rounded-[15px] px-1 py-1"
          src={data.img}
          alt={data.title}
        />
        <div className="absolute right-[4px] top-[38px] w-8 sm:w-16 rounded-[40px] bg-black flex justify-center items-center border-solid boder-[1px] border-lime-400">
          <div className="text-lime-400 text-sm sm:text-lg sm:font-extrabold">
            {data.id}
          </div>
        </div>
      </div>

      <div className="w-full text-center text-white dark:text-white/90 text-sm sm:text-lg pt-1 mt-1">
        {data.star === 5 ? (
          <div className="flex justify-center  text-center items-center mr-1">
            <div>Top</div> {stars}
          </div>
        ) : (
          <div className="flex justify-center text-center items-center mr-1">
            {stars}
          </div>
        )}
        <div className="flex items-center justify-evenly ">
          <div className="flex-grow text-end ">{data.star}</div>
          <div className="flex-grow text-start relative bottom-[2px]">
            <MdOutlineStarPurple500 color="yellow" />
          </div>
        </div>{' '}
      </div>

      <div className="flex-grow">
        <h5 className="text-center text-sm sm:text-lg text-lime-400 font-extralight">
          {data.title}
        </h5>
        <p className="text-white dark:text-white/90 font-extralight hidden sm:flex text-center">
          {renderizarDescricao(data.desc)}
        </p>
      </div>

      <Botao nome={'Visitar Projeto'} urlBtn={data.url} />
    </div>
  )
}

export default CardProjetos
