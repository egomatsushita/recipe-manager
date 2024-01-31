import { recipes } from '@/app/api/recipes'
import RecipeCard from '@/app/ui/recipe-card'

export default function RecipesPage() {
  return (
    <div className='mt-8'>
      <main className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} data={recipe} />
        ))}
      </main>
    </div>
  )
}
