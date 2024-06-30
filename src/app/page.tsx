'use client'
import { useEffect } from 'react'
import Perfil from './pages/Perfil'
import Sobre from './pages/Sobre'
import Skill from './pages/Skill'
import Certificados from './pages/Certificados'
import Projetos from './pages/Projetos'
import Footer from './pages/Footer'

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE, Collapse, Dropdown } = await import(
        'tw-elements'
      )
      initTWE({ Tooltip, initTWE, Collapse, Dropdown })
    }
    init()
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
