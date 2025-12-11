'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import SearchBar from '@/components/molecules/SearchBar'
import RecipeList from '@/components/molecules/RecipeList'
import Notification from '@/components/molecules/Notification'
import Empty from '@/components/Empty'
import { useSearchRecipes } from '@/hooks/useRecipes'

export default function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const queryFromUrl = searchParams.get('query') ?? ''

  const [search, setSearch] = useState(queryFromUrl)

  const {
    data: recipes,
    isLoading,
    isError,
    error,
    refetch,
  } = useSearchRecipes(search)

  const handleSearch = (query: string) => {
    if (!query || query.length < 4) return

    setSearch(query)

    router.push(`/search?query=${encodeURIComponent(query)}`)
  }

  return (
    <div className="w-full min-h-screen">
      <main className="px-4 sm:px-12 md:px-24 py-8">
        <SearchBar onChange={handleSearch} className="mx-auto" />

        <section className="mt-8">
          <h2 className="mb-6">
            {`Showing results for "${search}"`}
            {recipes && ` - ${recipes.data.results.length} recipes`}
          </h2>

          {isLoading && <p>Searching for recipes...</p>}

          {recipes && recipes.data.results.length === 0 && (
            <Empty message="No recipes found. Try adjusting your search." />
          )}

          {recipes && recipes.data.results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecipeList recipes={recipes.data.results} />
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
