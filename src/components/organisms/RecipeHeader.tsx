'use client'

import { useParams, useRouter } from 'next/navigation'
import { Heart, ArrowLeft, LoaderCircle } from 'lucide-react'
import Button from '../atoms/Button'
import { useRecipeDetails } from '@/hooks/useRecipes'
import { useFavouritesStore } from '@/stores/favourites'

export default function AppHeader() {
  const router = useRouter()
  const { slug } = useParams()

  console.log('Recipe slug in Header:', slug)

  const {
    data: recipe,
    isLoading,
    isError,
    error,
  } = useRecipeDetails(Number(Number(slug)))

  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite)
  const isFavourite = useFavouritesStore((state) =>
    state.favourites.some((fav) => fav.id === Number(slug))
  )

  const handleAddRecipeToFavourites = () => {
    if (!recipe?.data) return

    toggleFavourite(recipe.data)
  }

  return (
    <header className="flex items-center justify-between py-6">
      <Button variant="ghost" size="default" onClick={() => router.back()}>
        <ArrowLeft className="w-4 h-4 mr-2 sm:mr-3" />
        Back to Recipes
      </Button>

      <Button
        variant="outline"
        size="default"
        focus={isFavourite}
        onClick={handleAddRecipeToFavourites}
      >
        {isLoading ? (
          <LoaderCircle className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <Heart
              className={`w-4 h-4 mr-2 sm:mr-3 ${
                isFavourite ? 'fill-current' : ''
              }`}
            />

            {isFavourite ? 'Saved' : 'Save Recipe'}
          </>
        )}
      </Button>
    </header>
  )
}
