import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

interface NavegacaoFooterProps {
  id: number
  nome: string
  href: string
  icon: React.ReactNode
  color: string
}

const navagacaoFooter: NavegacaoFooterProps[] = [
  {
    id: 1,
    nome: 'Linkedin',
    href: 'https://www.linkedin.com/in/lucas-fernando-1a75511a0',
    icon: <BsLinkedin />,
    color: '#4264d4',
  },
  {
    id: 2,
    nome: 'Github',
    href: 'https://github.com/DigitalHDR',
    icon: <BsGithub />,
    color: '#ccc',
  },

  {
    id: 3,
    nome: 'Whatsapp',
    href: 'https://api.whatsapp.com/send?phone=5518997704896',
    icon: <BsWhatsapp />,
    color: '#20ba2a',
  },
]

export default navagacaoFooter
