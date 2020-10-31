import React from 'react';
import OrderListScreen from './OrderListScreen';
import OrderItem from '../components/UI/OrderItem';

import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
import { Provider } from 'react-redux';
// import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

const dummy_data={
  navigation:{toggleDrawer:function_click},
    item:{
    redableDate:"20 Nov, 2020",

      items:[{
        id:'id3',
    itemTitle:'Antibiotics',
    quantity:20,
    type:"general",
    itemPrice:45
      }]
    }}

describe('<OrderListScreen />', () => {
     let store;
 
    beforeEach(() => {
      store = mockStore({
        orders:{
            orders:{
            items:[
                {
            id:'id3',
            redableDate:"20 Nov, 2020",
            itemTitle:'Antibiotics',
            quantity:20,
            type:"general",
            itemPrice:45}
          ,
          {
            id:'id2',
            redableDate:"20 Nov, 2020",
            itemTitle:'Paracetamol',
            quantity:2,
            type:"painkiller",
            itemPrice:10,
            }
          
        
        ]}
      }});
      store.dispatch=jest.fn();
        mockAlert()  
        mockPlatform("android")
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
 
         
      it("Events and props test in OrderListScreen for Attention", () =>
            {
                const wrapper = mount(<Provider store={store} ><OrderListScreen  /></Provider> )
                let flatListComp = findByTestAttr(wrapper, "flatListComp").at(0)
                expect(flatListComp.prop('data')).toEqual(
                   { items:[
                    {
                id:'id3',
                redableDate:"20 Nov, 2020",
                itemTitle:'Antibiotics',
                quantity:20,
                type:"general",
                itemPrice:45}
              ,
              {
                id:'id2',
                redableDate:"20 Nov, 2020",
                itemTitle:'Paracetamol',
                quantity:2,
                type:"painkiller",
                itemPrice:10,
                }
              
            
            ]}) 
            let dive = flatListComp.props().renderItem(dummy_data)
            wrapper.update()
            expect(dive.type).toEqual(OrderItem)
            // expect(dive.props.date).toEqual("20 Nov, 2020")
            expect(dive.props.items).toEqual([{
              id:'id3',
          itemTitle:'Antibiotics',
          quantity:20,
          type:"general",
          itemPrice:45
            }])
           
            })   
            it("NavOptions in OrderListScreen", () =>
            {
                 const navOption= OrderListScreen.navigationOptions(dummy_data)
                 let wrap= mount(navOption.headerLeft())
                  let toggle = findByTestAttr(wrap, "navToggle").at(0)
                  toggle.props().onPress()
                  expect(function_click).toHaveBeenCalledTimes(1)
            
                });       
                    

    })