import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './pages/Footer'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital HDR',
  description: 'Desenvolvedor Full Stack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body
        className={inter.className}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
