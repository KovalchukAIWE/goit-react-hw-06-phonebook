import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  filterContacts,
} from '../actions/phonebookActions';

const onAddContact = (state, { type, payload }) => [...state, payload];
const onRemoveContact = (state, { type, payload }) =>
  state.filter(item => item.id !== payload);

const items = createReducer([], {
  [addContact]: onAddContact,
  [removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [filterContacts]: (state, { type, payload }) => payload,
});

export default combineReducers({ items, filter });