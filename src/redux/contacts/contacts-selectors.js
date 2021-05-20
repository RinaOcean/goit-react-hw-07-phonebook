import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;

export const getLoadingItems = state => state.contacts.loading;

export const getFilterValue = state => state.contacts.filter;

export const getFilteredContactList = createSelector(
  [getItems, getFilterValue],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return allContacts.filter(item =>
      item.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);
