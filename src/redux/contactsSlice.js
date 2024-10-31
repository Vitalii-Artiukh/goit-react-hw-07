import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/API/initialContacts';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialContacts.contacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },

  // reducers: {
  //   addContact: (state, action) => {
  //     /////////////  REDUX TOOLKIT  //////////////////////
  //     state.items.push(action.payload);

  //     /////////////  REDUX  //////////////////////
  //     //   return {
  //     //     ...state,
  //     //     items: [...state.items, action.payload],
  //     //   };
  //   },
  //   deleteContact: (state, action) => {
  //     /////////////  REDUX TOOLKIT  //////////////////////
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //     /////////////  REDUX  //////////////////////
  //     //   return {
  //     //     ...state,
  //     //     items: state.items.filter(
  //     //       contact => contact.id !== action.payload
  //     //     ),
  //     //   };
  //   },
  // },
});

export default contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
