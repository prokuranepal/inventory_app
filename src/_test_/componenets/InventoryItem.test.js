import React from 'react';
import InventoryItem from '../../components/Component/InventoryItem';
import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform} from '../../_test_/componenets/test_function';
import * as cardActions from '../../store/actions/cart';

import Item from '../../models/item';
import { Provider } from 'react-redux';
import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');
import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {
    image:"image.png",
    quantity:4,
    title:"hello",
    price:34,
    company:"abc",
    id:"id2",
    onSelectItem:function_click,
    sendCardHandlrer:function_click

}

let extra=
describe('<InventoryItem />', () => {

    let store;
 
    beforeEach(() => {
      store = mockStore({
        items:{items:[new Item(
            'id3',
            'Antibiotics',
            20,
            'BGuyz',
            'https://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip',
            45,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            'Antibiotic'
          ),
          new Item(
            'id2',
            'An222tibiotics',
            202,
            'BG222uyz',
            'https222://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip',
            452,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            'Antibiotic'
          )
        
        ],
      }});
      store.dispatch=jest.fn();

    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
    
  it("Events and props test in InventoryItem", () =>
        {
            const wrapper = mount(<Provider store={store}><InventoryItem  {...dummy_data} /> </Provider>)
            console.log("wrapper",wrapper )

            let modalComp= findByTestAttr(wrapper, "modalComp")
            
            expect(modalComp.prop("isModalVisible")).toEqual(false)
            let touchCard= findByTestAttr(wrapper, "touchCard").at(0)
            touchCard.props().onPress();
            wrapper.update()
            expect(function_click).toHaveBeenCalledTimes(1);
            let titleComp= findByTestAttr(wrapper, "titleComp").at(0)
            let quantityComp= findByTestAttr(wrapper, "quantityComp").at(0)
            let priceComp= findByTestAttr(wrapper, "priceComp").at(0)
            let companyComp= findByTestAttr(wrapper, "companyComp").at(0)
            expect(priceComp.props().children).toEqual([" Rs. ", 34, "/PC"])
            expect(companyComp.text()).toEqual(" abc")
            expect(quantityComp.text()).toEqual(" 4pcs")
            expect(titleComp.text()).toEqual("hello")

            // onChangeQuan.props().onChangeText(33)
            let addComp= findByTestAttr(wrapper, "addComp").at(0)

            addComp.props().onPress();
            wrapper.update()
            expect(function_click).toHaveBeenCalledTimes(2);
            expect(function_click).toHaveBeenCalledWith("id2");


            
            // expect(textComponent.at(1).props().children).toEqual("hello")
            // expect(textComponent.at(2).props().children).toEqual([" ",4,"pcs"])
            // expect(textComponent.at(3).text()).toEqual(" ABC")
            // expect(textComponent.at(4).props().children).toEqual([" Rs. ", 34,"/PC"])

           
        
            });

    it("Modal tests",()=>{
        const wrapper = mount(     <Provider store={store}><InventoryItem  {...dummy_data} /> </Provider>)
        console.log("wrapper",wrapper )

        let onChangeQuan= findByTestAttr(wrapper, "onChangeQuan").at(0)
        let addComp2= findByTestAttr(wrapper, "addComp2").at(0)
        
        act(() => {addComp2.props().onPress();})
        wrapper.update()
        let modalComp= findByTestAttr(wrapper, "modalComp").at(0)
        expect(modalComp.prop("isModalVisible")).toEqual(true)
        let medRate= findByTestAttr(wrapper, "medRate").at(0)
        let medTotal= findByTestAttr(wrapper, "medTotal").at(0)
        let medQuan= findByTestAttr(wrapper, "medQuan").at(0)
        let medTitle= findByTestAttr(wrapper, "medTitle").at(0)
        expect(medRate.props().children).toEqual(["Rate : Rs. ",202,"/pc"])
        expect(medTotal.props().children).toEqual(["Price : Rs. ",202])
        expect(medQuan.props().children).toEqual(["Available Quantity : ",452])
        expect(medTitle.props().children).toEqual(["Medicine Name : ","An222tibiotics"])

        act(() => {onChangeQuan.props().onChangeText('6');})
        wrapper.update()
        medTotal= findByTestAttr(wrapper, "medTotal").at(0)
        expect(medTotal.props().children).toEqual(["Price : Rs. ",1212])

        addComp2= findByTestAttr(wrapper, "addComp2").at(0)

        act(() => {addComp2.props().onPress()})
        wrapper.update()
        let cancelComp= findByTestAttr(wrapper, "cancelComp").at(0)
        act(() => {cancelComp.props().onPress();})
        wrapper.update()
        modalComp= findByTestAttr(wrapper, "modalComp").at(0)
        expect(modalComp.prop("isModalVisible")).toEqual(false)

      act(() => {addComp2.props().onPress();})
      wrapper.update()

      let confirmComp= findByTestAttr(wrapper, "confirmComp").at(0)
      mockPlatform("android")
      act(() => {confirmComp.props().onPress();})

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
          cardActions.addToCart(   new Item(
            'id2',
            'An222tibiotics',
            202,
            'BG222uyz',
            'https222://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip',
            452,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            'Antibiotic'
          ),"6")
        );
    //   });

    })
        });


