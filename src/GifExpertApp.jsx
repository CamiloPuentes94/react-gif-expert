import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["dragon ball"])

  const onAddCategory = () => {
    setCategories([...categories, "valorant"])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />

      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>

  )
}
