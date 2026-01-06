'use client'

import { use } from 'react'
import { RecipeDetails } from '@/components/organisms/RecipeDetails/RecipeDetails'
import { useRecipeDetails } from '@/hooks/useRecipes'
import Notification from '@/components/molecules/Notification/Notification'
import SkeletonDetails from '@/components/skeletons/SkeletonDetails'

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
      {isLoading && <SkeletonDetails />}

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
