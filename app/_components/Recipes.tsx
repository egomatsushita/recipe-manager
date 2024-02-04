import { recipes } from '@/app/_lib/placeholder-data'
import Card from '@/app/_components/Card'
import { ClockIcon } from '@/app/_lib/icons'

export default function Recipes() {
  return (
    <>
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          id={recipe.id}
          header={recipe.title}
          subheader={`Recipe by ${recipe.author}`}
          description={recipe.description}
          imgSrc={recipe.imageSrc}
          imgAlt={recipe.title}
          tag={
            <>
              {ClockIcon}
              {recipe.duration} min
            </>
          }
        />
      ))}
    </>
  )
}
