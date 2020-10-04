import React from 'react';
import ManageItem from '../../components/Component/ManageItem';
import {
    configure,
    shallow
} from 'enzyme';
import {  View, Text } from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from './test_function'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {
    image:"image.png",
    quantity:4,
    title:"hello",
    price:34,
    company:"ABC",
    serialNo:"id2",
    onSelectItem:function_click

}

let extra=
describe('<ManageItem />', () => {
  it("Events and props test in ManageItem", () =>
        {
            const wrapper = shallow(<ManageItem  {...dummy_data} />)

            let textComponent= wrapper.find(Text)
            expect(textComponent).toHaveLength(5)
            expect(textComponent.at(1).props().children).toEqual("hello")
            expect(textComponent.at(2).props().children).toEqual([" ",4,"pcs"])
            expect(textComponent.at(3).props().children).toEqual([" ","ABC"])
            expect(textComponent.at(4).props().children).toEqual([" Rs. ", 34,"/PC"])

            let touch = findByTestAttr(wrapper, "touch")
            touch.props().onPress()
            wrapper.update()
            expect(function_click).toHaveBeenCalledTimes(1)
         
          
        
            });
        });

test_function(["<ManageItem/>",2,5],['renders correctly','renders the length of view'],[<ManageItem />,View,Text],extra)

