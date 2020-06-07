import React from 'react';
import DefaultText from '../../components/Component/DefaultText';
import { View, Text } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("<text render/>", () => {

    it('renders the length of view', () => {
        const wrapper = shallow(<DefaultText />);
        expect(wrapper.find(Text).length).toEqual(1);
    })

});
