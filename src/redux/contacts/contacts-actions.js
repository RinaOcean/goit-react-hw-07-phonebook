import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  }),
);

export const removeContact = createAction('contacts/deleteContact');

export const addFilter = createAction('contacts/addFilter');
