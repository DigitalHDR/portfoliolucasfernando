import React from 'react'
import { render, screen } from '@testing-library/react'
import Sobre from '../src/app/pages/Sobre' // Ajuste o caminho de importação conforme necessário

import '@testing-library/jest-dom/jest-globals' // Tive que importar isso pro erro do toBeInTheDocument() sumir
import '@testing-library/jest-dom' // Tive que importar isso pro erro do toBeInTheDocument() sumir

test('deve renderizar a tag heading com o texto "Sobre"', () => {
  render(<Sobre />)
  const headingElement = screen.getByRole('heading', { name: 'Sobre' }) // Procura por um elemento heading com o texto "Sobre"
  expect(headingElement.tagName).toBe('H2') // Verifica se o elemento encontrado é uma tag h2
})
