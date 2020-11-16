import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {addOrder, ADD_ORDER, SET_ORDERS,rand_num, new_date}  from './orders';

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})

describe('orders', () => {
    
  it("returns an action with type ADD_ORDER", () =>
        {
          const action = addOrder({id:1, item:"item1"})
          expect(action).toEqual({type: ADD_ORDER, orderData:{
            id:"i"+rand_num,
            items:{id:1, item:"item1"},
            date:new_date
          }}) 
        });
      
    });
