import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/API/initialContacts';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialContacts.contacts,

  reducers: {
    addContact: (state, action) => {
      /////////////  REDUX TOOLKIT  //////////////////////
      state.items.push(action.payload);

      /////////////  REDUX  //////////////////////
      //   return {
      //     ...state,
      //     items: [...state.items, action.payload],
      //   };
    },
    deleteContact: (state, action) => {
      /////////////  REDUX TOOLKIT  //////////////////////
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      /////////////  REDUX  //////////////////////
      //   return {
      //     ...state,
      //     items: state.items.filter(
      //       contact => contact.id !== action.payload
      //     ),
      //   };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
