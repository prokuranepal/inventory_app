import React from 'react';
import SupplierContactScreen  from './SupplierContactScreen';
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

  
    
  it("Events and props test in SupplierContactScreen", () =>
        {
            const wrapper = shallow(<SupplierContactScreen {...dummy_data}></SupplierContactScreen>)
            expect(wrapper).toMatchSnapshot();
            let flatListComp = findByTestAttr(wrapper, "flatListComp").at(0)
            console.log("flatList supplier",flatListComp)
            expect(flatListComp.prop('data')).toEqual([
                new Contact("t1", "Supplier1", 333333, "Kathmandu"),
                 new Contact("t2", "Supplier2", 55555, "kupondole"),
                new Contact("t3", "Supplier3", 66666, "jhapa"),
                new Contact("t4", "Supplier4", 7777, "dharan")
             ])   
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
            //  let callButton = findByTestAttr(wrapper, "callButton").at(2);
            //  callButton.props().onPress()
            // expect(function_click).toHaveBeenCalledWith(66666) 
            //  let navOption= SendScreen.navigationOptions(dummy_data)
            // let header = navOption.headerRight()
            // let c = mount(header.headerRight())
            // expect(c).toMatchSnapshot();

        });

    // it("Modal tests",()=>{
    //     const wrapper = mount(     <Provider store={store}><SupplierContactScreen  {...dummy_data} /> </Provider>)
    //     console.log("wrapper",wrapper )

    //     let onChangeQuan= findByTestAttr(wrapper, "onChangeQuan").at(0)
    //     let addComp2= findByTestAttr(wrapper, "addComp2").at(0)
        
    //     act(() => {addComp2.props().onPress();})
    //     wrapper.update()
    //     let modalComp= findByTestAttr(wrapper, "modalComp").at(0)
    //     expect(modalComp.prop("isModalVisible")).toEqual(true)
    //     let medRate= findByTestAttr(wrapper, "medRate").at(0)
    //     let medTotal= findByTestAttr(wrapper, "medTotal").at(0)
    //     let medQuan= findByTestAttr(wrapper, "medQuan").at(0)
    //     let medTitle= findByTestAttr(wrapper, "medTitle").at(0)
    //     expect(medRate.props().children).toEqual(["Rate : Rs. ",202,"/pc"])
    //     expect(medTotal.props().children).toEqual(["Price : Rs. ",202])
    //     expect(medQuan.props().children).toEqual(["Available Quantity : ",452])
    //     expect(medTitle.props().children).toEqual(["Medicine Name : ","An222tibiotics"])

    //     act(() => {onChangeQuan.props().onChangeText('6');})
    //     wrapper.update()
    //     medTotal= findByTestAttr(wrapper, "medTotal").at(0)
    //     expect(medTotal.props().children).toEqual(["Price : Rs. ",1212])

    //     addComp2= findByTestAttr(wrapper, "addComp2").at(0)

    //     act(() => {addComp2.props().onPress()})
    //     wrapper.update()
    //     let cancelComp= findByTestAttr(wrapper, "cancelComp").at(0)
    //     act(() => {cancelComp.props().onPress();})
    //     wrapper.update()
    //     modalComp= findByTestAttr(wrapper, "modalComp").at(0)
    //     expect(modalComp.prop("isModalVisible")).toEqual(false)

    //   act(() => {addComp2.props().onPress();})
    //   wrapper.update()

    //   let confirmComp= findByTestAttr(wrapper, "confirmComp").at(0)
    //   mockPlatform("android")
    //   act(() => {confirmComp.props().onPress();})

    //     expect(store.dispatch).toHaveBeenCalledTimes(1);
    //     expect(store.dispatch).toHaveBeenCalledWith(
    //       cardActions.addToCart(   new Item(
    //         'id2',
    //         'An222tibiotics',
    //         202,
    //         'BG222uyz',
    //         'https222://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip',
    //         452,
    //         'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    //         'Antibiotic'
    //       ),"6")
    //     );
    // //   });

    // })
        });


