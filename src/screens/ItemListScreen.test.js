import React from 'react';
import ItemListScreen , {submitHandler} from './ItemListScreen';
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
import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const getParam= jest.fn()

const dummy_data = {
    
    navigation:{
        getParam: (param) => {
            switch(param){
                case('title'):
                return "Attention"
                
                case('value'):
                return 'painkiller'
                default:
                    return 
                
            }
          }, navigate:function_click,toggleDrawer:function_click}

}


describe('<ItemListScreen />', () => {
     let store;
 
    beforeEach(() => {
      store = mockStore({
        items:{attentionItems:[{
            itemId:'id3',
            itemTitle:'Antibiotics',
            quantity:20,
            type:"general",
            itemPrice:45}
          ,
          {
            itemId:'id2',
            itemTitle:'An222tibiotics',
            quantity:2,
            type:"painkiller",
            itemPrice:452,
            
          }
        
        ],
    items:
        [{
            itemId:'id3',
            itemTitle:'Antibiotics',
            quantity:20,
            type:"general",
            itemPrice:45}
          ,
          {
            itemId:'id2',
            itemTitle:'An222tibiotics',
            quantity:2,
            type:"painkiller",
            itemPrice:452,
            
          },
          {
            itemId:'id3',
            itemTitle:'Paracetamol',
            quantity:19,
            type:"painkiller",
            itemPrice:40,
            
          }
        
        ]   
    
      }});
      store.dispatch=jest.fn();
        mockAlert()  
        mockPlatform("android")
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
  it("Events and props test in ItemListScreen for Attention", () =>
        {
            const wrapper = mount(<Provider store={store} ><ItemListScreen {...dummy_data} /></Provider> )
            console.log("wrapper",wrapper)
            let itemListComp = findByTestAttr(wrapper, "itemListComp").at(0)
            expect(itemListComp.prop('listData')).toEqual(
                [{
                    itemId:'id3',
                    itemTitle:'Antibiotics',
                    quantity:20,
                    type:"general",
                    itemPrice:45}
                  ,
                  {
                    itemId:'id2',
                    itemTitle:'An222tibiotics',
                    quantity:2,
                    type:"painkiller",
                    itemPrice:452,
                    
                  }
                
                ]) 
            let attentionComp = findByTestAttr(wrapper, "attentionComp").at(0)

              expect(attentionComp).toHaveLength(1)
           
                  let textInputComp = findByTestAttr(wrapper, "textInputComp").at(0)
                  expect(textInputComp.prop('value')).toEqual('')
                  textInputComp.props().onChangeText("jjj")
                  wrapper.update()
                  let itemListComp2 = findByTestAttr(wrapper, "itemListComp").at(0)
                  expect(itemListComp2.prop('listData')).toEqual(
                      [
                      
                      ]) 
              });
                
              it("Events and props test in ItemListScreen for Type", () =>
              {
                  const wrapper = mount(<Provider store={store} ><ItemListScreen 
                     {...{...dummy_data, navigation:{
                            ...dummy_data.navigation,
                             getParam:(param) => {
                                switch(param){
                                    case('title'):
                                    return "Type"
                                    
                                    case('value'):
                                    return 'painkiller'
                                    default:
                                        return 
                                    
                                }
                        }}}} /></Provider> )
                  console.log("wrapper",wrapper)
                  let itemListComp = findByTestAttr(wrapper, "itemListComp").at(0)
                  expect(itemListComp.prop('listData')).toEqual(
                      [   {
                    itemId:'id2',
                    itemTitle:'An222tibiotics',
                    quantity:2,
                    type:"painkiller",
                    itemPrice:452,
                    
                  }
                
                        ,
                        {
                            itemId:'id3',
                            itemTitle:'Paracetamol',
                            quantity:19,
                            type:"painkiller",
                            itemPrice:40,
                          
                        }
                      
                      ]) 
                  let attentionComp = findByTestAttr(wrapper, "attentionComp").at(0)
      
                    expect(attentionComp).toHaveLength(0)
 
                    });
                    it("NavOptions in ItemListScreen", () =>
                    {
                         const navOption= ItemListScreen.navigationOptions(dummy_data)
                         let wrap= mount(navOption.headerRight())
                          let navigation = findByTestAttr(wrap, "navigation").at(0)
                          navigation.props().onPress()
                          expect(function_click).toHaveBeenCalledTimes(1)
                          expect(function_click).toHaveBeenCalledWith('Cart')

                    
                        });
        

    })