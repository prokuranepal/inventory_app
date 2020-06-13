import React from 'react';
import MainText from '../../components/Component/MainText';
import { View, Text, TouchableOpacity } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


describe("<Button view/>", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<MainText />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders the length of view', () => {
        const wrapper = shallow(<MainText />);

        expect(wrapper.find(Text).length).toEqual(1);
    })

});