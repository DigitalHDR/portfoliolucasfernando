import React from 'react'
import MidiaSocial from '@/app/components/midiaSocial'

const Footer: React.FC = () => {
  return (
    <section className="mt-24 pt-16 pb-3 px-3 bg-neutral-900 " id="footer">
      <article className="flex justify-center flex-col items-center text-center">
        <h2>Desenvolvedor FullStack</h2>
        <div className="mt-6 flex items-center justify-between flex-col flex-wrap">

          <MidiaSocial />
          <p className='text-white/60 mt-5'>&copy; Copyright 2024</p>
        </div>
      </article>
    </section>
  )
}

export default Footer
