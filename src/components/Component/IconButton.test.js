import React from 'react';
import IconButton from './IconButton';
import {
    configure,
    shallow
} from 'enzyme';
import  {findByTestAttr, mockPlatform} from '../../_test_/componenets/test_function';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({
    adapter: new EnzymeAdapter
})
const jest_function=jest.fn()



const prop_data = {
  iconValue:"ios-add",
  iconColor:"white",
  color:"green",
  onPressHandler: jest_function

}
const findById=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe('Test for IconButton', () => {
  it("Snapshot test", () =>
  {
    const wrapper = shallow(<IconButton  {...prop_data} />)
    expect(wrapper).toMatchSnapshot()
  })
  it("Props in IconButton", () =>
       
        {
            const wrapper = shallow(<IconButton  {...prop_data} />)
            let iconComp= findByTestAttr(wrapper,"iconComp")
            expect(iconComp.prop('name')).toEqual('ios-add')
            expect(iconComp.prop('color')).toEqual('white')
        });
        it("Events in IconButton", () =>
       
        {
            const wrapper = shallow(<IconButton  {...prop_data} />)
            let touchableComp= findByTestAttr(wrapper,"touchableComp")
            touchableComp.props().onPress();
            expect(jest_function).toHaveBeenCalled()
        });

 });
