import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  addFilter,
} from './contacts-actions';

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  // "_" заменяет неиспользуемый параметр(в данном случае state)
  [addFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
