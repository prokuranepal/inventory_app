import React from 'react';
import ManageList from './ManageList';
import {
    configure,
    shallow
} from 'enzyme';
import { Text, View, FlatList } from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
import ManageItem from '../Component/ManageItem';
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {
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
describe('<ManageList />', () => {
  it("ManageItem in ManageList", () =>
        {
            const wrapper = shallow(<ManageList  {...dummy_data} />)

            let flatList= wrapper.find(FlatList)
            expect(wrapper.find(FlatList).length).toEqual(1);            
            expect(flatList.prop("data")).toEqual(["a","b","c"])
            let dive = flatList.props().renderItem(dummy_data)
            wrapper.update()
            expect(dive.type).toEqual(ManageItem)
            expect(dive.props.title).toEqual("hello")
            dive.props.onSelectItem()
            expect(function_click).toHaveBeenCalledTimes(1);
            expect(function_click).toHaveBeenCalledWith({
                "routeName": "AddItem",               
                 params: {
                itemId: "id2",
                itemTitle: "hello",

            }
            })          
            // let inventoryItem= findByTestAttr(wrapper,"inventoryItem")
            // expect(inventoryItem).toHaveLength(1)

        
            });
        });

test_function(["<ManageList/>",5,2,1],['renders correctly','renders the length of view'],[<ManageList />,Text,View,FlatList],extra)

