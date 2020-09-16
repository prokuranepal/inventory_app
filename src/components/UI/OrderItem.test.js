import React from 'react';
import OrderItem from './OrderItem';
import {
    configure,
    shallow
} from 'enzyme';
import { Text, View, FlatList } from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
import Card from '../Component/Card';
import CartItem from './CartItem';

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



    
const dummy_data = {
listData:["a","b","c"],
items:[{
    image:"image3.png",
    quantity:43,
    itemTitle:"hello3",
    price:343,
    company:"abc3",
    itemId:"id1"
},
{
    image:"image2.png",
    quantity:42,
    itemTitle:"hello2",
    price:342,
    company:"abc2",
    itemId:"id2"
},
{
    image:"image1.png",
    quantity:41,
    itemTitle:"hello1",
    price:341,
    company:"abc1",
    itemId:"id3"
},],
catTitle:"titles",
date:"Nov 3, 2020",
navigation:{navigate:function_click}
}

let extra=
describe('<OrderItem />', () => {
  it("Props and children in OrderItem", () =>
        {
            const wrapper = shallow(<OrderItem  {...dummy_data} />).dive()

            let cartItem= wrapper.find(CartItem)
            expect(cartItem.at(0).prop("quantity")).toEqual(43)
            expect(cartItem.at(2).prop("title")).toEqual("hello1")
            expect(cartItem.at(1).prop("quantity")).toEqual(42)
            expect(cartItem).toHaveLength(3)

        
            });
        });

test_function(["<OrderItem/>",2,1,1],['renders correctly','renders the length of view'],[<OrderItem items={[]}/>,View,Card,Text],extra)

