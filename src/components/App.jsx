import { useEffect } from 'react';
import clsx from 'clsx';
import css from './App.module.css';
import AddressBookPage from '../pages/AddressBookPage/AddressBookPage';

export const App = () => {
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
