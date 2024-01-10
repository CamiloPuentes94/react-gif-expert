import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFectchGifs } from "../../src/hooks/useFectchGifs"

jest.mock('../../src/hooks/useFectchGifs')

describe('Pruebas en <GiGrid/>', () => {

  const category = 'Naruto'

  test('debe de mostrar el loading inicialmente', () => {

    useFectchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)

    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  })

  test('debe de mostrar items cuando se cargen las imagenes useFectchGifs', () => {

    const gifs = [{
      id: 'ABC',
      title: 'Naruto',
      url: 'https://localhost/naruto.jpg'
    },
    {
      id: 'DEFG',
      title: 'Amor',
      url: 'https://localhost/amor.jpg'
    }
    ]

    useFectchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(2)
  })
})