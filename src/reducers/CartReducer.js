const initialState = {
  cartData: [],
};
// The cartReducer function manages the state of the shopping cart.
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {   
                cartData: [...state.cartData, action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
               cartData: state.cartData.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
   
        default:
            return state;
    }
}


export { cartReducer, initialState };

