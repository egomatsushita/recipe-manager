import Link from 'next/link'

import { ChevronLeftIcon } from '@/lib/icons'

export default function RecipePage({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-primary my-8">Recipe #{params.id}</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, neque! Doloremque sapiente aliquam doloribus qui
        blanditiis accusantium? Harum suscipit odit reprehenderit distinctio, laborum nemo voluptatibus facere ut.
        Officia, modi molestiae.
      </span>
      <div className="mt-8 text-center">
        <Link href="/recipes">
          <span className="btn-secondary">
            <span className="inline-block mr-1 align-middle">{ChevronLeftIcon}</span>
            Back to Recipes
          </span>
        </Link>
      </div>
    </div>
  )
}
