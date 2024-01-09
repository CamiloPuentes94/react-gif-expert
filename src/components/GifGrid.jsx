
import { GifItem } from "./GifItem"
import { useFectchGifs } from "../hooks/useFectchGifs"

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFectchGifs(category)





  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h2>Cargando ...</h2>)}

      <section className="card-grid">
        {images.map(item => (
          <GifItem
            key={item.id}
            {...item}
          />
        ))}
      </section>

    </>
  )
}
