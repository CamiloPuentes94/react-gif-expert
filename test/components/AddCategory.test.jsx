import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {

  test('debe de cambiar el valor de la caja de texto', () => {

    render(<AddCategory onNewCategory={() => { }} />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Camilo' } })

    expect(input.value).toBe('Camilo')
    // screen.debug()
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'hunter'
    // de esta manera se simula una funcion por un mock
    const onNewCategory = jest.fn()


    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    // aqui se pregunta si se dispara la funcion
    expect(onNewCategory).toHaveBeenCalled()
    // se espera que se dispare una sola vez o mas veces
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    // se espera que la funcion se ha llamado con el valor del input value
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)

  })

  test('No debe de llamar el onNewCategory si el input esta vacio', () => {

    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()


  })
})