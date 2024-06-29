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
    <div className="flex flex-col w-full bg-slate-500 justify-center items-center px-3 transition duration-300 ease-in-out hover:scale-110 hover:border-[2px] my-5 rounded-lg  border-solid boder-[1px] border-lime-400 hover:shadow-lg hover:shadow-slate-400">
      <div className="relative w-full h-[36%] overflow-hidden rounded-lg">
        <img className="w-full h-full object-contain rounded-lg  mt-3" src={data.img} alt={data.title} />
        <div className="absolute right-[3px] top-[38px] w-16 rounded-[40px] bg-black flex justify-center items-center border-solid boder-[1px] border-lime-400">
          <div className="text-lime-400 text-lg font-extrabold">{data.id}</div>
        </div>
      </div>

      <div className="w-full text-center text-white pt-1">
        {data.star === 5 ? (
          <div className="flex justify-center items-center mr-1">
            <div>Top</div> {stars}
          </div>
        ) : (
          <div>{stars}</div>
        )}
        <div className="flex items-center justify-evenly">
          <div className='flex-grow text-end'>{data.star}</div>
          <div className='flex-grow text-start text-xs relative bottom-[1px]'>
            <MdOutlineStarPurple500 color="yellow" />
          </div>
        </div>{' '}
      </div>

      <div className="flex-grow">
        <h5 className="text-center text-xl text-lime-400 font-extralight">{data.title}</h5>
        <p className="text-white/60 font-extralight">{renderizarDescricao(data.desc)}</p>
      </div>

      <Botao nome={'Visitar Projeto'} urlBtn={data.url} />
    </div>
  )
}

export default CardProjetos
