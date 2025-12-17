import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tag from './Tag'

describe('Tag', () => {
  it('renders the tag with the correct text', () => {
    render(<Tag>Sample Tag</Tag>)

    const tagElement = screen.getByText(/Sample Tag/i)

    expect(tagElement).toBeInTheDocument()
  })
})
