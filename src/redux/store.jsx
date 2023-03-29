import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contact/contactSlice';

export const store = configureStore({
  reducer: { contacts: contactsSlice.reducer },
});
