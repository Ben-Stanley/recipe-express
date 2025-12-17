import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import RecipeHeader from './RecipeHeader'

// Mock useRouter and useParams:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => null,
      prefetch: () => null,
    }
  },
  useParams() {
    return {
      slug: '665537',
    }
  },
}))

// Mock useRecipeDetails:
jest.mock('@/hooks/useRecipes', () => ({
  useRecipeDetails: () => ({
    recipe: {
      title: 'Yoghurt Honey Madeleines',
      isLoading: false,
    },
  }),
}))

describe('RecipeHeader', () => {
  it('renders the RecipeHeader with the back button and favourite button', () => {
    render(<RecipeHeader />)

    const backButtonElement = screen.getByRole('button', {
      name: /Back/i,
    })
    const favouriteButtonElement = screen.getByText(/Save Recipe/i)

    expect(backButtonElement).toBeInTheDocument()
    expect(favouriteButtonElement).toBeInTheDocument()
  })
})
