import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category)
      .then(newImage => setImages(newImage))
  }, [])



  return (
    <>
      <h3>{category}</h3>
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
