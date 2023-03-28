import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getFilteredContacts } from 'redux/utils';
import { Li, Ul, Span, DeleteButton } from './ContactListStyled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <Ul>
      {filteredContacts.map(contact => (
        <Li key={contact.id}>
          <Span>
            {contact.name}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {contact.number}
          </Span>

          <DeleteButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </DeleteButton>
        </Li>
      ))}
    </Ul>
  );
};
