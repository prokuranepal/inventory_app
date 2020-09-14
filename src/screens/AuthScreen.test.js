import React from 'react';
import AuthScreen , {submitHandler} from './AuthScreen';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
// import Alert from 'Alert';
import renderer from 'react-test-renderer';

import {Alert} from 'react-native';
import Item from '../models/item';
import { Provider } from 'react-redux';
// import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import { render, cleanup, fireEvent } from 'react-native-testing-library';
import { View } from 'react-native';
import buttonWithBackground from '../components/Component/ButtonWIthBackground';
import defaultInput from '../components/Component/DefaultInput';
import headingText from '../components/Component/HeadingText';

const {act} = TestRenderer;
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const function_login=jest.fn()

const returnFunc=jest.fn()
returnFunc.mockReturnValue("id2");

const dummy_data = {
    image:"image.png",
    quantity:4,
    title:"hello",
    price:34,
    company:"abc",
    id:"id2",
    onSelectItem:function_click,
    sendCardHandlrer:function_click,
    navigation:{getParam:returnFunc, navigate:function_click},
    loginMode: true,
    mode:"changable"
}
const store1 = {
    auth:{
        loginMode: true,
        token: "2s342d34234d3",
        userId: 23
    },
    ip:{
        changeMode: 'changable',
        newIP: true,
        ip:"http://192.168.1.1:5000"
    }
   
  };
 
describe('<AuthScreen />', () => {

    let store;
    let state;
    beforeEach(() => {

     store=mockStore(store1)
      store.dispatch=jest.fn();
        mockAlert()  
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
    
  it("Events and props test in AuthScreen", () =>
        {
            const wrapper3 =mount(<Provider store={store}><AuthScreen  {...dummy_data}/> </Provider>)
           let headingText= findByTestAttr(wrapper3,"headingText")
            expect(headingText).toHaveLength(1)
            // let changeIP= findByTestAttr(wrapper3,"changeIP").at(0)
            // changeIP.props().onPress();
            // expect(store.dispatch).toHaveBeenCalledTimes(1)
            let newIPAddress= findByTestAttr(wrapper3,"newIPAddress").at(0)
            let newIP= findByTestAttr(wrapper3,"newIP").at(0)
            expect(newIP.props().value).toEqual('')
            expect(newIPAddress.props().disabled).toEqual(false)

            newIP.props().onChangeText("http://192.168.1.1:5000")
            wrapper3.update()
            let newIP2= findByTestAttr(wrapper3,"newIP").at(0)
            expect(newIP2.props().value).toEqual('http://192.168.1.1:5000')
            let newIPAddress2= findByTestAttr(wrapper3,"newIPAddress").at(0)

            expect(newIPAddress2.props().disabled).toEqual(true)
            
            newIPAddress2.props().onPress()
            expect(store.dispatch).toHaveBeenCalledTimes(2)
            expect(store.dispatch).toHaveBeenNthCalledWith(1,{"type": "CHANGE_MODE"})
            expect(store.dispatch).toHaveBeenNthCalledWith(2,{"ip": "http://192.168.1.1:5000", "type": "UPDATE_IP"})
            let confirmPassword= findByTestAttr(wrapper3, "confirmPassword")
            expect(confirmPassword).toHaveLength(0)
            let authModeSwitch= findByTestAttr(wrapper3, "authModeSwitch").at(0)
            jest.clearAllMocks();
            act(()=>authModeSwitch.props().onPress())
            wrapper3.update()
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith({"type": "SWITCH_MODE"})
            let emailComp= findByTestAttr(wrapper3, "emailComp").at(0)
            expect(emailComp).toHaveLength(1)
            let passwordComp= findByTestAttr(wrapper3, "passwordComp").at(0)
            expect(passwordComp).toHaveLength(1)
            jest.clearAllMocks();
            let loginup= findByTestAttr(wrapper3, "loginup").at(0)
            loginup.props().onPress()
            wrapper3.update()
            expect(store.dispatch).toHaveBeenCalledTimes(1)
        
        });
          
        it("Sigmup mode for passwordControl", () =>
        {
            const store3=mockStore({...store1, auth:{...store1.auth, loginMode:false }})
            store3.dispatch=jest.fn();
            const wrappers3 =mount(<Provider store={store3}><AuthScreen  {...dummy_data}/> </Provider>)
           let headingText= findByTestAttr(wrappers3,"headingText")
            expect(headingText).toHaveLength(0)
            // let changeIP= findByTestAttr(wrappers3,"changeIP").at(0)
            // changeIP.props().onPress();
            // expect(store.dispatch).toHaveBeenCalledTimes(1)
            let newIPAddress= findByTestAttr(wrappers3,"newIPAddress").at(0)
            let newIP= findByTestAttr(wrappers3,"newIP").at(0)
            expect(newIP.props().value).toEqual('')
            expect(newIPAddress.props().disabled).toEqual(false)

            newIP.props().onChangeText("http://192.168.1.1:5000")
            wrappers3.update()
            let newIP2= findByTestAttr(wrappers3,"newIP").at(0)
            expect(newIP2.props().value).toEqual('http://192.168.1.1:5000')
            let newIPAddress2= findByTestAttr(wrappers3,"newIPAddress").at(0)
            expect(newIPAddress2.props().disabled).toEqual(true)
            let confirmPassword= findByTestAttr(wrappers3, "confirmPassword").at(0)
            expect(confirmPassword).toHaveLength(1)
            let authModeSwitch= findByTestAttr(wrappers3, "authModeSwitch").at(0)
            act(()=>authModeSwitch.props().onPress())
            wrappers3.update()
            expect(store3.dispatch).toHaveBeenCalledTimes(1);
            expect(store3.dispatch).toHaveBeenCalledWith({"type": "SWITCH_MODE"})
            let emailComp= findByTestAttr(wrappers3, "emailComp").at(0)
            expect(emailComp).toHaveLength(1)
            let passwordComp= findByTestAttr(wrappers3, "passwordComp").at(0)

            expect(passwordComp).toHaveLength(1)
            
            jest.clearAllMocks();
            let loginup= findByTestAttr(wrappers3, "loginup").at(0)
            loginup.props().onPress()
            wrappers3.update()
            expect(store3.dispatch).toHaveBeenCalledTimes(1)
            jest.clearAllMocks();
            
            let passwordComp3= findByTestAttr(wrappers3, "passwordComp").at(0)
            let confirmPassword3= findByTestAttr(wrappers3, "confirmPassword").at(0)
            passwordComp3.props().onChangeText("Hello#234")
            confirmPassword3.props().onChangeText('Hello#234');
            // confirmPassword.props().onChangeText("")
            wrappers3.update()
            let confirmPassword4= findByTestAttr(wrappers3, "confirmPassword").at(0)
            expect(confirmPassword4.props().valid).toEqual(true)
        });
          
        });


