import { React } from 'react';
import Contact from '../Contact/Contact';
import clsx from 'clsx';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.name);

  const selectContacts = contacts.filter(
    cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase()) ||
      cont.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={clsx(css.contactsWrapper)}>
      {selectContacts.map(cont => (
        <li key={cont.id} className={clsx(css.listItem)}>
          <Contact data={cont} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
