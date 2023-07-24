import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      let newBasketItems = [...state.items];
      if (index >= 0) {
        newBasketItems.splice(index, 1);
      } else {
        console.warn("Error removing items from basket");
      }
      state.items = newBasketItems;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectOneBasketItem = (state, id) => {
  if (state.basket.items)
    return state.basket.items.filter((item) => item.id === id);
  else return [];
};
export default basketSlice.reducer;
