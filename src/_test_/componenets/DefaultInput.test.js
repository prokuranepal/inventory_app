import React from 'react';
import DefaultInput from '../../components/Component/DefaultInput';
import { View } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextInput } from 'react-native' ;
import renderer from 'react-test-renderer';
import test_function from './test_function';
configure({ adapter: new Adapter() });

const extra_test=    it('Default input should render textinput', () => {

    const wrapper = mount(<DefaultInput />);
    expect(wrapper.hasClass('invalid'));
    expect(wrapper.contains(<textInput />));

});
test_function(["<Default input/>"],["renders correctly"],[<DefaultInput/>], extra_test)
// describe("<Default input/>", () => {
//     let wrapper, mockClick, props;
//     beforeEach(() => {
//         props = {
//             touched: true,
//             valid: true
//         }

//     });
//     test('renders correctly', () => {
//         const tree = renderer.create(<DefaultInput />).toJSON();
//         expect(tree).toMatchSnapshot();
//     });
    // it('Default input should render textinput', () => {

    //     const wrapper = mount(<DefaultInput />);
    //     expect(wrapper.hasClass('invalid'));
    //     expect(wrapper.contains(<TextInput />));

    // });

// });






