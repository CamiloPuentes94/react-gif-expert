import { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Valorant')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}
