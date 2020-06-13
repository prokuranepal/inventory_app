import React from 'react';
import MainButton from '../../components/Component/MainButton';
import { View, Text, TouchableOpacity } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


describe("<Button view/>", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<MainButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders the length of view', () => {
        const wrapper = shallow(<MainButton />);
        expect(wrapper.find(View).length).toEqual(1);
        expect(wrapper.find(TouchableOpacity).length).toEqual(1);
        expect(wrapper.find(Text).length).toEqual(1);
    })

});