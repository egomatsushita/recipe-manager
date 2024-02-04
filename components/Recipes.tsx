import { recipes } from '@/lib/placeholder-data'
import Card from '@/components/Card'
import { ClockIcon } from '@/lib/icons'

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
