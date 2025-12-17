import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders the input with the correct attributes', () => {
    render(<Input type="text" name="username" placeholder="Enter username" />)

    const inputElement = screen.getByPlaceholderText(/Enter username/i)

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('name', 'username')
    expect(inputElement).toHaveAttribute('id', 'username')
  })
})
