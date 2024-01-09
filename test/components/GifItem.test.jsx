import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GitItem/>', () => {

  const title = 'Hunter X Hunter'
  const url = 'https://hunter-x-hunter/hunter.jpg'

  test('debe hacer match con el snapshot ', () => {

    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()

  })

  test('debe de mostrar la imagen con la URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    // screen.debug()
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('debe de mostrat el titulo en el componentes', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})