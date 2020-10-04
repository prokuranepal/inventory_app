import React from 'react';
import CartScreen , {submitHandler} from './CartScreen';
import renderer from 'react-test-renderer';

import {
    configure,
    mount,
    shallow
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
const getParam= jest.fn()

const dummy_data = {
    
    navigation:{setParams:function_click, navigate:function_click,toggleDrawer:function_click}

}


describe('<CartScreen />', () => {

    let store;
 
    beforeEach(() => {
      store = mockStore({
        cart:{items:[{
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
    
  it("Events and props test in CartScreen", () =>
        {
            const wrapper = mount(<Provider store={store}><CartScreen  {...dummy_data} /> </Provider>)
            console.log("wrapper",wrapper )
            let flatListComp = findByTestAttr(wrapper, "flatListComp").at(0)
            console.log("flatList supplier",flatListComp)
            expect(flatListComp.prop('data')).toEqual([
              {
                itemId:'1',
                itemTitle:'An222tibiotics',
                quantity:202,
                itemPrice:452,
                
              },{
                itemId:'0',
                itemTitle:'Antibiotics',
                quantity:20,
                itemPrice:45}
              
          ])   
          let item= findByTestAttr(wrapper,"cartItem")
          expect(item).toHaveLength(2)
          item.at(1).props().onRemove()
          expect(store.dispatch).toHaveBeenCalledTimes(1)
          expect(store.dispatch).toHaveBeenCalledWith({"item_id": "0", "type": "REMOVE_FROM_CART"})
          jest.clearAllMocks()
          let sendButton= findByTestAttr(wrapper,"sendButton")
          sendButton.props().onPress()
          wrapper.update()
          expect(store.dispatch).toHaveBeenCalledTimes(1)
          expect(store.dispatch).toHaveBeenCalledWith( expect.objectContaining({
         type:"ADD_ORDER"}));
          expect(function_click).toHaveBeenCalledTimes(1)
          expect(function_click).toHaveBeenCalledWith("Order")
          let customSendButton= findByTestAttr(wrapper,"customSendButton")
          jest.clearAllMocks()
          customSendButton.props().pressHandler()
          wrapper.update()
          expect(function_click).toHaveBeenCalledWith("Add")

    
            });
            it("NavOptions in CartScreen", () =>
            {
                 const navOption= CartScreen.navigationOptions(dummy_data)
                 let wrap= shallow(navOption.headerLeft())
                  let toggle = findByTestAttr(wrap, "navToggle")
                  expect(toggle).toHaveLength(1)
                  toggle.props().onPress()
                  expect(function_click).toHaveBeenCalledTimes(1)
            
                });
    
    
        });


