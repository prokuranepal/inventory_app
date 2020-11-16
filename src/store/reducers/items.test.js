import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {ADD_ITEMS, UPDATE_ITEMS, SET_ITEMS, DELETE_ITEM} from '../actions/items';
import itemsReducer , { initialState} from './items'
import { ITEMS } from "../../data/dummy-data";
import Item from '../../models/item'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('itemsReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = itemsReducer(undefined,{type:""})
      expect(newState).toEqual(initialState)
    });
    it("on receiving ADD_ITEMS", ()=>{
      const newState = itemsReducer(undefined, {type:ADD_ITEMS,itemData:{
        title: 'title1',
        quantity: 20,
        company: 'abc',
        price: 30,
        description: 'This is a test',
        type: 'Vitamin'
      },
    iid:'i9'})

 
    let total_item = [...ITEMS]
    total_item.push(new Item(
        'i10','title1', 30, 'abc','https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png',
        20, 'This is a test', 'Vitamin'

))
    let new_arr= total_item.filter((item)=>{
        return item.quantity<30? true:false
    })
      expect(newState).toEqual({attentionItems:new_arr, items:total_item})
    });
    it("on receiving SET_ITEMS  state", () =>
    {
        const arr_items=[{_id:"id1",
        title: 'title1',
        quantity: 400,
        company: 'abc',
        price: 80,
        description: 'This is a test',
        type: 'Vitamin'},
        {_id:"id2",
        title: 'title2',
        quantity: 10,
        company: 'abcd2',
        price: 10,
        description: 'This is a test2',
        type: 'Antibiotic'}]
      const newState = itemsReducer(
      undefined
      ,{type:SET_ITEMS, items:arr_items})
      expect(newState).toEqual({
          attentionItems:arr_items.filter((items)=>{
              return items.quantity>=30? false:true
          }),
          items:arr_items
      }
          )
    });
    it("on receiving UPDATE_ITEMS", () =>
    {
      const newState = itemsReducer(undefined, 
       {type:UPDATE_ITEMS, itemData:{title: 'title1',
        quantity: 20,
        company: 'abc',
        price: 30,
        image:    'https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png',
        description: 'This is a test',
        type: 'Vitamin'
      },
    iid:'i3'})
    let arr_item= [...ITEMS]
    const itemIndex = arr_item.findIndex(
        item => item._id === 'i3'
    );

    let arr=ITEMS.filter((items)=>{
        return (items.quantity/1)>=30? false:true
    })
    const attentionItemIndex = arr.findIndex(
        item => item._id === 'i3'
    );
    const new_ITEM=new Item('i3','title1', 30, 'abc',
    'https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png',
    20, 'This is a test', 'Vitamin'
)
    arr_item[itemIndex]=new_ITEM

        if(attentionItemIndex>=0){
            arr[attentionItemIndex] = new_ITEM 
        }
        else if(new_ITEM.quantity< 30)
        {
            arr.push(new_ITEM)
        }
      expect(newState).toEqual({
        attentionItems:arr,
        items:arr_item
         })
    });
    it("on receiving DELETE_ITEM", () =>
    {
      const newState = itemsReducer(undefined, {type:DELETE_ITEM, iid:"i5"})
    let item_new= ITEMS.filter(item=>item._id!=='i5')
    let arr=item_new.filter((items)=>{
        return (items.quantity/1)>=30? false:true
    })
      expect(newState).toEqual({items:item_new, attentionItems:arr})
    });
    });
