import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.removeContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filter = createReducer('', {
  // _ заменяет неиспользуемый параметр(в данном случае state)
  [actions.addFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
