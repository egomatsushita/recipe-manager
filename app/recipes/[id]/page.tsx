import Link from 'next/link'

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Back to Recipes
          </span>
        </Link>
      </div>
    </div>
  )
}
