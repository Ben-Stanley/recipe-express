'use client'

import { useRouter } from 'next/navigation'
import { useFeaturedRecipes } from '@/hooks/useRecipes'
import RecipeList from '@/components/molecules/RecipeList'
import SearchBar from '@/components/molecules/SearchBar'
import Notification from '@/components/molecules/Notification'

export default function Home() {
  const router = useRouter()
  const {
    data: featuredRecipes,
    isLoading,
    isError,
    error,
    refetch,
  } = useFeaturedRecipes()

  const handleSearch = (query: string) => {
    if (query && query.length < 4) return

    router.push(`/search?query=${query}`)
  }

  return (
    <div className="w-full min-h-screen">
      <main className="mx-auto px-4 sm:px-12 md:px-24 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-lg font-medium">
            Discover Your Next Favorite Recipe
          </h1>

          <p className="mb-8 text-fore-secondary">
            Search through our collection of delicious recipes from around the
            world
          </p>

          <SearchBar onChange={handleSearch} className="mx-auto" />
        </div>

        <section className="mt-16">
          <h2 className="text-lg font-medium mb-6">Featured Recipes</h2>

          {isLoading && <p>Loading recipes...</p>}

          {featuredRecipes && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecipeList recipes={featuredRecipes.data.recipes} />
            </div>
          )}

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
        </section>
      </main>
    </div>
  )
}
