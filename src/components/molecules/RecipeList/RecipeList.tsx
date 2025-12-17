import { useRouter } from 'next/navigation'
import RecipeCard from '../../organisms/RecipeCard/RecipeCard'
import { Recipe } from '@/lib/types/recipe'

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  const router = useRouter()

  const handleNavigateToRecipe = async (id: number) => {
    router.push(`/recipe/${id}`)
  }

  return (
    <>
      {recipes?.map((recipe: Recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={handleNavigateToRecipe}
        />
      ))}
    </>
  )
}
