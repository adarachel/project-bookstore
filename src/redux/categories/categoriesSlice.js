import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under construction'],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      console.log(state);
      return state;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
