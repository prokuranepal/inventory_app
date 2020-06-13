import React from 'react';
import DefaultText from '../../components/Component/DefaultText';
import { View, Text } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });


describe("<text render/>", () => {

    it('renders the length of view', () => {
        const wrapper = shallow(<DefaultText />);
        expect(wrapper.find(Text).length).toEqual(1);
    })
    test('renders correctly', () => {
        const tree = renderer.create(<DefaultText />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
