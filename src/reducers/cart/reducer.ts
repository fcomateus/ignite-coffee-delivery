import { ActionTypes } from "./actions";
import { ItemInCart } from "../../contexts/CartContext";

interface CartState {
  items: ItemInCart[]
}

export function cartReducer(state: CartState, action: any) {
  
  switch(action.type) {
    case ActionTypes.ADD_TO_CART: {
      console.log('action ADD_TO_CART', action);
      console.log('state', state);
      const isItemInCart = state.items.find(item => item.title === action.payload.item.title)

      if(isItemInCart) {
        alert('Item já adicionado ao carrinho')
        return state
      }

      return {
        items: [...state.items, action.payload.item]
      }
    }

    case ActionTypes.REMOVE_FROM_CART: {
      console.log('action REMOVE_FROM_CART', action);
      return state.items.filter(item => item.title === action.payload.title)
    }

    case ActionTypes.ADD_UNIT_WISH_IN_CART: {
      console.log('action ADD_UNIT_WISH_IN_CART', action);
      return state.items.map(item => {
        if(item.title === action.payload.title) {
          item.quantity++
        }
        return item
      })
    }

    case ActionTypes.REMOVE_UNIT_WISH_IN_CART: {
      console.log('action REMOVE_UNIT_WISH_IN_CART', action);
      return state.items.map(item => {
        if(item.title === action.payload.title && item.quantity > 1) {
          item.quantity--
        }
        return item
      })
    }

    default:
      return state
  }

}