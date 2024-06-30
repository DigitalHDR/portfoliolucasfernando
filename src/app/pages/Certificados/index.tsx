'use client'
import React from 'react'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import CardCertificados from '@/app/components/cardCertificados'

const Certificados: React.FC = () => {
  return (
    <section className="my-24 px-3" id="certificados">
      <div data-aos="fade-up" data-aos-delay="200">
        <h2 className="">Certificados</h2>
      </div>

      <div data-aos="fade-right">
        <CardCertificados />
      </div>
    </section>
  )
}

export default Certificados
