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
        (id: string) => id === action.payload.id
      );

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      const inWishlist = state.list.find(
        (id: string) => id === action.payload.id
      );

      if (inWishlist) {
        state.list = state.list.filter(
          (id: string) => id !== action.payload.id
        );
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

// export const itemsInWishlist = (state) => state.wishlist.list;

export default wishlistSlice.reducer;
function item(item: any): any {
  throw new Error("Function not implemented.");
}
