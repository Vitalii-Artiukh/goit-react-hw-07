import { React } from 'react';
import Contact from '../Contact/Contact';
import clsx from 'clsx';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectFilteredContacts,
  selectItems,
} from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectItems);
  // const filter = useSelector(selectFilter);
  const selectContacts = useSelector(selectFilteredContacts);
  // console.log(selectFilteredContacts);

  // const selectContacts = contacts.filter(
  //   cont =>
  //     cont.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     cont.number.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={clsx(css.contactsWrapper)}>
      {contacts?.map(cont => (
        <li key={cont.id} className={clsx(css.listItem)}>
          <Contact data={cont} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
