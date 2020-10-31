import React from 'react';
import EditItemScreen , {submitHandler} from './EditItemScreen';
import renderer from 'react-test-renderer';
import {type} from '../data/dummy-data'
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
// import Alert from 'Alert';
import {Alert} from 'react-native';
import Item from '../models/item';
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
const d_func= (data1)=>{
    switch(data1){
        case('itemId'):
        return "id1"
        default:
            return 
}}
const dummy_data = {
    
    navigation:{
        getParam:d_func,
        setParams:function_click, 
        navigate:function_click,
        toggleDrawer:function_click,
        goBack:function_click
    }

}


describe('<EditItemScreen />', () => {
     let store;
 
    beforeEach(() => {
      store = mockStore({
        items:{items:[{
            itemId:'id3',
            itemTitle:'Antibiotics',
            quantity:20,
            itemPrice:45}
          ,
          {
            itemId:'id2',
            itemTitle:'An222tibiotics',
            quantity:202,
            itemPrice:452,
            
          }
        
        ],
      }});
      store.dispatch=jest.fn();
        mockAlert()  
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
  it("Snapshot test for EditItemScreen", () =>
        {
            const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
            expect(wrapper).toMatchSnapshot()
        });
    
        });


