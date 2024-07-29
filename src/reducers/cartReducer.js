import { TYPES } from '../actions/cartActions'
export const cartInitialState = []

export const cartInit = () => {
  /* global sessionStorage */
  const sessionCart = sessionStorage.getItem('cart')
  if (!sessionCart) return []
  return JSON.parse(sessionCart)
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case TYPES.ADD_TO_CART:{
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        if (newState[productInCartIndex].stock === 0) return state
        newState[productInCartIndex].quantity += 1
        newState[productInCartIndex].stock -= 1
        return newState
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
          stock: actionPayload.stock - 1
        }
      ]
    }

    case TYPES.REMOVE_FROM_CART:{
      const { id } = actionPayload
      return state.filter(item => id !== item.id)
    }

    case TYPES.REMOVE_ITEM: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        if (newState[productInCartIndex].quantity === 1) return state
        newState[productInCartIndex].quantity -= 1
        newState[productInCartIndex].stock += 1
        return newState
      }
      break
    }

    case TYPES.CLEAR_CART:{
      return cartInitialState
    }

    case TYPES.SET_CART: {
      return actionPayload
    }
  }

  return state
}
