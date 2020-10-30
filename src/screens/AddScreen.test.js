import React from 'react';
import AddScreen , {submitHandler,categories} from './AddScreen';

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
    navigation:{pop:function_click}
}


describe('<AddScreen />', () => {

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
    
  it("Events and props test in AddScreen", () =>
        {
            const wrapper =mount(<Provider store={store}><AddScreen  {...dummy_data} /> </Provider>)
            let scrollComp= findByTestAttr(wrapper, "scrollComp").at(0)
            expect(scrollComp).toHaveLength(1);
            let pickerComp= findByTestAttr(wrapper, "categoryPicker").at(0)
            expect(pickerComp).toHaveLength(1);
            expect(pickerComp.props().items).toEqual(categories)
            pickerComp.props().onValueChange();
            wrapper.update();
            
            });

    
        });


