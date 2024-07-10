'use client'
import { useEffect } from 'react'
import Perfil from './pages/Perfil'
import Sobre from './pages/Sobre'
import Skill from './pages/Skill'
import Certificados from './pages/Certificados'
import Projetos from './pages/Projetos'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE, Collapse, Dropdown } = await import(
        'tw-elements'
      )
      initTWE({ Tooltip, initTWE, Collapse, Dropdown })
    }
    init()
    AOS.init()
  }, [])

  return (
    <main className="container mx-auto">
        <Perfil />
        <Sobre />
        <Skill />
        <Certificados />
        <Projetos />
    </main>
  )
}

// comprar um dominio pra mim
// link dim curriculo
// implementar teste unitarios
