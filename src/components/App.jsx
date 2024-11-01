import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import AddressBookPage from '../pages/AddressBookPage/AddressBookPage';
import clsx from 'clsx';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Phone book';
  });

  return (
    <div className={clsx(css.wrapper)}>
      <h1 className={clsx(css.h1)}>Phonebook</h1>
      <AddressBookPage />
    </div>
  );
};

export default App;
