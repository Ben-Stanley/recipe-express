// stores/favouritesStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Recipe } from '@/lib/types/recipe'

interface FavouritesStore {
  favourites: Recipe[]
  addFavourite: (recipe: Recipe) => void
  removeFavourite: (recipeId: number) => void
  toggleFavourite: (recipe: Recipe) => void
  isFavourite: (recipeId: number) => boolean
  clearFavourites: () => void
}

export const useFavouritesStore = create<FavouritesStore>()(
  persist(
    (set, get) => ({
      favourites: [],

      addFavourite: (recipe) =>
        set((state) => {
          // Don't add duplicates
          if (state.favourites.some((item) => item.id === recipe.id)) {
            return state
          }
          return { favourites: [...state.favourites, recipe] }
        }),

      removeFavourite: (recipeId) =>
        set((state) => ({
          favourites: state.favourites.filter((item) => item.id !== recipeId),
        })),

      toggleFavourite: (recipe) =>
        set((state) => {
          const exists = state.favourites.some((item) => item.id === recipe.id)
          if (exists) {
            return {
              favourites: state.favourites.filter(
                (item) => item.id !== recipe.id
              ),
            }
          }
          return { favourites: [...state.favourites, recipe] }
        }),

      isFavourite: (recipeId) => {
        console.log('Checking if favourite:', recipeId)

        console.log('Current favourites:', get().favourites)

        console.log(
          'Is favourite result:',
          get().favourites.some((fav) => fav.id === recipeId)
        )

        return get().favourites.some((fav) => fav.id === recipeId)
      },

      clearFavourites: () => set({ favourites: [] }),
    }),
    {
      name: 'recipe-favourites', // localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
)
