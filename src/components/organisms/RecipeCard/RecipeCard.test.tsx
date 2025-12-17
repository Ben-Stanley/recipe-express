import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockCardRecipe } from '../../../../__mocks__/recipe'

import RecipeCard from './RecipeCard'

describe('RecipeCard', () => {
  it('renders the recipe card with the correct title and details', () => {
    render(<RecipeCard recipe={mockCardRecipe} />)

    const titleElement = screen.getByText(
      /Sauteed Chicken With Mushrooms and Cream/i
    )
    const prepTimeElement = screen.getByText(/45 mins/i)
    const servingsElement = screen.getByText(/4 servings/i)

    expect(titleElement).toBeInTheDocument()
    expect(prepTimeElement).toBeInTheDocument()
    expect(servingsElement).toBeInTheDocument()
  })
})
