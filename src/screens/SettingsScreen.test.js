import React from 'react';
import SettingsScreen  from './SettingsScreen';
import renderer from 'react-test-renderer';

import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
// import Alert from 'Alert';

// import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import Contact from '../models/contact'
const {act} = TestRenderer;
const mockStore = configureStore([]);

 
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {

    navigation:{toggleDrawer:function_click, navigate:function_click}

}


describe('<SettingsScreen />', () => {

  
    
  it("Events and props test in SettingsScreen", () =>
        {
            const wrapper = shallow(<SettingsScreen {...dummy_data}></SettingsScreen>)
            expect(wrapper).toMatchSnapshot();
           const navOption= SettingsScreen.navigationOptions(dummy_data)
           let wrap= shallow(navOption.headerLeft())
            let toggle = findByTestAttr(wrap, "navToggle")
            expect(toggle).toHaveLength(1)
            toggle.props().onPress()
            expect(function_click).toHaveBeenCalledTimes(1)
        });

  
        });


