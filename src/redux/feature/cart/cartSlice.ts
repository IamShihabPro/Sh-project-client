import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCart } from "@/types/cartType";

type CartState = {
  items: TCart[];
  totalQuantity: number;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCart>) => {
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
  },
    updateCartQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
      const item = state.items.find(item => item.productId === action.payload.id);
      if (item) {
        state.totalQuantity += action.payload.quantity - item.quantity;
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
