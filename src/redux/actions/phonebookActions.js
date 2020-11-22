import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('@phonebook/addContact');
const removeContact = createAction('@phonebook/removeContact');
const filterContacts = createAction('@phonebook/filterContacts');

export { addContact, removeContact, filterContacts };