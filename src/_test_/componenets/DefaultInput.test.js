import React from 'react';
import DefaultInput from '../../components/Component/DefaultInput';
import { View } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextInput } from 'react-native';

configure({ adapter: new Adapter() });


describe("<Default input/>", () => {
    let wrapper, mockClick, props;
    beforeEach(() => {
        props = {
            touched: true,
            valid: true
        }

    });

    it('Default input should render textinput', () => {

        const wrapper = mount(<DefaultInput />);
        expect(wrapper.hasClass('invalid'));
        expect(wrapper.contains(<TextInput />));

    });

});






