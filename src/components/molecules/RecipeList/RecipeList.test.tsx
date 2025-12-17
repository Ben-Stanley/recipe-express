import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { mockRecipesList } from '../../../../__mocks__/recipe'

import RecipeList from './RecipeList'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('RecipeList', () => {
  it('renders the recipe list with the correct recipe titles', () => {
    render(<RecipeList recipes={mockRecipesList} />)

    const firstRecipeElement = screen.getByText(
      /Shrimp, Pea and Radish Salad with Herb Yogurt Dressing/i
    )
    const secondRecipeElement = screen.getByText(/Yoghurt Honey Madeleines/i)
    const thirdRecipeElement = screen.getByText(
      /Sauteed Chicken With Mushrooms and Cream/i
    )

    expect(firstRecipeElement).toBeInTheDocument()
    expect(secondRecipeElement).toBeInTheDocument()
    expect(thirdRecipeElement).toBeInTheDocument()
  })

  it('renders the correct number of recipes', () => {
    render(<RecipeList recipes={mockRecipesList} />)

    const recipeElements = screen.getAllByRole('heading', { level: 2 })

    expect(recipeElements.length).toBe(mockRecipesList.length)
  })

  it('calls the router push function when a recipe is clicked', () => {
    const pushMock = jest.fn()

    // Override useRouter to include push mock
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue({
      push: pushMock,
      prefetch: () => null,
    })

    render(<RecipeList recipes={mockRecipesList} />)

    const firstRecipeElement = screen.getByText(
      /Shrimp, Pea and Radish Salad with Herb Yogurt Dressing/i
    )

    firstRecipeElement.click()

    expect(pushMock).toHaveBeenCalledWith(`/recipe/${mockRecipesList[0].id}`)
  })
})
