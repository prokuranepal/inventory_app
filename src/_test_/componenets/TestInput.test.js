import React from 'react';
import TestInput from '../../components/Component/testInput';
import {
    configure,
    shallow
} from 'enzyme';
import {  View, Text ,TextInput} from 'react-native';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from './test_function'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()



const dummy_data = {
    value1:"image.png",
    idName:"id2",
    textChangeHandler:function_click,
    changeHandler:function_click
}

let extra=
describe('<TestInput />', () => {
    afterEach(() => {
        jest.clearAllMocks();
      });
    
  it("Events and props test in TestInput", () =>
        {
            const wrapper = shallow(<TestInput  {...dummy_data} />)
            let container1 = findByTestAttr(wrapper, "container1")
            expect(container1.props().value).toEqual("image.png")
            let container = findByTestAttr(wrapper, "container")
            expect(container).toHaveLength(0)
            container1.props().onChangeText()
            wrapper.update()
            expect(function_click).toHaveBeenCalledTimes(1)
         
          
        
            });
            it("Events and props test in TestInput with quantity as props", () =>
            {
                const wrapper = shallow(<TestInput  {...{...dummy_data,idName:"quantity"}} />)
                let container1 = findByTestAttr(wrapper, "container1")
                let textComp = findByTestAttr(wrapper, "textComp")
                expect(textComp.props().value).toEqual("image.png")
                expect(container1).toHaveLength(0)
                let increaseComp = findByTestAttr(wrapper, "increaseComp")
                let decreaseComp = findByTestAttr(wrapper, "decreaseComp")
                increaseComp.props().onPress()
                wrapper.update()
                expect(function_click).toHaveBeenCalledWith("increase")
                decreaseComp.props().onPress()
                wrapper.update()
                expect(function_click).toHaveBeenCalledWith("increase")
                expect(function_click).toHaveBeenCalledTimes(2)
             
              
            
                });
        });

test_function(["<TestInput/>",1],['renders correctly','renders the length of view'],[<TestInput />,TextInput],extra)

