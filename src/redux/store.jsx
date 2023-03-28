import { configureStore } from '@reduxjs/toolkit';


import { contactsReducer } from '../redux/contactSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer },

});


