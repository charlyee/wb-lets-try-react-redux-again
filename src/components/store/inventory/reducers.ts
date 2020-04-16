import { InventoryState, REMOVE_ITEM_FROM_INVENTORT, ADD_ITEM_TO_INVENTORY, InventoryActionTypes } from './types';

//set up a default or initial state for the app
const initialState: InventoryState = {
    items: [
        {
            id: 1,
            name: 'laptop'
        },
        {
            id: 2,
            name: 'televion'
        },
        {
            id: 3,
            name: 'home theatre'
        }
    ]
}