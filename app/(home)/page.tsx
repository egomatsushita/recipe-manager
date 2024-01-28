import Image from 'next/image'

export default function Home() {
  const cards = [
    {
      title: 'Noodles',
      author: 'Mario',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quos corporis. Mollitia itaque enim ex, eum, quam nemo veritatis nesciunt odit deserunt maxime aperiam quas provident illum nam dicta natus?',
      imageSrc: '/noodles.jpeg',
      duration: 20,
    },
    {
      title: 'Curry',
      author: 'John',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quos corporis. Mollitia itaque enim ex, eum, quam nemo veritatis nesciunt odit deserunt maxime aperiam quas provident illum nam dicta natus?',
      imageSrc: '/curry.jpeg',
      duration: 30,
    },
    {
      title: 'Ceasar Salad',
      author: 'Anne',
      imageSrc: '/ceasar-salad.jpeg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quos corporis. Mollitia itaque enim ex, eum, quam nemo veritatis nesciunt odit deserunt maxime aperiam quas provident illum nam dicta natus?',
      duration: 10,
    },
  ]
  return (
    <div>
      <div className='text-6xl mb-8'>
        <span>Recipes</span>
      </div>
      <div className='font-bold text-gray-700 my-8'>
        <span>Latest Recipes</span>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {cards.map((card) => (
          <div key={card.title} className='rounded-lg shadow overflow-hidden relative hover:shadow-lg cursor-pointer'>
            <Image src={card.imageSrc} alt={card.title} width={500} height={200} layout='responsive' />
            <div className='py-2 px-4'>
              <div>
                <span className='font-bold'>{card.title}</span>
                <span className='block text-sm text-gray-700'>Recipe by {card.author}</span>
              </div>
            </div>
            <div className='p-4'>
              <div>{card.description}</div>
              <div className='rounded-full bg-background py-2 px-4 absolute top-3 left-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 inline-block mr-1'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                {card.duration} min
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='font-bold text-gray-700 my-8'>
        <span>Most Popular</span>
      </div>
      <div className='flex justify-center'>
        <span className='btn-secondary'>Load More</span>
      </div>
    </div>
  )
}
