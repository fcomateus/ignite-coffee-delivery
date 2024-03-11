import { ActionTypes } from "./actions";
import { ItemInCart } from "../../contexts/CartContext";

interface CartState {
  items: ItemInCart[]
}

export function cartReducer(state: CartState, action: any) {
  
  switch(action.type) {
    case ActionTypes.ADD_TO_CART: {
      console.log('action ADD_TO_CART', action);

      const isItemInCart = state.items.find(item => item.title === action.payload.item.title)


      if(isItemInCart) {
        
        const itemsUpdated = state.items.map(item => {
          const isSameItem = item.title === action.payload.item.title
          
          if(isSameItem) {
            item.quantity = action.payload.item.quantity
          }
  
          return item
        })
        
        return {
          items: itemsUpdated
        }

      } else {
        return {
          items: [...state.items, action.payload.item]
        }
      }

    }

    case ActionTypes.REMOVE_FROM_CART: {
      console.log('action REMOVE_FROM_CART', action);
      const newItems = state.items.filter(item => item.title === action.payload.title)

      return {
        items: newItems
      }
      
    }

    case ActionTypes.ADD_UNIT_WISH_IN_CART: {
      console.log('action ADD_UNIT_WISH_IN_CART', action);

      const newItems = state.items.map(item => {
        if(item.title === action.payload.title) {
          item.quantity++
        }
        return item
      })

      return {
        items: newItems
      }

    }

    case ActionTypes.REMOVE_UNIT_WISH_IN_CART: {
      console.log('action REMOVE_UNIT_WISH_IN_CART', action);
      const newItems = state.items.map(item => {
        if(item.title === action.payload.title && item.quantity > 1) {
          item.quantity--
        }
        return item
      })
      
      return {
        items: newItems
      }
    }

    default:
      return state
  }

}