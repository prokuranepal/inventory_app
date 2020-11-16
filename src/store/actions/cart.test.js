import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function, {findByTestAttr} from '../../_test_/componenets/test_function'
import {ADD_TO_CART, REMOVE_FROM_CART, addToCart, removeFromCart} from './cart';
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})

describe('cart', () => {
  it("returns an action with type ADD_TO_CART", () =>
        {
          const action = addToCart()
          expect(action).toEqual({type: ADD_TO_CART}) 
        });

        it("returns an action with type REMOVE_FROM_CART", () =>
        {
          const action = removeFromCart()
          expect(action).toEqual({type: REMOVE_FROM_CART}) 
        });     
    });
