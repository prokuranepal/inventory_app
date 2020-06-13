import React from 'react';
import HeadingText from '../../components/Component/HeadingText';
import { View, Text } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });


describe("<Text render/>", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<HeadingText />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders the length of view', () => {
        const wrapper = shallow(<HeadingText />);
        expect(wrapper.find(Text).length).toEqual(1);
    })

});
