import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from 'redux/operation';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}
