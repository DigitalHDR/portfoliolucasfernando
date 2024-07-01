'use client'
import * as React from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
  children?: React.ReactNode
}

const ComponentThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default ComponentThemeProvider
