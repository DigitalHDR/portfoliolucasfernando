'use client'
import Image from 'next/image'
import React from 'react'
import MidiaSocial from '@/app/components/midiaSocial'
import navegacaoHeader from '@/app/config/navegacaoHeader'
import { Link as ScrollLink } from 'react-scroll'

const Perfil: React.FC = () => {
  interface NavegacaoItemProps {
    nome: string
    href: string
  }

  const navegacaoLink = navegacaoHeader.find((item) => item.href === 'sobre')

  return (
    <section
      className="h-screen pt-[15%] flex flex-col justify-between relative"
      id="perfil"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-gray-500 sm:text-lg xl:text-2xl font-medium">
        <div className="md:mr-8">
          <div data-aos="fade-right" data-aos-delay="300">
            <Image
              className="w-64 md:w-[350px]"
              src="/lucas.png"
              alt="Descrição da imagem"
              width={350}
              height={370}
              quality={100}
              priority={true}
            />
          </div>
        </div>
        <div className="flex md:w-1/2 flex-col md:text-left">
          <div data-aos="fade-up">
            <h3 className="text-center md:text-left text-lime-400 font-extrabold sm:text-3xl lg:text-5xl">
              Lucas Fernando
            </h3>
          </div>

          <div data-aos="fade-left">
            <div className="text-center md:text-left">
              <p className="mt-2.5 text-center md:text-left">
                Um <span className="font-bold">Desenvolvedor FullStack</span>{' '}
              </p>
            </div>
            <div className="text-center md:text-left lg:pr-5">
              <p>
                Especializado na criação de interfaces de usuário intuitivas e
                responsivas
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-delay="700"
            >
              <div>
                {navegacaoLink && (
                  <ScrollLink
                    to={navegacaoLink.href}
                    smooth={true}
                    duration={1000}
                    className="flex justify-center mt-2.5 py-1 px-10 rounded-lg bg-lime-400 cursor-pointer  text-black font-medium"
                  >
                    Sobre
                  </ScrollLink>
                )}
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="md:w-[400px] mt-10">
                <MidiaSocial />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-5">
          <svg
            width="26px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            // style={svgStyle}
          >
            <path
              className="animate-wheel"
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }}
            ></path>
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{ fill: 'none', stroke: '#000', strokeWidth: '20px' }}
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Perfil
