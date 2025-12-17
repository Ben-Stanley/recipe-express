'use client'

import RecipeList from '@/components/molecules/RecipeList/RecipeList'
import { useFavouritesStore } from '@/stores/favourites'

export default function FavouritesPage() {
  const favourites = useFavouritesStore((state) => state.favourites)

  return (
    <div className="w-full min-h-screen">
      <main className="px-4 sm:px-12 md:px-24 py-8">
        <h1 className="mb-2 font-semibold text-lg">Your Favourite Recipes</h1>

        <p className="mb-8 text-fore-secondary">
          {favourites.length === 0
            ? 'You have no favourite recipes yet.'
            : `You have ${favourites.length} saved ${
                favourites.length === 1 ? 'recipe' : 'recipes'
              }.`}
        </p>

        <section>
          {favourites && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecipeList recipes={favourites} />
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
