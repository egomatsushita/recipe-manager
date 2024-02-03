import Image from 'next/image'
import Link from 'next/link'

type Recipe = {
  id: number
  title: string
  author: string
  description: string
  imageSrc: string
  duration: number
}
type CardProps = {
  data: Recipe
}

export default function RecipeCard({ data }: CardProps) {
  return (
    <div key={data.title} className="rounded-lg shadow overflow-hidden relative hover:shadow-lg cursor-pointer">
      <Link href={`/recipes/${data.id}`}>
        <Image src={data.imageSrc} alt={data.title} width={500} height={200} layout="responsive" />
        <div className="py-2 px-4">
          <div>
            <span className="font-bold">{data.title}</span>
            <span className="block text-sm text-gray-700">Recipe by {data.author}</span>
          </div>
        </div>
        <div className="p-4">
          <div>{data.description}</div>
          <div className="rounded-full bg-background py-2 px-4 absolute top-3 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {data.duration} min
          </div>
        </div>
      </Link>
    </div>
  )
}
