import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {SET_ORDERS, ADD_ORDER, DELETE_ITEM} from '../actions/orders';
import orderReducer , { initialState} from './orders'
import Item from '../../models/item';
import Order from '../../models/order';

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('orderReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = orderReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving SET_ORDERS", () =>
    {
        const new_item=new Item (
            'new1234','title1',
            400,'abcd','image1',30, "description","vitamin"             
            )
      const newState = orderReducer(undefined, {type:SET_ORDERS,orders:[new_item]})
      expect(newState).toEqual({ orders:[new_item]})
    });
    it("on receiving ADD_ORDER", () =>
    {
        const new_order=new Order (
            'new1234',['title1', 'title2'],
            "3 June 2020"             
            )
      const newState = orderReducer(undefined, {type:ADD_ORDER,orderData:{id:"new1234", items:["title1", "title2"], date:"3 June 2020"}})
      expect(newState).toEqual({ orders:[new_order], requestedItems:initialState.requestedItems})
    });
    
    });
