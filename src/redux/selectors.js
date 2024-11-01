import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (items, filtered) => {
    return items?.filter(
      cont =>
        cont.name.toLowerCase().includes(filtered.toLowerCase()) ||
        cont.number.toLowerCase().includes(filtered.toLowerCase())
    );
  }
);
