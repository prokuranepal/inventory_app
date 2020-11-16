import React from 'react';
import EditItemScreen , {categories, submitHandler, formReducer} from './EditItemScreen';
import renderer from 'react-test-renderer';
import {type} from '../data/dummy-data'
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr, mockPlatform, findByTestProps, mockAlert} from '../_test_/componenets/test_function';
// import Alert from 'Alert';
import {Alert} from 'react-native';
import Item from '../models/item';
import { Provider } from 'react-redux';
// import {act} from 'react-dom/test-utils';
// JestHook.mock('expo-font');
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const navigate_function = jest.fn()
const d_func= (data1)=>{
    switch(data1){
        case('itemId'):
        return "id2"
        case('submit'):
        return ()=>navigate_function('submitted')
        default:
            return 
}}
const dummy_data = {
    
    navigation:{
        getParam:d_func,
        setParams:function_click, 
        navigate:navigate_function,
        toggleDrawer:function_click,
        goBack:function_click
    }

}

const mockState={
  inputValues:{
title:"title1",
company:"company1",
description:"description",
quantity:23,
price:300,
type:"Pain kiler"  ,
inputValidities: {
  title: false,
  company: false,
  description: false,
  quantity: false,
  price: false,
  type: false,
},
formIsValid: false
}}
const mockFormReducer= jest.fn()
export const mockReducer = ()=>{
  jest.resetModules();
  jest.doMock(formReducer, mockFormReducer)
  };
describe('<EditItemScreen />', () => {
     let store;
 
    beforeEach(() => {
      store = mockStore({
        items:{items:[{
            _id:'id3',
            title:'Antibiotics',
            quantity:20,
            itemPrice:45,
            company:"abc",
            description:["It is a drug for bacterial disease","Is a tablet"]
          }
          ,
          {
            _id:'id2',
            title:'Paracetamol',
            quantity:202,
            company:"bguyz",
            price:452,
            description:["It is a painkiller","Is a tablet"]
            
          }
        
        ],
      }});
      store.dispatch=jest.fn();
        mockAlert()  
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
  it("Snapshot test for EditItemScreen", () =>
        {
            const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
            expect(wrapper).toMatchSnapshot()
        });
   it("redux action test for type",(
          )=>{
          const action = formReducer(mockState,{type:'FORM_INPUT_UPDATE', input:"input1",value:"value1", isValid:true});
          expect(action).toEqual({
               "formIsValid": true,
               "inputValidities": {
                 "input1": true,
               },
               "inputValues":  {
                 "company": "company1",
                 "description": "description",
                 "formIsValid": false,
                 "input1": "value1",
                 "inputValidities": {
                   "company": false,
                   "description": false,
                   "price": false,
                   "quantity": false,
                   "title": false,
                   "type": false,
                 },
                 "price": 300,
                 "quantity": 23,
                 "title": "title1",
                 "type": "Pain kiler",
               },
             })
        })

        it("titleComponent in EditItemScreen", () =>
        {
          // mockReducer()
            const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
            let inputComp = findByTestAttr(wrapper, "titleComp").at(0)
            expect(inputComp.prop('initialValue')).toEqual('Paracetamol')
            expect(inputComp.prop('initiallyValid')).toEqual(true)
            act(()=>inputComp.props().onInputChange("title", "Oxidant", true))
            
            wrapper.update()
    
        });
      

      it("companyComponent in EditItemScreen", () =>
      {
        // mockReducer()
          const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
          let inputComp = findByTestAttr(wrapper, "companyComp").at(0)
          expect(inputComp.prop('initialValue')).toEqual('bguyz')
          expect(inputComp.prop('initiallyValid')).toEqual(true)
          act(()=>inputComp.props().onInputChange())
          
          wrapper.update()
  
      });
      it("quantityComponent in EditItemScreen", () =>
      {
        // mockReducer()
          const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
          let inputComp = findByTestAttr(wrapper, "quantityComp").at(0)
          expect(inputComp.prop('initialValue')).toEqual('202')
          expect(inputComp.prop('initiallyValid')).toEqual(true)
          act(()=>inputComp.props().onInputChange())
          
          wrapper.update()
  
      });
      it("priceComponent in EditItemScreen", () =>
      {
        // mockReducer()
          const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
          let inputComp = findByTestAttr(wrapper, "priceComp").at(0)
          expect(inputComp.prop('initialValue')).toEqual('452')
          expect(inputComp.prop('initiallyValid')).toEqual(true)
          act(()=>inputComp.props().onInputChange())
          
          wrapper.update()
  
      });
      it("descriptionComponent in EditItemScreen", () =>
      {
        // mockReducer()
          const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
          let inputComp = findByTestAttr(wrapper, "descriptionComp").at(0)
          expect(inputComp.prop('initialValue')).toEqual("It is a painkiller")
          expect(inputComp.prop('initiallyValid')).toEqual(true)
          act(()=>inputComp.props().onInputChange())
          
          wrapper.update()
  
      });
      it("typeComponent in EditItemScreen", () =>
      {
        // mockReducer()
          const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
          let inputComp = findByTestAttr(wrapper, "typeComp").at(0)
          expect(inputComp.prop('items')).toEqual(categories)
          // expect(inputComp.prop('initiallyValid')).toEqual(true)
          act(()=>inputComp.props().onValueChange("type", "Vitamin", true))
          
          // wrapper.update()
          // let inputComp2 = findByTestAttr(wrapper, "typeComp").at(0)
          // expect(inputComp2.prop('items')).toEqual(categories)
  
      });
      it("deleteComponent in EditItemScreen", () =>
      {
        // mockReducer()
          mockAlert()
          const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
          expect(function_click).toHaveBeenCalled()        
          let inputComp = findByTestAttr(wrapper, "deleteComp").at(0)
          expect(inputComp).toHaveLength(1)
          act(()=>inputComp.props().onPressHandler());
          wrapper.update()
          Alert.alert.mock.calls[0][2][1].onPress()
         
          // let isLoadingComp = findByTestAttr(wrapper, "isLoadingComp").at(0)        
   

          // expect(navigate_function).toHaveBeenCalled()        
    
        });
    
        it("NavOptions in EditItemScreen", () =>
        {
             const navOption= EditItemScreen.navigationOptions(dummy_data)
             let wrap= mount(navOption.headerRight())
              let saveComp = findByTestAttr(wrap, "saveComp").at(0)
              // let d = saveComp.props().onPress
              // expect().toEqual('')
              expect(saveComp.props().title).toEqual('Save')
              act(()=>saveComp.props().onPress())
              wrap.update()
              expect(navigate_function).toHaveBeenCalled()
              expect(navigate_function).toHaveBeenCalledWith('submitted')
              
              // expect(d_func).toHaveBeenCalledWith('submit')
              // expect(d_func).toHaveBeenCalled()

        
            });      
        //     it("SubmitHandler in EditItemScreen", () =>
        //     {
        //       // const wrapper = mount(<Provider store={store} ><EditItemScreen  {...dummy_data} /></Provider> )
        //       // const instance = wrapper.instance();
        //       // instance.submitHandler();
        //       // expect(store.dispatch).toHaveBeenCalled();
        //       // expect(function_click).toHaveBeenCalled()
        //      const submitHand= EditItemScreen.submitHandler()
        //       submitHand()

        // });


      })
