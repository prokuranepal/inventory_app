import React from 'react';
import CartItem from './CartItem';
import {
    configure,
    shallow
} from 'enzyme';
import Card from '../Component/Card'
import {
    Text,
} from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {
    title:"hello",
    quantity:4,
    onRemove:function_click,
    deletable:false
}

let extra=
describe('DroneListItem />', () => {
  it("Events and props test in CartItem if deletable is false", () =>
        {
            wrapper = shallow(<CartItem  {...dummy_data} />)

            let maintext= findByTestAttr(wrapper,`mainText`)
            let quantity= findByTestAttr(wrapper,`quantity`)
            let touchComp= findByTestAttr(wrapper,`touchComp`)

            expect(maintext.props().children).toEqual("hello")
            expect(quantity.props().children).toEqual(['Qty:',4])
            expect(touchComp).toHaveLength(0);
            
            });
            it("Events and props test in CartItem if deletable is true", () =>
            {
                let new_prop=  {...dummy_data, deletable:true} ;
                wrapper = shallow(<CartItem {...new_prop}/>)
    
                let maintext= findByTestAttr(wrapper,`mainText`)
                let quantity= findByTestAttr(wrapper,`quantity`)
                let touchComp= findByTestAttr(wrapper,`touchComp`)
    
                expect(maintext.props().children).toEqual("hello")
                expect(quantity.props().children).toEqual(['Qty:',4])
                expect(touchComp).toHaveLength(1);
     
            touchComp.props().onPress()
            wrapper.update()
            expect(function_click).toHaveBeenCalledTimes(1)
        })
        });

test_function(["<CartItem/>",1,2],['renders correctly','renders the length of view'],[<CartItem />,Card,Text],extra)

