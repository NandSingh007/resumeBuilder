import { createReducer } from "@reduxjs/toolkit";

// Define the initial state for the reducer
const initialState = {
  cartitem: [],
  cartitem1: [],
  cartitem2: [],
  cartitem3: [],
  cartitem4: [],
  cartitem5: ""
};
// Create the reducer using createReducer function
export const carts = createReducer(initialState, {
  // Define action handlers
  add_to_cart: (state, action) => {
    // Update the state with the payload of the action
    state.cartitem = action.payload;
  },
  add_to_cart1: (state, action) => {
    state.cartitem1 = action.payload;
  },
  add_to_cart2: (state, action) => {
    state.cartitem2 = action.payload;
  },
  add_to_cart3: (state, action) => {
    state.cartitem3 = action.payload;
  },
  add_to_cart4: (state, action) => {
    state.cartitem4 = action.payload;
  },
  add_to_cart5: (state, action) => {
    state.cartitem5 = action.payload;
  },
});
