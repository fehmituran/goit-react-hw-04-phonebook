import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(contact => {
        return contact.name.toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      return alert(`${newContact.name} is already in your Book`);
    }

    const id = nanoid();
    const newAddContact = { id, ...newContact };

    setContacts(prevState => [newAddContact, ...prevState]);
  };


  const getFilter = e => {
    setFilter(e.currentTarget.value );
    console.log(filter);
  };

 const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContacts = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };
  
  return (
    <div>
      <Header />
      <Section title="Phone Book">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
      {contacts.length > 0 ? (
          <>
          <Filter value={filter} onChange={getFilter} />
          <ContactList
            contacts={filteredContacts()}
            onDelete={deleteContacts}
          />
          </>
        ): (<Notification message="Contact list is empty" />)}
        </Section>
    </div>
  );
};
