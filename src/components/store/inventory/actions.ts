import {InventoryActionTypes, ADD_ITEM_TO_INVENTORY, REMOVE_ITEM_FROM_INVENTORY, Item } from './types';

export function removeItemFromInventory ( id: number ): InventoryActionTypes {
    return {
        type: REMOVE_ITEM_FROM_INVENTORY,
        payload: id //Will only accept types: number
    }
}

export function addItemFromInventory ( item: Item ): InventoryActionTypes {
    return {
        type: ADD_ITEM_TO_INVENTORY,
        payload: item //Will only accept types: number
    }
}