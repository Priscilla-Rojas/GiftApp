/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";

describe('Pruevas en GiftGrid', () => {

  const category = 'Mariposa';

  test('Debe mostar el Loading..', () => { 

    render(<GiftGrid category={ category }/>);
    expect( screen.getByText( 'Loading...'))
    expect( screen.getByText( category ));

    screen.debug()
  })

  test('Debe mostrar items cuando se cargan imagenes por medio del useFetchGift', () => {
    
  })

})
