import React from 'react';
import Card from '../../components/Component/Card';
import { View } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("<card view/>", () => {

    it('renders the length of view', () => {
        const wrapper = shallow(<Card />);
        expect(wrapper.find(View).length).toEqual(1);
    })

});






