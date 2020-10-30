import React from 'react';
import ManageItemScreen , {submitHandler,categories} from './ManageItemScreen';

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


describe('<ManageItemScreen />', () => {

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
    
  it("Events and props test in ManageItemScreen", () =>
        {
             mockPlatform('android')
            const wrapper =mount(<Provider store={store}><ManageItemScreen  {...dummy_data} /> </Provider>)
            let textInput= findByTestAttr(wrapper, "textInput").at(0)
            let manageListComp= findByTestAttr(wrapper, "manageListComp").at(0)
            expect(manageListComp.prop('listData')).toEqual([new Item(
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
              'Antibiotic')])
            
            expect(textInput.prop('value')).toEqual('');
              textInput.props().onChangeText("Antibio")
              wrapper.update()
              let manageListComp1= findByTestAttr(wrapper, "manageListComp").at(0)
              expect(manageListComp1.prop('listData')).toEqual([new Item(
                'id3',
                'Antibiotics',
                20,
                'BGuyz',
                'https://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip',
                45,
                'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
                'Antibiotic'
              )])
            
            });

    
        });


