/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock( '../../src/hooks/useFetchGifts' );


describe('Pruevas en GiftGrid', () => {
  const category = 'Mariposa';

  test('Debe mostar el Loading..', () => { 

    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GiftGrid category={ category }/>);
    expect( screen.getByText( 'Loading...'))
    expect( screen.getByText( category ));

  })

  test('Debe mostrar items cuando se cargan imagenes por medio del useFetchGift', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Mariposa',
        url: 'https://localhost/mariposa.jpg'
      },
      {
        id: 'DEF',
        title: 'Mapa',
        url: 'https://localhost/mapa.jpg'
      }
    ]
    useFetchGifts.mockReturnValue({
      images: gifs,
      isLoading: false,
    })

    render( <GiftGrid category={ category }/>)
    expect( screen.getAllByRole('img').length ).toBe(2)
    // screen.debug()
  })

})
