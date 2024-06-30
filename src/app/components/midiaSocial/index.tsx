import React from 'react'
import navagacaoFooter from '@/app/config/navagacaoFooter'

const MidiaSocial = () => {
  return (
    <div className="flex justify-between items-center gap-10 ">
      {navagacaoFooter.map((item, index) => (
        <a
          className="text-3xl mt-2.5 lg:text-4xl border-solid border-[1px] border-slate-500 py-1 px-1 rounded-lg hover:scale-125 transition delay-150 duration-300 ease-in-out "
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
