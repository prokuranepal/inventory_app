import React from 'react';
import ScannerScreen  from './ScannerScreen';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import  {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
// import Alert from 'Alert';

import { Provider } from 'react-redux';
// import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

const dummy_data = {
    
    navigation:{setParams:function_click, navigate:function_click,toggleDrawer:function_click}

}


describe('<ScannerScreen />', () => {
     let store;
 
    beforeEach(() => {
      store = mockStore({
   
      });
      store.dispatch=jest.fn();
        mockAlert()  
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
  it("snapshot test in ScannerScreen", () =>
        {
            const wrapper = mount(<Provider store={store}><ScannerScreen  {...dummy_data} /></Provider> )
            expect(wrapper).toMatchSnapshot()      
 
        });
     
        });


