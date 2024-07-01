'use client'
import React, { useEffect, useState } from 'react'
import navegacaoHeader from '@/app/config/navegacaoHeader'
import { Link as ScrollLink } from 'react-scroll'
import DarkModeToggle from '../ThemeToggle'

interface NavegacaoMapProps {
  nome: string
  href: string
}

const Header: React.FC = () => {
  const [mostraMenu, setMostraMenu] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setMostraMenu(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="perfil">
      <nav className="absolute z-50 flex w-full items-center justify-between bg-zinc-100 py-2 shadow-dark-mild dark:bg-neutral-800 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="container mx-auto flex w-full flex-wrap items-center justify-between">
          {/* Hamburger button for mobile view */}
          <button
            className="pl-3 block border-0 bg-transparent text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            onClick={() => setMostraMenu(!mostraMenu)}
            aria-controls="navbarSupportedContent1"
            aria-expanded={mostraMenu}
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className={`${
              mostraMenu ? 'block' : 'hidden'
            } w-full lg:flex lg:items-center lg:w-auto`}
            id="navbarSupportedContent1"
          >
            <ul className="flex flex-col lg:flex-row list-style-none me-auto lg:items-center">
              <li className="mb-4 lg:mb-0 lg:pe-2">
                <a
                  className="pl-3 text-3xl font-bold borda_texto text-lime-400 transition duration-200 hover:ease-in-out motion-reduce:transition-none dark:text-lime-400"
                  href="#"
                >
                  DigitalHDR
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col pl-3 justify-center list-style-none lg:flex-row  lg:items-center">
            {navegacaoHeader.map((item: NavegacaoMapProps, index: number) => (
              <ul
                key={index}
                className={`${
                  mostraMenu ? 'block' : 'hidden'
                } w-full lg:flex lg:items-center lg:w-auto`}
              >
                <li className="mb-4 lg:mb-0 lg:pe-2 cursor-pointer">
                  <ScrollLink
                    onClick={() => setMostraMenu(false)}
                    to={item.href}
                    smooth={true}
                    duration={1000}
                    className="text-xl w-full cursor-pointer font-semibold text-black hover:text-zinc-400 transition duration-200  hover:ease-in-out motion-reduce:transition-none dark:text-white/90 dark:hover:text-slate-700 lg:px-2"
                  >
                    {item.nome}
                  </ScrollLink>
                </li>
              </ul>
            ))}
          </div>

          <div className="relative flex items-center">
            <div
              className="pr-3 cursor-pointer"
            >
              <DarkModeToggle />
            </div>

            <div
              className="relative"
              data-twe-dropdown-ref
              data-twe-dropdown-alignment="end"
            >
              <a
                className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
              ></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
