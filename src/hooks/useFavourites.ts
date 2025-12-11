import { useFavouritesStore } from '@/stores/favourites'
import { Recipe } from '@/lib/types/recipe'

export function useFavourites(recipe: Recipe) {
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite)
  const isFavourite = useFavouritesStore((state) =>
    state.favourites.some((fav) => fav.id === recipe.id)
  )

  const toggle = () => toggleFavourite(recipe)

  return {
    isFavourite,
    toggleFavourite: toggle,
  }
}
