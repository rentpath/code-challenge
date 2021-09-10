import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders `Get Score` button', () => {
  render(<App />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
})
