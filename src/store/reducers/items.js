import { ITEMS } from "../../data/dummy-data";
import { ADD_ITEMS, UPDATE_ITEMS, SET_ITEMS, DELETE_ITEM } from '../actions/items';
import Item from "../../models/item";

const initialState = {
    items: [],
    attentionItems: []
    // attentionItems: ITEMS.filter(item => {
    //     if ((item.quantity / 1) >= 30) {
    //         return false;
    //     }
    //     return true;
    // }),
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.items,
                attentionItems: action.items.filter(item => {
                    if ((item.quantity / 1) >= 30) {
                        return false;
                    }
                    return true;
                }),
            }
        case ADD_ITEMS:
            const newProduct = new Item(
                action.iid,
                action.itemData.title,
                action.itemData.price,
                action.itemData.company,
                'https://cdn2.iconfinder.com/data/icons/medicine-84/1000/Medicine-color-04-512.png',
                action.itemData.quantity,
                action.itemData.description,
                action.itemData.type
            );
            const updatedAttention1 = [...state.attentionItems];
            const itemIndexAttention1 = state.attentionItems.findIndex(
                item => item._id === action.iid
            );
            if (action.itemData.quantity < 30 && !itemIndexAttention1 >= 0) {
                updatedAttention1.push(newProduct);
            }
            return {
                ...state,
                items: state.items.concat(newProduct),
                attentionItems: updatedAttention1,
            };
        case UPDATE_ITEMS:
            const itemIndex = state.items.findIndex(
                item => item._id === action.iid
            );
            const itemIndexAttention = state.attentionItems.findIndex(
                item => item._id === action.iid
            );
            const updatedItem = new Item(
                action.iid,
                action.itemData.title,
                action.itemData.price,
                action.itemData.company,
                action.itemData.image,
                action.itemData.quantity,
                action.itemData.description,
                action.itemData.type

            );
            const updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;

            const updatedAttention = [...state.attentionItems];
            if (action.itemData.quantity < 30 && itemIndexAttention >= 0) {
                updatedAttention[itemIndexAttention] = updatedItem;
            }
            else if (action.itemData.quantity < 30) {
                updatedAttention.push(updatedItem)
            }
            else if (action.itemData.quantity >= 30 && itemIndexAttention >= 0 && action.itemData.title === updatedAttention[itemIndexAttention].title) {
                updatedAttention.splice(itemIndexAttention, 1)
            }

            return {
                ...state,
                items: updatedItems,
                attentionItems: updatedAttention,
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(
                    item => item._id !== action.iid
                ),
                attentionItems: state.items.filter(
                    item => item._id !== action.iid
                )
            };
        default:
            return state;

    }
    return state;
}

export default itemsReducer;