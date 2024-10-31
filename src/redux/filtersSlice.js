import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/API/initialContacts';

const filterSlice = createSlice({
  name: 'filter',

  initialState: initialContacts.filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
