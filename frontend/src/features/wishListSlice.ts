import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  list: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const inWishlist = state.list.find(
        (item: any) => item._id === action.payload._id
      );

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      const inWishlist = state.list.find(
        (item: any) => item._id === action.payload._id
      );

      if (inWishlist) {
        state.list = state.list.filter(
          (item: any) => item._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
function item(item: any): any {
  throw new Error("Function not implemented.");
}
