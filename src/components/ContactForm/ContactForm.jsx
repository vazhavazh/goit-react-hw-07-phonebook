import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import {
  Form,
  InputContainers,
  LabelStyled,
  InputStyled,
  Button,
} from './ContactFormStyled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const nameValue = e.target.elements.name.value;
    const numberValue = e.target.elements.number.value;
    const existingContact = contacts.find(
      contact => contact.name === nameValue
    );

    if (existingContact) {
      alert('Contact with this name already exists');
    } else {
      dispatch(addContact(nameValue, numberValue));
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainers>
        <LabelStyled>Name</LabelStyled>
        <InputStyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <LabelStyled>Number</LabelStyled>
        <InputStyled
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputContainers>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
