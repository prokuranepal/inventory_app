import React from 'react';
import Splashscreen  from './Splashscreen';
import renderer from 'react-test-renderer';

import {
    configure,
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
const {act} = TestRenderer;
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const getParam= jest.fn()

jest.useFakeTimers();

const dummy_data = {

    navigation:{setParams:function_click, navigate:function_click}

}


describe('<Splashscreen />', () => {

    let store;
 

    
    
  it("Events and props test in Splashscreen", () =>
        {
            const wrapper = mount(<Splashscreen {...dummy_data}></Splashscreen>)
            expect(wrapper).toMatchSnapshot();
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);  
            jest.runAllTimers();
            // expect(function_click).toHaveBeenCalledTimes(1); 
            expect(function_click).toHaveBeenCalledTimes(1)   
            expect(function_click).toHaveBeenCalledWith('Tabs') 
        });

    // it("Modal tests",()=>{
    //     const wrapper = mount(     <Provider store={store}><Splashscreen  {...dummy_data} /> </Provider>)
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


