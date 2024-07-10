import React from 'react'
import { render, screen } from '@testing-library/react'
import Sobre from '.' // Ajuste o caminho de importação conforme necessário

import '@testing-library/jest-dom/jest-globals' // Tive que importar isso pro erro do toBeInTheDocument() sumir
import '@testing-library/jest-dom' // Tive que importar isso pro erro do toBeInTheDocument() sumir

test('deve renderizar a tag heading com o texto "Sobre"', () => {
  render(<Sobre />)
  const headingElement = screen.getByText(/Sobre/i) // Procura pelo texto "Sobre" (ignorando maiúsculas/minúsculas)
  expect(headingElement).toBeInTheDocument() // Verifica se o elemento está na tela
})
