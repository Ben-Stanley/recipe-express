import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockRecipeDetails } from '../../../../__mocks__/recipe'

import { RecipeDetails } from './RecipeDetails'

describe('RecipeDetails', () => {
  it('renders the recipe details with the correct title and ingredients', () => {
    render(<RecipeDetails recipe={mockRecipeDetails} />)

    const titleElement = screen.getByTestId('recipe-title')
    const ingredientElement = screen.getByText(/40g Natural yoghurt/i)

    expect(titleElement).toHaveTextContent('Yoghurt Honey Madeleines')
    expect(ingredientElement).toBeInTheDocument()
  })
})
