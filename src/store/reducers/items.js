import { ITEMS } from "../../data/dummy-data";
import { ADD_ITEMS, UPDATE_ITEMS, SET_ITEMS, DELETE_ITEM } from '../actions/items';
import Item from "../../models/item";

const initialState = {
    items: [],
    // attentionItems: []
    // items: ITEMS,
    attentionItems: ITEMS.filter(item => {
        if ((item.quantity / 1) >= 30) {
            return false;
        }
        return true;
    }),
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
                // "i" + (state.items.length + 1),
                action.iid,
                action.itemData.name,
                action.itemData.price,
                action.itemData.company,
                action.itemData.image,
                action.itemData.quantity,
                action.itemData.description,
                action.itemData.type,
                action.itemData.createdAt,
                action.itemData.updatedAt,
                action.itemData.user_added,
                action.itemData.healthFacilities,
                action.itemData.dosage,
                action.itemData.exp_date
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
            try{
            const itemIndex = state.items.findIndex(
                item => item._id === action.iid
            );
            const itemIndexAttention = state.attentionItems.findIndex(
                item => item._id === action.iid
            );
            const updatedItem = new Item(
                action.iid,
                action.itemData.name,
                action.itemData.price,
                action.itemData.company,
                action.itemData.image,
                action.itemData.quantity,
                action.itemData.description,
                action.itemData.type,
                action.itemData.createdAt,
                action.itemData.updatedAt,
                action.itemData.user_added,
                action.itemData.healthFacilities,
                action.itemData.dosage,
                action.itemData.exp_date

            );
            console.log("item reducer", updatedItem)
            const updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
            console.log("item reducer items", updatedItems)

            const updatedAttention = [...state.attentionItems];
            if (action.itemData.quantity < 30 && itemIndexAttention >= 0) {
                updatedAttention[itemIndexAttention] = updatedItem;
            }
            else if (action.itemData.quantity < 30) {
                updatedAttention.push(updatedItem)
            }
            else if (action.itemData.quantity >= 30 && itemIndexAttention >= 0 && action.iid === updatedAttention[itemIndexAttention]._id) {
                updatedAttention.splice(itemIndexAttention, 1)
            }
            return {
                ...state,
                items: updatedItems,
                attentionItems: updatedAttention,
            };
        }
        catch(e)
        {
            console.log("error at item reducer", e)
        }
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