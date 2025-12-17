import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('renders the logo', () => {
    const handleClick = jest.fn()

    render(<Logo onClick={handleClick} />)

    const logoElement = screen.getByTestId(/logo/i)

    logoElement.click()

    expect(logoElement).toBeInTheDocument()
    expect(handleClick).toHaveBeenCalled()
  })
})
