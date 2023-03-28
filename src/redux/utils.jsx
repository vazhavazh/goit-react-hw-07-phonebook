
export const getFilteredContacts = (contacts, filter) => {
  const result = [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return result;
};
