'use client'
import React, { useEffect, useState } from 'react'
import navegacaoHeader from '@/app/config/navegacaoHeader'
import { Link as ScrollLink } from 'react-scroll'

interface NavegacaoMapProps {
  nome: string
  href: string
}

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)
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
    <div className={`${darkMode ? 'dark' : ''}`} id="perfil">
      <nav className="absolute z-50 flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-900 lg:flex-wrap lg:justify-start lg:py-4">
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
                  className="pl-3 text-3xl font-bold text-black transition duration-200 hover:text-slate-500 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                  href="#"
                >
                  DigitalHDR
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center list-style-none lg:flex-row  lg:items-center">
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
                    className="text-xl w-full cursor-pointer font-semibold text-black transition duration-200 hover:text-slate-500 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
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
              onClick={() => setDarkMode(!darkMode)}
            >
              {!darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  color="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
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
