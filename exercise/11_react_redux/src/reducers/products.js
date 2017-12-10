import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
} from '../constants/ActionTypes';

const product = (state = {}, action) => {
  if (state.id !== action.id) return state;

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    default:
      return state;
  }
};

// code here

export default products;
