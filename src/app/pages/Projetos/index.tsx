import React from 'react'
import CardProjetos from '@/app/components/cardProjetos/index'
import dataGeral from '@/app/data/dataGeral'

const Projetos: React.FC = () => {
  return (
    <section className="mt-24" id="projetos">
      <div data-aos="fade-up" data-aos-delay="200">
        <h2>Projetos Última atualização 17/06/25</h2>
      </div>

      <div data-aos="fade" data-aos-duration="1000">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(230px,1fr))] gap-5 justify-items-center px-3">
          {dataGeral.especificacao.map((data) => (
            <CardProjetos key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
