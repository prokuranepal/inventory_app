import React from 'react';
import ItemCategoryScreen , {submitHandler} from './ItemCategoryScreen';
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
const getParam= jest.fn()

const dummy_data = {
    
    navigation:{setParams:function_click, navigate:function_click,toggleDrawer:function_click}

}


describe('<ItemCategoryScreen />', () => {
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
  it("Events and props test in ItemCategoryScreen", () =>
        {
            const wrapper = mount(<Provider store={store} ><ItemCategoryScreen  {...dummy_data} /></Provider> )
            console.log("wrapper",wrapper)
            let flatListComp = findByTestAttr(wrapper, "flatListComp").at(0)
            console.log("flatList supplier",flatListComp)
            expect(flatListComp.prop('data')).toEqual(
              type)   
          let item= findByTestAttr(wrapper,"categoryItem")
          expect(item).toHaveLength(4)
          item.at(3).props().onSelect()
          wrapper.update()
          expect(function_click).toHaveBeenCalledWith({
            routeName: "ItemList",
            params: {
                categoryId: "t1",
                title: "Type",
                value:'General'
            }
        })
       
      
      item.at(0).props().onSelect()
      wrapper.update()
      expect(function_click).toHaveBeenCalledWith({
        routeName: "ItemList",
        params: {
            categoryId: "t1",
            title: "Type",
            value: "Pain killer",
        }
    })
          
            });
            it("NavOptions in ItemCategoryScreen", () =>
            {
                 const navOption= ItemCategoryScreen.navigationOptions(dummy_data)
                 let wrap= mount(navOption.headerRight())
                  let navigate = findByTestAttr(wrap, "navigate").at(0)
                  navigate.props().onPress()
                  expect(function_click).toHaveBeenCalledTimes(1)
                expect(function_click).toHaveBeenCalledWith('Scanner')
                });
    
    
        });


