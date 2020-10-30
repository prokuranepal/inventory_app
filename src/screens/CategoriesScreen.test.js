import React from 'react';
import CategoriesScreen , {submitHandler} from './CategoriesScreen';
import renderer from 'react-test-renderer';
import {CATEGORIES} from '../data/dummy-data'
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
const getParam= jest.fn()

const dummy_data = {
    
    navigation:{setParams:function_click, navigate:function_click,toggleDrawer:function_click}

}


describe('<CategoriesScreen />', () => {
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
  it("Events and props test in CategoriesScreen", () =>
        {
            const wrapper = mount(<CategoriesScreen  {...dummy_data} /> )
            console.log("wrapper",wrapper)
            let flatListComp = findByTestAttr(wrapper, "flatListComp").at(0)
            console.log("flatList supplier",flatListComp)
            expect(flatListComp.prop('data')).toEqual(
              CATEGORIES)   
          let item= findByTestAttr(wrapper,"categoryItem")
          expect(item).toHaveLength(6)
          item.at(3).props().onSelect()
          wrapper.update()
          expect(function_click).toHaveBeenCalledWith({
            routeName: "ManageInventory",
            params: {
                categoryId: "c4",
                title: "Manage"
            }
        })
        item.at(5).props().onSelect()
        wrapper.update()
        expect(function_click).toHaveBeenCalledWith({
          routeName: "Logs",
          params: {
              categoryId: "c6",
              title: "Logs"
          }
      })
      item.at(0).props().onSelect()
      wrapper.update()
      expect(function_click).toHaveBeenCalledWith({
        routeName: "ManageInventory",
        params: {
            categoryId: "c4",
            title: "Manage"
        }
    })
          
            });
            it("NavOptions in CategoriesScreen", () =>
            {
                 const navOption= CategoriesScreen.navigationOptions(dummy_data)
                 let wrap= mount(navOption.headerLeft())
                  let toggle = findByTestAttr(wrap, "navToggle").at(0)
                  toggle.props().onPress()
                  expect(function_click).toHaveBeenCalledTimes(1)
            
                });
    
    
        });


