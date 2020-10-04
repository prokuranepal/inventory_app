import React from 'react';
import SupplierContactScreen  from './SupplierContactScreen';
import renderer from 'react-test-renderer';

import {
    configure,
    shallow,
    mount
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
import Contact from '../models/contact'
const {act} = TestRenderer;
const mockStore = configureStore([]);

    jest.resetModules();
  
    jest.doMock('react-native/Libraries/Linking/Linking', () => ({
        openURL:function_click
       }));

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const getParam= jest.fn()

jest.useFakeTimers();

const dummy_data = {

    navigation:{toggleDrawer:function_click, navigate:function_click}

}


describe('<SupplierContactScreen />', () => {

  mockPlatform("android")
    
  it("Events and props test in SupplierContactScreen", () =>
        {
            const wrapper = mount(<SupplierContactScreen {...dummy_data}></SupplierContactScreen>)
            expect(wrapper).toMatchSnapshot();
            let flatListComp = findByTestAttr(wrapper, "flatListComp").at(0)
            console.log("flatList supplier",flatListComp)
            expect(flatListComp.prop('data')).toEqual([
                new Contact("t1", "Supplier1", 333333, "Kathmandu"),
                 new Contact("t2", "Supplier2", 55555, "kupondole"),
                new Contact("t3", "Supplier3", 66666, "jhapa"),
                new Contact("t4", "Supplier4", 7777, "dharan")
             ])   
             let cardComp= findByTestAttr(wrapper,"cardComp")
             expect(cardComp).toHaveLength(4)
             let nameSupp= findByTestAttr(wrapper,"nameSupp").at(0)
             let numSupp= findByTestAttr(wrapper,"numSupp").at(0)
             let addSupp= findByTestAttr(wrapper,"addSupp").at(0)
             expect(nameSupp.props().children).toEqual([" Supplier Name:", "Supplier1"])
             expect(numSupp.props().children).toEqual(["Phone Number: ", 333333])
             expect(addSupp.props().children).toEqual("Kathmandu")

             const navOption= SupplierContactScreen.navigationOptions(dummy_data)
             let wrap= shallow(navOption.headerLeft())
              let toggle = findByTestAttr(wrap, "navToggle")
              expect(toggle).toHaveLength(1)
              toggle.props().onPress()
              expect(function_click).toHaveBeenCalledTimes(1)
            //  console.log("wrapper instance flatlist", flatListComp.instance())
            //  let firstChild= wrapper.instance().renderItem( new Contact("t1", "Supplier1", 333333, "Kathmandu")).find(Card)
            //  console.log("first child", firstChild.props())
            // expect(firstChild).toHaveLength(1)
            //  let supplierName = findByTestAttr(wrapper, "supplierName").at(2);
            //  expect(supplierName).toEqual("Supplier3")
             let callButton = findByTestAttr(wrapper, "callButton").at(0);
             callButton.props().onPress()
            expect(function_click).toHaveBeenCalledWith('tel:${}') 
          

        });

    
        });


