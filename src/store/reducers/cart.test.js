import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {ADD_TO_CART, REMOVE_FROM_CART, DELETE_ITEM} from '../actions/cart';
import cartReducer , { initialState} from './cart'
import CartItem from '../../models/cart-items';

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('cartReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = cartReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving ADD_TO_CART", () =>
    {
      const newState = cartReducer(undefined, {type:ADD_TO_CART,item:{
        _id:"id1",
        title: 'title1',
        quantity: 400,
        company: 'abc',
        price: 30,
        description: 'This is a test',
        type: 'Vitamin'
      },
    quantity:400})
      expect(newState).toEqual({ items:{"id1": new CartItem (
             400,30, "title1"             
             )}})
    });
    it("on receiving ADD_TO_CART with initial state", () =>
    {
      const newState = cartReducer({
       items:{_id:"id1",
        title: 'title1',
        quantity: 400,
        company: 'abc',
        price: 30,
        description: 'This is a test',
        type: 'Vitamin'}
      }, {type:ADD_TO_CART,item:{
        _id:"id1",
        title: 'title2',
        quantity: 200,
        company: 'abc',
        price: 20,
        description: 'This is a general test',
        type: 'General'
      },
    quantity:400})
      expect(newState).toEqual({
          "items": {
            "_id": "id1",
            "company": "abc",
            "description": "This is a test",
            "id1": new CartItem (
                400,
               20,
               "title2"
              
            ),
            "price": 30,
            "quantity": 400,
            "title": "title1",
            "type": "Vitamin",
            }
          })
    });
    it("on receiving REMOVE_FROM_CART", () =>
    {
      const newState = cartReducer({
        items:{_id:"id1",
        id1:{itemTitle: 'title1',
        quantity: 400,
        company: 'abc',
        itemPrice: 30,
        description: 'This is a test',
        type: 'Vitamin'}
      }}, {type:REMOVE_FROM_CART, item_id:"id1"})
      expect(newState).toEqual({
           "items": {
             "_id": "id1",
             "id1": new CartItem (
                399,30, "title1"
             )
           }
         })
    });
    it("on receiving DELETE_ITEM", () =>
    {
      const newState = cartReducer({
        items:{_id:"id1",
        id1:{itemTitle: 'title1',
        quantity: 400,
        company: 'abc',
        itemPrice: 30,
        description: 'This is a test',
        type: 'Vitamin'}
      }}, {type:DELETE_ITEM, item_id:"id1"})
      expect(newState).toEqual({
           "items":  {
             "_id": "id1",
             "id1":  {
               "company": "abc",
               "description": "This is a test",
               "itemPrice": 30,
               "itemTitle": "title1",
               "quantity": 400,
               "type": "Vitamin",
             },
           },
         })
    });
    });
