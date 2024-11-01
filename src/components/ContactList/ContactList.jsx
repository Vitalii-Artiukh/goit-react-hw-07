import { React } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import clsx from 'clsx';
import css from './ContactList.module.css';

const ContactList = () => {
  const selectContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={clsx(css.contactsWrapper)}>
      {selectContacts?.map(cont => (
        <li key={cont.id} className={clsx(css.listItem)}>
          <Contact data={cont} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
