import { cartSlice } from './../features/cart/cartSlice';
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import productSlice from "../features/products/productSlice"
import authSlice from "../features/auth/authSlice"


// * в store хранятся данные из всего react приложения
// они изменяются с помощью функции reducer, в которую передается action

export const store = configureStore({
  reducer: {
   products: productSlice.reducer,
   cart: cartSlice.reducer,
   auth: authSlice.reducer,    
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
