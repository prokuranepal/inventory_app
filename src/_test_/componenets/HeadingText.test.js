import React from 'react';
import HeadingText from '../../components/Component/HeadingText';
import { View, Text } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("<Text render/>", () => {

    it('renders the length of view', () => {
        const wrapper = shallow(<HeadingText />);
        expect(wrapper.find(Text).length).toEqual(1);
    })

});
