/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Slider from 'react-slick'
import settings from '@/app/config/sliderConfig'
import dataCertificado from '@/app/data/dataCertificado'
import Botao from '../botao/intex'
import { useTheme } from 'next-themes'

const CardCertificados = () => {
  const { theme } = useTheme()

  return (
    <section className="flex justify-center">
      <article className="rounded-lg w-[75vw]">
        <Slider {...settings} className={theme === 'dark' ? 'slider-dark' : ''}>
          {dataCertificado.certificado.map((item, index) => (
            <div
              key={index}
              className="!flex flex-col max-w-[95%] md:max-w-[200px] bg-slate-50 border-solid border-lime-400 border-[1px] rounded-lg py-2 px-2 my-7"
            >
              <img
                className="w-full rounded-lg"
                src={item.img}
                alt={item.title}
              />
              <div className="text-center basis-[100px]">
                <h3>{item.title}</h3>
              </div>
              <Botao nome={'Ver'} urlBtn={item.url} />
            </div>
          ))}
        </Slider>
      </article>
    </section>
  )
}

export default CardCertificados
