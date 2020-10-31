import React from 'react';
import ReceivedItemScreen ,{date,idRan} from './ReceivedItemScreen';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import  {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
// import Alert from 'Alert';
import OrderItem from '../components/UI/OrderItem';
import moment from 'moment';

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
const dummy ={
    item:{
    date:"20 Nov, 2020",
      items:[{
        id:'id3',
    itemTitle:'Antibiotics',
    quantity:20,
    type:"general",
    itemPrice:45
      }]
    }}
  const d_func= (data1)=>{
        switch(data1){
            case('data'):
            return "data1234"
            default:
                return 
    }}
const dummy_data = {
    navigation:{
        getParam:d_func,
        setParams:function_click, 
        navigate:function_click,toggleDrawer:function_click,
        goBack:function_click
    }

}


describe('<ReceivedItemScreen />', () => {
     let store;
 
    beforeEach(() => {
      store = mockStore({
   
      });
      store.dispatch=jest.fn();
        mockPlatform('android')  
        mockAlert();
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
         it("snapshot test in ReceivedItemScreen", () =>
        {
            const wrapper = mount(<Provider store={store}><ReceivedItemScreen {...dummy_data} /></Provider> )
            expect(wrapper).toMatchSnapshot()       
         });

         it("Props test", () =>
        {
            const wrapper = mount(<Provider store={store}><ReceivedItemScreen {...dummy_data}  /></Provider> )
            let flatListComp = findByTestAttr(wrapper,"flatListComp").at(0)
            expect(flatListComp.prop('data')).toEqual([{"date": moment(date).format('MMMM Do YYYY, hh:mm')
            , "items": [{"itemPrice": 20, "itemTitle": "data1234", "itemid": "i"+idRan, "quantity": 
            5}]}])
        });
           it("renderitem in ReceivedItemScreen", () =>
        {
            const wrapper = mount(<Provider store={store}><ReceivedItemScreen  {...dummy_data} /></Provider> )
            let flatListComp = findByTestAttr(wrapper,"flatListComp").at(0)
            let renderItem = flatListComp.props().renderItem(dummy)
            expect(renderItem.type).toEqual(OrderItem)
            expect(renderItem.props.date).toEqual("20 Nov, 2020")
            expect(renderItem.props.items).toEqual([{
              id:'id3',
          itemTitle:'Antibiotics',
          quantity:20,
          type:"general",
          itemPrice:45
            }])        });

            it("events button2 in ReceivedItemScreen", () =>
            {
                const wrapper = mount(<Provider store={store}><ReceivedItemScreen  {...dummy_data} /></Provider> )
                let buttonComp2 = findByTestAttr(wrapper, "buttonComp2");
                buttonComp2.props().onPress()
                expect(function_click).toHaveBeenCalledTimes(1)
                expect(function_click).toHaveBeenCalledWith('Scanner')
            });
            it("events button1 in ReceivedItemScreen", () =>
            {
                const wrapper = mount(<Provider store={store}><ReceivedItemScreen  {...dummy_data} /></Provider> )
                let buttonComp = findByTestAttr(wrapper, "buttonComp");
                buttonComp.props().onPress()
                expect(store.dispatch).toHaveBeenCalledTimes(1)
                // expect(store.dispatch).toHaveBeenCalledWith({'iid':moment(date).format('MMMM Do YYYY, hh:mm'), "itemData": {"company": "BGuys", "description": "Paracetamol (acetaminophen) is a pain reliever and a fever reducer", "price": 30, "quantity": 5, "title": "data1234", "type": "General"}, "type": "ADD_ITEMS"})
                expect(function_click).toHaveBeenCalledTimes(1)
            });
        });


