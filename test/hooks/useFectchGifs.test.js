import { renderHook, waitFor } from "@testing-library/react"
import { useFectchGifs } from "../../src/hooks/useFectchGifs"

describe('pruebas de hooks useFectchGifs', () => {

  test('debe de regresar el estado inicial', () => {

    const { result } = renderHook(() => useFectchGifs('naruto'))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('debe de retornar un arreglo de imagenes y el isLoading en false', async () => {

    const { result } = renderHook(() => useFectchGifs('naruto'))

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0) // se indica que images sea mas grande que cero
    )

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})