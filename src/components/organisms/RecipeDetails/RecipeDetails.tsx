import Image from 'next/image'
import { Clock4, ChefHat, Circle, Users } from 'lucide-react'
import Card from '@/components/atoms/Card/Card'
import Tag from '@/components/atoms/Tag/Tag'

export function RecipeDetails({ recipe }: { recipe: any }) {
  return (
    <>
      <main>
        <div className="relative w-full max-h-96 overflow-hidden rounded-lg">
          <Image
            src={recipe.image}
            width={1024}
            height={370}
            alt={recipe.title}
            className="aspect-3/2 object-cover"
          />
        </div>

        <section className="py-6">
          <h1 className="font-semibold text-xl mb-4" data-testid="recipe-title">
            {recipe.title}
          </h1>
          <p
            className="text-fore-secondary mb-6"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          ></p>

          {(recipe.cuisines?.length > 0 || recipe.vegetarian) && (
            <div className="flex items-center gap-2 mb-6">
              {recipe.cuisines[0] && <Tag>{recipe.cuisines[0]}</Tag>}

              {recipe.vegetarian && <Tag variant="outline">Vegetarian</Tag>}
            </div>
          )}

          <Card className="w-full sm:px-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Clock4 className="w-5 h-5 text-primary" />

              <div className="">
                <div className="text-sm text-fore-secondary">Prep Time</div>

                <div className="font-medium">20 mins</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-primary" />

              <div className="">
                <div className="text-sm text-fore-secondary">Cook Time</div>

                <div className="font-medium">15 mins</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />

              <div className="">
                <div className="text-sm text-fore-secondary">Servings</div>

                <div className="font-medium">4</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock4 className="w-5 h-5 text-primary" />

              <div className="">
                <div className="text-sm text-fore-secondary">Total Time</div>

                <div className="font-medium">25 mins</div>
              </div>
            </div>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <h2 className="font-semibold text-lg mb-4">Ingredients</h2>

            <ul className="space-y-3">
              {recipe.extendedIngredients?.map(
                (ingredient: any, index: string) => (
                  <li
                    key={`ingredient-${index}`}
                    className="flex items-center gap-3"
                  >
                    <Circle className="w-1 h-1 text-primary fill-current" />

                    <span>{ingredient.original}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="">
            <h2 className="font-semibold text-lg mb-4">Instructions</h2>

            <ul className="space-y-3">
              {recipe.analyzedInstructions &&
                recipe.analyzedInstructions[0]?.steps?.map(
                  (instruction: {}, index: number) => (
                    <li key={`step-${index}`} className="flex gap-3">
                      <span className="flex shrink-0 justify-center items-center w-6 h-6 rounded-full text-sm text-white bg-primary">
                        {index + 1}
                      </span>

                      <span>{instruction.step}</span>
                    </li>
                  )
                )}
            </ul>
          </div>

          <div className=""></div>
        </section>
      </main>

      {recipe.dishTypes?.length > 0 && (
        <footer className="py-6 border-t border-border mt-4">
          <h3 className="mb-3 font-medium">Tags</h3>

          <div className="flex flex-wrap gap-2">
            {recipe.dishTypes.map((tag: string, index: number) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </div>
        </footer>
      )}
    </>
  )
}
