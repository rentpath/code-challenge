import React from 'react'
import { render, screen } from '@testing-library/react'
import ScoreDisplay from './'

test("renders `Get Score` button", () => {
    render(<ScoreDisplay />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/^Get Score$/)
})

test.todo("test component logic")