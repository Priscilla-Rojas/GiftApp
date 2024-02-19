/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategories } from "../../src/components/AddCategories"

describe('Puebas en AddCategories', () => {
  
  test('debe de cambiar el vaalor de la caja de tecto', () => {  
    render( <AddCategories onNewCategory={ ()=> {} }/>)
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Saitama'}} );

    expect(input.value).toBe('Saitama');
    // screen.debug()
  })

  test(' debe de llamar onNewategory solo si el inpt tiene un valor', () => { 
  
    const inputValue    = 'Mariposa';
    const onNewCategory = jest.fn();

    render( <AddCategories onNewCategory={ onNewCategory }/>)

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue}} );
    fireEvent.submit( form );

    expect(input.value).toBe('');
    expect( onNewCategory ).toHaveBeenCalled(); 
    expect( onNewCategory ).toHaveBeenCalledTimes(1); 
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); 
    
    // screen.debug()
  })
  test('No debe llamar el onNewategory si el value esta vacio', () => { 
    const onNewCategory = jest.fn();
    render( <AddCategories onNewCategory={ onNewCategory }/>);
    
    const form  = screen.getByRole('form');
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled(); 
    
    screen.debug()
  })
})
