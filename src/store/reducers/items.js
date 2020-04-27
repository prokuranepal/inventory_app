import { ITEMS } from "../../data/dummy-data";

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
    // switch (action.type) {

    //     default:
    //         return state;

    // }
    return state;
}

export default itemsReducer;