import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test("renders logo image with proper alt tag", () => {
  render(<App />)
  const logo = screen.getByAltText('logo')
  expect(logo).toBeInTheDocument()
})
