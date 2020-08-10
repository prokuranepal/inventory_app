import React from 'react';
import SplashScreen from '../../../screens/Splashscreen';

import renderer from 'react-test-renderer';
import { View, Text, Image } from 'react-native';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const createTestProps = (props) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
})
describe("<Splash scrren/>", () => {
    describe("rendering", () => {
        const messageText = 'Hello world';
        let wrapper;
        let props;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<SplashScreen {...props} />);
        });



        // test('renders correctly', () => {
        //     const tree = renderer.create(<SplashScreen />).toJSON();
        //     expect(tree).toMatchSnapshot();
        // });

        it('renders the length of view text', () => {
            const wrapper = shallow(<SplashScreen />);
            expect(wrapper.find('View')).toHaveLength(3);
            // expect(wrapper.find('Text')).toHaveLength(1);
            // expect(wrapper.find('Image')).toHaveLength(1);

        })

        it('Shallow rendering', () => {
            const wrapper = shallow(<SplashScreen />);
            const componentInstance = wrapper.instance();
            //Accessing react lifecyle methods
            componentInstance.componentDidMount();
        })
        it("should render a <View /> and go to Tab screen", () => {

            const wrapper = mount(<SplashScreen />);
            const mock = jest.fn();
            wrapper.instance().navigation = mock;
            // wrapper.find(MenuHover).at(0).props().enter();
            // expect(mock).toHaveBeenCalledTimes(1);


        });
    })
});






