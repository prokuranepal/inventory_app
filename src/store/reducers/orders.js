import { ADD_ORDER, SET_ORDERS } from '../actions/orders';
import Order from '../../models/order';
import Item from '../../models/item'

const initialState = {
    orders: [],
    requestedItems:[
        new Item(
          'i1',
          'Paracetamol',
          10,
          'BGuyz',
          'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
          20,
          'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
          "Pain killer"
        ),
      
      
      
        new Item(
          'i2',
          'Electrobion',
          10,
          'BGuyz',
          'https://res.sastasundar.com/incom/images/product/ElectrobionNewOrange-Flavour-1569231534-10044174-1.jpg',
          10,
          'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
          "Vitamin"
        ),
      
      
      
        new Item(
          'i3',
          'Antibiotics',
          20,
          'BGuyz',
          'https://images.theconversation.com/files/313959/original/file-20200206-43084-f2m67.jpg?ixlib=rb-1.1.0&rect=0%2C23%2C5184%2C3370&q=45&auto=format&w=926&fit=clip',
          45,
          'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
          'Antibiotic'
        ),
        new Item(
            'i4',
            'Paracetamol',
            10,
            'BGuyz',
            'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
            20,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            "Pain killer"
          ),
        
          new Item(
            'i5',
            'Paracetamol',
            10,
            'BGuyz',
            'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
            20,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            "Pain killer"
          ),
        
          new Item(
            'i6',
            'Paracetamol',
            10,
            'BGuyz',
            'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
            20,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            "Pain killer"
          ),
        
        new Item(
            'i7',
            'Parartrcetamol',
            10,
            'BGuyz',
            'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
            20,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            "Pain killer"
          ),
      
          new Item(
            'i8',
            'Paracetamol',
            10,
            'BGuyz',
            'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
            20,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            "Pain killer"
          ),
      
          new Item(
            'i1',
            'Paracetamol',
            10,
            'BGuyz',
            'https://s.rfi.fr/media/display/7ff0e7e2-0fa1-11ea-b16a-005056a99247/w:1240/p:16x9/800px-Paracetamol_acetaminophen_500_mg_pills.webp',
            20,
            'Paracetamol (acetaminophen) is a pain reliever and a fever reducer. The exact mechanism of action of is not known. Paracetamol is used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
            "Pain killer"
          )
      
          ] 
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                orders: action.orders
            };
        case ADD_ORDER:
            const newOrder = new Order(
                action.orderData.id,
                action.orderData.items,
                action.orderData.date
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
    }

    return state;
};
