/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// * расписываем асинхронный action с запросом
// таких объектов может быть столько, сколько нужно для разных запросов
export const loadProducts = createAsyncThunk(
    // 1. первый аргумент функции - строка с уникальным именем для действия
    'products/loadProducts',
    // 2. второй аргумент - асинхронная функция с запросом
    async (_, thunkAPI) => {
      try {
        // делаем fetch запрос за данными с помощью библиотеки axios быстро и в одну строку
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
      } catch (error: any) {
        // если происходит ошибка с помощью параметра thunkAPI предаем ошибку в slice
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const getLimitProducts = createAsyncThunk(
  "products/getLimitProducts",
  async (limit: number, thunkAPI) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


