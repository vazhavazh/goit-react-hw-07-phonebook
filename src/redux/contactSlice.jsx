import { createSlice, nanoid } from '@reduxjs/toolkit';



const contactsInitialState = {
  contacts: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contactSlice',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    userFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact, userFilter } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
