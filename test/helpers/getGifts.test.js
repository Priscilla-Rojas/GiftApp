/* eslint-disable no-undef */
import {getGift} from '../../src/helpers/getGifts';

describe('Pruebas en getGifts()', () => {
  test('Debe retornar un arreglo de gift', async() => { 

    const gifts =   await getGift('mariposas');
    expect( gifts.length ).toBeGreaterThan(0);
    expect( gifts[0]).toEqual({
      id: expect.any( String),
      title: expect.any( String),
      url: expect.any( String),
    })
  })
})
