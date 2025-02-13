import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartItem } from "./type";

const initialState: ICart = {
  items: [],
  isLoading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
      const productExist = state.items.find((item) => item.id === product.id);

      if (productExist) {
        productExist.quantity += 1; // Изменяем напрямую через immer
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    plusQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    minusQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, plusQuantity, minusQuantity } = cartSlice.actions;

// **Селектор для подсчета суммы заказа**
export const selectTotalAmount = (state: { cart: ICart }) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);