import { createContext, ReactNode, useReducer } from "react";
import { cartReducer } from "../reducers/cart/reducer";
import { 
  ActionTypes, 
  addToCartAction, 
  addUnitWishInCartAction, 
  removeFromCartAction, 
  removeUnitWishInCartAction,
  addAddressToWishAction 
} from '../reducers/cart/actions'

export interface ItemInCart {
  title: string
  imagePath: string
  price: number,
  quantity: number,
  imageDescription: string
}

export interface AddressData {
  number: string;
  cep: string;
  street: string;
  neighboorhood: string;
  city: string;
  uf: string;
  paymentMethod: string;
  complement?: string | undefined;
}

interface CartContextType {
  items: ItemInCart[],
  address: AddressData,
  addToCart: (item: ItemInCart) => void,
  removeFromCart: (itemTitle: string) => void,
  addUnitWishInCart: (itemTitle: string) => void,
  removeUnitWishInCart: (itemTitle: string) => void,
  addAddressToWish: (addressData: AddressData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}


export function CartContextProvider({ children }: CartContextProviderProps) {
  
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    address: {}
  })

  const { items, address } = cartState

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

  function addAddressToWish(addressData: AddressData) {
    dispatch(addAddressToWishAction(addressData))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        address,
        addToCart,
        removeFromCart,
        addUnitWishInCart,
        removeUnitWishInCart,
        addAddressToWish
      }}
    >
      { children }
    </CartContext.Provider>
  )
}