import { Clock4, Heart, Users } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Tag from '../../atoms/Tag/Tag'
import { Recipe } from '@/lib/types/recipe'
import { useFavourites } from '@/hooks/useFavourites'

type RecipeCardProps = {
  recipe: Recipe
  className?: string
  onClick?: (id: number) => void
}

export default function RecipeCard({
  recipe,
  className,
  onClick,
}: RecipeCardProps) {
  const { toggleFavourite, isFavourite } = useFavourites(recipe)

  const handleToggleFavourite = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleFavourite()
  }

  return (
    <div
      className={cn(
        'border border-border rounded-xl hover:shadow-lg transition-shadow overflow-hidden cursor-pointer',
        className
      )}
      onClick={() => onClick && onClick(recipe.id)}
    >
      <div className="relative">
        <Image
          src={recipe.image}
          width={600}
          height={400}
          alt={recipe.title}
          loading="eager"
          className="w-full"
        />

        <div
          onClick={handleToggleFavourite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavourite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="font-semibold mb-2">{recipe.title}</h2>

        {(recipe.cuisines?.length > 0 || recipe.vegetarian) && (
          <div className="flex items-center gap-2 h-6 mt-5 mb-2">
            {recipe.cuisines[0] && <Tag>{recipe.cuisines[0]}</Tag>}

            {recipe.vegetarian && <Tag variant="outline">Vegetarian</Tag>}
          </div>
        )}

        {(recipe.readyInMinutes || recipe.servings) && (
          <div className="flex items-center gap-4 text-sm text-fore-secondary">
            <div className="flex items-center gap-1">
              <Clock4 className="w-4 h-4" />
              <span>{recipe.readyInMinutes} mins</span>
            </div>

            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />

              <span>{recipe.servings} servings</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
