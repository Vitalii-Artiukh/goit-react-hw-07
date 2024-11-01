import React from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/selectors';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import clsx from 'clsx';
import css from './AddressBookPage.module.css';

const AddressBookPage = () => {
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={clsx(css.wrapper)}>
      <ContactForm />
      <SearchBox />
      <div className={clsx(css.loaderWrapper)}>
        {loader && !error && <Loader />}
        {error && !loader && <Error />}
      </div>
      <ContactList />
    </div>
  );
};

export default AddressBookPage;
