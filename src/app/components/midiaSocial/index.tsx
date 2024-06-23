import React from 'react'
import navagacaoFooter from '@/app/config/navagacaoFooter'

const MidiaSocial = () => {
  return (
    <div className="flex justify-between items-center gap-10 ">
      {navagacaoFooter.map((item, index) => (
        <a
          className="text-3xl mt-2.5 lg:text-4xl hover:scale-125 transition delay-150 duration-300 ease-in-out "
          style={{color: `${item.color}`}}
          key={index}
          href={item.href}
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default MidiaSocial
