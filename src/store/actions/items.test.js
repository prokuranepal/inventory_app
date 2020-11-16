import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {date_now,ADD_ITEMS, UPDATE_ITEMS, SET_ITEMS, DELETE_ITEM,addItems, updateItem, setItems, deleteItem} from './items';
import { ITEMS } from '../../data/dummy-data'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})

describe('items', () => {
  it("returns an action with type ADD_ITEMS", () =>
        {
          const action = addItems('title1','abc', 400, 'This is a test',30, 'Vitamin')
          expect(action).toEqual({
            type:ADD_ITEMS,
            iid: date_now,
            itemData:{"title": 'title1',
            "quantity": 400,
            "company": 'abc',
            "price": 30,
            "description": 'This is a test',
            "type": 'Vitamin'}
          }) 
        });

        it("returns an action with type UPDATE_ITEMS", () =>
        {
          const action = updateItem('id1','title1','abc', 400, 'This is a test',30,"image1", 'Vitamin' )
          expect(action).toEqual({
            type:UPDATE_ITEMS,
            iid: 'id1',
            itemData:{"title": 'title1',
            "quantity": 400,
            "company": 'abc',
            "price": 30,
            "description": 'This is a test',
            "image":"image1",
            "type": 'Vitamin'}
          }) 
        });     
        it("returns an action with type SET_ITEMS", () =>
        {
          const action = setItems()
          expect(action).toEqual({type: SET_ITEMS, items:ITEMS}) 
        });
        it("returns an action with type DELETE_ITEMS", () =>
        {
          const action = deleteItem("id2")
          expect(action).toEqual({type: DELETE_ITEM, iid:"id2"}) 
        });    
    });
