import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders the card with the correct title and content', () => {
    render(
      <Card className="flex flex-col">
        <p>This is a test card content.</p>
      </Card>
    )

    const contentElement = screen.getByText(/This is a test card content./i)

    expect(contentElement).toBeInTheDocument()
  })
})
