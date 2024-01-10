import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => {
  test('debe de mostrar el Titulo de la aplicacion', () => {
    render(<GifExpertApp />)

    expect(screen.getByText('GifExpertApp'))
  })
})