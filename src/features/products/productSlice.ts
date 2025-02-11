import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from './productsAction';
import { getLimitProducts } from './productsAction';
import { IProductState } from './type';

// создаем начальный объект-состояние для слайс
const initialState: IProductState = {
    //ключ с самими данными
  products: [],
  //ключ с индикатором загрузки (пришли данные или нет)
  isLoading: false,
  //ключ для передачи ошибки
  error: "",
};

// * объект с логикой обработки данных для передачи в store
export const productSlice = createSlice({
  //уникальное имя для объекта slice
  name: 'productsSlice',
  //передаем насальное состояние для slice (имя ключа и имя переменной здесь совпадают)
  initialState,
  //логику работы с синхронными данными
  reducers: {},
  // работа с асинхронными данными
  extraReducers: (builder) => {
    builder
    .addCase(loadProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loadProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(loadProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.payload as string;
    })
    .addCase(getLimitProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getLimitProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(getLimitProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.payload as string;
    });
},
});

export default productSlice;
// export const { } = productSlice.actions

