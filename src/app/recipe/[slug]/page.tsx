'use client'

import { use } from 'react'
import { RecipeDetails } from '@/components/organisms/RecipeDetails'
import { useRecipeDetails } from '@/hooks/useRecipes'
import Notification from '@/components/molecules/Notification'

export default function Recipe({
  params,
}: {
  params: Promise<{ slug: Array<string> }>
}) {
  const { slug } = use(params)
  const {
    data: recipe,
    isLoading,
    isError,
    error,
    refetch,
  } = useRecipeDetails(Number(Number(slug)))

  return (
    <div className="w-full min-h-screen">
      {isLoading && <p>Loading recipe...</p>}

      {recipe && <RecipeDetails recipe={recipe.data} />}

      {isError && (
        <div className="w-full">
          <Notification
            variant="error"
            message={error.message}
            className="mx-auto"
            onClick={() => refetch()}
          />
        </div>
      )}
    </div>
  )
}
