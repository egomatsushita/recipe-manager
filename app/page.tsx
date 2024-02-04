import Recipes from '@/app/_components/Recipes'

export default function Home() {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-primary my-8">
        <span>Latest Recipes</span>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <Recipes />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-primary my-8">
        <span>Most Popular</span>
      </div>
      <div className="flex justify-center">
        <span className="btn-secondary">Load More</span>
      </div>
    </div>
  )
}
