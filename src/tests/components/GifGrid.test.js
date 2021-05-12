import React from 'react';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// Fingir cualquier llamada a ese archivo y suponer y controlar la informacion que eso va responder
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
   const category = 'Hola';

   test('debe de mostrarse correctamente', () => {
      // Falseamos la data
      useFetchGifs.mockReturnValue({
         data: [],
         loading: true,
      });

      const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
   });

   test('debe de mostrar item cuando se cargan imagenes useFetchGifs', () => {
      const gifs = [
         {
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa',
         },
         {
            id: 'DEF',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa',
         },
      ];
      // Falseamos la data
      useFetchGifs.mockReturnValue({
         data: gifs,
         loading: false,
      });
      const wrapper = shallow(<GifGrid category={category} />);

      //   expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('p').exists()).toBe(false);

      //   Evaluar si el componente existe GifGridItem
      expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
   });
});
