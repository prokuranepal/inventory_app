import React from 'react';
import ItemList from './ItemList';
import {
    configure,
    shallow
} from 'enzyme';
import {  View, FlatList } from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import InventoryItem from '../Component/InventoryItem'
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {attentionMessage:<hello data-test="hello"></hello>,
listData:["a","b","c"],
item:{
    image:"image.png",
    quantity:4,
    title:"hello",
    price:34,
    company:"abc",
    _id:"id2"
},
catTitle:"titles",
navigation:{navigate:function_click}
}

let extra=
describe('<ItemList />', () => {
  it("Events and props test in ItemList", () =>
        {
            const wrapper = shallow(<ItemList  {...dummy_data} />)

            let flatList= wrapper.find(FlatList)
            let helloItem= findByTestAttr(wrapper,"hello")
            expect(wrapper.find(FlatList).length).toEqual(1);            
            expect(helloItem).toHaveLength(1);
            expect(flatList.prop("data")).toEqual(["a","b","c"])
            let dive = flatList.props().renderItem(dummy_data)
            wrapper.update()
            console.log(dive)
            expect(dive.type).toEqual(InventoryItem)
            expect(dive.props.title).toEqual("hello")
            expect(dive.props.titles).toEqual("titles")
            console.log(dive.props.onSelectItem())
            expect(function_click).toHaveBeenCalledTimes(1);
            expect(function_click).toHaveBeenCalledWith({
                routeName: 'ItemDetail',
                params: {
                itemId: "id2",
                itemTitle: "hello",

            }
            })          
            // let inventoryItem= findByTestAttr(wrapper,"inventoryItem")
            // expect(inventoryItem).toHaveLength(1)

        
            });
        });

test_function(["<ItemList/>",1,1],['renders correctly','renders the length of view'],[<ItemList />,View,FlatList],extra)

