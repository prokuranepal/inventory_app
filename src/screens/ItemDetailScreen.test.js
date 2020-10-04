import React from 'react';
import ItemDetailScreen , {submitHandler} from './ItemDetailScreen';
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
const {act} = TestRenderer;
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const returnFunc=jest.fn()
returnFunc.mockReturnValue("id2");

const dummy_data = {
    image:"image.png",
    quantity:4,
    title:"hello",
    price:34,
    company:"abc",
    id:"id2",
    onSelectItem:function_click,
    sendCardHandlrer:function_click,
    navigation:{getParam:returnFunc, navigate:function_click}

}


describe('<ItemDetailScreen />', () => {

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
        mockAlert()  
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
    
  it("Events and props test in ItemDetailScreen", () =>
        {
            const wrapper3 =mount(<Provider store={store}><ItemDetailScreen  {...dummy_data} /> </Provider>)
            expect(returnFunc).toHaveBeenCalledWith('itemId')
            expect(returnFunc).toHaveBeenCalledTimes(1)
            let imageComp= findByTestAttr(wrapper3,"imageComp").at(0)
            expect(imageComp.props('image').source).toEqual({uri:'https222://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip'})
            let quantityComp= findByTestAttr(wrapper3,"quantityComp").at(0)
            expect(quantityComp.props().children).toEqual([452, "pcs"])
            let companyComp= findByTestAttr(wrapper3,"companyComp").at(0)
            expect(companyComp.props().children).toEqual('BG222uyz')
            let priceComp= findByTestAttr(wrapper3,"priceComp").at(0)
            expect(priceComp.props().children).toEqual(['Rs. ', 202,'/PC'])
            let descriptionComp= findByTestAttr(wrapper3,"descriptionComp").at(0)
            expect(descriptionComp.props().children).toEqual(
                'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            )

            // const wrapper1 = renderer.create(<Provider store={store}><ItemDetailScreen  {...dummy_data} /> </Provider>)
            // const wrapper = wrapper1.root;
            // console.log("wrapper",wrapper )

            // let labelDestination= findByTestProps(wrapper, "labelDestination")

            // console.log("wrapper destination",wrapper1.toJSON() )
            // expect(labelDestination.props.children).toEqual("Destination");
            // let labelPrice= findByTestProps(wrapper, "labelPrice")
            // expect(labelPrice.props.children).toEqual("Total Price");
            // let labelDate= findByTestProps(wrapper, "labelDate")
            // expect(labelDate.props.children).toEqual("Scheduled Date");
            // let labelTime= findByTestProps(wrapper, "labelTime")
            // expect(labelTime.props.children).toEqual("Scheduled Time");
            // let labelItems= findByTestProps(wrapper, "labelItems")
            // expect(labelItems.props.children).toEqual("Items to Send");

            // let itemTitle1= findByTestProps(wrapper, "itemTitle1")
            // expect(itemTitle1.props.children).toEqual("An222tibiotics");
            // let itemQuantity0= findByTestProps(wrapper, "itemQuantity0")
            // expect(itemQuantity0.props.children).toEqual(45);
            // let priceTotal= findByTestProps(wrapper, "priceTotal")
            // expect(priceTotal.props.children).toEqual(["Rs. ", 202*452+20*45]);
            // let touchDate= findByTestProps(wrapper, "touchDate")
            // touchDate.props.onPress()
            // expect(findByTestProps(wrapper, "datePicker").props.mode).toEqual("date")



            // const naviProp = { navigation:{navigate: function_click ,getParam: function_click }}
            // let navOption= ItemDetailScreen.navigationOptions(naviProp)
            // let c = shallow(navOption.headerRight())
            // let goBack= findByTestAttr(c, "goBack")
            // goBack.props().onPress()
            // expect(function_click).toHaveBeenCalled();

           
        
            });

    
        });


