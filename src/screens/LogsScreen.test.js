import React from 'react';
import LogsScreen  from './LogsScreen';

import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
// import Alert from 'Alert';

// import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');

 
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {

    navigation:{toggleDrawer:function_click, navigate:function_click}

}


describe('<LogsScreen />', () => {

  
    
  it("Events and props test in LogsScreen", () =>
        {
            const wrapper = shallow(<LogsScreen ></LogsScreen>)
            expect(wrapper).toMatchSnapshot();
           const navOption= LogsScreen.navigationOptions(dummy_data)
           expect(typeof navOption).toBe("object");
        });

  
        });


