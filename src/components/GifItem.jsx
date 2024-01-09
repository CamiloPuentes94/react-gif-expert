import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {

  return (
    <section className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </section>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
