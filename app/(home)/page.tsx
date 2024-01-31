import { recipes } from '@/app/api/recipes'
import RecipeCard from '@/app/ui/recipe-card'

export default function Home() {
  return (
    <div>
      <div className='font-bold text-primary my-8'>
        <span>Latest Recipes</span>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} data={recipe} />
        ))}
      </div>
      <div className='font-bold text-primary my-8'>
        <span>Most Popular</span>
      </div>
      <div className='flex justify-center'>
        <span className='btn-secondary'>Load More</span>
      </div>
    </div>
  )
}
