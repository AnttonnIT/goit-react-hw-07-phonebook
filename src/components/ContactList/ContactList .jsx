import { List, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operation';

export const ContactList = () => {
  const { items: contacts, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const regExp = new RegExp(filter, 'gi');
    return contacts.filter(({ name }) => name.match(regExp));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {isLoading && !error && <h2>Loading...</h2>}

      {error && !isLoading && <h2>Oops, something went wrong ({error}) </h2>}
      <List>
        {filteredContacts.map(({ name, id, phone }) => {
          return (
            <li key={id}>
              {name}: {phone}
              <Button
                type="button"
                disabled={isLoading}
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </List>
    </>
  );
};
