import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { AppStyled, H1, H2 } from './AppStyled';

export const App = () => {
  return (
    <>
      <AppStyled>
        <H1>Phonebook</H1>
        <ContactForm />
        <H2>Contacts</H2>
        <Filter />
        <ContactList />
      </AppStyled>
    </>
  );
};
