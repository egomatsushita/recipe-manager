import Recipes from '@/app/_components/Recipes'

export default function RecipesPage() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary my-8">All Recipes</h1>
      <main className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <Recipes />
      </main>
    </div>
  )
}
