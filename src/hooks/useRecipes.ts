import { useQuery } from '@tanstack/react-query'
import {
  featureRecipeOptions,
  getRecipeDetailsById,
  searchRecipes,
} from '@/lib/api/recipes'

export function useFeaturedRecipes() {
  return useQuery({
    queryKey: ['featuredRecipes'],
    queryFn: () => featureRecipeOptions(),
    staleTime: 1000 * 60 * 5, // 5 minutes,
    retry: 1,
  })
}

export function useRecipeDetails(id: number) {
  return useQuery({
    queryKey: ['recipe', 'details', id],
    queryFn: () => getRecipeDetailsById(id),
    staleTime: 1000 * 60 * 10, // 10 minutes,
    retry: 1,
  })
}

export function useSearchRecipes(query: string, filters?: string) {
  return useQuery({
    queryKey: ['recipes', 'search', query, filters],
    queryFn: () => searchRecipes(query, filters),
    enabled: !!query && query.length >= 4,
    staleTime: 1000 * 60 * 5, // 5 minutes,
    retry: 0,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
}
