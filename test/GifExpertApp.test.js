import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

/* eslint-disable no-undef */
describe('Probando componente GifExpertApp', () => {
  const category = 'Mariposaaa';
  test('Debe Agreagar una nueva categoria', () => { 
    
    render( <GifExpertApp/>);

    const form = screen.getByRole('form');
    const addCategory = screen.getByRole('textbox');

    fireEvent.input(addCategory, { target: { value: category}});
    fireEvent.submit(form);
    
    expect(screen.getByText(category)).toBeTruthy();
    // screen.debug();
  })

  test('Debe detectar que la categoria ya existe y no garegarla', () => { 
    const { getAllByText } = render( <GifExpertApp/>);
    const addCategory = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(addCategory, { target: { value: category}});
    fireEvent.submit(form);
    fireEvent.input(addCategory, { target: { value: category}});
    fireEvent.submit(form);
    
    expect(getAllByText(category).length).toBe(1);
  })

  // test('Debe eliminar la categoria deseada', () => { 
    
  // })
})
