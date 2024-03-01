import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifts } from "../../src/hooks/useFetchGifts"

/* eslint-disable no-undef */
describe('Pruebas en useFetchGifts', () => {
  test('Debe de regresar el estado inicial', () => { 

    const { result } =renderHook( ()=> useFetchGifts('Goku'));
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  })
  test('Debe de regresar un arreglo de images y el isLoading en false', async () => { 

    const { result } =renderHook( ()=> useFetchGifts('Goku'));
    
    await waitFor(
      ()=> expect( result.current.images.length ).toBeGreaterThan(0),
      {
        timeout: 6000
      }
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  })
})
