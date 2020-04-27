import { ITEMS } from "../../data/dummy-data";
import { ADD_ITEMS } from '../actions/items';
import Item from "../../models/item";

const initialState = {
    items: ITEMS,
    attentionItems: ITEMS.filter(item => {
        if ((item.quantity / 1) >= 30) {
            return false;
        }
        return true;
    }),
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;

    }
    return state;
}

export default itemsReducer;