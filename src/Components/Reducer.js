export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curItem) => curItem.id !== action.payLoad),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
    };
  }

  if (action.type === "INCREAMENT_CART") {
    let updatedCart = state.item.map((curItem) => {
      if (curItem.id === action.payLoad) {
        return { ...curItem, quantity: curItem.quantity + 1 };
      }
      return curItem;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "DECCREAMENT_CART") {
    let updatedCart = state.item.map((curItem) => {
      if (curItem.id === action.payLoad) {
        return { ...curItem, quantity: curItem.quantity - 1 };
      }
      return curItem;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { quantity, price } = curVal;
        let updatedPrice = quantity * price;
        accum.totalAmount += updatedPrice;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }

  return state;
};
