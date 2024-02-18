/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"


describe('Pruebas en el Componente GigtItem', () => {
  const title= 'Saitama';
  const url= 'https://one-pounch.com/saitama.jpg';

  test('Debe coincidir con el snapshop', () => { 

    const { container } = render( <GiftItem title={title} url={url}/>);
    expect ( container ).toMatchSnapshot();
  })
  test('Debe mostrar la imagen con el url y el alt indicado', () => { 
    render( <GiftItem title={title} url={url}/>);
    // screen.debug();
    const { src, alt} = screen.getByRole( 'img');
    expect( src ).toBe( url);
    expect( alt ).toBe( alt);
  })
  test('debe de mostrar el titulo en el componente', () => { 

    render( <GiftItem title={title} url={url}/>);
    expect( screen.getByText( title)).toBeTruthy()
  })
})