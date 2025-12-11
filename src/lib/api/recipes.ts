import { queryOptions } from '@tanstack/react-query'
import apiClient from './api'

export const featuredRecipesOptions = queryOptions({
  queryKey: ['featuredRecipes'],
  queryFn: async () => {
    const response = await apiClient.get(`/random?number=3`)

    console.log('response:', response)

    if (!response.data) return response

    return response.data
  },
  staleTime: 1000 * 60 * 5, // 5 minutes
})

export const recipeByIdOptions = (id: number) =>
  queryOptions({
    queryKey: ['recipe', id],
    queryFn: async () => {
      const response = await apiClient.get(`/${id}/information`)

      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

export const searchRecipesOptions = (query: string) =>
  queryOptions({
    queryKey: ['searchRecipes', query],
    queryFn: async () => {
      const response = await apiClient.get(`/complexSearch`, {
        params: {
          query,
          number: 10,
        },
      })

      return response.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

export async function featureRecipeOptions() {
  try {
    return await apiClient.get(`/random?number=3`)
  } catch (error) {
    throw new Error(`Failed to retrieve featured recipes: ${error.message} `)
  }
}

export async function getRecipeDetailsById(id: number) {
  try {
    return await apiClient.get(`/${id}/information`)
  } catch (error) {
    throw new Error(`Failed to fetch recipe details: ${error.message}`)
  }
}

export async function searchRecipes(query: string, filters = {}) {
  try {
    return await apiClient.get(`/complexSearch`, {
      params: {
        query,
        number: 10,
        ...filters,
      },
    })
  } catch (error) {
    throw new Error(`Failed to search recipes: ${error.message}`)
  }
}
