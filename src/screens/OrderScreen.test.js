import React from 'react';
import OrderScreen from './OrderScreen';

import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';


configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const function_dial= jest.fn()
const function_text= jest.fn()
const function_openURL= jest.fn()




describe('<OrderScreen />', () => {

 
    beforeEach(() => {
        jest.doMock('react-native/Libraries/Linking/Linking', () => ({
            openURL:function_dial,
            canOpenURL:function_openURL
          }));
        //   jest.doMock('react-native-communications/AKCommunications', () => ({
        //     text:function_text
        //   }));
          mockPlatform('android');
    });


    afterEach(() => {
        jest.clearAllMocks();
      });

    
  it("Events and props test in OrderScreen", () =>
        {
            const wrapper = shallow(<OrderScreen /> )
            let callComp= findByTestAttr(wrapper, "callComp")
            callComp.props().pressHandler()
            expect(function_dial).toHaveBeenCalledTimes(1);
            expect(function_dial).toHaveBeenCalledWith('tel:${}')
            // let textComp= findByTestAttr(wrapper, "textComp")
            // textComp.props().pressHandler()
            // expect(function_text).toHaveBeenCalledTimes(1);
            // expect(function_text).toHaveBeenCalledWith('','')
        


        

            // let touchTime= findByTestProps(wrapper, "touchTime")
            // act(() => {console.log("touchTime", touchTime.props.onPress())})
            // touchTime.props.onPress()
            // expect(findByTestProps(wrapper, "timePicker").props.display).toEqual("time")
 
            const naviProp = { navigation:{navigate: function_click ,getParam: function_click }}
            let navOption= OrderScreen.navigationOptions(naviProp)
            console.log(navOption)
            expect(typeof navOption).toBe("object");
        
        
            });

    
        });


