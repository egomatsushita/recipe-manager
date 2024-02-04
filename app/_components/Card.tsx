import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  id: string | number
  header: string | React.ReactNode
  subheader: string | React.ReactNode
  imgSrc: string
  imgAlt: string
  description: string | React.ReactNode
  tag: string | React.ReactNode
}

export default function Card({ id, header, subheader, description, imgSrc, imgAlt, tag }: CardProps) {
  return (
    <div className="rounded-lg shadow overflow-hidden relative hover:shadow-lg cursor-pointer">
      <Link href={`/recipes/${id}`}>
        <Image src={imgSrc} alt={imgAlt} width={500} height={200} />
        <div className="py-2 px-4">
          <div>
            <span className="font-bold">{header}</span>
            <span className="block text-sm text-gray-700">{subheader}</span>
          </div>
        </div>
        <div className="p-4">
          <div>{description}</div>
          <div className="rounded-full bg-background py-2 px-4 absolute top-3 left-3">{tag}</div>
        </div>
      </Link>
    </div>
  )
}
