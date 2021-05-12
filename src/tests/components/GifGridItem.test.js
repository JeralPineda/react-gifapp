import React from 'react';
// import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba en <GifGridItem />', () => {
   const titulo = 'Un titulo';
   const url = 'https://localhost/algo.jpg';

   const wrapper = shallow(<GifGridItem title={titulo} url={url} />);

   test('Debe de mostrar el componente correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe tener un párrafo con el title', () => {
      const p = wrapper.find('p');

      expect(p.text().trim()).toBe(titulo);
   });

   test('debe tener la imagen igual al url y alt de los props', () => {
      const img = wrapper.find('img');

      //   img.props() obtener un ojeto con las propiedades de la img
      //props() todas las propiedades
      //prop('src') una propiedad

      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(titulo);
   });

   //    Probamos que el div del componente tenga las clases correspondientes
   test('debe de tener animate__fadeIn', () => {
      const div = wrapper.find('div');
      const className = div.prop('className');

      expect(className.includes('animate__fadeIn')).toBe(true);
   });
});
