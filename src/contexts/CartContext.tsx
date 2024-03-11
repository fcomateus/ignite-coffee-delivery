import { createContext, ReactNode, useReducer } from "react";
import { cartReducer } from "../reducers/cart/reducer";
import { ActionTypes, addToCartAction, addUnitWishInCartAction, removeFromCartAction, removeUnitWishInCartAction } from '../reducers/cart/actions'

export interface ItemInCart {
  title: string
  imagePath: string
  price: number,
  quantity: number,
  imageDescription: string
}

interface CartContextType {
  items: ItemInCart[],
  addToCart: () => void,
  removeFromCart: () => void,
  addUnitWishInCart: () => void,
  removeUnitWishInCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}


export function CartContextProvider({ children }: CartContextProviderProps) {
  
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: []
  })

  const { items } = cartState

  function addToCart(item: ItemInCart) {
    dispatch(addToCartAction(item))
  }

  function removeFromCart(title: string) {
    dispatch(removeFromCartAction(title))
  }

  function addUnitWishInCart(title: string) {
    dispatch(addUnitWishInCartAction(title))
  }

  function removeUnitWishInCart(title: string) {
    dispatch(removeUnitWishInCartAction(title))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        addUnitWishInCart,
        removeUnitWishInCart
      }}
    >
      { children }
    </CartContext.Provider>
  )
}