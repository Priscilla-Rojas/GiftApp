/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategories } from "../../src/components/AddCategories"

describe('Puevas en AddCategories', () => {
  
  test('debe de cambiar el vaalor de la caja de tecto', () => {  
    render( <AddCategories onNewCategory={ ()=> {} }/>)
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Saitama'}} );
    screen.debug()
  })
})
