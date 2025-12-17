import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AppHeader from './AppHeader'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => null,
      prefetch: () => null,
    }
  },
}))

describe('AppHeader', () => {
  it('renders the AppHeader with the logo and favourites button', () => {
    render(<AppHeader />)

    const logoElement = screen.getByTestId('logo')
    const favouritesButtonElement = screen.getByRole('button', {
      name: /Favourites/i,
    })

    expect(logoElement).toBeInTheDocument()
    expect(favouritesButtonElement).toBeInTheDocument()
  })

  it('renders the AppHeader with the back home button when showHomeButton is true', () => {
    render(<AppHeader showHomeButton={true} />)

    const backHomeButtonElement = screen.getByRole('button', {
      name: /Back Home/i,
    })

    expect(backHomeButtonElement).toBeInTheDocument()
  })
})
