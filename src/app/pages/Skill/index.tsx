'use client'
import React, { useState } from 'react'
import dataBarraSkill, { SkillAttribute } from '../../data/dataBarraSkill'
import Image from 'next/image'

const Skill: React.FC = () => {
  const [passaMouseIndex, setPassaMouseIndex] = useState<number | null>(null)

  return (
    <section className="mt-24 text-center" id="skill">
      <div data-aos="zoom-out" data-aos-delay="200">
        <h2>Lista de Skills Full-Stack</h2>
      </div>{' '}
      <br />
      <div data-aos="flip-left">
        <article className="flex justify-center flex-wrap">
          {dataBarraSkill.atributos.map(
            (item: SkillAttribute, index: number) => (
              <div className="containerSkill" key={index}>
                <div
                  className="flex items-center justify-center relative bg-white rounded-lg border-solid border-lime-400 border-[1px] sm:h-[150px] sm:w-[150px] md:h-[150px] md:w-[150px] mx-5 mb-5 transition duration-300 ease-in-out hover:scale-110 hover:border-[5px] shadow-lg shadow-slate-400 "
                  onMouseEnter={() => setPassaMouseIndex(index)}
                  onMouseLeave={() => setPassaMouseIndex(null)}
                >
                  <Image src={item.img} width="100" height="100" alt="imagem" />

                  <div
                    className="absolute justify-center items-center w-full h-full bg-body-dark sm:rounded-sm md:rounded-lg"
                    style={{
                      display: passaMouseIndex === index ? 'flex' : 'none',
                    }}
                  >
                    <h3 className="text-white text-center text-sm md:text-lg	">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            )
          )}
        </article>
      </div>
    </section>
  )
}

export default Skill
