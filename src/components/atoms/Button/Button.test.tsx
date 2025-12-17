import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Click Me</Button>)

    const buttonElement = screen.getByText(/Click Me/i)

    expect(buttonElement).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click Me</Button>)

    const buttonElement = screen.getByText(/Click Me/i)

    buttonElement.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
