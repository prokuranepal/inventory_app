import React from 'react';
import MainButton from '../../components/Component/MainButton';
import { View, Text, TouchableOpacity } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });


describe("<Button view/>", () => {

    it('renders the length of view', () => {
        const wrapper = shallow(<MainButton />);
        expect(wrapper.find(View).length).toEqual(1);
        expect(wrapper.find(TouchableOpacity).length).toEqual(1);
        expect(wrapper.find(Text).length).toEqual(1);
    })

});