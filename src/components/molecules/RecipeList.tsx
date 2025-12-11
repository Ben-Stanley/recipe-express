import { useRouter } from 'next/navigation'
import RecipeCard from '../organisms/RecipeCard'
import { Recipe } from '@/lib/types/recipe'

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  const router = useRouter()

  const handleNavigateToRecipe = async (id: number) => {
    // const regex = /\/([a-z-]+)$/;
    // const match = slug.match(regex);
    // const newSlug = match ? match[1] : null;

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
