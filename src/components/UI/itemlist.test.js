import React from 'react';
import ItemList from './CategroyGridTile';
import {
    configure,
    shallow
} from 'enzyme';
import Card from '../Component/Card'
import { TouchableOpacity, TouchableNativeFeedback, View, Text, Image,StyleSheet, Platform } from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {
    iconValue:"ios-add",
    title:"title",
    onSelect:function_click,
}

let extra=
describe('<ItemList />', () => {
  it("Events and props test in ItemList if deletable is false", () =>
        {
            const wrapper = shallow(<ItemList  {...dummy_data} />)

            let imageIcon1= findByTestAttr(wrapper,`imageIcon1`)
            let imageIcon2= findByTestAttr(wrapper,`imageIcon2`)
            let touchComp= findByTestAttr(wrapper,`touchComp`)
            console.log(touchComp.text())
            expect(imageIcon1).toHaveLength(0);
            expect(imageIcon2).toHaveLength(1);
            expect(imageIcon2.prop("name")).toEqual('ios-add')
            touchComp.props().onPress();
            expect(function_click).toHaveBeenCalledTimes(1);
            // expect(maintext.props().children).toEqual("hello")
            // expect(touchComp).toHaveLength(0);
            const wrapper2 = shallow(<ItemList  {...{...dummy_data,iconValue:"drug-pack"}} />)
            let imageIcon3= findByTestAttr(wrapper2,`imageIcon1`)
            let imageIcon4= findByTestAttr(wrapper2,`imageIcon2`)
            expect(imageIcon3).toHaveLength(1);
            expect(imageIcon4).toHaveLength(0);
            });
        });

test_function(["<ItemList/>",1,1],['renders correctly','renders the length of view'],[<ItemList />,TouchableOpacity,Text],extra)

