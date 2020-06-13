import React from 'react';
import ButtonWIthBackground from '../../components/Component/ButtonWIthBackground';

import renderer from 'react-test-renderer';
import { View, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const onPress = jest.fn();
const baseProps = {
    onPress
}

describe("< button/>", () => {
    beforeEach(() => {
        props = {
            Platform: "android"
        }
    });
    it('renders the view', () => {
        const wrapper = shallow(<ButtonWIthBackground Platform='android' />);
        expect(wrapper.find(View).length).toEqual(1);

    })
    it('check  view text', () => {
        const wrapper = shallow(<ButtonWIthBackground />);
        wrapper.setProps({ disabled: true });
        // console.log(wrapper.debug());
        expect(wrapper.find(View).length).toBe(1)
        expect(wrapper.find(Text).length).toBe(1)
        // expect(wrapper.find(TouchableNativeFeedback)).toEqual(1)
    });
    it("onPress check", () => {
        const wrapper = shallow(<ButtonWIthBackground {...baseProps} />);
        wrapper.simulate("onPress");
        // expect(baseProps.onPress).toHaveBeenCalled();
    });
});






