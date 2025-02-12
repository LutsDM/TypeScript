import { createSlice } from '@reduxjs/toolkit';



const initialState: ICart = {
  items: [],
  isLoading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunkName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunkName.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload;
      })
      .addCase(thunkName.rejected, (state, action) => {
        state.isLoading = false
        state.values = []
        state.error = action.payload as string
      })
  },
});

export default cartSlice;
export const { } = cartSlice.actions