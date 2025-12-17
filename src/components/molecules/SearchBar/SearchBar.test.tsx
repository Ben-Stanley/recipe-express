import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders the search bar with the correct placeholder', () => {
    const handleChange = jest.fn()

    render(
      <SearchBar onChange={handleChange} placeholder="Search recipes..." />
    )

    const inputElement = screen.getByPlaceholderText(/Search recipes.../i)

    expect(inputElement).toBeInTheDocument()
  })
})
