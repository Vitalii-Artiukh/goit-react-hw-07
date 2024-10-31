import { useEffect } from 'react';
import clsx from 'clsx';
import css from './App.module.css';
import AddressBookPage from '../pages/AddressBookPage/AddressBookPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../redux/selectors';
import { fetchContacts } from '../redux/contactsOps';

export const App = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, searchValue]);

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
