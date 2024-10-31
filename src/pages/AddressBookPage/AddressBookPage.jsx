import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import clsx from 'clsx';
import css from './AddressBookPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const AddressBookPage = () => {
  return (
    <div className={clsx(css.wrapper)}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default AddressBookPage;
