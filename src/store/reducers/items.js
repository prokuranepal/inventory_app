import { ITEMS } from "../../data/dummy-data";
import { ADD_ITEMS, UPDATE_ITEMS, SET_ITEMS } from '../actions/items';
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
                "i" + (state.items.length + 1),
                action.productData.title,
                action.productData.price,
                action.productData.company,
                'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
                action.productData.quantity,
                action.productData.description,
            );
            const updatedAttention1 = [...state.attentionItems];
            const itemIndexAttention1 = state.attentionItems.findIndex(
                item => item.id === action.iid
            );
            if (action.productData.quantity < 30 && !itemIndexAttention1 >= 0) {
                updatedAttention1.push(newProduct);
            }
            return {
                ...state,
                items: state.items.concat(newProduct),
                attentionItems: updatedAttention1,
            };
        case UPDATE_ITEMS:
            const itemIndex = state.items.findIndex(
                item => item.id === action.iid
            );
            const itemIndexAttention = state.attentionItems.findIndex(
                item => item.id === action.iid
            );
            const updatedItem = new Item(
                action.iid,
                action.productData.title,
                action.productData.price,
                action.productData.company,
                state.items[itemIndex].imageUrl,
                action.productData.quantity,
                action.productData.description,

            );
            const updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;

            const updatedAttention = [...state.attentionItems];
            if (action.productData.quantity < 30 && itemIndexAttention >= 0) {
                updatedAttention[itemIndexAttention] = updatedItem;
            }
            else if (action.productData.quantity < 30) {
                updatedAttention.push(updatedItem)
            }
            else if (action.productData.quantity >= 30 && itemIndexAttention >= 0 && action.productData.title === updatedAttention[itemIndexAttention].title) {
                updatedAttention.splice(itemIndexAttention, 1)
            }

            return {
                ...state,
                items: updatedItems,
                attentionItems: updatedAttention,
            };
        default:
            return state;

    }
    return state;
}

export default itemsReducer;