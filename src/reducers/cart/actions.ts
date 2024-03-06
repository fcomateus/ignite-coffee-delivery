import { ItemInCart } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  ADD_UNIT_WISH_IN_CART = 'ADD_UNIT_WISH_IN_CART',
  REMOVE_UNIT_WISH_IN_CART = 'REMOVE_UNIT_WISH_IN_CART'
}

export function addToCartAction(item: ItemInCart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item
    }
  }
}

export function removeFromCartAction(title: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      // seria o id do café, mas como não tem id, 
      // o título único é a alternativa
      title
    }
  }
}

export function addUnitWishInCartAction(title: string) {
  return {
    type: ActionTypes.ADD_UNIT_WISH_IN_CART,
    payload: {
      title
    }
  }
}

export function removeUnitWishInCartAction(title: string) {
  return {
    type: ActionTypes.REMOVE_UNIT_WISH_IN_CART,
    payload: {
      title
    }
  }
}