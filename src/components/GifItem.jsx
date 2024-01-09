import React from 'react'

export const GifItem = ({ title, url }) => {

  return (
    <section className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </section>
  )
}
