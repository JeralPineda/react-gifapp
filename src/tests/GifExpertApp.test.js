import { shallow } from 'enzyme';
import React from 'react';

import GiftExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpetApp />', () => {
   test('debe de mostrarse correctamente', () => {
      const wrapper = shallow(<GiftExpertApp />);

      expect(wrapper).toMatchSnapshot();
   });

   test('debe de mostrar una lista de categorías', () => {
      const categories = ['One Punch', 'One Pieces'];

      const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);
   });
});
